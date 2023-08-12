import React, { useState } from 'react';
import { TextField, Avatar, Box, IconButton, styled, Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditableField from './EditableField';
import { useAPIUpdate } from "../../../components/hooks/useAPIUpdate"; // Change this to the correct path

const AvatarContainer = styled('div')({
    position: 'relative',
    width: 200,
    height: 200,
    margin: '0 auto'
});

const AvatarEditIcon = styled(IconButton)({
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    }
});

const ProfileInfoBox = ({ userData, setUserData }) => {
    const profileInfo = userData.profileInfo;
    const [openDialog, setOpenDialog] = useState(false);
    const [tempImageURL, setTempImageURL] = useState('');
    const [editableFields, setEditableFields] = useState({});

    const handleValueChange = (key, value) => {
        const updatedProfileInfo = { ...profileInfo, [key]: value };
        setUserData({ ...userData, profileInfo: updatedProfileInfo });
    };


    // Initialize the editable fields state
    useState(() => {
        const fields = {};
        for (let key in profileInfo) {
            if (key !== 'passportPhoto') {
                fields[key] = { value: profileInfo[key], isEditing: false };
            }
        }
        setEditableFields(fields);
    }, [profileInfo]);
    const { handleAPIUpdate, isLoading, error } = useAPIUpdate();
    const handleImageUpdate = () => {
        const updatedProfileInfo = { ...profileInfo, passportPhoto: tempImageURL };
        setUserData({ ...userData, profileInfo: updatedProfileInfo });
        handleAPIUpdate('passportPhoto', tempImageURL);
        setOpenDialog(false);
    };



    return (
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
            {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
            <AvatarContainer>
                <Avatar alt="Passport Photo" src={profileInfo.passportPhoto} variant="square" sx={{ width: '100%', height: '100%' }} />
                <AvatarEditIcon onClick={() => setOpenDialog(true)}>
                    <EditIcon />
                </AvatarEditIcon>
            </AvatarContainer>

            {/* Image Update Dialog */}
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

            {/* Dynamically render each data field */}
            {Object.keys(editableFields).map(key => {
                return (
                    <EditableField
                        key={key}
                        label={key}
                        value={profileInfo[key]}
                        onValueChange={(newValue) => handleValueChange(key, newValue)}
                        onSave={handleAPIUpdate}
                    />
                );
            })}
        </Box>
    );
};

export default ProfileInfoBox;
