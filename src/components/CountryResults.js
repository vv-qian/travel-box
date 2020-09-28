import React from "react";

const CountryResults = ({ surveyCountries, selectedCountry }) => {
  const results = (() => {
    let overview = {};
    surveyCountries.forEach((c) => {
      if (c.country in overview) {
        overview[c.country] += 1;
      } else {
        overview[c.country] = 1;
      }
    });

    const mostPopular = Object.entries(overview)
      .sort((a, b) => b[1] - a[1])
      .splice(0, 6);

    return { overview, mostPopular };
  })();

  const getMostPopular = results.mostPopular[0][0];
  const getSelectedCountryShare =
    selectedCountry.country in results.overview
      ? Math.ceil(
          100 *
            (results.overview[selectedCountry.country] / surveyCountries.length)
        )
      : 0;

  return (
    <div>
      {getSelectedCountryShare}% of respondents also chose{" "}
      {selectedCountry.country}. The country most people want to go to is{" "}
      {getMostPopular}.
    </div>
  );
};

export default CountryResults;
