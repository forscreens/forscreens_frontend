import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { createUser, loginUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doLogin } from '../../auth/authDetails';

const SignUp = () => {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
    setValidationError(false);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [roleErrorMsg, setRoleErrorMsg] = useState('');

  const [userRequest, setUserRequest] = useState({ firstName: '', lastName: '', email: '', password: '', role: '', mobile: '' });

  function createUserRequest() {
    userRequest.firstName = name;
    userRequest.lastName = name;
    userRequest.email = email;
    userRequest.password = password;
    userRequest.role = role;
    userRequest.mobile = "9826567178";
    setUserRequest({ ...userRequest });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setRoleError(false);

    if (!rememberMe) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }

    if (name === '') {
      setNameError(true);
      setNameErrorMsg('Name is required');
    }

    if (email === '') {
      setEmailError(true);
      setEmailErrorMsg('Email is required');
    }

    if (password === '') {
      setPasswordError(true);
      setPasswordErrorMsg('Password is required');
    }

    if (role === '') {
      setRoleError(true);
      setRoleErrorMsg('Role is required');
    }

    if (name && email && password && role) {
      console.log(email, password);
      createUserRequest();
      console.log(userRequest);
      createUser(userRequest)
        .then((result) => {
          console.log(result);
          if (result != null) {
            navigate('/login');
            toast.success('You have signup successfully!');
          }
        })
        .catch((err) => {
          console.log('error : ' + err.message);
          toast.error(err.message);
        });
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="name" label="Name" name="name" type={'text'} value={name} autoComplete="name" autoFocus onChange={(e) => setName(e.target.value)} error={nameError} helperText={nameErrorMsg} />
                <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" type={'email'} value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} error={emailError} helperText={emailErrorMsg} />
                <TextField margin="normal" required fullWidth name="password" label="Password" type={'password'} value={password} id="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} error={passwordError} helperText={passwordErrorMsg} />
                <FormControl margin="normal" required fullWidth error={roleError}>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select error={roleError} labelId="demo-simple-select-label" id="demo-simple-select" value={role} onChange={(e) => setRole(e.target.value)} label="Role">
                    <MenuItem value={'ACTOR'}>Actor</MenuItem>
                    <MenuItem value={'DIRECTOR'}>Director</MenuItem>
                    <MenuItem value={'PRODUCER'}>Producer</MenuItem>
                  </Select>
                  <FormHelperText>{roleError ? roleErrorMsg : ''}</FormHelperText>
                </FormControl>
                <FormControl required error={validationError} component="fieldset">
                  <FormControlLabel control={<Checkbox checked={rememberMe} onChange={handleCheckboxChange} color="primary" onBlur={(e) => setRememberMe(e.target.value)} />} label="Terms & Conditions" />
                  <FormHelperText>{validationError ? 'Please check "Remember me"' : ''}</FormHelperText>
                </FormControl>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Signup
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/login" variant="body2">
                      {' Already have an acount? Log in'}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default SignUp;
