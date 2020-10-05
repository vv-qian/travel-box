import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { scaleThreshold } from "@visx/scale";
import { NaturalEarth } from "@visx/geo";
import { LegendThreshold, LegendItem, LegendLabel } from "@visx/legend";
import * as topojson from "topojson-client";
import world from "../utils/world-110m.json";
import { max, getStepGap, range } from "../utils/utilities";
import { schemeBlues } from "d3-scale-chromatic";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    legendLabels: {
      display: "flex",
      flexDirection: "row",
    },
    caption: {
      color: "#999",
    },
  },
  { name: "Worldmap" }
);

const countries = topojson.feature(world, world.objects.countries);

// data is keyed by country's isoNumeric3 id
const Worldmap = ({
  width,
  height,
  data,
  colors,
  highlightCountry,
  legend,
}) => {
  const classes = useStyles();

  const valueMax = max(Object.values(data), (d) => d.count);
  const colorScheme = colors || schemeBlues;

  let stepGap = getStepGap(valueMax);
  stepGap =
    stepGap === valueMax
      ? valueMax > 5
        ? Math.floor(valueMax / 2)
        : 1
      : stepGap;
  const steps = valueMax / stepGap;
  const colorDomain = (stepGap > 1 ? [1] : []).concat(
    range(1, steps - 1).map((v) => v * stepGap)
  );
  const colorRange = ["#fff"].concat(
    colorScheme[colorDomain.length] || ["#a6bddb", "#2b8cbe"]
  );
  const colorScale = scaleThreshold({
    domain: colorDomain,
    range: colorRange,
  });

  const legendGlyphSize = 15;
  const renderedLegend = legend ? (
    <LegendThreshold scale={colorScale}>
      {(labels) => (
        <div className={classes.legendLabels}>
          {labels.map((label, i) => (
            <LegendItem key={`legend-quantile-${i}`} margin="1px 0">
              <svg width={legendGlyphSize} height={legendGlyphSize}>
                <circle
                  fill={colorRange[label.index]}
                  stroke="#ccc"
                  r={legendGlyphSize / 2}
                  cx={legendGlyphSize / 2}
                  cy={legendGlyphSize / 2}
                />
              </svg>
              <LegendLabel align="left" margin="0 16px 0 8px">
                <Typography variant="caption" className={classes.caption}>
                  {i === 0 ? "0" : label.text}
                </Typography>
              </LegendLabel>
            </LegendItem>
          ))}
        </div>
      )}
    </LegendThreshold>
  ) : null;

  const centerX = width / 2;
  const centerY = height / 2;

  return width < 10 ? null : (
    <div className={classes.root}>
      {renderedLegend}
      <svg width={width} height={height}>
        <NaturalEarth
          data={countries.features}
          translate={[centerX - 50, centerY]}
          scale={centerX / 2.5}
        >
          {(naturalearth) => (
            <g>
              {naturalearth.features.map(({ feature, path }, i) => (
                <path
                  key={`map-feature-${i}`}
                  d={path || ""}
                  fill={
                    data[feature.id]
                      ? +feature.id === +highlightCountry.isoNumeric3
                        ? "coral"
                        : colorScale(data[feature.id].count)
                      : "#fff"
                  }
                  stroke="#999"
                  strokeWidth={0.5}
                />
              ))}
            </g>
          )}
        </NaturalEarth>
      </svg>
    </div>
  );
};

export default Worldmap;
