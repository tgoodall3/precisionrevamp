import React from 'react';
import { Box, Typography, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import placeholder from '../Images/elementor-placeholder-image.webp';

const WhatWeDo = () => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <Box sx={{ p: 9, display:'flex', flexDirection: isMedium ? 'column' : 'row', justifyContent:'space-between' }}>
                <div style={{flexDirection:'column'}}>
                <Typography variant="h2" component="h1" gutterBottom sx={{color:'black', fontSize: isMedium ? '32px' : '62px', textAlign: isMedium ? 'center' : 'left'}}>
                        What We Do
                    </Typography>
                    <List sx={{width: isMedium ? '100%' : '45%'}}>
                        <ListItem>Exterior & Interior Painting</ListItem>
                        <hr style={{width: isMedium ? '100%' : '500px'}}/>
                        <ListItem>Drywall Repair</ListItem>
                        <hr style={{width: isMedium ? '100%' : '500px'}}/>
                        <ListItem>Flooring</ListItem>
                        <hr style={{width: isMedium ? '100%' : '500px'}}/>
                        <ListItem>Bathroom Remodels</ListItem>
                        <hr style={{width: isMedium ? '100%' : '500px'}}/>
                        <ListItem>Free Consultations</ListItem>
                    </List>
                </div>
                <img src={placeholder} alt="painting" style={{width: isMedium ? '100%' : '40%', height:'400px', borderRadius:'10px', overflow:'hidden'}}/>
            </Box>
            <Box sx={{ p: 9, display:'flex', flexDirection: isMedium ? 'column-reverse' : 'row', justifyContent:'space-between' }}>
                <img src={placeholder} alt="painting" style={{width: isMedium ? '100%' : '40%', height:'400px', borderRadius:'10px', overflow:'hidden'}}/>
                <div style={{flexDirection:'column'}}>
                <Typography variant="h2" component="h1" gutterBottom sx={{color:'black', fontSize: isMedium ? '32px' : '62px', textAlign: isMedium ? 'center' : 'left'}}>
                        Our Process
                    </Typography>
                    <List sx={{width: isMedium ? '100%' : '45%', textAlign: isMedium ? 'center' : 'left'}}>
                        <ListItem>Initial Consultation</ListItem>
                        <hr style={{width: isMedium ? '100%' : '500px'}}/>
                        <ListItem>Design & Planning</ListItem>
                        <hr style={{width: isMedium ? '100%' : '500px'}}/>
                        <ListItem>Construction</ListItem>
                        <hr style={{width: isMedium ? '100%' : '500px'}}/>
                        <ListItem>Project Completion</ListItem>
                    </List>
                </div>
            </Box>
        </div>
    );
};

export default WhatWeDo;