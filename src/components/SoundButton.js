import React from "react";
import ReactRoundedImage from "react-rounded-image";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export default function SoundButton({ name, image, sound, roundedColor, handleClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.soundButton} onClick={() => handleClick(sound)}>
        <ReactRoundedImage
          imageWidth={150}
          imageHeight={150}
          image={image}
          roundedColor={roundedColor}
          roundedSize={10}
        ></ReactRoundedImage>
      </div>
      <Typography className={classes.typography} variant="h6">
        {name}
      </Typography>
    </div>
  );
}
