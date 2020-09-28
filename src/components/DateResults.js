import React, { useState, useEffect } from "react";

const DateResults = ({ surveyDates, selectedDate }) => {
  const [results, setResults] = useState({});
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());

  // Aggregates survey results first by year, then by month
  useEffect(() => {
    console.log("use effect in date results");
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

  // Returns an array of the distribution of month choices in the selected year
  const monthDistribution =
    selectedYear in results
      ? Object.entries(results[selectedYear]).map(([month, count]) => {
          return { month, count };
        })
      : [];

  // Returns year distributions
  const yearDistribution = Object.entries(results).map(([yearNum, entry]) => {
    return { year: yearNum, count: entry.count };
  });

  return (
    <div>
      {sameYearShare}% of people also want to go during{" "}
      {selectedYear === 2020
        ? "the remaining months of 2020"
        : `sometime in ${selectedYear}`}
      .
    </div>
  );
};

export default DateResults;
