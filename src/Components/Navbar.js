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
                <img src={logoBlue} alt="logo" style={{display:'flex', height:'80px', width:'80px'}}/>
                {isMobile ? (
                    <>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
                            <List>
                                <ListItem button component={Link} to="/who-we-are" onClick={handleDrawerClose}>Who We Are</ListItem>
                                <ListItem button component={Link} to="/what-we-do" onClick={handleDrawerClose}>What We Do</ListItem>
                                <ListItem button component={Link} to="/projects" onClick={handleDrawerClose}>Projects</ListItem>
                                <ListItem button component={Link} to="/contact-us" onClick={handleDrawerClose}>Contact Us</ListItem>
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <div>
                        <Button color="inherit" component={Link} to="/who-we-are">Who We Are</Button>
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