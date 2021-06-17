import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    background: "white",
    alignItems: "center",
  },
  appName: {
    margin: "0",
    padding: "1rem",
    fontSize: "x-large",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="body1" className={classes.appName} color="primary">
          <Typography variant="inherit" color="secondary">
            Score
          </Typography>
          Board
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
