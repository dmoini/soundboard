import * as imageImport from "../images";
import * as soundImport from "../sounds";

import categories from "../common/constants";

const CATEGORY_INDEX_CHARACTER = "_";
const IMAGE_STRING_LENGTH = 5;

const zip = (a, b) => a.map((v, i) => [v, b[i]]);

const getName = (s) => {
  switch (s) {
    case "EnemyAC130AboveImage":
      return "Enemy AC-130 Above";
    default:
      const categoryIndex = s.indexOf(CATEGORY_INDEX_CHARACTER);
      const baseImageString =
        categoryIndex !== -1 ? s.substring(0, categoryIndex - IMAGE_STRING_LENGTH) : s.substring(0, s.length - IMAGE_STRING_LENGTH);
      return baseImageString.replace(/([A-Z])/g, " $1").trim();
  }
};

const getCategory = (s) => {
  const categoryIndex = s.indexOf(CATEGORY_INDEX_CHARACTER);
  const category = categoryIndex !== -1 ? s.substring(categoryIndex + 1) : categories.OTHER;
  return categories.hasOwnProperty(category) ? categories[category] : categories.OTHER;
};

const colors = ["#FFFF00", "#FF0000", "#00FF00", "#00FFFF", "#FF00FF", "#9D00FF"];

const imageKeys = Object.keys(imageImport);
const soundKeys = Object.keys(soundImport);

const buttons = zip(imageKeys, soundKeys)
  .map((keys) => {
    const [image, sound] = keys;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return {
      name: getName(image),
      image: imageImport[image],
      sound: soundImport[sound],
      roundedColor: randomColor,
      category: getCategory(image),
    };
  })
  .sort((button) => button.name);

export default buttons;
