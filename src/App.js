import "./App.css";

import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";

import SoundButtonGrid from "./components/SoundButtonGrid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  background: {},
  grid: {
    paddingTop: "50px",
  },
  typography: {
    paddingTop: "50px",
    paddingBottom: "50px",
    textAlign: "center",
  },
});

const theme = createMuiTheme({
  typography: {
    h3: {
      fontFamily: "'Inter', sans-serif",
    },
    h6: {
      fontFamily: "'Inter', sans-serif",
    },
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.background}>
        <Typography className={classes.typography} variant="h3">
          Soundboard
        </Typography>
        <SoundButtonGrid />
      </div>
    </MuiThemeProvider>
  );
}
