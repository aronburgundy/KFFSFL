// The only file that needs an annual historical-data update.
// Add a completed season with places 1 through 12 and its manager IDs.
// Team names are required for places 1–3; they are optional for places 4–12.
window.KFFSFL_HISTORY = {
  managers: [
    { id: "jackie", name: "Jackie", group: "current" },
    { id: "aron", name: "Aron", group: "current" },
    { id: "brandon", name: "Brandon", group: "current" },
    { id: "stephen", name: "Stephen", group: "current" },
    { id: "arnold", name: "Arnold", group: "current" },
    { id: "chris-b", name: "Chris B", group: "current" },
    { id: "cole", name: "Cole", group: "current" },
    { id: "michael", name: "Michael", group: "current" },
    { id: "charles", name: "Charles", group: "current" },
    { id: "kane", name: "Kane", group: "current" },
    { id: "kevin", name: "Kevin", group: "current" },
    { id: "jason-t", name: "Jason T", group: "current" },
    { id: "eliseo", name: "Eliseo", group: "retired" },
    { id: "chris-m", name: "Chris M", group: "retired" },
    { id: "jason-n", name: "Jason N", group: "retired" },
    { id: "jt", name: "JT", group: "retired" },
    { id: "matthew", name: "Matthew", group: "retired" },
    { id: "micah", name: "Micah", group: "retired" }
  ],

  seasons: [
    {
      year: 2025,
      standings: [
        { place: 1, team: "Macro Penix", managerIds: ["stephen"], image: "images/stephen.webp" },
        { place: 2, team: "The Chumps", managerIds: ["michael"] },
        { place: 3, team: "London's Bridge", managerIds: ["brandon"] },
        { place: 4, managerIds: ["aron"] },
        { place: 5, managerIds: ["arnold"] },
        { place: 6, managerIds: ["chris-b"] },
        { place: 7, managerIds: ["charles"] },
        { place: 8, managerIds: ["jackie"] },
        { place: 9, managerIds: ["kane"] },
        { place: 10, managerIds: ["jason-t"] },
        { place: 11, managerIds: ["cole"] },
        { place: 12, managerIds: ["kevin"] }
      ]
    },
    {
      year: 2024,
      standings: [
        { place: 1, team: "Baker's Dozen", managerIds: ["brandon"], image: "images/brandon.jpg" },
        { place: 2, team: "ChazzyV", managerIds: ["charles"] },
        { place: 3, team: "CeeDeez", managerIds: ["stephen"] },
        { place: 4, managerIds: ["arnold"] },
        { place: 5, managerIds: ["chris-b"] },
        { place: 6, managerIds: ["cole"] },
        { place: 7, managerIds: ["kevin"] },
        { place: 8, managerIds: ["aron"] },
        { place: 9, managerIds: ["kane"] },
        { place: 10, managerIds: ["jackie"] },
        { place: 11, managerIds: ["michael"] },
        { place: 12, managerIds: ["jason-t"] }
      ]
    },
    {
      year: 2023,
      standings: [
        { place: 1, team: "Off the A-Chane", managerIds: ["cole"], image: "images/cole-and-chandi.jpg" },
        { place: 2, team: "thePickleRicks", managerIds: ["aron"] },
        { place: 3, team: "Mixon it Kupp", managerIds: ["brandon"] },
        { place: 4, managerIds: ["arnold"] },
        { place: 5, managerIds: ["jackie"] },
        { place: 6, managerIds: ["kane"] },
        { place: 7, managerIds: ["jt"] },
        { place: 8, managerIds: ["michael"] },
        { place: 9, managerIds: ["stephen"] },
        { place: 10, managerIds: ["kevin"] },
        { place: 11, managerIds: ["charles"] },
        { place: 12, managerIds: ["chris-b"] }
      ]
    },
    {
      year: 2022,
      standings: [
        { place: 1, team: "Kupp yours", managerIds: ["arnold"], image: "images/arnold-young.jpg" },
        { place: 2, team: "Raiders Love Machine", managerIds: ["cole"] },
        { place: 3, team: "Slippery Bandits", managerIds: ["jason-n"] },
        { place: 4, team: "thePickleRicks", managerIds: ["aron"] },
        { place: 5, team: "G-Venge Tour", managerIds: ["stephen"] },
        { place: 6, team: "ChazzyV", managerIds: ["charles"] },
        { place: 7, team: "DirtyJerseyGoGIANTS", managerIds: ["kevin"] },
        { place: 8, team: "Yellow Fever", managerIds: ["kane"] },
        { place: 9, team: "The Murder Boners", managerIds: ["chris-b"] },
        { place: 10, team: "Bkarns", managerIds: ["brandon"] },
        { place: 11, team: "Mac Attack", managerIds: ["michael"] },
        { place: 12, team: "Panthers Blow Goats", managerIds: ["jackie"] }
      ]
    },
    {
      year: 2021,
      standings: [
        { place: 1, team: "Dak to Dak", managerIds: ["jackie"], image: "images/Jackie-SteveSmith.webp" },
        { place: 2, team: "Mahomes Don't Play Dat", managerIds: ["arnold"] },
        { place: 3, team: "ChazzyV", managerIds: ["charles"] },
        { place: 4, team: "Slippery Bandits", managerIds: ["jason-n"] },
        { place: 5, team: "DirtyJerseyGoGIANTS", managerIds: ["kevin"] },
        { place: 6, team: "G-Venge Tour", managerIds: ["stephen"] },
        { place: 7, team: "Team Bkarns", managerIds: ["brandon"] },
        { place: 8, team: "RT III", managerIds: ["michael"] },
        { place: 9, team: "Yellow Fever", managerIds: ["kane"] },
        { place: 10, team: "thePickleRicks", managerIds: ["aron"] },
        { place: 11, team: "Team colehunt", managerIds: ["cole"] },
        { place: 12, team: "The Murder Boners", managerIds: ["chris-b"] }
      ]
    },
    {
      year: 2020,
      standings: [
        { place: 1, team: "Cops and Rodgers", managerIds: ["jackie"] },
        { place: 2, team: "Karnivores", managerIds: ["brandon"] },
        { place: 3, team: "Saggy Pigskin", managerIds: ["jason-n"] },
        { place: 4, team: "The Vinegar Strokes", managerIds: ["stephen"] },
        { place: 5, team: "Pickle Rick's Tiny Rick Pick", managerIds: ["aron"] },
        { place: 6, team: "DrAkE MiX TaPe", managerIds: ["arnold"] },
        { place: 7, team: "The Murder Boners", managerIds: ["chris-b"] },
        { place: 8, team: "DerDer Devils", managerIds: ["charles"] },
        { place: 9, team: "DirtyJerseyGoNYG", managerIds: ["kevin"] },
        { place: 10, team: "NetherCutt Patriots Fan Club", managerIds: ["michael"] },
        { place: 11, team: "Yellow Fever", managerIds: ["kane"] },
        { place: 12, team: "Seoul Raiders", managerIds: ["cole"] }
      ]
    },
    {
      year: 2019,
      standings: [
        { place: 1, team: "I admit Cole cheated", managerIds: ["michael"] },
        { place: 2, team: "Slippery Bandits", managerIds: ["jason-n"] },
        { place: 3, team: "DirtyJerseyGoNYG", managerIds: ["kevin"] },
        { place: 4, team: "Straight Flash Homie", managerIds: ["arnold"] },
        { place: 5, team: "The Murder Boners", managerIds: ["chris-b"] },
        { place: 6, team: "Pickle Rick's Tiny Rick Pick", managerIds: ["aron"] },
        { place: 7, team: "Cops and Rodgers", managerIds: ["jackie"] },
        { place: 8, team: "Seoul Raiders", managerIds: ["cole"] },
        { place: 9, team: "Yellow Fever", managerIds: ["kane"] },
        { place: 10, team: "The Vinegar Strokes", managerIds: ["stephen"] },
        { place: 11, team: "DerDer Devils", managerIds: ["charles"] },
        { place: 12, team: "Karnivores", managerIds: ["brandon"] }
      ]
    },
    {
      year: 2018,
      standings: [
        { place: 1, team: "The Murder Boners", managerIds: ["chris-b"] },
        { place: 2, team: "Wax on wax Goff", managerIds: ["arnold"] },
        { place: 3, team: "Pickle Rick's Tiny Rick Pick", managerIds: ["aron"] },
        { place: 4, team: "Seoul Raiders", managerIds: ["cole"] },
        { place: 5, team: "DerDer Devils", managerIds: ["charles"] },
        { place: 6, team: "Cops and Rodgers", managerIds: ["jackie"] },
        { place: 7, team: "I admit Brady cheated", managerIds: ["michael"] },
        { place: 8, team: "The Vinegar Strokes", managerIds: ["stephen"] },
        { place: 9, team: "Slippery Bandits", managerIds: ["jason-n"] },
        { place: 10, team: "DirtyJerseyGoNYG", managerIds: ["kevin"] },
        { place: 11, team: "Yellow Fever", managerIds: ["kane"] },
        { place: 12, team: "Karnivores", managerIds: ["brandon"] }
      ]
    },
    {
      year: 2017,
      standings: [
        { place: 1, team: "The Vinegar Strokes", managerIds: ["stephen"] },
        { place: 2, team: "DerDer Devils", managerIds: ["charles"] },
        { place: 3, team: "Cops and Rodgers", managerIds: ["jackie"] },
        { place: 4, team: "Pickle Rick's Tiny Rick Pick", managerIds: ["aron"] },
        { place: 5, team: "The Murder Boners", managerIds: ["chris-b"] },
        { place: 6, team: "Karnivores", managerIds: ["brandon"] },
        { place: 7, team: "Tha Conqueror", managerIds: ["arnold"] },
        { place: 8, team: "RTIII", managerIds: ["michael"] },
        { place: 9, team: "Yellow Fever", managerIds: ["kane"] },
        { place: 10, team: "DirtyJerseyGoNYG", managerIds: ["kevin"] },
        { place: 11, team: "Slippery Bandits", managerIds: ["jason-n"] },
        { place: 12, team: "Seoul Raiders", managerIds: ["cole"] }
      ]
    },
    {
      year: 2016,
      standings: [
        { place: 1, team: "Cops and Rodgers", managerIds: ["jackie"] },
        { place: 2, team: "Karnivores", managerIds: ["brandon"] },
        { place: 3, team: "Slippery Bandits", managerIds: ["jason-n"] },
        { place: 4, team: "Stick 'em with the pointy RON", managerIds: ["aron"] },
        { place: 5, team: "dirK diGGler", managerIds: ["chris-m"] },
        { place: 6, team: "Seoul Raiders", managerIds: ["cole"] },
        { place: 7, team: "The Murder Boners", managerIds: ["chris-b"] },
        { place: 8, team: "The Vinegar Strokes", managerIds: ["stephen"] },
        { place: 9, team: "Nameless", managerIds: ["jt"] },
        { place: 10, team: "Green eggs and Cam", managerIds: ["arnold"] },
        { place: 11, team: "RTIII", managerIds: ["michael"] },
        { place: 12, team: "Yellow Fever", managerIds: ["kane"] }
      ]
    },
    {
      year: 2015,
      standings: [
        { place: 1, team: "squadRON", managerIds: ["aron"] },
        { place: 2, team: "RTIII", managerIds: ["michael"] },
        { place: 3, team: "I Smoke Rocks", managerIds: ["jt"] },
        { place: 4, team: "Keep Pounding", managerIds: ["jackie"] },
        { place: 5, team: "The Vinegar Strokes", managerIds: ["stephen"] },
        { place: 6, team: "Karnivores", managerIds: ["brandon"] },
        { place: 7, team: "dirK diGGler", managerIds: ["chris-m"] },
        { place: 8, team: "The Murder Boners", managerIds: ["chris-b"] },
        { place: 9, team: "Slippery Bandits", managerIds: ["jason-n"] },
        { place: 10, team: "FIGHTING", managerIds: ["arnold"] },
        { place: 11, team: "Yellow Fever", managerIds: ["kane"] },
        { place: 12, team: "Seoul Raiders", managerIds: ["cole"] }
      ]
    },
    {
      year: 2014,
      standings: [
        { place: 1, team: "Dippin in da Soy Sauce", managerIds: ["eliseo"] },
        { place: 2, team: "RONdre the Giant", managerIds: ["aron"] },
        { place: 3, team: "Karnivores", managerIds: ["brandon"] },
        { place: 4, team: "Slippery Bandits", managerIds: ["jason-n"] },
        { place: 5, team: "Yellow Fever", managerIds: ["kane"] },
        { place: 6, team: "BaLeFul FiSts", managerIds: ["arnold"] },
        { place: 7, team: "The Murder Boners", managerIds: ["chris-b"] },
        { place: 8, team: "The Vinegar Strokes", managerIds: ["stephen"] },
        { place: 9, team: "RTIII", managerIds: ["michael"] },
        { place: 10, team: "Seoul Raiders", managerIds: ["cole"] },
        { place: 11, team: "I Smoke Rocks", managerIds: ["jt"] },
        { place: 12, team: "The Jack of All", managerIds: ["jackie"] }
      ]
    },
    {
      year: 2013,
      standings: [
        { place: 1, team: "Karnivores", managerIds: ["brandon"] },
        { place: 2, team: "Slippery Bandits", managerIds: ["jason-n"] },
        { place: 3, team: "The Vinegar Strokes", managerIds: ["stephen"] },
        { place: 4, team: "New Jersey Raiders", managerIds: ["cole"] },
        { place: 5, team: "The Khans", managerIds: ["jt"] },
        { place: 6, team: "The Jackasses", managerIds: ["jackie"] },
        { place: 7, team: "Dippin in da Soy Sauce", managerIds: ["eliseo"] },
        { place: 8, team: "AfRon Samurai", managerIds: ["aron"] },
        { place: 9, team: "Farm Dogs", managerIds: ["micah"] },
        { place: 10, team: "The Drunken Ajosshis", managerIds: ["chris-b"] },
        { place: 11, team: "TrAnsCeNdEnTaL NiNjAs", managerIds: ["arnold"] },
        { place: 12, team: "Yellow Fever", managerIds: ["kane"] }
      ]
    },
    {
      year: 2012,
      standings: [
        { place: 1, team: "QuitYourJobMakeMeth", managerIds: ["aron", "stephen"] },
        { place: 2, team: "The Southern Jackasses", managerIds: ["jackie"] },
        { place: 3, team: "The Khans", managerIds: ["jt"] },
        { place: 4, team: "n4cers", managerIds: ["arnold"] },
        { place: 5, team: "Pennsylvannia Raiders", managerIds: ["cole"] },
        { place: 6, team: "Sugar Balls", managerIds: ["jason-n"] },
        { place: 7, team: "Karnivores", managerIds: ["brandon"] },
        { place: 8, team: "Yellow Fever", managerIds: ["kane"] },
        { place: 9, team: "The Drunken Ajosshis", managerIds: ["chris-b"] },
        { place: 10, team: "Farm Dogs", managerIds: ["micah"] },
        { place: 11, team: "Dippin in da Soy Sauce", managerIds: ["eliseo"] },
        { place: 12, team: "That's real loose butthole", managerIds: ["matthew"] }
      ]
    }
  ]
};
