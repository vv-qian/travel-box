import React, { useState, useEffect } from "react";
import axios from "axios";

const Forex = ({ currencyCode, currencyName }) => {
  const [results, setResults] = useState([]);
  const latest = new Date().getDate();

  // TODO: cache
  useEffect(() => {
    const retrieve = async () => {
      const { data } = await axios.get("http://api.currencylayer.com/live", {
        params: {
          access_key: "2be2df7519e3d3b50214076fe8ad1d76",
        },
      });
      setResults(data.quotes);
    };

    retrieve();
  }, [latest]);

  return (
    <div>
      Current exchange rates from the U.S. dollar to {currencyName} is
      {results[`USD${currencyCode}`]}.
    </div>
  );
};

export default Forex;
