import "./App.css";

import {
  MuiThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";

import Soundboard from "./components/Soundboard";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  background: {
    backgroundColor: "black",
    backgroundSize: "cover",
    minHeight: "100vh",
    width: "100%",
  },
  typography: {
    paddingBottom: "50px",
    paddingTop: "50px",
    textAlign: "center",
  },
});

const theme = createTheme({
  typography: {
    h3: {
      color: "white",
      fontFamily: "'Inter', sans-serif",
    },
    h6: {
      color: "white",
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
        <Soundboard />
      </div>
    </MuiThemeProvider>
  );
}
