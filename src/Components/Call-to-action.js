import React from 'react';
import { Card, CardContent, Typography, Button , Box} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function CallToAction() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            padding: isMobile ? theme.spacing(3) : theme.spacing(9),
        }}>
        <Card sx={{ 
            maxWidth: '80%',
            margin: 'auto',
            padding: theme.spacing(3),
            textAlign: 'center',
            backgroundColor: theme.palette.secondary.main,
            color: 'black',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',

        }}>
            <CardContent>
                <Typography variant="h5" component="div"
                sx={{
                    color: 'white',
                    fontSize: '20px',
                    textAlign: 'center',
                    marginBottom: '20px',
                
                }}>
                    Ready to transform your space?
                </Typography>
                <Typography variant="body2" color="white">
                    Get started with our free consultation. Click the button below to fill out our project form.
                </Typography>
                <Button variant="contained" color="error" component={Link} to="/form" sx={{ mt: 2 }}>
                    Start Your Project
                </Button>
            </CardContent>
        </Card>
        </Box>
    );
}

export default CallToAction;