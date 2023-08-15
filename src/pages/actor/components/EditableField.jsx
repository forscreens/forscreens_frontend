import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const EditableField = ({ label, value, onValueChange, onSave, hideUnderline, styleType }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);

    const handleSave = () => {
        setIsEditing(false);
        onValueChange(tempValue); //component communicates the change to its parent i.e ActorHeader
        if (typeof onSave === 'function') {
             onSave(label, tempValue);  //UseAPIUpdate function call is being made here which calls the submitAPI
        }
    };

    let textStyle = {};
    switch (styleType) {
        case 'header':
            textStyle = { fontWeight: 'bold', fontSize: '1.5em' };
            break;
        case 'subtitle':
            textStyle = { fontWeight: 'medium', fontSize: '1.2em' };
            break;
        case 'subtitle1':
            textStyle = { fontWeight: 'normal', fontSize: '1em' };
            break;
        default:
            break;
    }

    return (
        <TextField
            label={label}
            value={isEditing ? tempValue : value}
            onChange={(e) => setTempValue(e.target.value)}
            fullWidth
            disabled={!isEditing}
            variant={hideUnderline ? "standard" : "outlined"}
            InputProps={{
                ...(hideUnderline ? { disableUnderline: true } : {}),
                endAdornment: (
                    <IconButton
                        edge="end"
                        onClick={() => {
                            if (isEditing) {
                                handleSave();
                            } else {
                                setIsEditing(true);
                            }
                        }}
                    >
                        {isEditing ? <SaveIcon /> : <EditIcon />}
                    </IconButton>
                ),
                inputProps: {
                    style: textStyle
                }
            }}
        />
    );
};

export default EditableField;
