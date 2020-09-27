import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "../components/Link";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";

const PageTwo = ({ country, onInfoSelect }) => {
  const [topics, setTopics] = useState([]);

  const onTopicChange = (evt, newTopics) => {
    setTopics(newTopics);
    onInfoSelect(newTopics);
  };

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
            <ToggleButton value="forex" aria-label="forex">
              Currency
            </ToggleButton>
            <ToggleButton value="holidays" aria-label="holidays">
              Holidays
            </ToggleButton>
            <ToggleButton value="anything" aria-label="anything">
              Anything
            </ToggleButton>
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
