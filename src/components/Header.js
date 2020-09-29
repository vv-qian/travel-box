import React from "react";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <div className="header">
      <Typography variant="h3" component="h1">
        TRAVEL BOX.
      </Typography>
      <Typography variant="caption" component="span" gutterBottom>
        destination in mind
      </Typography>
    </div>
  );
};

export default Header;
