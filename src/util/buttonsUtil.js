import { categoryMap, soundNameToCategoryMap, soundNameToCustomNameMap, soundNameToFriendMap } from "../common/constants";

export const zip = (a, b) => a.map((v, i) => [v, b[i]]);

export const getName = (soundName) => {
  let returnName = soundNameToCustomNameMap.hasOwnProperty(soundName)
    ? soundNameToCustomNameMap[soundName]
    : soundName.replace(/([A-Z])/g, " $1").trim();
  if (soundNameToCategoryMap[soundName] === categoryMap.FRIENDS) {
    returnName = `${returnName} (${soundNameToFriendMap[soundName]})`;
  }
  return returnName;
};
