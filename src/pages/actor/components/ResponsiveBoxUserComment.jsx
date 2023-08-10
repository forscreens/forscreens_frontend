import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import userMessageBg from '../../../assets/images/user_message.png';

const ResponsiveBox = ({ bgImage }) => {
    return (
        <Box
            p={2}
            mb={2}
            sx={{
                backgroundImage: `url(${userMessageBg})`, // Use the imported image
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={2} sm={1}>
                    <InfoIcon color="action" />
                </Grid>
                <Grid item xs={10} sm={11}>
                    <Typography align="center" color="black">
                        Add all details relevant to you. Any section left blank is only visible to you and is hidden to the public.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ResponsiveBox;
