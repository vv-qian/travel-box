import React, { useState, useEffect } from "react";
import { holidayHttp } from "../apis/http";
import { monthName } from "../utils/data";
import Typography from "@material-ui/core/Typography";

const Holidays = ({ isoAlpha2, year, month }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const retrieve = async () => {
      const { data } = await holidayHttp.get("/holidays", {
        params: {
          country: isoAlpha2,
          year: year,
          month: month,
        },
      });
      setResults(data.response.holidays);
    };

    retrieve();
  }, [isoAlpha2, year, month]);

  // TODO: apply styles using makeStyles
  const renderedList = results
    .slice(0, 5)
    .map(({ name, description, date }, i) => {
      const datestring = new Date(date.iso).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      return (
        <li key={`holiday-${i}`} className="holiday_item">
          <Typography
            variant="subtitle1"
            style={{ color: "black", fontWeight: 500 }}
          >
            {name}
          </Typography>
          <Typography variant="overline" display="block">
            {datestring}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ fontStyle: "italic" }}
          >
            {description}
          </Typography>
        </li>
      );
    });

  const renderedContent = () => {
    if (renderedList.length > 0) {
      return (
        <React.Fragment>
          <Typography variant="body1" gutterBottom>
            During some holidays, such as Ramadan, business operations and
            public etiquette significantly change. Here's a list of some
            holidays occurring in {monthName[month]} {year}:
          </Typography>
          <ul>{renderedList}</ul>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Typography variant="body1" gutterBottom>
            Looks like there aren't any holidays during {monthName[month]}{" "}
            {year}!
          </Typography>
        </React.Fragment>
      );
    }
  };

  return <div>{renderedContent()}</div>;
};

export default Holidays;
