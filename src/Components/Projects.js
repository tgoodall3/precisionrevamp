import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, useMediaQuery, Grid, Button } from '@mui/material';
import placeholder from '../Images/elementor-placeholder-image.webp';
import { useTheme } from '@mui/material/styles';

const Projects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ p: 9 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{color:'black', fontSize: isMobile ? '32px' : '62px', textAlign: "center", color: "black"}}>
                Recent Projects
            </Typography>
            <Grid container spacing={3}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item}>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                component="img"
                                height="170"
                                image={placeholder}
                                alt="project image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Project {item}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Add a description of the project here */}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="secondary" sx={{marginTop:'20px', width:'150px', display:'block', margin:'20px auto'}}>View More</Button>
        </Box>
    );
};

export default Projects;