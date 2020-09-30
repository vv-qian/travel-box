import React from "react";
import Typography from "@material-ui/core/Typography";

const Subhed = ({ children }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {children}
    </Typography>
  );
};

export default Subhed;
