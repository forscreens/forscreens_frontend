// hooks/useEditableField.js

import { useState } from 'react';
import { updateActorInformation } from './SubmitAPI';

export const useEditableField = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(initialValue);

    const startEditing = () => {
        setIsEditing(true);
    };

    const stopEditing = async () => {
        setIsEditing(false);
        setValue(tempValue);
        try {
            // Assuming that your backend expects the data in a specific format,
            // adjust the payload as needed.
            const payload = { updatedField: tempValue };
            await updateActorInformation(payload);
        } catch (error) {
            console.error("Failed to update data:", error);
        }
    };

    return {
        value,
        isEditing,
        tempValue,
        setTempValue,
        startEditing,
        stopEditing
    };
};
