import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Button, TextField, AppBar, Toolbar, Typography, Avatar, Tabs, Tab, Box } from '@mui/material';
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
            <AppBar position="static" className={styles.appBarBackground}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>

                    {/* 20% Space at Beginning */}
                    <Box sx={{ width: '20%' }}>
                        {/* Intentionally left blank for space */}
                    </Box>

                    {/* 10% for Photo */}
                    <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
                        <Avatar alt="User Photo" src={userData.passportPhoto} />
                    </Box>

                    {/* 30% for Text */}
                    <Box sx={{
                        width: '30%',
                        background: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(245, 245, 245, 0.8))',  // Clear glossy finish
                        borderRadius: '16px',
                        padding: 1,
                        marginY: 2,  // Space at the top and bottom
                    }}>
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

                    {/* 10% for Edit Info */}
                    <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
                        <Button color="inherit" startIcon={<EditIcon />} onClick={() => setIsEditing(!isEditing)}>
                            {isEditing ? 'Cancel' : 'Update'}
                        </Button>
                    </Box>

                    {/* 20% Space at End */}
                    <Box sx={{ width: '20%' }}>
                        {/* Intentionally left blank for space */}
                    </Box>

                </Toolbar>
            </AppBar>



            <Box bgcolor="grey.500" my={2}>
                <Tabs value={selectedTab} onChange={(event, newValue) => setSelectedTab(newValue)} textColor="inherit">
                    <Tab label="Details" />
                    <Tab label="Media" />
                    <Tab label="Highlights" />
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
                    <div style={{ width: '30%' }}>
                        <Avatar alt="Passport Photo" src={userData.passportPhoto} variant="square" sx={{ width: 100, height: 100 }} />
                        <TextField
                            label="Websites/Social Media"
                            defaultValue={userData.websites}
                            fullWidth
                            sx={{ marginTop: 2 }}
                        />
                    </div>
                    <div style={{ marginLeft: '20px', width: '70%' }}>
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
                                        {userData.aboutme}
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
                        )}
                    </div>
                </div>
            )}

            {/* For the other tabs content, you can add similar conditionals as above. */}
        </div>
    );
}

export default ProfilePage;