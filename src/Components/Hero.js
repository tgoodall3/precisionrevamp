import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import placeholder from '../Images/elementor-placeholder-image.webp';

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            height: isMobile ? '90vh' : '130vh', 
            boxSizing:'border-box',
            padding: isMobile ? theme.spacing(3) : theme.spacing(9),
            position:'relative',
            
        }}>
            <Box
            sx={{ 
                justifyContent:'space-between',
                backgroundPosition: 'center', 
                backgroundSize: 'cover', 
                display: 'flex', 
                justifyContent: isMobile ? 'center' : 'space-between',
                alignItems: isMobile ? 'center' : 'flex-start',
                flexDirection: isMobile ? 'column' : 'row',
                color: '#fff' 
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom sx={{color:'black', fontSize: isMobile ? '32px' : '62px', textAlign: "center", color: theme.palette.secondary.main}}>
              Welcome to Precision Painting
            </Typography>
            <div style={{ height: '200px', borderLeft: '1px solid black', marginRight:'50px', display: isMobile ? 'none' : 'flex' }} />
            <Typography variant="h5" component="p" gutterBottom sx={{fontSize:'18px',color:'black', display:'flex', flexDirection:'column', padding:'10px', alignItems: isMobile ? 'center' : 'flex-start', 
            textAlign: isMobile ? 'center' : 'left',
            width: isMobile ? '80%' : '400px'}}>
            We are an innovative interior design and construction company dedicated to transforming spaces into stunning works of art.                
            <Button variant="contained" color="secondary" sx={{marginTop:'20px', width:'150px'}}>
                Lets Chat
            </Button>
            </Typography>
            </Box>

            <Box>
            <img src={placeholder} alt="logo" style={{
                position:'absolute',
                top: isMobile ? 'auto' : '300px',
                right:'0',
                width: isMobile ? '100%' : '1123px',
                height: isMobile ? 'auto' : '390px',
                borderRadius:'0px',
                overflow:'hidden',
            }}/>
            </Box>
        </Box>
    );
};

export default Hero;