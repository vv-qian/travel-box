import React from "react";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";

const ButtonRouter = ({ path, actionText }) => {
  return (
    <Route
      render={({ history }) => (
        <Button
          variant="contained"
          onClick={() => {
            history.push(path);
          }}
        >
          {actionText}
        </Button>
      )}
    />
  );
};

export default ButtonRouter;
