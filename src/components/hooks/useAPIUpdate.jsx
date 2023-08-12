// useAPIUpdate.js
import { useState } from 'react';
import { updateActorInformation } from "./SubmitAPI";

export const useAPIUpdate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAPIUpdate = async (data) => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await updateActorInformation(data);
            setIsLoading(false);
            return result;
        } catch (err) {
            setIsLoading(false);
            setError(err.message);
        }
    };

    return { handleAPIUpdate, isLoading, error };
};
