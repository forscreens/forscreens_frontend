import { useState } from 'react';
import { submitData } from "./SubmitAPI";

export const useAPIUpdate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAPIUpdate = async (type, data) => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await submitData(type, data);
            setIsLoading(false);
            return result;
        } catch (err) {
            setIsLoading(false);
            setError(err.message);
        }
    };

    return { handleAPIUpdate, isLoading, error };
};
