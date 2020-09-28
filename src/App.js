import React, { useState } from "react";
import Route from "./components/Route";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

import { topicOptions, countries } from "./utils/data";

const App = () => {
  const [country, setCountry] = useState(null);
  const [date, setDate] = useState(new Date());
  const [info, setInfo] = useState([]);

  return (
    <div>
      <div>
        <h1>TRAVEL BOX.</h1>
        <h4>vacations in mind</h4>
      </div>
      <Route path="/">
        <PageOne
          countries={countries}
          onSelectCountry={setCountry}
          onSelectDate={setDate}
          currentDate={date}
          currentCountry={country}
        />
      </Route>
      <Route path="/info">
        <PageTwo
          country={country}
          onInfoSelect={setInfo}
          topicOptions={topicOptions}
        />
      </Route>
      <Route path="/unbox">
        <PageThree
          selectedCountry={country}
          selectedDate={date}
          topics={info}
        />
      </Route>
    </div>
  );
};

export default App;
