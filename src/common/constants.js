const FRIENDS_CHRIS = "Chris";
const FRIENDS_ELVIN = "Elvin";
const FRIENDS_FELICIA = "Felicia";
const FRIENDS_WILLY = "Willy";

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
};

export const soundNameToFriendMap = {
  Bro: FRIENDS_CHRIS,
  Growl: FRIENDS_CHRIS,
  Pterodactyl: FRIENDS_CHRIS,
  Spanish: FRIENDS_CHRIS,
  Squeal: FRIENDS_CHRIS,
  YouNeedToGoThroughPubertyAgain: FRIENDS_ELVIN,
  GoodLuckWithThat: FRIENDS_FELICIA,
  Lawnmower: FRIENDS_WILLY,
};

export const soundNameToCustomNameMap = {
  APlatypusPerryThePlatypus: "A Platypus? Perry the Platypus!",
  EnemyAC130Above: "Enemy AC-130 Above",
  NobodysGonnaKnow: "Nobody's Gonna Know",
};

export const RED = "#FF0000";
export const GREEN = "#00FF00";
