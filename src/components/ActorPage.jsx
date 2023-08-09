import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Button, TextField, AppBar, Toolbar, Typography, Avatar, Tabs, Tab, Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import styles from './ActorPageBackground.module.css';


function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(null);
    const [selectedTab, setSelectedTab] = useState(0);
    const formik = useFormik({
        initialValues: {
            aboutMe: '',
            // ... other initial values
        },
        onSubmit: values => {
            console.log(values);
        },
    });
    const { setValues } = formik;

    useEffect(() => {
        fetch('/path/to/api')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUserData(data);
                setValues(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
                // Set default values if fetch fails
                setUserData({
                    name: 'Default Name',
                    details: 'Default Details',
                    passportPhoto: '', // link to some default image or leave as an empty string
                    aboutMe: 'Default About Me',
                    appearance: 'Default Appearance',
                    professionalskills: 'Default Professional Skills',
                    skills: 'Default Skills',
                    credits: 'Default Credits',
                    educationandtraining: 'Default Education And Training',
                    websites: 'https://default-website-link.com'
                    // ... any other default values you might want
                });
            });
    }, [setValues]);


    if (!userData) return <div>Loading...</div>;

    return (
        <div>
            <Box
                marginTop={2}
                marginBottom={3}
                sx={{
                    borderRadius: '16px',
                    padding: 2,
                    background: 'rgba(173, 216, 230, 0.1)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'

                }}
            >
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        {/* 10% for Photo */}
                        <Box sx={{ width: '10%', display: 'flex', justifyContent: 'flex-start' }}>
                            <Avatar alt="User Photo" src={userData.passportPhoto} sx={{ width: 60, height: 60 }} />
                        </Box>

                        {/* 50% for Text */}
                        <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="h6" align="center">
                                {userData.name}
                            </Typography>
                            <Typography variant="subtitle1" align="center">
                                {userData.details}
                            </Typography>
                            <Typography variant="subtitle2" align="center">
                                {userData.thirdDetail}
                            </Typography>
                        </Box>

                        {/* Edit Info at the end */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <IconButton onClick={() => setIsEditing(!isEditing)}>
                                <EditIcon />
                            </IconButton>
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>

            <Box marginBottom={3}
                sx={{
                    borderRadius: '16px',
                    padding: 2,
                    background: 'rgba(173, 216, 230, 0.1)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
            >
                <Box my={2} px={1}>
                    <Tabs value={selectedTab} onChange={(event, newValue) => setSelectedTab(newValue)} textColor="inherit" indicatorColor="primary" centered>
                        <Tab label="Details" sx={{
                            textTransform: 'none',
                            minWidth: 72,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.2)',
                            },
                            '&$selected': {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                            },
                        }} />
                        <Tab label="Media" sx={{
                            textTransform: 'none',
                            minWidth: 72,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.2)',
                            },
                            '&$selected': {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                            },
                        }} />
                        <Tab label="Highlights" sx={{
                            textTransform: 'none',
                            minWidth: 72,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.2)',
                            },
                            '&$selected': {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                            },
                        }} />
                    </Tabs>
                </Box>

                <Box bgcolor="white" p={2} borderRadius="16px" mb={2} border={3} borderColor="black.500" display="flex" alignItems="left">
                    <InfoIcon color="action" sx={{ mr: 1 }} />
                    <Typography align="center" color="black">
                        Add all details relevant to you. Any section left blank is only visible to you and is hidden to the public.
                    </Typography>
                </Box>



                {selectedTab === 0 && (
                    <div style={{ display: 'flex', padding: '20px' }}>
                        <div style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
                            <Avatar alt="Passport Photo" src={userData.passportPhoto} variant="square" sx={{ width: 200, height: 200 }} />
                            <TextField
                                label="Websites/Social Media"
                                defaultValue={userData.websites}
                                fullWidth
                                sx={{ marginTop: 2 }}
                            />
                        </div>


                        <div style={{ marginLeft: '20px', width: '70%' }}>
                            <Box marginBottom={3}
                                sx={{
                                    borderRadius: '16px',
                                    padding: 2,
                                    background: 'rgba(173, 216, 230, 0.1)',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}
                            >
                                {isEditing ? (
                                    <form onSubmit={formik.handleSubmit} style={{ marginLeft: '20px', flexGrow: 1 }}>
                                        <TextField
                                            id="aboutMe"
                                            name="aboutMe"
                                            label="About Me"
                                            value={formik.values.aboutMe}
                                            onChange={formik.handleChange}
                                            fullWidth
                                            sx={{ marginBottom: 2 }}
                                        />
                                        <Button type="submit" color="primary" variant="contained" sx={{ marginTop: 2 }}>
                                            Save Changes
                                        </Button>
                                    </form>
                                ) : (
                                    <div style={{ marginLeft: '20px', flexGrow: 1 }}>
                                        <Box sx={{ marginTop: 8, marginBottom: 8 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', position: 'relative' }}>
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1em', left: 0, width: '100%', height: '1px',
                                                    backgroundColor: '#000', opacity: 0.2
                                                }} />
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1.2em', left: 0, height: '3px',
                                                    backgroundColor: '#000', opacity: 0.7,
                                                    width: (theme) => theme.typography.body1.fontSize * 1.7 // Dynamically set to the approximate width of the text
                                                }} />
                                                About Me
                                            </Typography>
                                            <Typography variant="body2">
                                                {userData.aboutMe}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: 8, marginBottom: 8 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', position: 'relative' }}>
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1em', left: 0, width: '100%', height: '1px',
                                                    backgroundColor: '#000', opacity: 0.2
                                                }} />
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1.2em', left: 0, height: '3px',
                                                    backgroundColor: '#000', opacity: 0.7,
                                                    width: (theme) => theme.typography.body1.fontSize * 1.7 // Dynamically set to the approximate width of the text
                                                }} />
                                                Appearance
                                            </Typography>
                                            <Typography variant="body2">
                                                {userData.appearance}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: 8, marginBottom: 8 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', position: 'relative' }}>
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1em', left: 0, width: '100%', height: '1px',
                                                    backgroundColor: '#000', opacity: 0.2
                                                }} />
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1.2em', left: 0, height: '3px',
                                                    backgroundColor: '#000', opacity: 0.7,
                                                    width: (theme) => theme.typography.body1.fontSize * 1.7 // Dynamically set to the approximate width of the text
                                                }} />
                                                Professional Skills
                                            </Typography>
                                            <Typography variant="body2">
                                                {userData.professionalskills}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: 8, marginBottom: 8 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', position: 'relative' }}>
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1em', left: 0, width: '100%', height: '1px',
                                                    backgroundColor: '#000', opacity: 0.2
                                                }} />
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1.2em', left: 0, height: '3px',
                                                    backgroundColor: '#000', opacity: 0.7,
                                                    width: (theme) => theme.typography.body1.fontSize * 1.7 // Dynamically set to the approximate width of the text
                                                }} />
                                                Skills
                                            </Typography>
                                            <Typography variant="body2">
                                                {userData.skills}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: 8, marginBottom: 8 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', position: 'relative' }}>
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1em', left: 0, width: '100%', height: '1px',
                                                    backgroundColor: '#000', opacity: 0.2
                                                }} />
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1.2em', left: 0, height: '3px',
                                                    backgroundColor: '#000', opacity: 0.7,
                                                    width: (theme) => theme.typography.body1.fontSize * 1.7 // Dynamically set to the approximate width of the text
                                                }} />
                                                Credits
                                            </Typography>
                                            <Typography variant="body2">
                                                {userData.credits}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: 8, marginBottom: 8 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', position: 'relative' }}>
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1em', left: 0, width: '100%', height: '1px',
                                                    backgroundColor: '#000', opacity: 0.2
                                                }} />
                                                <Box component="span" sx={{
                                                    position: 'absolute', top: '-1.2em', left: 0, height: '3px',
                                                    backgroundColor: '#000', opacity: 0.7,
                                                    width: (theme) => theme.typography.body1.fontSize * 1.7 // Dynamically set to the approximate width of the text
                                                }} />
                                                Education And Training
                                            </Typography>
                                            <Typography variant="body2">
                                                {userData.educationandtraining}
                                            </Typography>
                                        </Box>


                                    </div>
                                )}</Box>
                        </div>


                    </div>
                )}
            </Box>
            {/* For the other tabs content, you can add similar conditionals as above. */}
        </div >
    );
}

export default ProfilePage;