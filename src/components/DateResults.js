import React, { useState, useEffect } from "react";
import { baseMonths, monthAbbr } from "../utils/data";
import { range, shortenYear } from "../utils/utilities";
import Heatmap from "../components/Heatmap";
import { ParentSize } from "@visx/responsive";
import Typography from "@material-ui/core/Typography";

// Generate binData for Heatmap, in manner of https://airbnb.io/visx/docs/heatmap
const generateBinData = (results, n) => {
  if (!results) {
    return [];
  }

  let binData = [];
  const years = Object.keys(results);
  const yearRange = range(Math.min(...years), Math.max(...years));
  const yearLabels = [];

  yearRange.forEach((year, i) => {
    const bin = { bin: i + 1 };
    const yearResults = results[year];
    bin.bins = baseMonths.map((month) => {
      return {
        count: month in yearResults ? yearResults[month] / n : 0,
        bin: month,
      };
    });
    binData.push(bin);

    yearLabels.push(shortenYear(year));
  });
  return [binData, yearLabels];
};

const DateResults = ({ surveyDates, selectedDate }) => {
  const [results, setResults] = useState({});
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());

  // Aggregates survey results first by year, then by month
  useEffect(() => {
    let summary = {};
    surveyDates.forEach((d) => {
      let yr = d.getFullYear();
      let m = d.getMonth();

      if (yr in summary) {
        summary[yr].count += 1;
        m in summary[yr] ? (summary[yr][m] += 1) : (summary[yr][m] = 1);
      } else {
        summary[yr] = {};
        summary[yr].count = 1;
        summary[yr][m] = 1;
      }
    });

    setResults(summary);
    setSelectedYear(selectedDate.getFullYear());
  }, [selectedDate, surveyDates]);

  // Returns count and share of respondents who chose the same year
  const sameYear =
    selectedYear in results
      ? [
          results[selectedYear].count,
          Math.floor(100 * (results[selectedYear].count / surveyDates.length)),
        ]
      : [0, 0];

  const [binData, colLabels] = generateBinData(results, surveyDates.length);

  return (
    <div>
      <Typography variant="body1" gutterBottom>
        {sameYear[0]}, or {sameYear[1]}%, of the {surveyDates.length} people
        "surveyed" also want to go{" "}
        {selectedYear === 2020
          ? "sometime in the remaining months of 2020"
          : `sometime in ${selectedYear}`}
        .
      </Typography>
      {binData ? (
        <ParentSize>
          {(parent) => (
            <Heatmap
              width={parent.width}
              height={400}
              binData={binData}
              colLabels={colLabels}
              rowLabels={Object.values(monthAbbr)}
              legend
            />
          )}
        </ParentSize>
      ) : null}
    </div>
  );
};

export default DateResults;
