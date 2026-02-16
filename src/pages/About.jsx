import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Box id="about" sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, sm: 3, md: 0 }, position: 'relative', overflow: 'hidden' }}>
            {/* Background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(77, 93, 251, 0.05) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    zIndex: 0
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: 4, md: 6 }, gap: { xs: 1, md: 2 }, flexWrap: 'wrap' }}>
                        <Box sx={{ height: '2px', width: '50px', background: 'linear-gradient(90deg, transparent, #4d5dfb)' }} />
                        <Typography variant="h2" align="center" color="primary.main" sx={{ fontWeight: 800, letterSpacing: '-1px', fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } }}>
                            About <span className="gradient-text">Me</span>
                        </Typography>
                        <Box sx={{ height: '2px', width: '50px', background: 'linear-gradient(90deg, #c084fc, transparent)' }} />
                    </Box>

                    <Box sx={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        p: { xs: 2.5, sm: 4, md: 6 },
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        position: 'relative'
                    }}>
                        {/* Quote decoration */}
                        <Typography
                            variant="h1"
                            sx={{
                                position: 'absolute',
                                top: { xs: -10, md: -20 },
                                left: { xs: 10, md: 20 },
                                fontSize: { xs: '5rem', md: '8rem' },
                                color: 'rgba(77, 93, 251, 0.1)',
                                fontFamily: 'serif',
                                lineHeight: 0.5,
                                pointerEvents: 'none'
                            }}
                        >
                            "
                        </Typography>

                        <Typography variant="body1" align="center" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: { xs: '0.95rem', md: '1.2rem' }, lineHeight: 1.7, mb: 3 }}>
                            I'm <strong style={{ color: '#fff' }}>R. Sai Venu Gopala Swamy</strong>, a Computer Science undergraduate (Expected 2028) from <strong style={{ color: '#fff' }}>RGUKT Srikakulam</strong>.
                            I'm a <span className="gradient-text" style={{ fontWeight: 700 }}>Software Engineer Intern aspirant</span> with a strong interest in full-stack web development and AI-based applications.
                        </Typography>

                        <Typography variant="body1" align="center" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: { xs: '0.95rem', md: '1.2rem' }, lineHeight: 1.7, mb: 3 }}>
                            I enjoy building <strong>real-world applications</strong>, understanding how systems work end-to-end, and continuously improving my problem-solving and development skills.
                        </Typography>

                        <Typography variant="body1" align="center" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.9rem', md: '1.1rem' }, fontStyle: 'italic', position: 'relative', display: 'inline-block', width: '100%' }}>
                            <span style={{ borderBottom: '2px solid rgba(77, 93, 251, 0.3)', paddingBottom: '4px' }}>
                                I believe in <strong>learning by building</strong> — not just watching tutorials.
                            </span>
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About;
