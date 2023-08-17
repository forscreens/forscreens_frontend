import { styled } from '@mui/system';
import { Box } from '@mui/material';

const Footer = styled(Box)({
    background: 'rgba(255, 255, 255, 0.8)',  // semi-transparent white, for example
    padding: '16px',
    textAlign: 'center',
    boxSizing: 'border-box',
});

const GlobalFooter = () => {
    return (
        <Footer>
            forscreens @2023
        </Footer>
    );
};

export default GlobalFooter;
