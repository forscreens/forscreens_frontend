import * as React from 'react';
import { Box, Button, Grid, Container, TextField, Typography, Paper, Stepper, Step, StepLabel, FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createActor } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function ActorRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    addressLine2: '',
    city: '',
    country: '',
    region: '',
    postalCode: '',
    professionalSkills: '',
    skills: '',
    appearance: '',
    professionalDevelopment: '',
    educationAndTraining: '',
    workspaceSkills: '',
    weight: '',
    height: '',
    userId: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [dateOfBirthError, setDateOfBirthError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [addressLine2Error, setAddressLine2Error] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [regionError, setRegionError] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState(false);
  const [firstNameErrorMsg, setFirstNameErrorMsg] = useState('');
  const [lastNameErrorMsg, setLastNameErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [phoneNumberErrorMsg, setPhoneNumberErrorMsg] = useState('');
  const [genderErrorMsg, setGenderErrorMsg] = useState('');
  const [dateOfBirthErrorMsg, setDateOfBirthErrorMsg] = useState('');
  const [addressErrorMsg, setAddressErrorMsg] = useState('');
  const [addressLine2ErrorMsg, setAddressLine2ErrorMsg] = useState('');
  const [countryErrorMsg, setCountryErrorMsg] = useState('');
  const [cityErrorMsg, setCityErrorMsg] = useState('');
  const [regionErrorMsg, setRegionErrorMsg] = useState('');
  const [postalCodeErrorMsg, setPostalCodeErrorMsg] = useState('');

  const [professionalSkills, setProfessionalSkills] = useState('');
  const [skills, setSkills] = useState('');
  const [appearance, setAppearance] = useState('');
  const [professionalDevelopment, setProfessionalDevelopment] = useState('');
  const [educationAndTraining, setEducationAndTraining] = useState('');
  const [workspaceSkills, setWorkspaceSkills] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const [professionalSkillsError, setProfessionalSkillsError] = useState(false);
  const [skillsError, setSkillsError] = useState(false);
  const [appearanceError, setAppearanceError] = useState(false);
  const [professionalDevelopmentError, setProfessionalDevelopmentError] = useState(false);
  const [educationAndTrainingError, setEducationAndTrainingError] = useState(false);
  const [workspaceSkillsError, setWorkspaceSkillsError] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [heightError, setHeightError] = useState(false);

  const [professionalSkillsErrorMsg, setProfessionalSkillsErrorMsg] = useState('');
  const [skillsErrorMsg, setSkillsErrorMsg] = useState('');
  const [appearanceErrorMsg, setAppearanceErrorMsg] = useState('');
  const [professionalDevelopmentErrorMsg, setProfessionalDevelopmentErrorMsg] = useState('');
  const [educationAndTrainingErrorMsg, setEducationAndTrainingErrorMsg] = useState('');
  const [workspaceSkillsErrorMsg, setWorkspaceSkillsErrorMsg] = useState('');
  const [weightErrorMsg, setWeightErrorMsg] = useState('');
  const [heightErrorMsg, setHeightErrorMsg] = useState('');

  const [step, setStep] = React.useState(0);
  const steps = ['Personal Details', 'Professional Details', 'Upload Image'];

  const handleNext = (event) => {
    var isError = false;

    event.preventDefault();

    if (step === 0) {
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setPhoneNumberError(false);
      setGenderError(false);
      setDateOfBirthError(false);
      setAddressError(false);
      setAddressLine2Error(false);
      setCityError(false);
      setRegionError(false);
      setPostalCodeError(false);

      if (firstName === '') {
        setFirstNameError(true);
        setFirstNameErrorMsg('First name is required');
        isError = true;
      }
      if (lastName === '') {
        setLastNameError(true);
        setLastNameErrorMsg('Last name is required');
        isError = true;
      }
      if (email === '') {
        setEmailError(true);
        setEmailErrorMsg('Email is required');
        isError = true;
      }

      if (phoneNumber === '') {
        setPhoneNumberError(true);
        setPhoneNumberErrorMsg('Phone number is required');
        isError = true;
      }

      if (gender === '') {
        setGenderError(true);
        setGenderErrorMsg('Gender is required');
        isError = true;
      }

      if (dateOfBirth === '') {
        setDateOfBirthError(true);
        setDateOfBirthErrorMsg('Date of birth is required');
        isError = true;
      }

      if (address === '') {
        setAddressError(true);
        setAddressErrorMsg('Address is required');
        isError = true;
      }

      if (addressLine2 === '') {
        setAddressLine2Error(true);
        setAddressLine2ErrorMsg('Address is required');
        isError = true;
      }

      if (country === '') {
        setCountryError(true);
        setCountryErrorMsg('Country is required');
        isError = true;
      }

      if (city === '') {
        setCityError(true);
        setCityErrorMsg('City is required');
        isError = true;
      }
      if (region === '') {
        setRegionError(true);
        setRegionErrorMsg('Region is required');
        isError = true;
      }
      if (postalCode === '') {
        setPostalCodeError(true);
        setPostalCodeErrorMsg('Postal code is required');
        isError = true;
      }
    } else if (step === 1) {
      setProfessionalSkillsError(false);
      setSkillsError(false);
      setAppearanceError(false);
      setProfessionalDevelopmentError(false);
      setProfessionalDevelopmentError(false);
      setEducationAndTrainingError(false);
      setWorkspaceSkillsError(false);
      setWeightError(false);
      setHeightError(false);

      if (professionalSkills === '') {
        setProfessionalSkillsError(true);
        setProfessionalSkillsErrorMsg('Professional skills is required');
        isError = true;
      }
      if (skills === '') {
        setSkillsError(true);
        setSkillsErrorMsg('Skills is required');
        isError = true;
      }
      if (appearance === '') {
        setAppearanceError(true);
        setAppearanceErrorMsg('Appearance is required');
        isError = true;
      }
      if (professionalDevelopment === '') {
        setProfessionalDevelopmentError(true);
        setProfessionalDevelopmentErrorMsg('Professional development is required');
        isError = true;
      }
      if (educationAndTraining === '') {
        setEducationAndTrainingError(true);
        setEducationAndTrainingErrorMsg('Education and training is required');
        isError = true;
      }
      if (workspaceSkills === '') {
        setWorkspaceSkillsError(true);
        setWorkspaceSkillsErrorMsg('Workspace skill is required');
        isError = true;
      }
      if (weight === '') {
        setWeightError(true);
        setWeightErrorMsg('Weight is required');
        isError = true;
      }
      if (height === '') {
        setHeightError(true);
        setHeightErrorMsg('height is required');
        isError = true;
      }
    }
    console.log(isError);
    if (!isError) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    console.log(imageUrl); // Check if the image URL is generated correctly
    setSelectedImage(imageUrl);
  };

  function createFormData() {
    formData.firstName = firstName;
    formData.lastName = lastName;
    formData.email = email;
    formData.phoneNumber = phoneNumber;
    formData.gender = gender;
    formData.dateOfBirth = dateOfBirth;
    formData.address = address;
    formData.addressLine2 = addressLine2;
    formData.country = country;
    formData.city = city;
    formData.region = region;
    formData.postalCode = postalCode;
    formData.professionalSkills = professionalSkills;
    formData.skills = skills;
    formData.appearance = appearance;
    formData.professionalDevelopment = professionalDevelopment;
    formData.educationAndTraining = educationAndTraining;
    formData.workspaceSkills = workspaceSkills;
    formData.weight = weight;
    formData.height = height;
    formData.image = selectedImage;
    formData.userId = '65099c4d6eca0779dc4384c8';
    setFormData({ ...formData });
  }

  const handleSubmit = () => {
    if (selectedImage == null) {
      toast.error('Profile image is required');
    } else {
      createFormData();
      createActor(formData)
        .then((result) => {
          console.log(result);
          if (result != null) {
            navigate('/home');
            toast.success('You have registered successfully!');
          }
        })
        .catch((err) => {
          console.log('error : ' + err.message);
          toast.error(err.message);
        });
    }
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
        <form>
          {step === 0 && (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="firstName" label="First name" name="firstName" type={'text'} value={firstName} autoComplete="fisrtName" autoFocus onChange={(e) => setFirstName(e.target.value)} error={firstNameError} helperText={firstNameError ? firstNameErrorMsg : ''} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" type={'text'} value={lastName} autoComplete="lastNameem" onChange={(e) => setLastName(e.target.value)} error={lastNameError} helperText={lastNameErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="email" label="Email" name="email" type={'email'} value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} error={emailError} helperText={emailErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="phoneNumber" label="Phone number" name="phoneNumber" type={'text'} value={phoneNumber} autoComplete="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} error={phoneNumberError} helperText={phoneNumberErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl margin="normal" required fullWidth error={genderError}>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select error={genderError} labelId="demo-simple-select-label" id="demo-simple-select" value={gender} onChange={(e) => setGender(e.target.value)} label="Gender">
                    <MenuItem value={'ACTOR'}>Male</MenuItem>
                    <MenuItem value={'DIRECTOR'}>Female</MenuItem>
                    <MenuItem value={'PRODUCER'}>Other</MenuItem>
                  </Select>
                  <FormHelperText>{genderError ? genderErrorMsg : ''}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="dateOfBirth" label="Date of birth" name="dateOfBirth" type={'date'} value={dateOfBirth} autoComplete="dateOfBirth" onChange={(e) => setDateOfBirth(e.target.value)} error={dateOfBirthError} helperText={dateOfBirthErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="address" label="Address" name="address" type={'text'} value={address} autoComplete="address" onChange={(e) => setAddress(e.target.value)} error={addressError} helperText={addressErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="addressLine2" label="Address Line2" name="addressLine2" type={'text'} value={addressLine2} autoComplete="addressLine2" onChange={(e) => setAddressLine2(e.target.value)} error={addressLine2Error} helperText={addressLine2ErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl margin="normal" required fullWidth error={countryError}>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select error={countryError} labelId="demo-simple-select-label" id="demo-simple-select" value={country} onChange={(e) => setCountry(e.target.value)} label="Country">
                    <MenuItem value="America">America</MenuItem>
                    <MenuItem value="Japan">Japan</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Nepal">Nepal</MenuItem>
                  </Select>
                  <FormHelperText>{countryError ? countryErrorMsg : ''}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="city" label="City" name="city" type={'text'} value={city} autoComplete="city" onChange={(e) => setCity(e.target.value)} error={cityError} helperText={cityErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="region" label="Region" name="region" type={'text'} value={region} autoComplete="region" onChange={(e) => setRegion(e.target.value)} error={regionError} helperText={regionErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="postalCode" label="Postal Code" name="postalCode" type={'text'} value={postalCode} autoComplete="postalCode" onChange={(e) => setPostalCode(e.target.value)} error={postalCodeError} helperText={postalCodeErrorMsg} />
              </Grid>
            </Grid>
          )}
          {step === 1 && (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="professionalSkills" label="Professional Skills" name="professionalSkills" type={'text'} value={professionalSkills} autoComplete="professionalSkills" autoFocus onChange={(e) => setProfessionalSkills(e.target.value)} error={professionalSkillsError} helperText={professionalSkillsErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="skills" label="skills" name="skills" type={'text'} value={skills} autoComplete="lastNameem" onChange={(e) => setSkills(e.target.value)} error={skillsError} helperText={skillsErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="appearance" label="Appearance" name="appearance" type={'text'} value={appearance} autoComplete="appearance" onChange={(e) => setAppearance(e.target.value)} error={appearanceError} helperText={appearanceErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="professionalDevelopment" label="Professional Development" name="professionalDevelopment" type={'text'} value={professionalDevelopment} autoComplete="professionalDevelopment" onChange={(e) => setProfessionalDevelopment(e.target.value)} error={professionalDevelopmentError} helperText={professionalDevelopmentErrorMsg} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="educationAndTraining" label="Education and Training" name="educationAndTraining" type={'text'} value={educationAndTraining} autoComplete="educationAndTraining" onChange={(e) => setEducationAndTraining(e.target.value)} error={educationAndTrainingError} helperText={educationAndTrainingErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="workspaceSkills" label="Workspace Skills" name="workspaceSkills" type={'text'} value={workspaceSkills} autoComplete="workspaceSkills" onChange={(e) => setWorkspaceSkills(e.target.value)} error={workspaceSkillsError} helperText={workspaceSkillsErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="weight" label="Weight in ( kg )" name="careerDevelopment" type={'text'} value={weight} autoComplete="weight" onChange={(e) => setWeight(e.target.value)} error={weightError} helperText={weightErrorMsg} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="height" label="Height in ( ft )" name="height" type={'text'} value={height} autoComplete="height" onChange={(e) => setHeight(e.target.value)} error={heightError} helperText={heightErrorMsg} />
              </Grid>
            </Grid>
          )}
          {step === 2 && (
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 4 }}>
              <input type="file" accept="image/*" id="image-input" onChange={handleImageChange} style={{ display: 'none' }} />
              <label htmlFor="image-input">
                <Button variant="contained" color="primary" component="span">
                  Choose Image
                </Button>
              </label>
              <br />
              {selectedImage && (
                <div style={{ overflow: 'hidden', height: '200px' }}>
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    style={{
                      maxWidth: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      height: '100%',
                    }}
                  />
                </div>
              )}
            </Container>
          )}
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
                onClick={handleSubmit}
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
                onClick={(event) => handleNext(event)}
                style={{
                  color: 'white',
                }}
              >
                Next
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default ActorRegistration;
