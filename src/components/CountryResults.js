import React, { useEffect, useState } from "react";
import Worldmap from "../components/Worldmap";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ParentSize } from "@visx/responsive";

const CountryResults = ({ surveyCountries, selectedCountry }) => {
  const [results, setResults] = useState({});
  const [popular, setPopular] = useState({});

  useEffect(() => {
    const summary = {};
    let popularCountry = { count: 0 };

    surveyCountries.forEach((c) => {
      if (c.isoNumeric3 in summary) {
        summary[c.isoNumeric3].count += 1;
        const temp = summary[c.isoNumeric3];
        if (popularCountry.count < temp.count) {
          Object.assign(popularCountry, temp, { id: c.isoNumeric3 });
        }
      } else {
        summary[c.isoNumeric3] = { count: 1, country: c.country };
      }
    });

    setResults(summary);
    setPopular(popularCountry);
    console.log("Country results: ", summary);
  }, [surveyCountries]);

  const sameCountry =
    selectedCountry.isoNumeric3 in results
      ? results[selectedCountry.isoNumeric3].count
      : 0;

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography variant="body1" gutterBottom>
          {sameCountry} of {surveyCountries.length} people "surveyed"{" "}
          {sameCountry > 0 ? "also" : ""} chose {selectedCountry.country}. One
          of the most popular choices is {popular.country}, which{" "}
          {popular.count} people chose.
        </Typography>
      </Container>
      {results ? (
        <ParentSize>
          {(parent) => (
            <Worldmap
              width={parent.width}
              height={parent.width * (600 / 960)}
              data={results}
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
