import React, { useState } from 'react';
import { Box } from '@mui/material';
import EditableField from './EditableField';
import { useAPIUpdate } from "../../../components/hooks/useAPIUpdate"; 


const ActorInfo = ({ userData, setUserData }) => {
    const [editableFields, setEditableFields] = useState({});
    const actorInfo = userData.actorInfo;
    console.log("ActorInfo", userData.actorInfo);
    // Initialize the editable fields state
    useState(() => {
        const fields = {};
        for (let key in actorInfo) {
            fields[key] = { value: actorInfo[key], isEditing: false };
        }
        setEditableFields(fields);
    }, [actorInfo]);

    const handleValueChange = (key, value) => {
        const updatedActorInfo = { ...actorInfo, [key]: value };
        setUserData({ ...userData, actorInfo: updatedActorInfo });
    };

    const { handleAPIUpdate, isLoading, error } = useAPIUpdate();


    return (
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
            <Box>
                {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
                {Object.keys(editableFields).map(key => {
                    return (
                        <Box key={key} mt={2}>
                            <EditableField
                                key={key}
                                label={key}
                                value={actorInfo[key]}
                                onValueChange={(newValue) => handleValueChange(key, newValue)}
                                onSave={handleAPIUpdate}
                            />
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default ActorInfo;
