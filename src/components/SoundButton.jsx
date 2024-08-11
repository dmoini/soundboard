import { COLOR } from "../common/constants";
import React, { useState } from "react";

import ReactRoundedImage from "react-rounded-image";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useSound from "use-sound";

const useStyles = makeStyles({
  root: {
    paddingBottom: "20px",
  },
  soundButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  typography: {
    paddingTop: "10px",
    textAlign: "center",
  },
});

export default function SoundButton({ name, imageUrl, soundUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(soundUrl, {
    onplay: () => {
      setIsPlaying(true);
    },
    onend: () => {
      setIsPlaying(false);
    },
    onstop: () => {
      setIsPlaying(false);
    },
  });
  const classes = useStyles();

  const toggleSound = () => {
    isPlaying ? stop() : play();
  };

  return (
    <div className={classes.root}>
      <div className={classes.soundButton} onClick={toggleSound}>
        <ReactRoundedImage
          imageWidth={150}
          imageHeight={150}
          image={imageUrl}
          roundedColor={isPlaying ? COLOR.GREEN : COLOR.RED}
          roundedSize={10}
        ></ReactRoundedImage>
      </div>
      <Typography className={classes.typography} variant="h6">
        {name}
      </Typography>
    </div>
  );
}
