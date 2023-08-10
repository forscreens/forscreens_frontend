import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const ReadOnlyActorInformation = ({ title, data }) => {
    return (
        <Grid container spacing={2} sx={{ marginTop: 8, marginBottom: 8 }}>
            <Grid item xs={12}>
                <Typography 
                    variant="body1" 
                    sx={{ fontWeight: 'bold', position: 'relative' }}
                >
                    <Box component="span" sx={{
                        position: 'absolute', top: '-1em', left: 0, width: '100%', height: '1px',
                        backgroundColor: '#000', opacity: 0.2
                    }} />
                    <Box component="span" sx={{
                        position: 'absolute', top: '-1.2em', left: 0, height: '3px',
                        backgroundColor: '#000', opacity: 0.7,
                        width: (theme) => theme.typography.body1.fontSize * 1.7 
                    }} />
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2">
                    {data}
                </Typography>
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