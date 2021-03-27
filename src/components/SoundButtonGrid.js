import { GridList } from "@material-ui/core";
import { React } from "react";
import SoundButton from "./SoundButton";
import buttons from "../common/buttons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
});

export default function SoundButtonGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={590} cols={5} spacing={20}>
        {buttons.map((button, i) => {
          return (
            <SoundButton
              name={button.name}
              image={button.image}
              sound={button.sound}
              roundedColor={button.roundedColor}
              key={i}
            ></SoundButton>
          );
        })}
      </GridList>
    </div>
  );
}
