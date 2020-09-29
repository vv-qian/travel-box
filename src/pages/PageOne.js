import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import YearMonthPicker from "../components/YearMonthPicker";
import ComboBox from "../components/ComboBox";
import Link from "../components/Link";
import Question from "../components/Question";

const PageOne = ({
  countries,
  onSelectCountry,
  onSelectDate,
  currentDate,
  currentCountry,
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        spacing={5}
        className="page page_one"
      >
        <Grid item className="question">
          <Question text="When this time passes, which country would you travel to?" />
          <ComboBox
            options={countries}
            labelAccessor={"country"}
            defaultText="Choose a country"
            onInputChange={onSelectCountry}
            currentCountry={currentCountry}
          />
        </Grid>
        <Grid item className="question">
          <Question text="When's the earliest you think you would go?" />
          <YearMonthPicker
            onDateChange={onSelectDate}
            currentDate={currentDate}
          />
        </Grid>
        <Grid container item justify="space-between">
          <Grid item>
            <Link href="/info" className="navigate">
              <Button
                variant="contained"
                disabled={currentCountry === null || currentDate === null}
              >
                Continue
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/unbox" className="navigate">
              <Button
                variant="contained"
                disabled={currentCountry === null || currentDate === null}
              >
                Skip to end
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default PageOne;
