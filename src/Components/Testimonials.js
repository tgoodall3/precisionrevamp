import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, TextField, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ReactStars from "react-rating-stars-component"; 




function Testimonials() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [testimonials, setTestimonials] = useState([]);
    const [name, setName] = useState('');
    const [testimonial, setTestimonial] = useState('');
    const [rating, setRating] = useState('');
    const [date, setDate] = useState('');
    const [page, setPage] = useState(0);


    const testimonialsPerPage = 2; // Changed from 3 to 2
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
            .then(response => response.json())
            .then(data => setTestimonials(data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/testimonials', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, testimonial, rating, date })
        })
        .then(response => response.json())
        .then(data => setTestimonials([...testimonials, data]))
        .catch(error => console.error(error));
        setName('');
        setTestimonial('');
        setRating('');
        setDate('');
    };

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    return (
          <div>
           <Box sx={{ p: 9 }}>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ backgroundColor: theme.palette.error.main, width: '220px', height: '220px', margin: 'auto', display:'flex', justifyContent:'center', alignItems:'left', flexDirection:'column', padding:'20px' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{color: theme.palette.secondary.main, fontSize: '25px', color: 'white'}}>
                        Testimonials
                    </Typography>
                    <Typography variant="h5" component="p" gutterBottom sx={{ fontSize:'12px',color:'white', display:'flex' }}>
                        We pride ourselves on our customer service and satisfaction. Here are some of the things our clients have said about us.
                    </Typography>
                    <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                    style={{marginBottom:'20px'}}
                />
                </Box>
            </Grid>
                {testimonials.slice(page * testimonialsPerPage, (page + 1) * testimonialsPerPage).map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{}}>
                        <Box sx={{ backgroundColor: theme.palette.error.main, width: '220px', height: '220px', margin: 'auto', display:'flex', justifyContent:'center', alignItems:'left', flexDirection:'column', padding:'20px' }}>
                            <Typography variant="h2" component="h1" gutterBottom sx={{color: theme.palette.secondary.main, fontSize: '25px', color: 'white'}}>
                                {testimonial.name}
                            </Typography>
                            <Typography variant="h5" component="p" gutterBottom sx={{ fontSize:'12px',color:'white', display:'flex' }}>
                                {testimonial.testimonial}
                            </Typography>
                            <ReactStars
                                count={5}
                                value={testimonial.rating}
                                size={24}
                                activeColor="#ffd700"
                                edit={false}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Button sx={{color:theme.palette.secondary.main}} onClick={() => setPage(page => Math.max(page - 1, 0))}>Previous</Button>
            <Button sx={{color:theme.palette.secondary.main}} onClick={() => setPage(page => Math.min(page + 1, totalPages - 1))}>Next</Button>
            <Typography variant="h2" component="h1" gutterBottom sx={{color: theme.palette.secondary.main, fontSize: isMobile ? '18px' : '25px', color: 'black', textAlign:'center', marginTop:'100px', marginBottom:'30px'}}>
                Add your experience with us, we would love to hear from you!
            </Typography>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', width:'100%', margin: '0 auto'}}>
                <TextField 
                    sx={{marginBottom:'20px'}}
                    label="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <TextField
                    sx={{marginBottom:'20px'}}
                    label="Testimonial"
                    value={testimonial}
                    onChange={e => setTestimonial(e.target.value)}
                    required
                />
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    style={{marginBottom:'20px'}}
                />
                <TextField
                    sx={{marginTop:'20px'}}
                    label="Date"
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                />
                <Button
                    sx={{marginTop:'20px', width:'150px', margin:'15px auto'}}
                    variant="contained"
                    color="secondary"
                 type="submit">Submit</Button>
            </form>
           </Box>
        </div>
    );
}

export default Testimonials;
