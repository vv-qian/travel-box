import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "../components/Link";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";

const PageTwo = ({ country, onInfoSelect, topicOptions }) => {
  const [topics, setTopics] = useState([]);

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
      >
        {option.label}
      </ToggleButton>
    );
  });

  return (
    <div>
      <div className="question">
        <h4>
          To help kick off your travel, choose what topics you're interested in
          learning about {country.country}.
        </h4>
        <div className="info-select-container">
          <ToggleButtonGroup
            value={topics}
            onChange={onTopicChange}
            aria-label="topic selection"
          >
            {renderToggleButtons}
          </ToggleButtonGroup>
        </div>
        <Link href="/" className="navigate">
          <Button variant="contained">Go back</Button>
        </Link>
        <Link href="/unbox" className="navigate">
          <Button variant="contained">See results</Button>
        </Link>
      </div>
    </div>
  );
};

export default PageTwo;
