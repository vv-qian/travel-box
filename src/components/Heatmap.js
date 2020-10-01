import React from "react";
import { scaleLinear } from "@visx/scale";
import { HeatmapCircle } from "@visx/heatmap";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
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
  },
  { name: "Heatmap" }
);

//  binData
// [
//     {
//       bin: 1, // x
//       bins: [
//         {
//           count: 20,
//           bin: 23, // y
//         },
//       ],
//     },
//   ];

const defaultColors = ["#E6EBEF", "#053761"];
const max = (data, value) => Math.max(...data.map(value));
const min = (data, value) => Math.min(...data.map(value));
const countAccessor = (d) => d.count;

const Heatmap = ({ width, height, binData, colors, legendPct }) => {
  const classes = useStyles();

  const countMax = max(binData, (d) => max(d.bins, countAccessor));
  const countMin = min(binData, (d) => min(d.bins, countAccessor));

  const binsXSize = binData.length;
  const binsYSize = max(binData, (d) => d.bins.length);

  const gap = 2;
  const binSize = Math.abs(Math.min(width / binsXSize, height / binsYSize));
  const minWidth = Math.ceil(binsXSize * (binSize + gap));

  const xScale = scaleLinear({
    domain: [0, binsXSize],
    range: [0, minWidth],
  });

  const yScale = scaleLinear({
    domain: [0, binsYSize],
    range: [0, height],
  });

  const usedColors = colors || defaultColors;

  const colorScale = scaleLinear({
    domain: [countMin, countMax],
    range: usedColors,
  });

  const renderedlegend = legendPct ? (
    <div className={classes.legend}>
      <Typography variant="caption">0</Typography>
      <div
        className={classes.colorblock}
        style={{
          background: `linear-gradient(to right, ${usedColors[0]}, ${usedColors[1]})`,
        }}
      ></div>
      <Typography variant="caption">100%</Typography>
    </div>
  ) : null;

  return (
    <div className={classes.root}>
      {renderedlegend}
      <div>
        {/* add month labels and year labels */}
        <svg width={minWidth} height={height}>
          <HeatmapCircle
            data={binData}
            xScale={xScale}
            yScale={yScale}
            colorScale={colorScale}
            radius={binSize / 2}
            gap={gap}
          ></HeatmapCircle>
        </svg>
      </div>
    </div>
  );
};

export default Heatmap;