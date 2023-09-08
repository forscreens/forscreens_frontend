import * as React from 'react';
import { Box, Button, Grid, Container, TextField, Typography, Paper, Stepper, Step, StepLabel, FormControl, RadioGroup, FormControlLabel, Radio, InputLabel, MenuItem, Select } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

function ActorRegistration() {
  const [step, setStep] = React.useState(0);
  const steps = ['Personal Details', 'Professional Details', 'Review & Submit'];

  const [fieldType, setFieldType] = useState('text');
  const onFocus = () => {
    setFieldType('date');
  };
  const onBlur = (event) => {
    if (event.value === '') setFieldType('text');
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const validationSchema = Yup.object().shape({
    // Add your field validation here. Example:
    stageName: Yup.string().required('Required'),
    // ... more validations
  });

  const options = ['Male', 'Female', 'Prefer not to say'];
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container maxWidth="md" className="mt-5">
      <Typography variant="h4" align="center" gutterBottom style={{ color: '#4A90E2' }}>
        Actor Registration
      </Typography>
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          borderRadius: '15px',
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
            firstName: '',
            actingSkills: '',
            field3: '',
            field4: '',
            field5: '',
            field6: '',
            field7: '',
            field8: '',
            field9: '',
            field10: '',
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
                    <Field as={TextField} label="First name" placeholder="Enter first name" fullWidth required margin="normal" name="firstName" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Last Name" placeholder="Enter last name" fullWidth required margin="normal" name="actingSkills" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Email address" placeholder="Enter email address" fullWidth required margin="normal" name="field3" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Phone number" required placeholder="Enter phone number" fullWidth margin="normal" name="field4" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="normal" required>
                      <InputLabel id="gender-label">Gender</InputLabel>
                      <Select labelId="gender-label" id="gender-label" label="Gender" value={selectedOption} onChange={handleSelectChange}>
                        {options.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} onFocus={onFocus} onBlur={onBlur} type={fieldType} required label="Date of Birth" placeholder="Enter field 6" fullWidth margin="normal" name="field6" InputLabelProps={fieldType === 'date' ? { shrink: true } : ''} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Address" required placeholder="Enter street address" fullWidth margin="normal" name="field7" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Address line 2" required placeholder="Enter street address line 2" fullWidth margin="normal" name="field8" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required margin="normal">
                      <InputLabel>Country</InputLabel>
                      <Select>
                        <MenuItem value="America">America</MenuItem>
                        <MenuItem value="Japan">Japan</MenuItem>
                        <MenuItem value="India">India</MenuItem>
                        <MenuItem value="Nepal">Nepal</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="City" placeholder="Enter your city" required fullWidth margin="normal" name="field10" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Region" placeholder="Enter your region" required fullWidth margin="normal" name="field10" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Postal code" placeholder="Enter your postal code" required fullWidth margin="normal" name="field10" />
                  </Grid>
                </Grid>
              )}
              {step === 1 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Professional skill" placeholder="Enter Professional skill" fullWidth required margin="normal" name="stageName" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Skills" placeholder="Enter skills" required fullWidth margin="normal" name="actingSkills" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Appearance" placeholder="Enter appearance" required fullWidth margin="normal" name="field3" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Professional development" required placeholder="Enter Professional development " fullWidth margin="normal" name="field4" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Educational and training" required placeholder="Enter Educational and training" fullWidth margin="normal" name="field5" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Workspace skills" required placeholder="Enter workspace skills" fullWidth margin="normal" name="field6" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Career Advancement" placeholder="Enter Career Advancement" fullWidth margin="normal" name="field7" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Field 8" placeholder="Enter field 8" fullWidth margin="normal" name="field8" />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Field as={TextField} sx={{ height: '25%' }} label="About" placeholder="Enter about me" fullWidth margin="normal" name="field9" multiline rows={5} rowMax={10}/>
                  </Grid>
                </Grid>
              )}
              {step === 2 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Stage Name" placeholder="Enter stage name" fullWidth required margin="normal" value={''} name="fisrtName" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Acting Skills" placeholder="Enter acting skills" fullWidth margin="normal" name="actingSkills" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Field 3" placeholder="Enter field 3" fullWidth margin="normal" name="field3" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Field 4" placeholder="Enter field 4" fullWidth margin="normal" name="field4" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Field 5" placeholder="Enter field 5" fullWidth margin="normal" name="field5" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Field 6" placeholder="Enter field 6" fullWidth margin="normal" name="field6" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Field 7" placeholder="Enter field 7" fullWidth margin="normal" name="field7" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Field 8" placeholder="Enter field 8" fullWidth margin="normal" name="field8" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Field 9" placeholder="Enter field 9" fullWidth margin="normal" name="field9" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field as={TextField} label="Field 10" placeholder="Enter field 10" fullWidth margin="normal" name="field10" />
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
                    color="primary"
                    fullWidth
                    onClick={handlePrev}
                    style={{
                      color: 'white',
                      marginBottom: '10px',
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
                      color: 'white',
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
                      color: 'white',
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
