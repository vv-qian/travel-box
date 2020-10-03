import React, { useEffect, useState } from "react";
import Worldmap from "../components/Worldmap";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ParentSize } from "@visx/responsive";

const CountryResults = ({ surveyCountries, selectedCountry }) => {
  const [results, setResults] = useState({});
  const [popular, setPopular] = useState({ count: 0 });

  useEffect(() => {
    const summary = {};
    const n = surveyCountries.length;

    surveyCountries.forEach((c) => {
      if (c.isoNumeric3 in summary) {
        summary[c.isoNumeric3].count += 1 / n;
        const temp = summary[c.isoNumeric3];
        if (popular.count < temp.count) {
          Object.assign(popular, temp, { id: c.isoNumeric3 });
        }
      } else {
        summary[c.isoNumeric3] = { count: 1 / n, country: c.country };
      }
    });

    setResults(summary);
    setPopular(popular);
  }, [surveyCountries, popular]);

  const sameCountry =
    selectedCountry.isoNumeric3 in results
      ? [
          results[selectedCountry.isoNumeric3].count * surveyCountries.length,
          100 *
            (results[selectedCountry.isoNumeric3].count /
              surveyCountries.length),
        ]
      : [0, 0];

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography variant="body1" gutterBottom>
          {sameCountry[0]} of {surveyCountries.length} people "surveyed"{" "}
          {sameCountry[0] > 0 ? "also" : ""} chose {selectedCountry.country}.
          Most popular choice is {popular.country}, which{" "}
          {popular.count * surveyCountries.length} people chose.
        </Typography>
      </Container>
      {results ? (
        <ParentSize>
          {(parent) => (
            <Worldmap
              width={parent.width}
              height={parent.width * (600 / 960)}
              data={results}
              popular={popular}
              legend
            />
          )}
        </ParentSize>
      ) : null}
      <Container maxWidth="md" style={{ marginBottom: "40px" }}>
        <Typography variant="caption">
          South Sudan, Kosovo and the Vatican City were excluded from the
          "survey."
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default CountryResults;
