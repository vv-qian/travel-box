import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(
  {
    legend: {
      width: "100%",
      height: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: "1.2rem 0",
    },
    colorblock: {
      width: "100px",
      margin: "0 0.4rem",
      borderRadius: "1rem",
    },
    caption: {
      color: "#999",
      fill: "#999",
    },
  },
  { name: "GradientLegend" }
);

const GradientLegend = ({ minLabel, maxLabel, minColor, maxColor }) => {
  const classes = useStyles();
  return (
    <div className={classes.legend}>
      <Typography variant="caption" className={classes.caption}>
        {minLabel}
      </Typography>
      <div
        className={classes.colorblock}
        style={{
          background: `linear-gradient(to right, ${minColor}, ${maxColor})`,
        }}
      ></div>
      <Typography variant="caption" className={classes.caption}>
        {maxLabel}
      </Typography>
    </div>
  );
};

export default GradientLegend;
