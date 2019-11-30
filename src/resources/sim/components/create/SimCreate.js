import React, { Fragment } from "react";
import { Create, SimpleForm } from "react-admin";
import { makeStyles, Step, Stepper, StepLabel } from "@material-ui/core/";
import { steps, components } from "../../attrs";
import SimSaveToolbar from "./helpers/SimSaveToolbar";
import StepContents from "./helpers/StepContents";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const SimCreate = ({ ...rest }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  const now = moment();
  const until = moment(now).add(5, "years");

  return (
    <Create {...rest} {...components.create}>
      <SimpleForm
        toolbar={
          <SimSaveToolbar
            activeStep={activeStep}
            steps={steps}
            handleNext={() => handleNext()}
            handleBack={() => handleBack()}
            handleReset={() => handleReset()}
          />
        }
        defaultValue={{
          created: now,
          berlaku_hingga: until
        }}
      >
        <Fragment>
          <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <StepContents stepIndex={activeStep} />
        </Fragment>
      </SimpleForm>
    </Create>
  );
};

export default SimCreate;
