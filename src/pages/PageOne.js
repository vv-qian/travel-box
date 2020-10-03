import React from "react";
import { NavLink } from "react-router-dom";

import DateFnsUtils from "@date-io/date-fns";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import YearMonthPicker from "../components/YearMonthPicker";
import ComboBox from "../components/ComboBox";
import Subhed from "../components/Subhed";

const PageOne = ({
  countries,
  onSelectCountry,
  onSelectDate,
  currentDate,
  currentCountry,
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container direction="column" alignItems="flex-start" spacing={5}>
        <Grid item>
          <Subhed>
            When this time passes, which country would you travel to?
          </Subhed>
          <ComboBox
            options={countries}
            labelAccessor={"country"}
            defaultText="Choose a country"
            onInputChange={onSelectCountry}
            currentCountry={currentCountry}
          />
        </Grid>
        <Grid item>
          <Subhed>When's the earliest you think you would go?</Subhed>
          <YearMonthPicker
            onDateChange={onSelectDate}
            currentDate={currentDate}
          />
        </Grid>
        <Grid container item justify="space-between">
          <Grid item>
            <NavLink to="/info">
              <Button
                variant="contained"
                disabled={currentCountry === null || currentDate === null}
              >
                Continue
              </Button>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink to="/unbox">
              <Button
                variant="contained"
                disabled={currentCountry === null || currentDate === null}
              >
                Skip to end
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default PageOne;
