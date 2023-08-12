import { useState, useEffect } from 'react';

const DEFAULT_DATA = {
    profileInfo: {
        passportPhoto: '',
        websites: 'https://default-website-link.com'
    },
    actorInfo: {
        aboutMe: 'Default About Me',
        appearance: 'Default Appearance',
        professionalskills: 'Default Professional Skills',
        skills: 'Default Skills',
        credits: 'Default Credits',
        educationandtraining: 'Default Education And Training'
    },
    actorHeader: {
        circularphoto: '',
        name: 'Default Name',
        description: 'Writer, Director | Bengaluru, Karnataka,India',
        gender: 'Male | He/Him'
    }    
};

function useFetchUserData(dataType = 'all', setValues = null) {
    const [data, setData] = useState(DEFAULT_DATA);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_GET_URL = process.env.REACT_APP_API_GET_URL;
    //   const USE_DEFAULT_DATA = process.env.REACT_APP_USE_DEFAULT_DATA === 'true';
    const USE_DEFAULT_DATA = true;
    useEffect(() => {
        setIsLoading(true);
        fetch(API_GET_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(allData => {
                if (dataType === 'all') {
                    setData(allData);
                    if (typeof setValues === 'function') setValues(allData);
                } else {
                    setData(prevData => ({ ...prevData, [dataType]: allData[dataType] }));
                    if (typeof setValues === 'function') setValues(allData[dataType]);
                }
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err.message);
                setError(err.message);
                setIsLoading(false);

                if (USE_DEFAULT_DATA) {
                    if (dataType === 'all') {
                        setData(DEFAULT_DATA);
                        if (typeof setValues === 'function') setValues(DEFAULT_DATA);
                    } else {
                        setData(prevData => ({ ...prevData, [dataType]: DEFAULT_DATA[dataType] }));
                        if (typeof setValues === 'function') setValues(DEFAULT_DATA[dataType]);
                    }
                }
            });

    }, [API_GET_URL, USE_DEFAULT_DATA, setValues, dataType]);

    return {
        data: dataType === 'all' ? data : data[dataType],
        setData,
        isLoading,
        error
    };
}

export default useFetchUserData;