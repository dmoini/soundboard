import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

import SoundButton from "./SoundButton";
import buttonsData from "../common/buttons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    marginLeft: "10px",
    marginRight: "10px",
  },
  input: {
    color: "white",
  },
  inputLabel: {
    color: "white",
  },
  outline: {
    borerColor: "white !important",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  textField: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "white",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "white",
    },
    paddingBottom: "50px",
  },
});

export default function SoundButtonGrid() {
  const [buttons, setButtons] = useState(buttonsData);
  const [noButtonsFound, setNoButtonsFound] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState({});
  const classes = useStyles();

  const playSound = (sound) => {
    if (soundPlaying.isPlaying) {
      soundPlaying.audio.pause();
      soundPlaying.isPlaying = false;
    }
    const audio = new Audio(sound);
    setSoundPlaying({ audio, isPlaying: true });
    audio.play();

    audio.addEventListener("ended", soundListener(audio));
  };

  const soundListener = (audio) => {
    soundPlaying.isPlaying = false;
    audio.removeEventListener("ended", soundListener);
  };

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        label="Search for sound"
        variant="outlined"
        onChange={(e) => {
          const filteredButtons = buttonsData.filter((button) => button.name.toLowerCase().includes(e.target.value.toLowerCase()));
          setButtons(filteredButtons);
          setNoButtonsFound(filteredButtons.length === 0);
        }}
      />
      <Grid container spacing={2} justify="center">
        {buttons.map((button, i) => {
          return (
            <Grid item xs={6} sm={4} md={2} key={`${button.name}-grid-item`}>
              <SoundButton
                name={button.name}
                image={button.image}
                sound={button.sound}
                roundedColor={button.roundedColor}
                handleClick={playSound}
                key={button.name}
              ></SoundButton>
            </Grid>
          );
        })}
        <>{noButtonsFound && <Typography variant="h6">No sounds found</Typography>}</>
      </Grid>
    </div>
  );
}
