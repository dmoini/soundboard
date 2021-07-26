import { categories, soundNameToCategoryInfoMap, soundNameToCustomNameMap } from "../common/constants";

export const zip = (a, b) => a.map((v, i) => [v, b[i]]);

export const getName = (soundName) => {
  let returnName = soundName;
  if (soundNameToCustomNameMap.hasOwnProperty(soundName)) {
    returnName = soundNameToCustomNameMap[soundName];
  } else {
    returnName = soundName.replace(/([A-Z])/g, " $1").trim();
  }
  if (soundNameToCategoryInfoMap[soundName]?.category === categories.FRIENDS) {
    returnName = `${returnName} (${soundNameToCategoryInfoMap[soundName].friend})`;
  }
  return returnName;
};
