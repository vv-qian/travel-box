import React, { useState } from "react";
import Route from "./components/Route";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

const countries = [
  {
    country: "Norway",
    currency: "NOK",
    currencyName: "Norwegian krone",
    countryCode: "NOR",
  },
  {
    country: "Taiwan",
    currency: "TWD",
    currencyName: "New Taiwan dollar",
    countryCode: "TWN",
  },
  {
    country: "Turkey",
    currency: "TRY",
    currencyName: "Turkish lira",
    countryCode: "TUR",
  },
  {
    country: "Chile",
    currency: "CLP",
    currencyName: "Chilean Peso",
    countryCode: "CHL",
  },
];

const App = () => {
  const [country, setCountry] = useState(countries[0]);
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
        />
      </Route>
      <Route path="/info">
        <PageTwo country={country} onInfoSelect={setInfo} />
      </Route>
      <Route path="/unbox">
        <PageThree />
      </Route>
    </div>
  );
};

export default App;
