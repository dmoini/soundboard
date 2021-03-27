import * as imageImport from "../images";
import * as soundImport from "../sounds";

const zip = (a, b) => a.map((v, i) => [v, b[i]]);

const getName = (s) => {
  return s
    .substring(0, s.length - 5)
    .replace(/([A-Z])/g, " $1")
    .trim();
};

// const getHoverColor = (colorHexCode) => {
//   const hoverColorHexCode = parseInt(colorHexCode.substring(1), 16) - 0x202020;
//   return `#${hoverColorHexCode.toString(16)}`;
// };

const colors = ["#FFFF00", "#FF0000", "#00FF00", "#00FFFF", "#FF00FF", "#9D00FF"];

const imageKeys = Object.keys(imageImport);
const soundKeys = Object.keys(soundImport);

const buttons = zip(imageKeys, soundKeys)
  .sort(() => Math.random() - 0.5)
  .map((keys) => {
    console.log(keys[0]);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return {
      name: getName(keys[0]),
      image: imageImport[keys[0]],
      sound: soundImport[keys[1]],
      roundedColor: randomColor,
    };
  });

export default buttons;
