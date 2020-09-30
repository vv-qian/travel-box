import React, { useState, useEffect } from "react";
import numberWithCommas from "../utils/numberWithCommas";
import { forexHttp } from "../apis/http";

const Forex = ({ currencyCode, currencyName }) => {
  const [results, setResults] = useState([]);
  const latest = new Date().getDate();

  // TODO: cache these by hour
  useEffect(() => {
    const retrieve = async () => {
      const { data } = await forexHttp.get("/live");
      setResults(data.quotes);
    };

    retrieve();
  }, [latest]);

  return (
    <React.Fragment>
      <div>
        The current U.S. dollar to {currencyName} exchange rate is{" "}
        {results[`USD${currencyCode}`]}, meaning $100 would convert to{" "}
        {numberWithCommas((results[`USD${currencyCode}`] * 100).toFixed(2))}{" "}
        {currencyName}.
      </div>
    </React.Fragment>
  );
};

export default Forex;
