import React, { useState, useEffect } from 'react'
import './ProfileP.css'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Select, Grid, InputLabel, MenuItem, TextField, useMediaQuery, useTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Margin, Padding } from '@mui/icons-material';
import { getActor, updateActor } from '../../services/authService';
import { toast } from 'react-toastify';
import { getUserId } from '../../auth/authDetails';



function ProfilePages() {



  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  const [openAppearance, setOpenAppearance] = useState(false);
  const [actor, setActor] = useState([]);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [professionalSkills, setProfessionalSkills] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    professionalSkills: '',
    actorId: '',
  });

  function createFormData() {
    formData.firstName = firstName;
    formData.lastName = lastName;
    formData.address = address;
    formData.city = city;
    formData.country = country;
    formData.professionalSkills = professionalSkills;
    formData.actorId = actor.id;
    setFormData({ ...formData });
  }

  // const [appearanceData, setAppearanceData] = useState({
  //   ageRange: '',
  //   ethnicities:  '',
  //   height: '',
  //   weight: '',
  //   build: '',
  //   hair: '',
  //   eyes: '',
   
  // });

  // function createAppearanceData() {
  //   appearanceData.ageRange = ageRange;
  //   appearanceData.ethnicities = ethnicities;
  //   appearanceData.height = height;
  //   appearanceData.weight = weight;
  //   appearanceData.build = build;
  //   appearanceData.hair = hair;
  //   appearanceData.eyes = eyes;
  //   setAppearanceData({...appearanceData});

  // }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenAppearance = () => {
    setOpenAppearance(true);
  };

  const handleCloseAppearance = () => {
    setOpenAppearance(false);
  };

  const handleSave = () => {
    setOpen(false);
    createFormData();
    console.log(formData);
    updateActor(formData) .then((data) => {
      window.location.reload();
      toast.success("Update Successfully");
    })
    
    .catch((err) => {
      console.log('error : ' + err.message);
      toast.error(err.message);
    });
  };

  // Appearance Data Update

  const handleSaveAppearance = () => {
    setOpenAppearance(false);
    createFormData();
    console.log(formData);
    updateActor(formData) .then((data) => {
      window.location.reload();
      toast.success("Update Successfully");
    })
    
    .catch((err) => {
      console.log('error : ' + err.message);
      toast.error(err.message);
    });
  };


  useEffect(() => {
    getActor(getUserId()).then((data) => {
      console.log(data);
      setActor(data);
    })
      .catch((err) => {
        console.log('error : ' + err.message);
        toast.error(err.message);
      });
  }, []);

  return (
    <div className='container p-2'>
      <div className='top row justify-content-between d-flex m-2 shadow-lg rounded-3'>
        <div className='left-top-progress col-md-5 p-2 d-grid'>
          <div className='col-12'>Your Profile Strength: 5/10</div>
          <div className='col-12'><div class="progress bg-primary">
            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div></div>
        </div>
        <div className='right-top-progress col-md-7 p-2 d-grid'>
          <div col-12 className='d-flex justify-content-center text-center' > Lorem ipsum dolor loribus. Voluptatum at evenilo quibusdam alias quam. </div>
          <div col-12 className='d-flex justify-content-center m-3'>
            <button className='button1'>+ Credits</button>
            <button className='button1'>+ Skills</button>
            <button className='button1'>+ Photo</button></div>
        </div>

      </div>
      <div className=' middle row  justify-content-between d-flex m-2 p-4'>
        <div className='left-middle col-md-8 p-2 d-flex '>
          <div className=''>
            <img className='image' src={actor.profileImage} />
            <p className='small'>Upload photo</p>
          </div>
          <div className='px-3'>
            <h4>{actor.firstName + " " + actor.lastName}   <Button color="primary" onClick={handleClickOpen}>
              <EditIcon color="primary" style={{ fontSize: '130%' }} />
            </Button></h4>
            <p style={{ marginBottom: '0rem' }}>{actor.professionalSkills}, {actor.address}, {actor.city}, {actor.country}</p>
            <p>Male , he/him </p>
          </div>
        </div>
        <div className='right-middle col-md-4 p-2'>
          <div className='right-middle-contant'>
            <h5>Edit Contact Information</h5>
            <p>Lorem ipsum eligendi eum commodi ratione amet provident voluptates pariatur nemo ad neque obcaecati vero mollitia optio velit nisi?</p>
          </div>
        </div>
      </div>
      <div className=' justify-content-center d-flex align-items-center m-2 rounded-2' style={{ minHeight: '35px', backgroundColor: ' rgb(216, 215, 215)' }}>
        <button className='button2'>Details</button>
        <button className='button2'>Media</button>
        <button className='button2'>Highlights</button>

      </div>
      <div className='row px-2 d-flex m-2 mt-4 text-center justify-content-center align-items-center'>
        <div className='col-md-12 shadow-lg rounded-3 w-75 align-middle'>
          Lorem ipsum doudantium tempore minus, perferendis adipisci corporis?
        </div>
      </div>
      <div className='down row d-flex justify-content-center m-2'>
        <div className='d-flex left-down col-md-4 p-2 justify-content-center m-2'>
          <div className='row text-center justify-content-center p-2 shadow-lg rounded-3'>
            <img className='p-2 shadow-lg ' src='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' />
            <h6 className=''>Website /Social Media</h6>
          </div>
        </div>
        <div className='d-flex right-down col-md-7 p-2 justify-content-center m-2'>
          <div className='row justify-content-center'>
            <div className='mini-div1 col-12 m-2 shadow-lg rounded-3 d-flex justify-content-between'>
              <h6><b>About me</b></h6>
              <Button color="primary"  >
                <EditIcon color="primary" style={{ fontSize: '130%' }} />
              </Button>
            </div>
            <div className='mini-div2 col-12 m-2 shadow-lg rounded-3  '>
            <div className='d-flex justify-content-between'> 
              <h6><b>Appearance</b></h6>
              <Button color="primary" onClick={handleClickOpenAppearance} >
                <EditIcon color="primary" style={{ fontSize: '130%' }} />
              </Button>
              </div>
              <div className='d-flex justify-content-between' >
              <div className='d-grid'>
                <span style={{ marginBottom: '0rem' }}>Age Range     :  36-45 </span>
                <span style={{ marginBottom: '0rem' }}>Ethmnicities  :  Indian</span>
                <span style={{ marginBottom: '0rem' }}>Height        :  6"</span>
                <span style={{ marginBottom: '0rem' }}>Weight        :  187Ibs / 180cm</span>
                <span style={{ marginBottom: '0rem' }}>Build         :  3Curvy</span>
                <span style={{ marginBottom: '0rem' }}>Hair:         :  Golden </span>
                <span style={{ marginBottom: '0rem' }}>Eyes          :  Brownn</span>
              </div>
              </div>
            </div>
            <div className='mini-div3 col-12 m-2 shadow-lg rounded-3  d-flex justify-content-between'>
            <h6><b>Professional Sills</b></h6>
              <Button color="primary"  >
                <EditIcon color="primary" style={{ fontSize: '130%' }} />
              </Button>
              </div>
            <div className='mini-div4 col-12 m-2 shadow-lg rounded-3  d-flex justify-content-between'>
            <h6><b>Skills</b></h6>
              <Button color="primary"  >
                <EditIcon color="primary" style={{ fontSize: '130%' }} />
              </Button>
            </div>
            <div className='mini-div4 col-12 m-2 shadow-lg rounded-3  d-flex justify-content-between'>
            <h6><b>Credits</b></h6>
              <Button color="primary"  >
                <EditIcon color="primary" style={{ fontSize: '130%' }} />
              </Button>
            </div>
            <div className='mini-div4 col-12 m-2 shadow-lg rounded-3  d-flex justify-content-between'>
            <h6><b>Education & Training</b></h6>
              <Button color="primary"  >
                <EditIcon color="primary" style={{ fontSize: '130%' }} />
              </Button>
            </div>

          </div>

        </div>
      </div>
      <Grid>
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={fullScreen ? 'sm' : 'sm'}>
          <DialogTitle>Personal Details</DialogTitle>
          <DialogContent>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              autoComplete="fisrtName" autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              margin="dense"
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              margin="dense"
            />
            <TextField
              label="Professional Skills"
              variant="outlined"
              fullWidth
              value={professionalSkills}
              onChange={(e) => setProfessionalSkills(e.target.value)}
              margin="dense"
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              margin="dense"
            />
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
              margin="dense"
            />
            <FormControl margin="normal" fullWidth >
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={country} onChange={(e) => setCountry(e.target.value)} label="Country">
                <MenuItem value={'INDIA'}>India</MenuItem>
                <MenuItem value={'AMERICA'}>America</MenuItem>
                <MenuItem value={'JAPAN'}>Japan</MenuItem>
                <MenuItem value={'NEPAL'}>Nepal</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>

      <Grid>
        <Dialog open={openAppearance} onClose={handleCloseAppearance} fullWidth={true} maxWidth={fullScreen ? 'sm' : 'sm'}>
          <DialogTitle>Apprearance Details</DialogTitle>
          <DialogContent>
            <div className='d-flex gap-3'>
            <TextField
              label="Minimum Age"
              variant="outlined"
              fullWidth
              autoComplete="minimumAge" autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              margin="dense"
            />
            <TextField
              label="Maximum Age"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              margin="dense"
            />
            </div>
            <FormControl margin="normal" fullWidth >
              <InputLabel id="demo-simple-select-label">Select Ethnicity</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={country} onChange={(e) => setCountry(e.target.value)} label="Country">
                <MenuItem value={'INDIA'}></MenuItem>
                <MenuItem value={'AMERICA'}>America</MenuItem>
                <MenuItem value={'JAPAN'}>Japan</MenuItem>
                <MenuItem value={'NEPAL'}>Nepal</MenuItem>
              </Select>
            </FormControl>
            <div className='d-flex gap-3'>
            <TextField
              label="Feet"
              variant="outlined"
              fullWidth
              
              onChange={(e) => setAddress(e.target.value)}
              margin="dense"
            />
            <TextField
              label="Inches"
              variant="outlined"
              fullWidth
              
              onChange={(e) => setCity(e.target.value)}
              margin="dense"
            />
            </div>
             <TextField
              label="Weight"
              variant="outlined"
              fullWidth
              
              onChange={(e) => setCity(e.target.value)}
              margin="dense"
            />
            <FormControl margin="normal" fullWidth >
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={country} onChange={(e) => setCountry(e.target.value)} label="Country">
                <MenuItem value={'INDIA'}>Light, pale white</MenuItem>
                <MenuItem value={'AMERICA'}>White, fair</MenuItem>
                <MenuItem value={'JAPAN'}>Medium white to light brown</MenuItem>
                <MenuItem value={'NEPAL'}>Olive, moderate brown</MenuItem>
                <MenuItem value={'NEPAL'}>Brown, dark brown</MenuItem>
                <MenuItem value={'NEPAL'}>Very dark brown to black</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal" fullWidth >
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={country} onChange={(e) => setCountry(e.target.value)} label="Country">
                <MenuItem value={'BLACK HAIR'}>Black hair</MenuItem>
                <MenuItem value={'NATURAL BLACK HAIR'}>Natural black hair</MenuItem>
                <MenuItem value={'DARK BROWN HAIR'}>Dark brown hair</MenuItem>
                <MenuItem value={'MEDIUM BROWN HAIR'}>Medium brown hair</MenuItem>
                <MenuItem value={'TITIAN HAIR'}>Titian hair</MenuItem>
                <MenuItem value={'COPPER HAIR'}>Copper hair</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal" fullWidth >
              <InputLabel id="demo-simple-select-label">Eye Color</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={country} onChange={(e) => setCountry(e.target.value)} label="Country">
                <MenuItem value={'AMBER'}>Amber</MenuItem>
                <MenuItem value={'BROWN'}>Brown</MenuItem>
                <MenuItem value={'BLUE'}>Blue</MenuItem>
                <MenuItem value={'GRAY'}>Gray</MenuItem>
                <MenuItem value={'GREEN'}>Green</MenuItem>
                <MenuItem value={'HAZEL'}>Hazel</MenuItem>
                <MenuItem value={'RED'}>Red</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAppearance} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSaveAppearance} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>

    </div>

  )
}

export default ProfilePages;