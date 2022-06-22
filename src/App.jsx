import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { RootRouter } from "./navigation";
import { ThemeProvider } from "@material-ui/core";
import backgroundImage from "./assets/images/egyptian-pyramid.jpg";
import theme from "./theme";

const useStyles = makeStyles({
  root: {
    flex: 1,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <RootRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
