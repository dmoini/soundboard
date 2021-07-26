import * as imageImport from "../images";
import * as soundImport from "../sounds";

import { getName, zip } from "../util/buttonsUtil";

import { soundNameToCategoryInfoMap } from "../common/constants";

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
      category: soundNameToCategoryInfoMap[sound]?.category,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export default buttons;
