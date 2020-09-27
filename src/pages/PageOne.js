import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import YearMonthPicker from "../components/YearMonthPicker";
import ComboBox from "../components/ComboBox";
import Link from "../components/Link";
import Button from "@material-ui/core/Button";

const PageOne = ({ countries, onSelectCountry, onSelectDate }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <div className="question">
          <h5>When this time passes, which country would you travel to?</h5>
          <ComboBox
            options={countries}
            labelAccessor={"country"}
            defaultText="Choose a country"
            onInputChange={onSelectCountry}
          />
        </div>
        <div className="question">
          <h5>When's the earliest you think you would go?</h5>
          <YearMonthPicker onDateChange={onSelectDate} />
          <Link href="/unbox" className="navigate">
            <Button variant="contained">Skip to end</Button>
          </Link>
          or,
          <Link href="/info" className="navigate">
            <Button variant="contained">Continue</Button>
          </Link>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default PageOne;
