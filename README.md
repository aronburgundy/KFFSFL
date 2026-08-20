# KFFSFL

KFFSFL Historical Record

Hosted on Github
Not using NPM so just open in a browser.

## Adding a completed season

Update `league-history.js`; it is the only annual history-data file. Add one season
with places 1 through 12, a `managerIds` array for every place, and team names for
places 1–3. Team names for places 4–12 are optional archival data and are not shown
on the current cards. Add an `image` to first place only when a champion photo should
appear in the main CHAMPION panel.

```js
{
  year: 2025,
  standings: [
    { place: 1, team: "Champion Team", managerIds: ["brandon"], image: "images/2025-champion.jpg" },
    { place: 2, team: "Runner-up Team", managerIds: ["aron"] },
    { place: 3, team: "Third-place Team", managerIds: ["jackie"] },
    { place: 4, managerIds: ["stephen"] },
    { place: 5, managerIds: ["arnold"] },
    { place: 6, managerIds: ["chris-b"] },
    { place: 7, managerIds: ["cole"] },
    { place: 8, managerIds: ["michael"] },
    { place: 9, managerIds: ["charles"] },
    { place: 10, managerIds: ["kane"] },
    { place: 11, managerIds: ["kevin"] },
    { place: 12, managerIds: ["jason-t"] }
  ]
}
```
