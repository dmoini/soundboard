import * as imageImport from "../images";
import * as soundImport from "../sounds";

import { getName, zip } from "../util/buttonsUtil";

import { soundNameToCategoryInfoMap } from "../common/constants";

const imageKeys = [...Object.keys(imageImport)].sort();
const soundKeys = [...Object.keys(soundImport)].sort();

const buttons = zip(imageKeys, soundKeys)
  .map(([image, sound]) => {
    return {
      name: getName(sound),
      imageUrl: imageImport[image],
      soundUrl: soundImport[sound],
      category: soundNameToCategoryInfoMap[sound]?.category,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export default buttons;
