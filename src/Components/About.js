import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useTheme } from '@mui/material/styles';
import placeholder from '../Images/elementor-placeholder-image.webp';

const About = () => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: isMedium ? 'column' : 'row-reverse',
                justifyContent: 'space-between',
                backgroundColor: theme.palette.error.main,
                height: isMedium ? 'auto' : '440px',
                alignItems: 'center',
                padding: theme.spacing(2)
            }}
        >
            <img
                src={placeholder}
                alt="painting"
                style={{
                    display: isMedium ? 'none' : 'block',
                    width: isMedium ? '100%' : '700px',
                    height: 'auto',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginTop: isMedium ? '50px' : '20px'
                }}
            />
            <Box sx={{ flexDirection: 'column', padding: '30px', textAlign:'center' }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{color:'white', fontSize: isMedium ? '32px' : '62px', textAlign: isMedium ? 'center' : 'left'}}>
                Why Choose Us?
                </Typography>
<List sx={{color:'white'}}>
    <ListItem>
        <ListItemIcon>
            <FiberManualRecordIcon sx={{color: theme.palette.primary.main}} />
        </ListItemIcon>
        <ListItemText primary="Competitive Pricing" />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <FiberManualRecordIcon sx={{color: theme.palette.primary.main}}/>
        </ListItemIcon>
        <ListItemText primary="Quality Aftercare" />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <FiberManualRecordIcon sx={{color: theme.palette.primary.main}}/>
        </ListItemIcon>
        <ListItemText primary="Custom Design and Color Planning" />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <FiberManualRecordIcon sx={{color: theme.palette.primary.main}}/>
        </ListItemIcon>
        <ListItemText primary="High-Quality Service" />
    </ListItem>
</List>
<Typography variant="body1" sx={{ width: isMedium ? '100%' : '500px', color: 'white', padding: isMedium ? '0' : '20px' }}>
    We pride ourselves on delivering top-notch contracting services. From painting to bathroom remodels, drywall repair, and more, we ensure every project is completed to the highest standards. Your satisfaction is our priority.
</Typography>
            </Box>
        </Box>
    );
};

export default About;

