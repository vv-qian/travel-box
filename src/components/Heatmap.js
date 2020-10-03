import React from "react";
import { scaleLinear } from "@visx/scale";
import { HeatmapCircle } from "@visx/heatmap";
import { Group } from "@visx/group";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { max, min } from "../utils/utilities";
import GradientLegend from "../components/GradientLegend";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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

const defaultColors = ["#fff", "#3182bd"];
const countAccessor = (d) => d.count;

//  binData data structure per https://airbnb.io/visx/docs/heatmap
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

const Heatmap = ({
  width,
  height,
  binData,
  colors,
  legend,
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
  const centerX = (width - minWidth) / 2;

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

  const renderedLegend = legend ? (
    <GradientLegend
      minLabel="Less"
      maxLabel="More"
      minColor={usedColors[0]}
      maxColor={usedColors[1]}
    />
  ) : null;

  return width < 10 ? null : (
    <div className={classes.root}>
      {renderedLegend}
      <div>
        <svg width={width} height={height}>
          <Group
            className={classes.rowlabel}
            top={margins.top - margins.label}
            left={centerX - margins.label}
          >
            {rowLabels
              ? rowLabels.map((lbl, i) => {
                  return (
                    <Typography
                      variant="caption"
                      component="text"
                      key={`row-${i}-label`}
                      className={(classes.rowlabel, classes.caption)}
                      x={0}
                      y={yScale(i + 1)}
                    >
                      {lbl}
                    </Typography>
                  );
                })
              : null}
          </Group>
          <Group top={margins.top - margins.label} left={centerX}>
            {colLabels
              ? colLabels.map((lbl, i) => {
                  return (
                    <Typography
                      key={`column-${i}-label`}
                      variant="caption"
                      component="text"
                      className={classes.caption}
                      x={xScale(i) + margins.label}
                      y={0}
                    >
                      {lbl}
                    </Typography>
                  );
                })
              : null}
          </Group>
          <Group top={margins.top} left={centerX}>
            <HeatmapCircle
              data={binData}
              xScale={xScale}
              yScale={yScale}
              colorScale={colorScale}
              radius={binSize / 2}
              stroke="#ccc"
              gap={gap}
            ></HeatmapCircle>
          </Group>
        </svg>
      </div>
    </div>
  );
};

export default Heatmap;
