import React from "react";
import Typography from "@material-ui/core/Typography";

const Question = ({ text }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {text}
    </Typography>
  );
};

export default Question;
