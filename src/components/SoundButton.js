import { React } from "react";
import ReactRoundedImage from "react-rounded-image";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const playSound = (sound) => new Audio(sound).play();

const useStyles = makeStyles({
  soundButton: {
    padding: "15px",
  },
  typography: {
    paddingTop: "10px",
    textAlign: "center",
  },
});

export default function SoundButton({ name, image, sound, roundedColor }) {
  const classes = useStyles();

  return (
    <div className={classes.soundButton}>
      <div onClick={() => playSound(sound)}>
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
