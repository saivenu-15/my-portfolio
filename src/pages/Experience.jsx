import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { experience } from '../data/experience';
import { Business, EmojiEvents, Circle } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <Box id="experience" sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, sm: 3, md: 0 }, position: 'relative' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } }}>
                    Experience & <span className="gradient-text">Achievements</span>
                </Typography>
                <Typography variant="body1" align="center" color="rgba(255,255,255,0.6)" sx={{ mb: { xs: 4, md: 8 }, maxWidth: '700px', mx: 'auto', fontSize: { xs: '0.9rem', md: '1rem' }, px: { xs: 2, sm: 0 } }}>
                    Internships, hackathons, and hands-on learning experiences that shaped my development journey.
                </Typography>

                <Box sx={{ maxWidth: '900px', mx: 'auto', position: 'relative' }}>
                    {/* Timeline Line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: { xs: '20px', md: '50%' },
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: 'linear-gradient(to bottom, #4d5dfb, #c084fc, transparent)',
                            transform: { xs: 'none', md: 'translateX(-50%)' },
                            zIndex: 0
                        }}
                    />

                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                    alignItems: 'center',
                                    mb: 6,
                                    position: 'relative'
                                }}
                            >
                                {/* Timeline Dot */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: { xs: '20px', md: '50%' },
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '50%',
                                        background: '#030014',
                                        border: '4px solid #4d5dfb',
                                        transform: 'translateX(-50%)',
                                        zIndex: 1,
                                        boxShadow: '0 0 10px rgba(77, 93, 251, 0.5)'
                                    }}
                                />

                                {/* Content Spacer for Desktop */}
                                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />

                                {/* Card Content */}
                                <Box sx={{ flex: 1, width: '100%', pl: { xs: 5, md: index % 2 === 0 ? 0 : 6 }, pr: { xs: 0, md: index % 2 === 0 ? 6 : 0 } }}>
                                    <Card
                                        sx={{
                                            position: 'relative',
                                            overflow: 'visible',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '16px',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                                borderColor: 'rgba(77, 93, 251, 0.3)'
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 1 }}>
                                                <Box sx={{
                                                    p: 1,
                                                    borderRadius: '10px',
                                                    backgroundColor: 'rgba(77, 93, 251, 0.15)',
                                                    color: '#4d5dfb',
                                                    display: 'flex'
                                                }}>
                                                    {exp.type === 'Virtual Internship' ? <Business fontSize="small" /> : <EmojiEvents fontSize="small" />}
                                                </Box>
                                                <Chip
                                                    label={exp.duration}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: 'rgba(192, 132, 252, 0.1)',
                                                        color: '#c084fc',
                                                        fontWeight: 600,
                                                        fontSize: '0.75rem',
                                                        border: '1px solid rgba(192, 132, 252, 0.2)'
                                                    }}
                                                />
                                            </Box>

                                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                                {exp.role}
                                            </Typography>
                                            <Typography variant="subtitle2" sx={{ color: '#4d5dfb', fontWeight: 600, mb: 2, fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                                                {exp.organization}
                                            </Typography>

                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: { xs: '0.85rem', md: '0.875rem' } }}>
                                                {exp.description}
                                            </Typography>

                                            {exp.achievements && exp.achievements.length > 0 && (
                                                <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                                    {exp.achievements.map((achievement, i) => (
                                                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mt: 1 }}>
                                                            <Circle sx={{ fontSize: 6, color: '#4d5dfb', mt: 1, flexShrink: 0 }} />
                                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                                                                {achievement}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Box>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Experience;
