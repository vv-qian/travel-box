import React from "react";
import { NavLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Subhed from "../components/Subhed";
import CountryResults from "../components/CountryResults";
import DateResults from "../components/DateResults";
import Search from "../components/Search";
import Holidays from "../components/Holidays";
import Forex from "../components/Forex";

// fake survey data
import { sampleCountries, sampleDates } from "../utils/data";

const useStyles = makeStyles({
  body: {
    width: "100%",
  },
  break: {
    marginBottom: "40px", // grid spacing(5) => 5 * 8px = 40px
  },
  anything: {
    minHeight: "500px",
  },
});

const PageThree = ({ selectedCountry, selectedDate, topics }) => {
  const classes = useStyles();

  const renderTopics = topics.map((topic, i) => {
    if (topic === "forex") {
      return (
        <Grid item key={`topic-${topic}-${i}`} className={classes.body}>
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
        <Grid item key={`topic-${topic}-${i}`} className={classes.body}>
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
        <Grid item key={`topic-${topic}-${i}`} className={classes.body}>
          <Subhed>Launchpad for More 'Anything'</Subhed>
          <Search term={`${selectedCountry.country}`} cap="5" />
        </Grid>
      );
    }

    return null;
  });

  return selectedCountry ? (
    <React.Fragment>
      {renderTopics.length > 0 ? (
        <div
          className={topics.indexOf("anything") > -1 ? classes.anything : ""}
        >
          <Container maxWidth="md" className={classes.break}>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              spacing={5}
            >
              {renderTopics}
            </Grid>
          </Container>
          <Divider variant="middle" className={(classes.body, classes.break)} />
        </div>
      ) : null}
      <Container maxWidth="md">
        <Typography variant="h5" className={classes.break}>
          We asked other people what journeys are on their minds. Here's a
          summary look of the "where" and the "when."
        </Typography>
        <Subhed>Where?</Subhed>
      </Container>
      <CountryResults
        surveyCountries={sampleCountries}
        selectedCountry={selectedCountry}
      />
      <Container maxWidth="md" className={(classes.body, classes.break)}>
        <Subhed>When?</Subhed>
        <DateResults surveyDates={sampleDates} selectedDate={selectedDate} />
      </Container>
      <Container maxWidth="md">
        <Grid container justify="space-between" spacing={5}>
          <Grid item>
            <NavLink to="/">
              <Button variant="contained">Choose another country</Button>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink to="/info">
              <Button variant="contained">Choose topics again</Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  ) : (
    <Container maxWidth="sm">
      <Grid container direction="column" justify="space-between" spacing={5}>
        <Grid item>
          <Typography variant="body1">
            Hi Traveler, kindly choose a country and a date.
          </Typography>
        </Grid>
        <Grid item>
          <NavLink to="/">
            <Button variant="contained">Choose a country</Button>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageThree;
