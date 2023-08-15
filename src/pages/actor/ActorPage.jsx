import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Box } from '@mui/material';
import backgroundImage1 from '../../assets/images/appbar_background1.png';
import overlayImage from '../../assets/images/overlay_image.png'; // Import your overlay image
import ResponsiveBoxUserComment from './components/ResponsiveBoxUserComment';
import ActorTabs from './components/ActorTabs';
import ActorInfo from './components/ActorInfo';
import styles from './ActorPage.module.css';
import useFetchUserData from '../../components/hooks/useFetchUserData';
import ProfileInfoBox from './components/ProfileInfoBox';
import ActorHeader from './components/ActorHeader';

function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
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

    const { data: fetchedData, setData, isLoading, error } = useFetchUserData();
    const [userData, setUserData] = useState(fetchedData);
    useEffect(() => {
        setUserData(fetchedData);
    }, [fetchedData]);
    const handleUserDataChange = (updatedData) => {
        setUserData(updatedData);
        setData(updatedData);
    };
    console.log("User Data in ProfilePage:", fetchedData);
    if (!fetchedData) return <div>Loading...</div>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <ActorHeader isEditing={isEditing} userData={userData} overlayImage={overlayImage} setUserData={handleUserDataChange} />            <Box marginBottom={3}
                sx={{
                    borderRadius: '16px',
                    padding: 2,
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.6)), url(${backgroundImage1})`,
                    backgroundSize: 'cover',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >


                <Box my={2} px={1}>
                    <ActorTabs selectedTab={selectedTab} onChange={(event, newValue) => setSelectedTab(newValue)} />
                </Box>
                <ResponsiveBoxUserComment />
                {selectedTab === 0 && (
                    <div className={styles.container} style={{ display: 'flex', width: '100%' }}>
                        {/* First Grid: 30% */}
                        <div style={{ flex: '0 0 30%' }}>
                            <ProfileInfoBox userData={fetchedData} setUserData={setData} />
                        </div>

                        {/* Spacer: 10% */}
                        <div style={{ flex: '0 0 10%' }}></div>

                        {/* Second Grid: 60% */}
                        <div style={{ flex: '0 0 60%' }}>
                            <ActorInfo isEditing={isEditing} userData={fetchedData} setUserData={setData} />
                        </div>
                    </div>
                )}
            </Box>
        </div >
    );
}

export default ProfilePage;