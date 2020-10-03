import React, { useState } from "react";
import { Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { topicOptions, countries } from "./utils/data";

const App = () => {
  const [country, setCountry] = useState(null);
  const [date, setDate] = useState(null);
  const [info, setInfo] = useState([]);

  return (
    <HashRouter>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <Container maxWidth="sm">
              <PageOne
                countries={countries}
                onSelectCountry={setCountry}
                onSelectDate={setDate}
                currentDate={date}
                currentCountry={country}
              />
            </Container>
          )}
        />
        <Route
          path="/info"
          render={() => (
            <Container maxWidth="sm">
              <PageTwo
                country={country}
                onInfoSelect={setInfo}
                topicOptions={topicOptions}
              />
            </Container>
          )}
        />
        <Route
          path="/unbox"
          render={() => (
            <Container maxWidth="lg">
              <PageThree
                selectedCountry={country}
                selectedDate={date}
                topics={info}
              />
            </Container>
          )}
        />
      </Container>
    </HashRouter>
  );
};

export default App;
