import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Subhed from "../components/Subhed";

const topicButtonStyles = makeStyles(
  {
    root: {
      color: "rgba(0, 0, 0, 0.6)",
      borderRadius: "42px !important",
      border: "1px solid rgba(0, 0, 0, 0.12) !important",
      marginRight: "0.9rem",
      "&:hover": {
        backgroundColor: "rgba(255, 127, 80, 0.04)",
      },
      "&.Mui-selected": {
        backgroundColor: "rgba(255, 127, 80, 0.13)",
        "&:hover": {
          backgroundColor: "rgba(255, 127, 80, 0.2)",
        },
      },
      "&.Mui-focused": {
        backgroundColor: "rgba(255, 127, 80, 0.5)",
      },
    },
  },
  { name: "TopicToggleButton" }
);

const PageTwo = ({ country, onInfoSelect, topicOptions }) => {
  const [topics, setTopics] = useState([]);
  const classes = topicButtonStyles();

  const onTopicChange = (evt, newTopics) => {
    setTopics(newTopics);
    onInfoSelect(newTopics);
  };

  const renderToggleButtons = topicOptions.map((option, i) => {
    return (
      <ToggleButton
        key={`topic-option-${i}`}
        value={option.value}
        aria-label={option.label}
        classes={{ root: classes.root }}
      >
        {option.label}
      </ToggleButton>
    );
  });

  return (
    <Grid container direction="column" alignItems="flex-start" spacing={5}>
      <Grid item>
        <Subhed>
          To help kick off your travel, choose what topics you're interested in
          learning about {country.country}. Or, continue to see the results.
        </Subhed>
        <ToggleButtonGroup
          value={topics}
          onChange={onTopicChange}
          aria-label="topic selection"
        >
          {renderToggleButtons}
        </ToggleButtonGroup>
      </Grid>
      <Grid container item justify="space-between">
        <Grid item>
          <NavLink to="/unbox">
            <Button variant="contained">See results</Button>
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageTwo;
