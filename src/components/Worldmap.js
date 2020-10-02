import React from "react";
import { scaleLinear } from "@visx/scale";
import { NaturalEarth } from "@visx/geo";
import * as topojson from "topojson-client";
import world from "../utils/world-110m.json";
import { max } from "../utils/utilities";
import GradientLegend from "../components/GradientLegend";

const countries = topojson.feature(world, world.objects.countries);
const defaultColors = ["#ece7f2", "#2b8cbe"];

// data is keyed by country's isoNumeric3 id, count is normalized
const Worldmap = ({ width, height, data, colors, legend, popular }) => {
  const valueMax = max(Object.values(data), (d) => d.count);

  const usedColors = colors || defaultColors;
  const colorScale = scaleLinear({
    domain: [0, valueMax],
    range: usedColors,
  });

  const renderedLegend = legend ? (
    <GradientLegend
      minLabel={0}
      maxLabel={`${(valueMax * 100).toFixed(1)}%`}
      minColor={usedColors[0]}
      maxColor={usedColors[1]}
    />
  ) : null;

  const centerX = width / 2;
  const centerY = height / 2;

  return width < 10 ? null : (
    <div>
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
                      ? +feature.id === +popular.id
                        ? "#ff7f50"
                        : colorScale(data[feature.id].count)
                      : "#fff"
                  }
                  stroke="#ccc"
                  strokeWidth={0.5}
                  onClick={() => {
                    console.log(data[feature.id]);
                  }}
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
