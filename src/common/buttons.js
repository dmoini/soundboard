import * as imageImport from "../images";
import * as soundImport from "../sounds";

const zip = (a, b) => a.map((v, i) => [v, b[i]]);

const getName = (s) => {
  switch (s) {
    case "EnemyAC130AboveImage":
      return "Enemy AC-130 Above";
    default:
      return s
        .substring(0, s.length - 5) // Removes "Image" from end of `s`
        .replace(/([A-Z])/g, " $1")
        .trim();
  }
};

const colors = ["#FFFF00", "#FF0000", "#00FF00", "#00FFFF", "#FF00FF", "#9D00FF"];

const imageKeys = Object.keys(imageImport);
const soundKeys = Object.keys(soundImport);

const buttons = zip(imageKeys, soundKeys)
  .map((keys) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return {
      name: getName(keys[0]),
      image: imageImport[keys[0]],
      sound: soundImport[keys[1]],
      roundedColor: randomColor,
    };
  })
  .sort((button) => button.name);

export default buttons;
