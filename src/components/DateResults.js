import React, { useState, useEffect } from "react";
import { baseMonths } from "../utils/data";
import { range } from "../utils/utilities";
import Heatmap from "../components/Heatmap";

const generateBinData = (results) => {
  if (!results) {
    return [];
  }
  let binData = [];
  const years = Object.keys(results);
  const yearRange = range(Math.min(...years), Math.max(...years));
  // const binGap =

  yearRange.forEach((year, i) => {
    const bin = { bin: i + 1 };
    const yearResults = results[year];
    bin.bins = baseMonths.map((month) => {
      return {
        count: month in yearResults ? yearResults[month] : 0,
        bin: month,
      };
    });
    binData.push(bin);
  });
  return binData;
};

const DateResults = ({ surveyDates, selectedDate }) => {
  const [results, setResults] = useState({});
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());

  // Aggregates survey results first by year, then by month
  useEffect(() => {
    let overview = {};
    surveyDates.forEach((d) => {
      let yr = d.getFullYear();
      let m = d.getMonth();

      if (yr in overview) {
        overview[yr].count += 1;
        m in overview[yr] ? (overview[yr][m] += 1) : (overview[yr][m] = 1);
      } else {
        overview[yr] = {};
        overview[yr].count = 1;
        overview[yr][m] = 1;
      }
    });

    setResults(overview);
    setSelectedYear(selectedDate.getFullYear());
  }, [selectedDate, surveyDates]);

  // Returns share of respondents who chose the same year
  const sameYearShare =
    selectedYear in results
      ? Math.ceil(100 * (results[selectedYear].count / surveyDates.length))
      : 0;

  const binData = generateBinData(results);
  console.log(binData);

  return (
    <React.Fragment>
      <div>
        {sameYearShare}% of people also want to go during{" "}
        {selectedYear === 2020
          ? "the remaining months of 2020"
          : `sometime in ${selectedYear}`}
        .
      </div>
      {binData ? (
        <Heatmap width={600} height={350} binData={binData} legendPct={true} />
      ) : null}
    </React.Fragment>
  );
};

export default DateResults;
