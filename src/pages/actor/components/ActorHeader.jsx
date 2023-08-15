import React, { useState } from 'react';
import { AppBar, Toolbar, TextField, Avatar, styled, IconButton, Box, Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import backgroundImage from '../../../assets/images/appbar_background.png';
import EditableField from './EditableField';
import { useAPIUpdate } from "../../../components/hooks/useAPIUpdate";
import EditIcon from '@mui/icons-material/Edit';
import { updateStateByDotNotation } from "../../../components/utility/updateStateByDotNotation";

const AvatarContainer = styled('div')({
    position: 'relative',
    width: 60,
    height: 60,
    margin: '0 auto'
});

const AvatarEditIcon = styled(IconButton)({
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 20,  // adjust width as needed
    height: 20, // adjust height as needed
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    '& svg': {
        fontSize: '1rem',  // adjust font size of the icon itself
    }
});


const ActorHeader = ({ userData, setUserData, overlayImage }) => {
    const [editableFields, setEditableFields] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const actorHeader = userData.actorHeader;
    const [tempImageURL, setTempImageURL] = useState('');

    useState(() => {
        const fields = {};
        for (let key in actorHeader) {
            if (key !== 'circularphoto') {
                fields[key] = { value: actorHeader[key], isEditing: false };
            }

        }
        setEditableFields(fields);
    }, [actorHeader]);
    const handleValueChange = (key, value) => {
        const updatedUserData = updateStateByDotNotation({ ...userData }, key, value);
        setUserData(updatedUserData);
    };
    
    const handleImageUpdate = () => {
        const updatedProfileInfo = { ...actorHeader, circularphoto: tempImageURL };
        setUserData({ ...userData, actorHeader: updatedProfileInfo });
        handleAPIUpdate('circularphoto', tempImageURL);
        setOpenDialog(false);
    };
    const { handleAPIUpdate, isLoading, error } = useAPIUpdate();

    return (
        <>
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
                            <AvatarContainer>
                                <Avatar alt="User Photo" src={actorHeader.circularphoto} sx={{ width: 60, height: 60 }} />
                                <AvatarEditIcon size="small" onClick={() => setOpenDialog(true)}>
                                    <EditIcon />
                                </AvatarEditIcon>
                            </AvatarContainer>
                            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                                <DialogContent>
                                    <TextField
                                        label="Paste Image URL"
                                        fullWidth
                                        value={tempImageURL}
                                        onChange={(e) => setTempImageURL(e.target.value)}
                                        sx={{ marginBottom: 2 }}
                                    />
                                    <input
                                        type="file"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setTempImageURL(reader.result);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                                    <Button onClick={handleImageUpdate} color="primary">Update</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>

                        {/* 50% for Text */}
                        <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            {Object.keys(editableFields).map(key => {
                                return (
                                    <Box key={key} mt={2}>
                                        <EditableField
                                            key={key}                                            
                                            value={actorHeader[key]}
                                            onValueChange={(newValue) => handleValueChange(key, newValue)}
                                            onSave={handleAPIUpdate} // useAPIUpdate is passed as input to EditableField
                                            hideUnderline={true}
                                            styleType={"subtitle"}
                                        />
                                    </Box>
                                );
                            })}

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default ActorHeader;