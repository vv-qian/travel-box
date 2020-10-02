import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "2rem 0 4rem",
    textAlign: "center",
  },
  header: {
    display: "inline-block",
    letterSpacing: "0.3rem",
    color: "coral",
  },
  description: {
    color: "coral",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h1" className={classes.header}>
        TRAVELER.
      </Typography>
      <Typography
        variant="caption"
        component="span"
        className={classes.description}
        gutterBottom
      >
        journeys&nbsp;in&nbsp;mind
      </Typography>
    </div>
  );
};

export default Header;
