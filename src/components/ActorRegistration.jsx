import * as React from "react";
import {
  Box,
  Button,
  Grid,
  Container,
  TextField,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function ActorRegistration() {
  const [step, setStep] = React.useState(0);
  const steps = ["Personal Details", "Professional Details", "Review & Submit"];

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const validationSchema = Yup.object().shape({
    // Add your field validation here. Example:
    stageName: Yup.string().required("Required"),
    // ... more validations
  });

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ color: "#4A90E2" }}
      >
        Actor Registration
      </Typography>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          borderRadius: "15px",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        }}
      >
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Formik
          initialValues={{
            stageName: "",
            actingSkills: "",
            field3: "",
            field4: "",
            field5: "",
            field6: "",
            field7: "",
            field8: "",
            field9: "",
            field10: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // ... (rest of the code)
          }}
        >
          {(formik) => (
            <Form>
              {step === 0 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Stage Name"
                      placeholder="Enter stage name"
                      fullWidth
                      required
                      margin="normal"
                      name="stageName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Acting Skills"
                      placeholder="Enter acting skills"
                      fullWidth
                      margin="normal"
                      name="actingSkills"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 3"
                      placeholder="Enter field 3"
                      fullWidth
                      margin="normal"
                      name="field3"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 4"
                      placeholder="Enter field 4"
                      fullWidth
                      margin="normal"
                      name="field4"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 5"
                      placeholder="Enter field 5"
                      fullWidth
                      margin="normal"
                      name="field5"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 6"
                      placeholder="Enter field 6"
                      fullWidth
                      margin="normal"
                      name="field6"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 7"
                      placeholder="Enter field 7"
                      fullWidth
                      margin="normal"
                      name="field7"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 8"
                      placeholder="Enter field 8"
                      fullWidth
                      margin="normal"
                      name="field8"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 9"
                      placeholder="Enter field 9"
                      fullWidth
                      margin="normal"
                      name="field9"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 10"
                      placeholder="Enter field 10"
                      fullWidth
                      margin="normal"
                      name="field10"
                    />
                  </Grid>
                </Grid>
              )}
              {step === 1 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Stage Name"
                      placeholder="Enter stage name"
                      fullWidth
                      required
                      margin="normal"
                      name="stageName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Acting Skills"
                      placeholder="Enter acting skills"
                      fullWidth
                      margin="normal"
                      name="actingSkills"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 3"
                      placeholder="Enter field 3"
                      fullWidth
                      margin="normal"
                      name="field3"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 4"
                      placeholder="Enter field 4"
                      fullWidth
                      margin="normal"
                      name="field4"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 5"
                      placeholder="Enter field 5"
                      fullWidth
                      margin="normal"
                      name="field5"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 6"
                      placeholder="Enter field 6"
                      fullWidth
                      margin="normal"
                      name="field6"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 7"
                      placeholder="Enter field 7"
                      fullWidth
                      margin="normal"
                      name="field7"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 8"
                      placeholder="Enter field 8"
                      fullWidth
                      margin="normal"
                      name="field8"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 9"
                      placeholder="Enter field 9"
                      fullWidth
                      margin="normal"
                      name="field9"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 10"
                      placeholder="Enter field 10"
                      fullWidth
                      margin="normal"
                      name="field10"
                    />
                  </Grid>
                </Grid>
              )}
              {step === 2 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Stage Name"
                      placeholder="Enter stage name"
                      fullWidth
                      required
                      margin="normal"
                      name="stageName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Acting Skills"
                      placeholder="Enter acting skills"
                      fullWidth
                      margin="normal"
                      name="actingSkills"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 3"
                      placeholder="Enter field 3"
                      fullWidth
                      margin="normal"
                      name="field3"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 4"
                      placeholder="Enter field 4"
                      fullWidth
                      margin="normal"
                      name="field4"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 5"
                      placeholder="Enter field 5"
                      fullWidth
                      margin="normal"
                      name="field5"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 6"
                      placeholder="Enter field 6"
                      fullWidth
                      margin="normal"
                      name="field6"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 7"
                      placeholder="Enter field 7"
                      fullWidth
                      margin="normal"
                      name="field7"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 8"
                      placeholder="Enter field 8"
                      fullWidth
                      margin="normal"
                      name="field8"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 9"
                      placeholder="Enter field 9"
                      fullWidth
                      margin="normal"
                      name="field9"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Field 10"
                      placeholder="Enter field 10"
                      fullWidth
                      margin="normal"
                      name="field10"
                    />
                  </Grid>
                </Grid>
              )}
              {
                // Button is conditionally rendered. It checks if the current step is not the first step (step !== 0). If the condition is true, the "Previous" button is displayed. This ensures that the "Previous" button is not shown on the first step.
                //It checks if the current step is the last step by comparing the step value with steps.length - 1 (because array indices start at 0).
                //If the condition is true (meaning we're on the last step), the "Submit" button is rendered.
                //If the condition is false (meaning we're on any step other than the last), the "Next" button is rendered.
              }
              <Box mt={3}>
                {step !== 0 && (
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handlePrev}
                    style={{
                      background:
                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                      color: "white",
                      marginBottom: "10px",
                    }}
                  >
                    Previous
                  </Button>
                )}
                {step === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    style={{
                      background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                      color: "white",
                    }}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleNext}
                    style={{
                      background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                      color: "white",
                    }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}

export default ActorRegistration;
