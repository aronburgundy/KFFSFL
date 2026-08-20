(() => {
  const history = window.KFFSFL_HISTORY;

  // Migration-only cross-checks transcribed from the tabulation image. They never
  // drive the page; all displayed totals are calculated from league-history.js.
  const tabulationStats = {
    jackie: [13, 3], aron: [13, 2], brandon: [13, 2], stephen: [13, 2],
    arnold: [13, 1], "chris-b": [13, 1], cole: [13, 1], michael: [11, 1],
    charles: [8, 0], kane: [13, 0], kevin: [8, 0], "jason-t": [1, 0],
    eliseo: [3, 1], "chris-m": [2, 0], "jason-n": [11, 0], jt: [6, 0],
    matthew: [1, 0], micah: [2, 0]
  };

  const fail = (message) => console.error(`KFFSFL history validation: ${message}`);

  function validateHistory() {
    if (!history || !Array.isArray(history.managers) || !Array.isArray(history.seasons)) {
      fail("league-history.js must provide managers and seasons arrays.");
      return false;
    }

    let valid = true;
    const managerIds = new Set();
    const years = new Set();

    history.managers.forEach((manager) => {
      if (!manager.id || !manager.name || !manager.group || managerIds.has(manager.id)) {
        fail(`invalid or duplicate manager entry: ${JSON.stringify(manager)}`);
        valid = false;
      }
      managerIds.add(manager.id);
    });

    history.seasons.forEach((season) => {
      if (!Number.isInteger(season.year) || years.has(season.year)) {
        fail(`season years must be unique integers (problem: ${season.year}).`);
        valid = false;
      }
      years.add(season.year);

      const places = new Set();
      const seasonManagers = new Set();
      let participations = 0;

      if (!Array.isArray(season.standings)) {
        fail(`${season.year} has no standings array.`);
        valid = false;
        return;
      }

      season.standings.forEach((standing) => {
        if (!Number.isInteger(standing.place) || standing.place < 1 || standing.place > 12 || places.has(standing.place)) {
          fail(`${season.year} must contain each place from 1 through 12 exactly once.`);
          valid = false;
        }
        places.add(standing.place);

        if (!Array.isArray(standing.managerIds) || standing.managerIds.length === 0) {
          fail(`${season.year}, place ${standing.place} must have at least one managerId.`);
          valid = false;
          return;
        }

        if (standing.place <= 3 && (typeof standing.team !== "string" || standing.team.trim() === "")) {
          fail(`${season.year}, place ${standing.place} must have a team name.`);
          valid = false;
        }

        if (standing.place > 3 && standing.team !== undefined && (typeof standing.team !== "string" || standing.team.trim() === "")) {
          fail(`${season.year}, place ${standing.place} has an invalid optional team name.`);
          valid = false;
        }

        standing.managerIds.forEach((managerId) => {
          participations += 1;
          if (!managerIds.has(managerId)) {
            fail(`${season.year}, place ${standing.place} references unknown manager "${managerId}".`);
            valid = false;
          }
          if (seasonManagers.has(managerId)) {
            fail(`${season.year} assigns manager "${managerId}" to more than one standing.`);
            valid = false;
          }
          seasonManagers.add(managerId);
        });
      });

      if (places.size !== 12 || [...places].some((place) => !Number.isInteger(place) || place < 1 || place > 12)) {
        fail(`${season.year} must contain places 1 through 12 exactly once.`);
        valid = false;
      }

      const expectedParticipations = season.year === 2012 ? 13 : 12;
      if (participations !== expectedParticipations) {
        fail(`${season.year} has ${participations} manager participations; expected ${expectedParticipations}.`);
        valid = false;
      }
    });

    return valid;
  }

  function calculateStats(seasons = history.seasons) {
    const stats = new Map(history.managers.map((manager) => [manager.id, { seasons: 0, championships: 0 }]));

    seasons.forEach((season) => {
      season.standings.forEach((standing) => {
        standing.managerIds.forEach((managerId) => {
          const managerStats = stats.get(managerId);
          managerStats.seasons += 1;
          if (standing.place === 1) managerStats.championships += 1;
        });
      });
    });

    return stats;
  }

  function validateHistoricalMigration() {
    const historicalSeasons = history.seasons.filter((season) => season.year >= 2012 && season.year <= 2024);
    const historicalYears = new Set(historicalSeasons.map((season) => season.year));

    if (historicalSeasons.length !== 13 || historicalYears.size !== 13) {
      fail("the 2012–2024 migration must contain all 13 historical seasons for tabulation validation.");
      return false;
    }

    const stats = calculateStats(historicalSeasons);
    let valid = true;
    const participationTotal = [...stats.values()].reduce((total, manager) => total + manager.seasons, 0);

    if (participationTotal !== 157) {
      fail(`derived manager-season total is ${participationTotal}; expected 157.`);
      valid = false;
    }

    Object.entries(tabulationStats).forEach(([managerId, [seasons, championships]]) => {
      const actual = stats.get(managerId);
      if (!actual || actual.seasons !== seasons || actual.championships !== championships) {
        fail(`${managerId} derives ${actual ? `${actual.seasons} seasons and ${actual.championships} championships` : "no stats"}; tabulation expects ${seasons} and ${championships}.`);
        valid = false;
      }
    });

    return valid;
  }

  function managerNames(standing, managersById) {
    return standing.managerIds.map((managerId) => managersById.get(managerId).name);
  }

  function appendTextWithBreaks(parent, values) {
    values.forEach((value, index) => {
      if (index > 0) parent.append(document.createElement("br"));
      parent.append(document.createTextNode(value));
    });
  }

  function renderTotals(stats) {
    ["current", "retired"].forEach((group) => {
      const target = document.getElementById(`${group}-manager-totals`);
      history.managers.filter((manager) => manager.group === group).forEach((manager) => {
        const row = document.createElement("tr");
        const name = document.createElement("td");
        const total = document.createElement("td");
        const managerStats = stats.get(manager.id);

        name.textContent = manager.name;
        total.textContent = managerStats.championships > 0
          ? `${managerStats.seasons} (${managerStats.championships})`
          : managerStats.seasons;
        row.append(name, total);
        target.append(row);
      });
    });
  }

  function renderChampion(champion, managersById) {
    const target = document.getElementById("current-champion");
    const heading = document.createElement("h2");
    const details = document.createElement("div");
    const team = document.createElement("h3");
    const managers = document.createElement("h4");

    heading.textContent = "CHAMPION";
    details.className = "champ-details";
    team.textContent = champion.team;
    appendTextWithBreaks(managers, managerNames(champion, managersById).map((name) => name.toUpperCase()));

    if (champion.image) {
      const image = document.createElement("img");
      image.src = champion.image;
      image.alt = `${champion.team} champion`;
      details.append(image);
    }

    details.append(team, managers);
    target.append(heading, details);
  }

  function renderCards(managersById) {
    const target = document.getElementById("season-cards");
    const seasons = [...history.seasons].sort((a, b) => b.year - a.year);

    seasons.forEach((season) => {
      const standings = [...season.standings].sort((a, b) => a.place - b.place);
      const champion = standings[0];
      const article = document.createElement("article");
      const championBox = document.createElement("div");
      const header = document.createElement("header");
      const label = document.createElement("p");
      const team = document.createElement("h2");
      const championManagers = document.createElement("p");
      const runnersUp = document.createElement("div");
      const lowerStandings = document.createElement("div");

      article.className = "card";
      championBox.className = "champions";
      header.className = "card-header";
      label.textContent = `${season.year} CHAMPION`;
      team.textContent = champion.team;
      appendTextWithBreaks(championManagers, managerNames(champion, managersById).map((name) => name.toUpperCase()));
      header.append(label, team, document.createElement("br"), championManagers);
      championBox.append(header);

      runnersUp.className = "runners-up";
      appendTextWithBreaks(runnersUp, standings.slice(1, 3).map((standing) =>
        `${standing.place === 2 ? "2nd" : "3rd"}: ${standing.team} (${managerNames(standing, managersById).join(" / ")})`
      ));

      lowerStandings.className = "losers";
      appendTextWithBreaks(lowerStandings, standings.slice(3).map((standing) =>
        `${standing.place}th: ${managerNames(standing, managersById).join(" / ")}`
      ));

      article.append(championBox, runnersUp, lowerStandings);
      target.append(article);
    });
  }

  function enableDropdown() {
    document.addEventListener("click", (event) => {
      const isDropdownButton = event.target.matches("[data-dropdown-button]");
      if (!isDropdownButton && event.target.closest("[data-dropdown]") != null) return;

      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = event.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }

      document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
        if (dropdown !== currentDropdown) dropdown.classList.remove("active");
      });
    });
  }

  if (!validateHistory()) return;
  if (!validateHistoricalMigration()) return;
  const stats = calculateStats();

  const managersById = new Map(history.managers.map((manager) => [manager.id, manager]));
  const newestSeason = history.seasons.reduce((newest, season) => season.year > newest.year ? season : newest);
  const champion = newestSeason.standings.find((standing) => standing.place === 1);

  renderTotals(stats);
  renderChampion(champion, managersById);
  renderCards(managersById);
  enableDropdown();
})();
