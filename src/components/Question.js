import React from "react";
import Typography from "@material-ui/core/Typography";

const Question = ({ children }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {children}
    </Typography>
  );
};

export default Question;
