import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, IconButton } from '@mui/material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email, ArrowDownward } from '@mui/icons-material';
import profileImg from '../assets/images/profile.JPG';

const TypewriterText = ({ text, delay = 50 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

const Home = () => {
    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                pt: { xs: 10, md: 0 }
            }}
        >
            {/* Animated Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '30vw',
                    height: '30vw',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(77, 93, 251, 0.1) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    animation: 'float 10s ease-in-out infinite',
                    zIndex: 0
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '40vw',
                    height: '40vw',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    animation: 'float 15s ease-in-out infinite reverse',
                    zIndex: 0
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <Box sx={{ display: 'inline-block', px: 2, py: 0.5, mb: 3, borderRadius: '50px', border: '1px solid rgba(77, 93, 251, 0.5)', background: 'rgba(77, 93, 251, 0.1)' }}>
                                <Typography variant="body2" color="#4d5dfb" sx={{ fontWeight: 600, letterSpacing: 1 }}>
                                    WELCOME TO MY PORTFOLIO
                                </Typography>
                            </Box>

                            <Typography variant="h1" gutterBottom sx={{ color: '#fff', fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 800, lineHeight: 1.1 }}>
                                Hi, I'm <br />
                                <span className="gradient-text" style={{ display: 'inline-block' }}>
                                    Sai Venu
                                </span>
                            </Typography>

                            <Typography variant="h5" sx={{ mb: 4, maxWidth: '650px', fontWeight: 500, color: 'rgba(255,255,255,0.8)', height: '1.5em' }}>
                                <TypewriterText text="Software Engineer Intern Aspirant | Full-Stack Developer" />
                            </Typography>

                            <Typography variant="body1" color="rgba(255, 255, 255, 0.5)" sx={{ mb: 5, maxWidth: '600px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                CSE Undergraduate @ RGUKT Srikakulam (2028). Passionate about building scalable, user-centric interfaces and exploring the frontiers of AI.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    component={Link}
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '50px',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        background: 'linear-gradient(90deg, #4d5dfb, #c084fc)',
                                        boxShadow: '0 0 20px rgba(77, 93, 251, 0.4)',
                                        textTransform: 'none',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 0 40px rgba(77, 93, 251, 0.6)',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    View My Work
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component={Link}
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '50px',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        borderColor: 'rgba(255,255,255,0.2)',
                                        color: '#fff',
                                        textTransform: 'none',
                                        '&:hover': {
                                            borderColor: '#fff',
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    Contact Me
                                </Button>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {[
                                    { icon: <GitHub />, url: "https://github.com/saivenu-15" },
                                    { icon: <LinkedIn />, url: "https://www.linkedin.com/in/sai-venu-gopala-swamy-rudramahanathi-6248b3312/" },
                                    { icon: <Email />, url: "mailto:rsvgswamy@gmail.com" }
                                ].map((item, index) => (
                                    <IconButton
                                        key={index}
                                        component="a"
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'rgba(255,255,255,0.6)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                color: '#fff',
                                                borderColor: '#4d5dfb',
                                                background: 'rgba(77, 93, 251, 0.1)',
                                                transform: 'translateY(-3px)'
                                            }
                                        }}
                                    >
                                        {item.icon}
                                    </IconButton>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                {/* Rotating Border container */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: '-10px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(45deg, #4d5dfb, transparent, #c084fc, transparent)',
                                        zIndex: 0,
                                        animation: 'rotate-border 4s linear infinite',
                                    }}
                                />

                                {/* Glow effect behind */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        background: 'radial-gradient(circle, rgba(77, 93, 251, 0.4) 0%, transparent 70%)',
                                        filter: 'blur(40px)',
                                        zIndex: 0,
                                        animation: 'pulse-glow 3s infinite'
                                    }}
                                />

                                {/* Avatar Container */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: { xs: '280px', md: '400px' },
                                        height: { xs: '280px', md: '400px' },
                                        borderRadius: '50%',
                                        padding: '6px',
                                        background: 'rgba(3, 0, 20, 0.5)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        zIndex: 1,
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={profileImg}
                                        alt="Profile"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '50%',
                                            transition: 'transform 0.5s ease',
                                            '&:hover': { transform: 'scale(1.05)' }
                                        }}
                                    />
                                </Box>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '40px',
                                        right: '20px',
                                        padding: '12px 20px',
                                        background: 'rgba(3, 0, 20, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(192, 132, 252, 0.3)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                        zIndex: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#4CAF50', boxShadow: '0 0 10px #4CAF50' }} />
                                    <Typography variant="caption" sx={{ color: '#fff', fontWeight: 700 }}>
                                        Open to Work
                                    </Typography>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* Scroll Down Indicator */}
            <Box
                component={Link}
                to="about"
                smooth={true}
                duration={500}
                sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    opacity: 0.7,
                    transition: 'opacity 0.3s',
                    '&:hover': { opacity: 1 }
                }}
            >
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: 2, fontSize: '0.7rem' }}>
                    SCROLL DOWN
                </Typography>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDownward sx={{ color: '#fff' }} />
                </motion.div>
            </Box>
        </Box>
    );
};

export default Home;
