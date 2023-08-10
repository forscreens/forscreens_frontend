import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { TextField, AppBar, Toolbar, Typography, Avatar, Grid, Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import backgroundImage from '../../assets/images/appbar_background.png';
import backgroundImage1 from '../../assets/images/appbar_background1.png';
import overlayImage from '../../assets/images/overlay_image.png'; // Import your overlay image
import ResponsiveBoxUserComment from './components/ResponsiveBoxUserComment'; // Adjust the path accordingly
import { updateActorInformation } from "./components/SubmitAPI";
import ActorTabs from './components/ActorTabs';
import ActorInfo from './components/ActorInfo';
import styles from './ActorPage.module.css';

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
    const handleFormSubmit = async (values) => {
        try {
            const responseData = await updateActorInformation(values);
            // Handle successful response
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Box
                marginTop={2}
                marginBottom={3}
                sx={{
                    borderRadius: '16px',
                    padding: 2,
                    background: 'rgba(173, 216, 230, 0.1)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',  // This will cover the entire viewport of the box
                    backgroundRepeat: 'no-repeat',  // This will prevent the image from repeating in case it's too small for the container.
                    backgroundPosition: 'center'  // This will center the image in the box


                }}

            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    sx={{
                        width: '800px', // Or whatever size you want
                        height: '100px', // Or whatever size you want
                        backgroundImage: `url(${overlayImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></Box>
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        {/* 10% for Photo */}
                        <Box sx={{ width: '10%', display: 'flex', justifyContent: 'flex-middle' }}>
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
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.6)), url(${backgroundImage1})`,
                    backgroundSize: 'cover',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',               }}
            >


                <Box my={2} px={1}>
                    <ActorTabs selectedTab={selectedTab} onChange={(event, newValue) => setSelectedTab(newValue)} />
                </Box>
                <ResponsiveBoxUserComment />
                {selectedTab === 0 && (
                    <div className={styles.container} style={{ display: 'flex', width: '100%' }}>
                        {/* First Grid: 30% */}
                        <div style={{ flex: '0 0 30%' }}>
                            <Box
                                sx={{
                                    borderRadius: '30px',
                                    padding: 2,
                                    background: 'rgba(173, 216, 230, 0.1)',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}
                            >
                                <Avatar alt="Passport Photo" src={userData.passportPhoto} variant="square" sx={{ width: 200, height: 200 }} />
                                <TextField
                                    label="Websites/Social Media"
                                    defaultValue={userData.websites}
                                    fullWidth
                                    sx={{ marginTop: 2 }}
                                />
                            </Box>
                        </div>

                        {/* Spacer: 10% */}
                        <div style={{ flex: '0 0 10%' }}></div>

                        {/* Second Grid: 60% */}
                        <div style={{ flex: '0 0 60%' }}>
                            <Box
                                sx={{
                                    borderRadius: '80px',
                                    padding: 2,
                                    background: 'rgba(173, 216, 230, 0.1)',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}
                            >
                                <ActorInfo isEditing={isEditing} userData={userData} />
                            </Box>
                        </div>
                    </div>
                )}
            </Box>


            {/* For the other tabs content, you can add similar conditionals as above. */}
        </div >
    );
}

export default ProfilePage;