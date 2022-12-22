const Friends = {
  CHRIS: "Chris",
  ELVIN: "Elvin",
  FELICIA: "Felicia",
  NICK: "Nick",
  WILLY: "Willy",
};

export const categoryMap = {
  ALL: "All",
  FRIENDS: "Friends",
  PHINEAS_AND_FERB: "Phineas and Ferb",
};

export const soundNameToCategoryMap = {
  Bro: categoryMap.FRIENDS,
  Growl: categoryMap.FRIENDS,
  Pterodactyl: categoryMap.FRIENDS,
  Spanish: categoryMap.FRIENDS,
  Squeal: categoryMap.FRIENDS,
  YouNeedToGoThroughPubertyAgain: categoryMap.FRIENDS,
  GoodLuckWithThat: categoryMap.FRIENDS,
  Lawnmower: categoryMap.FRIENDS,
  PerryThePlatypusGrowl: categoryMap.PHINEAS_AND_FERB,
  DoofenshmirtzEvilIncorporated: categoryMap.PHINEAS_AND_FERB,
  APlatypusPerryThePlatypus: categoryMap.PHINEAS_AND_FERB,
  PerryThePlatypusThemeSong: categoryMap.PHINEAS_AND_FERB,
  IfIHadINickelForEveryTimeIWasDoomedByAPuppet: categoryMap.PHINEAS_AND_FERB,
  TurkeySnipe: categoryMap.FRIENDS,
  BloodFusionz: categoryMap.FRIENDS,
  EnemyAC130AboveNick: categoryMap.FRIENDS,
  Voltage: categoryMap.FRIENDS,
};

export const soundNameToFriendMap = {
  Bro: Friends.CHRIS,
  Growl: Friends.CHRIS,
  Pterodactyl: Friends.CHRIS,
  Spanish: Friends.CHRIS,
  Squeal: Friends.CHRIS,
  YouNeedToGoThroughPubertyAgain: Friends.ELVIN,
  GoodLuckWithThat: Friends.FELICIA,
  Lawnmower: Friends.WILLY,
  TurkeySnipe: Friends.CHRIS,
  BloodFusionz: Friends.NICK,
  EnemyAC130AboveNick: Friends.NICK,
  Voltage: Friends.NICK,
};

export const soundNameToCustomNameMap = {
  APlatypusPerryThePlatypus: "A Platypus? Perry the Platypus!",
  EnemyAC130Above: "Enemy AC-130 Above",
  NobodysGonnaKnow: "Nobody's Gonna Know",
  EnemyAC130AboveNick: "Enemy AC-130 Above",
  BloodFusionz: "BloodFusionz",
};

export const RED = "#FF0000";
export const GREEN = "#00FF00";
