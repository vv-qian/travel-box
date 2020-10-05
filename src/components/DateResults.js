import React, { useState, useEffect } from "react";
import { baseMonths, monthAbbr, monthName } from "../utils/data";
import { range, shortenYear } from "../utils/utilities";
import Heatmap from "../components/Heatmap";
import { ParentSize } from "@visx/responsive";
import Typography from "@material-ui/core/Typography";

// Generate binData for Heatmap, in manner of https://airbnb.io/visx/docs/heatmap
const generateBinData = (results, n) => {
  if (!results) {
    return [];
  }

  const binData = [];
  const years = Object.keys(results);
  const yearRange = range(Math.min(...years), Math.max(...years));
  const yearLabels = yearRange.map((year) => shortenYear(year));

  baseMonths.forEach((month, i) => {
    const bin = { bin: i + 1 };
    bin.bins = yearRange.map((year, i) => {
      return {
        count: month in results[year] ? results[year][month] / n : 0,
        bin: i,
      };
    });
    binData.push(bin);
  });
  return [binData, yearLabels];
};

const DateResults = ({ surveyDates, selectedDate }) => {
  const [results, setResults] = useState({});
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
  const [popular, setPopular] = useState({});

  // Aggregates survey results first by year, then by month
  useEffect(() => {
    const summary = {};
    let popularDate = { count: 0 };
    surveyDates.forEach((d) => {
      const yr = d.getFullYear();
      const m = d.getMonth();

      if (yr in summary) {
        summary[yr].count += 1;
        m in summary[yr] ? (summary[yr][m] += 1) : (summary[yr][m] = 1);
        if (m in summary[yr]) {
          summary[yr][m] += 1;
          if (popularDate.count < summary[yr][m]) {
            popularDate = {
              month: m,
              count: summary[yr][m],
              year: yr,
            };
          }
        } else {
          summary[yr][m] = 1;
        }
      } else {
        summary[yr] = {};
        summary[yr].count = 1;
        summary[yr][m] = 1;
      }
    });

    setResults(summary);
    setSelectedYear(selectedDate.getFullYear());
    setSelectedMonth(selectedDate.getMonth());
    setPopular(popularDate);
    console.log("Time results: ", summary);
  }, [selectedDate, surveyDates]);

  const [sameYear, sameMonth] =
    selectedYear in results
      ? [
          results[selectedYear].count,
          selectedMonth in results[selectedYear]
            ? results[selectedYear][selectedMonth]
            : 0,
        ]
      : [0, 0];

  const [binData, colLabels] = generateBinData(results, 1);

  return (
    <div>
      <Typography variant="body1" gutterBottom>
        {sameYear} of the {surveyDates.length} people "surveyed" want
        {sameYear > 1 ? "" : "s"} to go{" "}
        {selectedYear === 2020
          ? "sometime in the remaining months of 2020"
          : `sometime in ${selectedYear}`}{" "}
        — {sameMonth} chose {monthName[selectedMonth + 1]}, as you did.{" "}
        {monthName[popular.month + 1]} {popular.year} is one of the most popular
        times — {popular.count} would choose to go then.
      </Typography>
      {binData ? (
        <ParentSize>
          {(parent) => (
            <Heatmap
              width={parent.width}
              height={300}
              binData={binData}
              rowLabels={colLabels}
              colLabels={Object.values(monthAbbr)}
              legend
            />
          )}
        </ParentSize>
      ) : null}
    </div>
  );
};

export default DateResults;
