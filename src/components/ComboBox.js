import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const ComboBox = ({
  options,
  labelAccessor,
  defaultText,
  onInputChange,
  currentCountry,
}) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option[labelAccessor]}
      style={{ width: 350 }}
      onChange={(evt, value) => {
        if (value) {
          onInputChange(value);
        }
      }}
      value={currentCountry ? currentCountry : null}
      renderInput={(params) => (
        <TextField {...params} label={defaultText} variant="outlined" />
      )}
    />
  );
};

export default ComboBox;
