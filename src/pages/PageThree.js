import React from "react";
import CountryResults from "../components/CountryResults";
import DateResults from "../components/DateResults";
import Link from "../components/Link";
import Button from "@material-ui/core/Button";

import Search from "../components/Search";
import Holidays from "../components/Holidays";
import Forex from "../components/Forex";

// fake survey data
import { sampleCountries, sampleDates } from "../utils/data";

const PageThree = ({ selectedCountry, selectedDate, topics }) => {
  const renderTopics = topics.map((topic, i) => {
    if (topic === "anything") {
      return (
        <Search
          key={`topic-${topic}-${i}`}
          term={`${selectedCountry.country} country`}
        />
      );
    }

    if (topic === "holiday") {
      return (
        <Holidays
          key={`topic-${topic}-${i}`}
          isoAlpha2={selectedCountry.isoAlpha2}
          year={selectedDate.getFullYear()}
          month={selectedDate.getMonth() + 1}
        />
      );
    }

    if (topic === "forex") {
      return (
        <Forex
          currencyCode={selectedCountry.currency}
          currencyName={selectedCountry.currencyName}
        />
      );
    }

    return null;
  });

  return (
    <div>
      <CountryResults
        surveyCountries={sampleCountries}
        selectedCountry={selectedCountry}
      />
      <DateResults surveyDates={sampleDates} selectedDate={selectedDate} />
      <hr />
      <div>{renderTopics}</div>
      <Link href="/" className="navigate">
        <Button variant="contained">Pick again</Button>
      </Link>
    </div>
  );
};

export default PageThree;
