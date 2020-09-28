// ff630bf799ff0a562551a78bfe962dd8c6e00d69
import React, { useState, useEffect } from "react";
import axios from "axios";

const monthName = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const Holidays = ({ isoAlpha2, year, month }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const retrieve = async () => {
      const { data } = await axios.get(
        "https://calendarific.com/api/v2/holidays",
        {
          params: {
            api_key: "ff630bf799ff0a562551a78bfe962dd8c6e00d69",
            country: isoAlpha2,
            year: year,
            month: month,
          },
        }
      );
      setResults(data.response.holidays);
    };

    retrieve();
  }, [isoAlpha2, year, month]);

  const renderedList = results
    .slice(0, 3)
    .map(({ name, description, date }, i) => {
      const datestring = new Date(date.iso).toDateString();
      return (
        <div key={`holiday-${i}`} className="holiday_item">
          <div className="title">
            <div className="name">{name}</div>
            <div className="date"> on {datestring}</div>
          </div>
          <div className="description">{description}</div>
        </div>
      );
    });

  const renderedContent = () => {
    if (renderedList.length > 0) {
      return (
        <div>
          <div>
            Here's a list of some holidays happening in {monthName[month]}
            {year}:
          </div>
          <div>{renderedList}</div>
        </div>
      );
    } else {
      return (
        <div>
          Looks like there aren't any holidays during {monthName[month]} {year}!
        </div>
      );
    }
  };

  return <div>{renderedContent()}</div>;
};

export default Holidays;
