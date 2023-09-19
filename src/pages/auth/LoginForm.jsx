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
import { Container } from '@mui/material';
import { useState } from 'react';
import { loginUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doLogin } from '../../auth/authDetails';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

  const [authRequest, setAuthRequest] = useState({ username: '', password: '' });

  function createAuthRequest() {
    authRequest.username = email;
    authRequest.password = password;
    setAuthRequest({ ...authRequest });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == '') {
      setEmailError(true);
      setEmailErrorMsg('Email is required');
    }

    if (password == '') {
      setPasswordError(true);
      setPasswordErrorMsg('Password is required');
    }

    if (email && password) {
      console.log(email, password);
      createAuthRequest();
      console.log(authRequest);
      loginUser(authRequest)
        .then((result) => {
          console.log(result);
          doLogin(result, () => {
            console.log('Login details is saved into localstorage');
          });
          if (result != null) {
            navigate('/');
            toast.success('You have logged in successfully!');
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
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" value={email} autoComplete="email" autoFocus onChange={(e) => setEmail(e.target.value)} error={emailError} helperText={emailErrorMsg} />
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" value={password} id="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} error={passwordError} helperText={passwordErrorMsg} />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
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
export default LoginForm;
