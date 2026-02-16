import React from 'react';
import { Box, Typography, Container, Divider, Grid, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box component="footer" sx={{
            py: 8,
            mt: 'auto',
            background: 'linear-gradient(to top, #020010 0%, transparent 100%)',
            position: 'relative'
        }}>
            <Container maxWidth="lg">
                <Divider sx={{ mb: 6, borderColor: 'rgba(255, 255, 255, 0.05)' }} />

                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} md={5}>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                            Let's Build <span className="gradient-text">Something Amazing.</span>
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: '400px', mb: 3 }}>
                            Turning ideas into real-world, scalable applications. Open for internship opportunities.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            {[
                                { icon: <GitHub />, url: "https://github.com/saivenu-15" },
                                { icon: <LinkedIn />, url: "https://www.linkedin.com/in/sai-venu-gopala-swamy-rudramahanathi-6248b3312/" },
                                { icon: <Email />, url: "mailto:rsvgswamy@gmail.com" }
                            ].map((item, idx) => (
                                <IconButton
                                    key={idx}
                                    component="a"
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="clickable"
                                    sx={{
                                        color: 'white',
                                        background: 'rgba(255,255,255,0.05)',
                                        '&:hover': { background: '#4d5dfb' }
                                    }}
                                >
                                    {item.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, alignItems: 'flex-end' }}>
                        <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', mb: 1 }}>
                                Designed & Developed by
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>
                                R. Sai Venu Gopala Swamy
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', mt: 1, display: 'block' }}>
                                © {new Date().getFullYear()} All Rights Reserved.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
