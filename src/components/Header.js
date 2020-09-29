import React from "react";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <div className="header" style={{ margin: "2rem 0", textAlign: "center" }}>
      <Typography
        variant="h3"
        component="h1"
        style={{
          display: "inline-block",
          letterSpacing: "0.3rem",
          color: "coral",
        }}
      >
        TRAVEL BOX.
      </Typography>
      <Typography
        variant="caption"
        component="span"
        style={{ color: "coral" }}
        gutterBottom
      >
        destination in mind
      </Typography>
    </div>
  );
};

export default Header;
