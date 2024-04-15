import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import placeholder from '../../Images/elementor-placeholder-image.webp';
import WhatWeDo from '../What-we-do';
import CallToAction from '../Call-to-action';


const WhoWeAre = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
     <Box sx={{
    minHeight: '100vh',
    boxSizing:'border-box',
    padding: theme.spacing(isMobile ? 3 : 9),
    position:'relative',
}}>
    <Box
        sx={{ 
            justifyContent:'space-between',
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#fff' 
        }}
    >
        <Typography variant="h2" component="h1" gutterBottom sx={{color:'black', fontSize: isMobile ? '32px' : '62px', textAlign: "center", color: theme.palette.secondary.main}}>
            Who We Are
        </Typography>
    </Box>

    <Box sx={{ position: 'relative', }}>
        <img src={placeholder} alt="logo" style={{
            top: 'auto',
            right:'0',
            width: '1140px',
            padding: '0px',
            height: '400px',
            borderRadius:'0px',
            overflow:'hidden',
        }}/>
    </Box>

    <Box sx={{display:'flex',  flexDirection: isMobile ? 'column' : 'row',
            marginTop: isMobile ? '0' : '100px',
            }}>
        <Box
            sx={{ 
                justifyContent:'space-between',
                backgroundPosition: 'center', 
                flexDirection: 'column',
                backgroundSize: 'cover', 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff' 
            }}
        >
            <Typography variant="body2" component="body" gutterBottom sx={{color:'black', fontSize: '15px', textAlign: "center",
                padding:'10px', alignItems: 'center',
                width: '80%',
            }}>
                Welcome to Precision Painting, we are a full service painting company that specializes in both residential and commercial painting services. 
                But we are more than just painters, we are a team of professionals dedicated to providing the highest quality of any services to our clients.
                Do not hesitate to contact us for a free consultation. 
            </Typography>    
            <Typography variant="body2" component="body" gutterBottom sx={{color:'black', fontSize: '18px', textAlign: "center",
                marginBottom:'70px', padding:'10px', alignItems: 'center',
            }}>
                <span style={{
                    fontWeight:'bolder',
                    color: theme.palette.secondary.main
                }}>Rob Goodall
                </span>
                <br/>
                <span 
                style={{fontWeight:'inherit',
                fontSize: '13px',
                }}
                >Ceo & Founder </span>
            </Typography>
        </Box>
        <Box>
            <img src={placeholder} alt="logo" style={{
                right:'0',
                width: '270px',
                height: '400px',
                borderRadius:'8px',
                overflow:'hidden',
            }}/>
        </Box> 
    </Box>          
</Box>
            <WhatWeDo/>
             <CallToAction/>
        </Box>
    );
};

export default WhoWeAre;