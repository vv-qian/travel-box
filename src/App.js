import React, { useState } from "react";
import Route from "./components/Route";
import Header from "./components/Header";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { topicOptions, countries } from "./utils/data";

const App = () => {
  // TODO: change states to null
  const [country, setCountry] = useState(countries[0]);
  const [date, setDate] = useState(new Date());
  const [info, setInfo] = useState([]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Route path="/">
          <Container maxWidth="sm">
            <PageOne
              countries={countries}
              onSelectCountry={setCountry}
              onSelectDate={setDate}
              currentDate={date}
              currentCountry={country}
            />
          </Container>
        </Route>
        <Route path="/info">
          <Container maxWidth="sm">
            <PageTwo
              country={country}
              onInfoSelect={setInfo}
              topicOptions={topicOptions}
            />
          </Container>
        </Route>
        <Route path="/unbox">
          <Container maxWidth="lg">
            <PageThree
              selectedCountry={country}
              selectedDate={date}
              topics={info}
            />
          </Container>
        </Route>
      </Container>
    </React.Fragment>
  );
};

export default App;
