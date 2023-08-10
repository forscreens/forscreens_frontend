import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

const ActorTabs = ({ selectedTab, onChange }) => {
    return (
        <Box my={2} px={1}>
            <Tabs value={selectedTab} onChange={onChange} textColor="inherit" indicatorColor="primary" centered>                        <Tab label="Details" sx={{
                            textTransform: 'none',
                            minWidth: 72,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.2)',
                            },
                            '&$selected': {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                            },
                        }} />
                        <Tab label="Media" sx={{
                            textTransform: 'none',
                            minWidth: 72,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.2)',
                            },
                            '&$selected': {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                            },
                        }} />
                        <Tab label="Highlights" sx={{
                            textTransform: 'none',
                            minWidth: 72,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.2)',
                            },
                            '&$selected': {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                            },
                        }} />
                    </Tabs>
        </Box>
    );
}

export default ActorTabs;
