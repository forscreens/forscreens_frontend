import * as React from 'react';
import { Box, Button, Grid, Container, TextField, Typography, Paper, Stepper, Step, StepLabel, FormControl, InputLabel, MenuItem, Select, FormHelperText, FormControlLabel, Radio } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createActor } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../../auth/authDetails';

function ActorRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    profileImage: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [placeHolder, setPlaceHolder] = useState(null);


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
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
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState('');
  const [userName, setUserNameErrorMsg] = useState('');
  const [userNameError, setUserNameError] = useState('');
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
      setPasswordError(false);
      setCountryError(false);
      setPhoneNumberError(false);
      setGenderError(false);
      setDateOfBirthError(false);
      setPasswordError(false);
      setConfirmPasswordError(false);
     setPostalCodeError(false)

      if (email === '') {
        setEmailError(true);
        setEmailErrorMsg('Email is required');
        isError = true;
      }

      if (password === '') {
        setPasswordError(true);
        setPasswordErrorMsg('Password is required');
        isError =     true;
      }
      if (confirmPassword === '') {
        setConfirmPasswordError(true);
        setConfirmPasswordErrorMsg('Confirm Password is required');
        isError =     true;
      }
      if (userName === '') {
        setUserNameError(true);
        setUserNameErrorMsg('Username is required');
        isError = true;
      }

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
      

     


      if (country === '') {
        setCountryError(true);
        setCountryErrorMsg('Country is required');
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
    // const file = e.target.files[0];
    // const imageUrl = URL.createObjectURL(file);
    // console.log(imageUrl); // Check if the image URL is generated correctly
    // setSelectedImage(imageUrl);
    // setPlaceHolder(e.target.result);

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        const imageDataUrl = e.target.result;
        setSelectedImage(imageDataUrl);
        setPlaceHolder(imageDataUrl); // Pass the data URL to a callback
      };
      console.log(placeHolder);
      reader.readAsDataURL(file);
    }

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
    formData.profileImage = placeHolder;
    formData.userId = getUserId();
    setFormData({ ...formData });
  }

  const handleSubmit = () => {
    if (selectedImage == null) {
      toast.error('Profile image is required');
    } else {
      createFormData();
      createActor(formData)
        .then((result) => {
            localStorage.setItem("isActorCreated", true);
            navigate('/');
            toast.success('You have registered successfully!');
        })
        .catch((err) => {
          localStorage.setItem("isActorCreated", false);
          console.log('error : ' + err.message);
          toast.error(err.message);
        });
    }
  };

  return (
    <Container maxWidth="md" className="mt-5 mb-3">
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
            <Grid container spacing={2} mt={1} >
              <Grid item xs={12} sm={12} >
                <span >Email Address</span>
                <TextField className='mt-2 bg-light' margin="normal" placeholder='Email Address' size="small" required fullWidth id="email" name="email" type={'email'} value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} error={emailError} helperText={emailErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <span>First Name</span>
                <TextField className='mt-2 bg-light' margin="normal" placeholder='First Name' size="small" required fullWidth id="firstName"  name="firstName" type={'text'} value={firstName} autoComplete="firstName" autoFoucs onChange={(e) => setFirstName(e.target.value)} error={firstNameError} helperText={firstNameError ? firstNameErrorMsg : ''} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <span>Last Name</span>
                <TextField className='mt-2 bg-light' margin="normal" placeholder='Last Name' size="small" required fullWidth id="lastName" name="lastName" type={'text'} value={lastName} autoComplete="lastName" onChange={(e) => setLastName(e.target.value)} error={lastNameError} helperText={lastNameErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <span>Country</span>
              <FormControl className='mt-2 bg-light ' margin="normal"  size="small" required fullWidth error={countryError}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
                   <Select error={countryError} Id="demo-simple-select-label" id="demo-simple-select" value={country} onChange={(e) => setCountry(e.target.value)} >
                    <MenuItem value="America">America</MenuItem>
                    <MenuItem value="Japan">Japan</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Nepal">Nepal</MenuItem>
                  </Select>
                  <FormHelperText>{countryError ? countryErrorMsg : ''}</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <span>Postal Code</span>
                <TextField className='h-2 mt-2 bg-light' margin="normal" placeholder='Postal Code' size="small" required fullWidth id="postalCode"  name="postalCode" type={'text'} value={postalCode} autoComplete="postalCode" onChange={(e) => setPostalCode(e.target.value)} error={postalCodeError} helperText={postalCodeErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <span>Date of Birth</span>
                <TextField className='h-2 mt-2 bg-light' margin="normal" placeholder='Bate Of Birth' size="small" required fullWidth id="dateOfBirth"  name="dateOfBirth" type={'text'} value={postalCode} autoComplete="postalCode" onChange={(e) => setDateOfBirth(e.target.value)} error={dateOfBirthError} helperText={dateOfBirthErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='d-grid'>
                   <span>Gender</span>
                  <div className='d-flex'>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </div>
                  </div>
                  
              </Grid>
              <Grid item xs={12} sm={6}>
                  <span> Phone Number</span>
                <TextField className='h-2 mt-2 bg-light' margin="normal" placeholder='Phone Number' size="small" required fullWidth id="phonrNumber"  name="phoneNumber" type={'text'} value={phoneNumber} autoComplete="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} error={phoneNumberError} helperText={phoneNumberErrorMsg} />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <span> OTP</span>
                <TextField className='h-2 mt-2 bg-light' margin="normal" placeholder='OTP' size="small" required fullWidth id="otp"  name="otp" type={'text'} value={"otp"} autoComplete="otp"  />
              </Grid>
            

             
             
            </Grid>
          )}
          {step === 1 && (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField margin="normal" required fullWidth id="professionalSkills" label="Professional Skills" name="professionalSkills" type={'text'} value={professionalSkills} autoComplete="professionalSkills" autoFocus onChange={(e) => setProfessionalSkills(e.target.value)} error={professionalSkillsError} helperText={professionalSkillsErrorMsg} />
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
