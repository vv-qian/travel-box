import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const ComboBox = ({ options, labelAccessor, defaultText, onInputChange }) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option[labelAccessor]}
      style={{ width: 300 }}
      onChange={(evt, value) => {
        if (value) {
          onInputChange(value);
        }
      }}
      renderInput={(params) => (
        <TextField {...params} label={defaultText} variant="outlined" />
      )}
    />
  );
};

export default ComboBox;
