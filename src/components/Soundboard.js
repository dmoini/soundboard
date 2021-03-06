import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import SoundButton from "./SoundButton";
import buttonsData from "../common/buttons";
import { categoryMap } from "../common/constants";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Soundboard() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState(categoryMap.ALL);
  const [buttons, setButtons] = useState(buttonsData);
  const classes = useStyles();

  useEffect(() => {
    const filteredButtonsBySearchValue = buttonsData.filter((button) => button.name.toLowerCase().includes(searchValue.toLowerCase()));
    const filteredButtons =
      categoryValue === categoryMap.ALL
        ? filteredButtonsBySearchValue
        : filteredButtonsBySearchValue.filter((button) => button.category === categoryValue);
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
          {Object.values(categoryMap).map((category) => (
            <MenuItem value={category} key={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={2} justify="center">
        {buttons.map((button) => {
          return (
            <Grid item xs={6} sm={4} md={2} key={`${button.name} grid item`}>
              <SoundButton key={button.name} {...button}></SoundButton>
            </Grid>
          );
        })}
        <>{buttons.length === 0 && <Typography variant="h6">No sounds found</Typography>}</>
      </Grid>
    </div>
  );
}
