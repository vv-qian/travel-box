import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import Link from "../components/Link";
import Subhed from "../components/Subhed";
import CountryResults from "../components/CountryResults";
import DateResults from "../components/DateResults";
import Search from "../components/Search";
import Holidays from "../components/Holidays";
import Forex from "../components/Forex";

// fake survey data
import { sampleCountries, sampleDates } from "../utils/data";

const PageThree = ({ selectedCountry, selectedDate, topics }) => {
  const renderTopics = topics.map((topic, i) => {
    if (topic === "forex") {
      return (
        <Grid item key={`topic-${topic}-${i}`}>
          <Subhed>Money Matters</Subhed>
          <Forex
            currencyCode={selectedCountry.currency}
            currencyName={selectedCountry.currencyName}
          ></Forex>
        </Grid>
      );
    }

    if (topic === "holiday") {
      return (
        <Grid item key={`topic-${topic}-${i}`}>
          <Subhed>Holidays and Observances</Subhed>
          <Holidays
            isoAlpha2={selectedCountry.isoAlpha2}
            year={selectedDate.getFullYear()}
            month={selectedDate.getMonth() + 1}
          ></Holidays>
        </Grid>
      );
    }

    if (topic === "anything") {
      return (
        <Grid item key={`topic-${topic}-${i}`}>
          <Subhed>Launchpad</Subhed>
          <Search term={`${selectedCountry.country}`} cap="5" />
        </Grid>
      );
    }

    return null;
  });

  return (
    <Grid container direction="column" alignItems="flex-start" spacing={5}>
      <Grid container item spacing={5} className="surveyResults">
        <Grid item>
          <CountryResults
            surveyCountries={sampleCountries}
            selectedCountry={selectedCountry}
          />
        </Grid>
        <Grid item>
          <DateResults surveyDates={sampleDates} selectedDate={selectedDate} />
        </Grid>
      </Grid>
      <Grid container item spacing={5} className="infoResults">
        {renderTopics.length > 0 ? (
          <Divider variant="middle" style={{ width: "100%" }} />
        ) : null}
        {renderTopics}
      </Grid>
      <Grid container item justify="space-between" className="navigation">
        <Grid item>
          <Link href="/">
            <Button variant="contained">Choose another country</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/info">
            <Button variant="contained">Go back</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageThree;
