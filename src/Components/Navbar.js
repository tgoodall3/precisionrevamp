import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import logoBlue from '../Images/Precision-logo-blue.png';
import { FaArrowRight } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between', bgcolor:'white', height:'80px' }}>
             <Link to={'/'}><img src={logoBlue} alt="logo" style={{display:'flex', height:'80px', width:'80px'}}/></Link>
                {isMobile ? (
                    <>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                     <Drawer
    anchor="right"
    open={drawerOpen}
    onClose={handleDrawerClose}
    sx={{ '& .MuiDrawer-paper': { width: '80%', bgcolor: '#f5f5f5' } }}
>
    <List>
        <ListItem button component={Link} to="/about" onClick={handleDrawerClose} sx={{ my: 2 }}>
           <Typography variant="h6">Who We Are</Typography>
        </ListItem>
        <ListItem button component={Link} to="/what-we-do" onClick={handleDrawerClose} sx={{ my: 2 }}>
            <Typography variant="h6">What We Do</Typography>
        </ListItem>
        <ListItem button component={Link} to="/projects" onClick={handleDrawerClose} sx={{ my: 2 }}>
            <Typography variant="h6">Projects</Typography>
        </ListItem>
        <ListItem button component={Link} to="/contact-us" onClick={handleDrawerClose} sx={{ my: 2 }}>
            <Typography variant="h6">Contact Us</Typography>
        </ListItem>
    </List>
</Drawer>
                    </>
                ) : (
                    <div>
                        <Button color="inherit" component={Link} to="/about">Who We Are</Button>
                        <Button color="inherit" component={Link} to="/what-we-do">What We Do</Button>
                        <Button color="inherit" component={Link} to="/projects">Projects</Button>
                        <Button color="inherit" component={Link} to="/contact-us">Contact Us <FaArrowRight style={{fontSize:'15px', fontWeight:'lighter',padding:'5px', color: theme.palette.secondary.main}} /></Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;