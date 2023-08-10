import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const ReadOnlyActorInformation = ({ title, data }) => {
    return (
        <Grid container spacing={1} sx={{ marginTop: 2, marginBottom: 2 }}> {/* Reduced spacing */}
            <Grid item xs={12}>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        padding: 2,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        position: 'relative',
                        margin: 1  // Reduced margin
                    }}
                >
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            fontWeight: 'bold', 
                            position: 'absolute', 
                            top: '-1.2em', 
                            left: '10px', 
                            backdropFilter: 'blur(5px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.6)', // Slight opacity for gloss effect
                            padding: '0 5px',
                            borderRadius: '10px', 
                            border: '1px solid rgba(255, 255, 255, 0.8)', // Glossy border
                            zIndex: 1
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ paddingTop: '1.5em' }}>
                        {data}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ReadOnlyActorInformation;








export const sections = [
    { title: 'About Me', key: 'aboutMe' },
    { title: 'Professional Skills', key: 'professionalskills' },
    { title: 'Skills', key: 'skills' },
    { title: 'Credits', key: 'credits' },
    { title: 'Education And Training', key: 'educationandtraining' },
];