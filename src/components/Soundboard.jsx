import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CATEGORY } from "../common/constants";
import SoundData from "../data/soundButtons.json";
import SoundButton from "./SoundButton";

const allWhiteMaterialUiComponent = {
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
};

const useStyles = makeStyles({
  formControl: {
    minWidth: 120,
    ...allWhiteMaterialUiComponent,
  },
  grid: {
    marginLeft: "10px",
    marginRight: "10px",
  },
  icon: {
    fill: "white",
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
    paddingBottom: "50px",
    ...allWhiteMaterialUiComponent,
  },
});

const soundButtonsData = SoundData.map((data) => {
  return {
    name: data.friend ? `${data.name} (${data.friend})` : data.name,
    imageUrl: `${process.env.PUBLIC_URL}/assets/images/${data.imageFileName}`,
    soundUrl: `${process.env.PUBLIC_URL}/assets/audio/${data.soundFileName}`,
    category: data.category,
    friend: data.friend,
  };
}).sort((a, b) => a.name.localeCompare(b.name));

export default function Soundboard() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState(CATEGORY.ALL);
  const [buttons, setButtons] = useState(soundButtonsData);
  const classes = useStyles();

  useEffect(() => {
    const filteredButtonsBySearchValue = soundButtonsData.filter((button) =>
      button.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const filteredButtons =
      categoryValue === CATEGORY.ALL
        ? filteredButtonsBySearchValue
        : filteredButtonsBySearchValue.filter(
            (button) => button.category === categoryValue
          );
    setButtons(filteredButtons);
  }, [searchValue, categoryValue]);

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        label="Search for sound"
        variant="outlined"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={categoryValue}
          onChange={(event) => setCategoryValue(event.target.value)}
          label="Category"
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {Object.values(CATEGORY).map((category) => (
            <MenuItem value={category} key={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={2} justifyContent="center">
        {buttons.map((button) => {
          return (
            <Grid item xs={6} sm={4} md={2} key={`${button.name} grid item`}>
              <SoundButton key={button.name} {...button}></SoundButton>
            </Grid>
          );
        })}
        <>
          {buttons.length === 0 && (
            <Typography variant="h6">No sounds found</Typography>
          )}
        </>
      </Grid>
    </div>
  );
}
