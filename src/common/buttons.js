import * as imageImport from "../images";
import * as soundImport from "../sounds";

import categories from "../common/constants";

const CATEGORY_INDEX_SEPARATOR = "_";

const zip = (a, b) => a.map((v, i) => [v, b[i]]);

const getName = (s) => {
  const categoryIndex = s.indexOf(CATEGORY_INDEX_SEPARATOR);
  const name = categoryIndex !== -1 ? s.substring(0, categoryIndex) : s;
  switch (name) {
    case "EnemyAC130Above":
      return "Enemy AC-130 Above";
    default:
      return name.replace(/([A-Z])/g, " $1").trim();
  }
};

const getCategory = (s) => {
  const categoryIndex = s.indexOf(CATEGORY_INDEX_SEPARATOR);
  if (categoryIndex !== -1) {
    const category = s.substring(categoryIndex + 1);
    return categories.hasOwnProperty(category) ? categories[category] : categories.OTHER;
  }
  return categories.OTHER;
};

const colors = ["#FFFF00", "#FF0000", "#00FF00", "#00FFFF", "#FF00FF", "#9D00FF"];

const imageKeys = Object.keys(imageImport);
imageKeys.sort();
const soundKeys = Object.keys(soundImport);
soundKeys.sort();

const buttons = zip(imageKeys, soundKeys)
  .map((keys) => {
    const [image, sound] = keys;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return {
      name: getName(sound),
      image: imageImport[image],
      sound: soundImport[sound],
      roundedColor: randomColor,
      category: getCategory(sound),
    };
  })
  .sort((button) => button.name);

export default buttons;
