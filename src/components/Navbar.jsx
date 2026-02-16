import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';

const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Leadership', to: 'leadership' },
    { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2, backgroundColor: '#030014', height: '100%', color: 'white' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.to} disablePadding>
                        <Link
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={handleDrawerToggle}
                            onSetActive={() => handleSetActive(item.to)}
                            className="clickable"
                        >
                            <ListItemText primary={item.label} sx={{ textAlign: 'center', cursor: 'pointer', py: 1 }} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                py: scrolled ? 1 : 2,
                transition: 'all 0.3s ease-in-out',
                top: scrolled ? 20 : 0
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'center', minHeight: 'auto !important' }}>
                    {/* Desktop Menu - Floating Glass Dock */}
                    <Box
                        component={motion.div}
                        layout
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 0.5,
                            backgroundColor: scrolled ? 'rgba(3, 0, 20, 0.7)' : 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(15px)',
                            borderRadius: '50px',
                            padding: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {navItems.map((item, index) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                onSetActive={() => handleSetActive(item.to)}
                                className="clickable"
                            >
                                <Box
                                    sx={{
                                        px: 2.5,
                                        py: 1,
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                        color: activeSection === item.to ? '#fff' : '#ccd6f6',
                                        backgroundColor: activeSection === item.to ? 'rgba(77, 93, 251, 0.8)' : 'transparent',
                                        fontWeight: 600,
                                        fontSize: '0.875rem',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            backgroundColor: activeSection === item.to ? 'rgba(77, 93, 251, 0.9)' : 'rgba(255, 255, 255, 0.08)',
                                            color: '#fff',
                                            transform: 'scale(1.05)',
                                        }
                                    }}
                                >
                                    {item.label}
                                </Box>
                            </Link>
                        ))}
                    </Box>

                    {/* Mobile Menu Button */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className="clickable"
                        sx={{
                            display: { md: 'none' },
                            position: 'fixed',
                            right: 20,
                            top: 20,
                            backgroundColor: 'rgba(3, 0, 20, 0.7)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
