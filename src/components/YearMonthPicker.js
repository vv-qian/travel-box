import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const YearMonthPicker = ({ onDateChange, currentDate }) => {
  const [selectedDate, setSelectedDate] = useState(currentDate);

  return (
    <DatePicker
      variant="inline"
      openTo="year"
      views={["year", "month"]}
      label="Choose a year and month"
      minDate={new Date()}
      value={selectedDate}
      style={{ width: 350 }}
      onChange={(date) => {
        setSelectedDate(date);
        onDateChange(date);
      }}
    />
  );
};

export default YearMonthPicker;
