import React from "react";
import { scaleLinear } from "@visx/scale";
import { HeatmapCircle } from "@visx/heatmap";
import { Group } from "@visx/group";
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
    rowlabel: {
      textAnchor: "end",
    },
    caption: {
      color: "#999",
      fill: "#999",
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

const Heatmap = ({
  width,
  height,
  binData,
  colors,
  legendPct,
  rowLabels,
  colLabels,
}) => {
  const classes = useStyles();

  const countMax = max(binData, (d) => max(d.bins, countAccessor));
  const countMin = min(binData, (d) => min(d.bins, countAccessor));

  const binsXSize = binData.length;
  const binsYSize = max(binData, (d) => d.bins.length);

  const gap = 2;
  const margins = { top: 30, bottom: 10, label: gap * 4 };
  const minHeight = height - margins.top - margins.bottom;
  const binSize = Math.abs(Math.min(width / binsXSize, minHeight / binsYSize));
  const minWidth = Math.ceil(binsXSize * (binSize + gap));
  const centerPos = (width - minWidth) / 2;

  const xScale = scaleLinear({
    domain: [0, binsXSize],
    range: [0, minWidth],
  });

  const yScale = scaleLinear({
    domain: [0, binsYSize],
    range: [0, minHeight],
  });

  const usedColors = colors || defaultColors;

  const colorScale = scaleLinear({
    domain: [countMin, countMax],
    range: usedColors,
  });

  const renderedLegend = legendPct ? (
    <div className={classes.legend}>
      <Typography variant="caption" className={classes.caption}>
        0
      </Typography>
      <div
        className={classes.colorblock}
        style={{
          background: `linear-gradient(to right, ${usedColors[0]}, ${usedColors[1]})`,
        }}
      ></div>
      <Typography variant="caption" className={classes.caption}>
        100%
      </Typography>
    </div>
  ) : null;

  const x0 = xScale(0);
  const y0 = yScale(0);
  const renderedRowLbls =
    rowLabels &&
    !Number.isNaN(y0) &&
    rowLabels.map((lbl, i) => {
      return (
        <Typography
          variant="caption"
          component="text"
          key={`row-${i}-label`}
          className={(classes.rowlabel, classes.caption)}
          x={x0}
          y={yScale(i + 1)}
        >
          {lbl}
        </Typography>
      );
    });
  const renderedColLbls =
    colLabels &&
    !Number.isNaN(y0) &&
    colLabels.map((lbl, i) => {
      return (
        <Typography
          key={`column-${i}-label`}
          variant="caption"
          component="text"
          className={classes.caption}
          x={xScale(i) + gap}
          y={y0}
        >
          {lbl}
        </Typography>
      );
    });

  return width < 10 ? null : (
    <div className={classes.root}>
      {renderedLegend}
      <div>
        <svg width={width} height={height}>
          <Group
            className={classes.rowlabel}
            top={margins.top - margins.label}
            left={centerPos - margins.label}
          >
            {renderedRowLbls}
          </Group>
          <Group top={margins.top - margins.label} left={centerPos}>
            {renderedColLbls}
          </Group>
          <Group top={margins.top} left={centerPos}>
            <HeatmapCircle
              data={binData}
              xScale={xScale}
              yScale={yScale}
              colorScale={colorScale}
              radius={binSize / 2}
              gap={gap}
            ></HeatmapCircle>
          </Group>
        </svg>
      </div>
    </div>
  );
};

export default Heatmap;
