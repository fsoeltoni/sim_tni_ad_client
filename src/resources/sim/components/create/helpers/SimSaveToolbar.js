import React, { Fragment } from "react";
import { Toolbar } from "react-admin";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  backButton: {
    marginRight: theme.spacing(1)
  }
}));

const SimSaveToolbar = ({
  activeStep,
  steps,
  handleNext,
  handleBack,
  handleReset,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Toolbar {...rest}>
      {activeStep === steps.length ? (
        <Fragment>
          <Button onClick={handleReset}>Reset</Button>
        </Fragment>
      ) : (
        <Fragment>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Fragment>
      )}
    </Toolbar>
  );
};

export default SimSaveToolbar;
