import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Link from "../components/Link";
import Question from "../components/Question";

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
          backgroundColor: "rgba(255, 127, 80, 0.04)",
        },
      },
      "&.Mui-focused": {
        backgroundColor: "rgba(255, 127, 80, 0.13)",
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
        disableRipple
      >
        {option.label}
      </ToggleButton>
    );
  });

  return (
    <Grid container direction="column" alignItems="flex-start" spacing={5}>
      <Grid item className="question">
        <Question>
          To help kick off your travel, choose what topics you're interested in
          learning about {country.country}.
        </Question>
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
          <Link href="/unbox" className="navigate">
            <Button variant="contained">See results</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/" className="navigate">
            <Button variant="contained">Go back</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageTwo;
