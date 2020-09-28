import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const YearMonthPicker = ({ onDateChange, currentDate }) => {
  const [selectedDate, setSelectedDate] = useState(currentDate);

  return (
    <DatePicker
      variant="inline"
      openTo="year"
      views={["year", "month"]}
      label="Year and Month"
      minDate={new Date()}
      value={selectedDate}
      onChange={(date) => {
        setSelectedDate(date);
        onDateChange(date);
      }}
    />
  );
};

export default YearMonthPicker;
