import * as imageImport from "../images";
import * as soundImport from "../sounds";

import { categories, customSoundNames } from "../common/constants";

const CATEGORY_INDEX_SEPARATOR = "_";

const zip = (a, b) => a.map((v, i) => [v, b[i]]);

const getName = (soundName) => {
  const categoryIndex = soundName.indexOf(CATEGORY_INDEX_SEPARATOR);
  const nameWithoutCategory = categoryIndex !== -1 ? soundName.substring(0, categoryIndex) : soundName;
  const spacedOutName = nameWithoutCategory.replace(/([A-Z])/g, " $1").trim();
  const category = getCategory(soundName);
  if (category === categories.FRIENDS) {
    const splitResultName = spacedOutName.split(" ");
    const friendName = splitResultName[0];
    const resultNameWithoutFriendName = splitResultName.slice(1).join(" ");
    const customSoundNameKey = resultNameWithoutFriendName.replace(/\s/g, "");
    const resultName = customSoundNames.hasOwnProperty(customSoundNameKey)
      ? customSoundNames[customSoundNameKey]
      : resultNameWithoutFriendName;
    return `${resultName} (${friendName})`;
  } else {
    return customSoundNames.hasOwnProperty(nameWithoutCategory) ? customSoundNames[nameWithoutCategory] : spacedOutName;
  }
};

const getCategory = (soundName) => {
  const categoryIndex = soundName.indexOf(CATEGORY_INDEX_SEPARATOR);
  if (categoryIndex !== -1) {
    const category = soundName.substring(categoryIndex + 1);
    return categories.hasOwnProperty(category) ? categories[category] : categories.OTHER;
  }
  return categories.OTHER;
};

const colors = ["#FFFF00", "#FF0000", "#00FF00", "#00FFFF", "#FF00FF", "#9D00FF"];

const imageKeys = [...Object.keys(imageImport)].sort();
const soundKeys = [...Object.keys(soundImport)].sort();

const buttons = zip(imageKeys, soundKeys)
  .map(([image, sound]) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return {
      name: getName(sound),
      image: imageImport[image],
      sound: soundImport[sound],
      roundedColor: randomColor,
      category: getCategory(sound),
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export default buttons;
