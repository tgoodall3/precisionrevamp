import React from 'react';
import { Box, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import Logo from '../Images/Precision-logo-blue.png'; // Replace with your logo
import { useTheme } from '@mui/material/styles';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ backgroundColor: theme.palette.error.main, color: '#fff', p: 3 }}>
            <Grid container spacing={3} alignItems={isMobile ? 'center' : 'flex-start'} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <img src={Logo} alt="Logo" style={{ width: '100px' }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <Typography variant="h6">Contact Info</Typography>
                    <Typography>123 Main St, Anytown, USA</Typography>
                    <Typography>(123) 456-7890</Typography>
                    <Typography>info@company.com</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <Typography variant="h6" sx={{fontSize:'18px', marginBottom:'10px'}}>Would like to talk about your future project?</Typography>
                    <Button variant="contained" color="secondary">Get in touch <FaArrowRight style={{padding:'5px'}}/></Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;