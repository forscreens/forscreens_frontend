import React from 'react';
import { styled } from '@mui/system';
import { Button, Container, TextField, Typography, Grid, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
function SignUp() {
    const StyledContainer = styled(Container)(({ theme }) => ({
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }));    
  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>Registration Form</Typography>
      <form>
        <TextField label="Full Name" placeholder="Enter full name" fullWidth required margin="normal" />
        <TextField label="Email Address" placeholder="Enter email address" fullWidth required margin="normal" />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone Number" placeholder="Enter phone number" fullWidth required margin="normal" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="date" fullWidth required margin="normal" InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>
        <Typography variant="h6" align="left" gutterBottom>Gender</Typography>
        <RadioGroup row>
          <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
          <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
          <FormControlLabel value="other" control={<Radio color="primary" />} label="Prefer not to say" />
        </RadioGroup>
        <TextField label="Address" placeholder="Enter street address" fullWidth required margin="normal" />
        <TextField label="Address Line 2" placeholder="Enter street address line 2" fullWidth required margin="normal" />
        <Grid container spacing={3}>
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
            <TextField label="City" placeholder="Enter your city" fullWidth required margin="normal" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="Region" placeholder="Enter your region" fullWidth required margin="normal" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Postal Code" placeholder="Enter postal code" fullWidth required margin="normal" />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" fullWidth>Submit</Button>
      </form>
    </StyledContainer>
  );
}

export default SignUp;
