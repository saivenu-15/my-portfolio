import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { skills } from '../data/skills';
import * as Icons from '@mui/icons-material';
import { motion } from 'framer-motion';

const Skills = () => {
    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        const category = skill.category || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {});

    // Category display order and colors
    const categories = [
        { name: 'Languages', color: '#3b82f6' }, // Blue
        { name: 'Web', color: '#ec4899' },       // Pink
        { name: 'Backend', color: '#10b981' },   // Green
        { name: 'AI/ML', color: '#8b5cf6' },     // Purple
        { name: 'Tools', color: '#f59e0b' }      // Amber
    ];

    const IconWrapper = ({ iconName, fontSize = 'medium' }) => {
        const Icon = Icons[iconName] || Icons.Circle;
        return <Icon sx={{ fontSize: fontSize }} />;
    };

    return (
        <Box id="skills" sx={{ py: 10, position: 'relative' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } }}>
                    Technical <span className="gradient-text">Skills</span>
                </Typography>
                <Typography variant="body1" align="center" color="rgba(255,255,255,0.6)" sx={{ mb: 8, maxWidth: '700px', mx: 'auto' }}>
                    A comprehensive overview of my technical expertise and toolset.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {categories.map((category, index) => (
                        <Grid item xs={12} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Box sx={{ mb: 6 }}>
                                    {/* Category Title */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                        <Box sx={{
                                            width: 4,
                                            height: 32,
                                            backgroundColor: category.color,
                                            borderRadius: '4px',
                                            boxShadow: `0 0 15px ${category.color}`
                                        }} />
                                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#fff' }}>
                                            {category.name}
                                        </Typography>
                                    </Box>

                                    {/* Skills Grid */}
                                    <Grid container spacing={3}>
                                        {skillsByCategory[category.name]?.map((skill, idx) => (
                                            <Grid item xs={6} sm={4} md={3} lg={2} key={idx}>
                                                <Paper
                                                    elevation={0}
                                                    sx={{
                                                        p: { xs: 2, sm: 3 },
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: { xs: 1.5, sm: 2 },
                                                        background: 'rgba(255, 255, 255, 0.03)',
                                                        backdropFilter: 'blur(10px)',
                                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                                        borderRadius: '20px',
                                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                        minWidth: 0, // Prevent flex items from overflowing
                                                        width: '100%',
                                                        '&:hover': {
                                                            transform: 'translateY(-8px)',
                                                            borderColor: category.color,
                                                            boxShadow: `0 10px 40px -10px ${category.color}40`,
                                                            '& .skill-icon': {
                                                                color: category.color,
                                                                transform: 'scale(1.2)'
                                                            }
                                                        }
                                                    }}
                                                >
                                                    {/* Background Glow */}
                                                    <Box
                                                        sx={{
                                                            position: 'absolute',
                                                            top: '-50%',
                                                            left: '-50%',
                                                            width: '200%',
                                                            height: '200%',
                                                            background: `radial-gradient(circle, ${category.color}10 0%, transparent 60%)`,
                                                            opacity: 0,
                                                            transition: 'opacity 0.3s ease',
                                                            zIndex: 0,
                                                            '.MuiPaper-root:hover &': {
                                                                opacity: 1
                                                            }
                                                        }}
                                                    />

                                                    {/* Animated Icon */}
                                                    <Box
                                                        className="skill-icon"
                                                        sx={{
                                                            color: 'rgba(255,255,255,0.7)',
                                                            transition: 'all 0.3s ease',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            height: { xs: 45, sm: 60 },
                                                            zIndex: 1
                                                        }}
                                                    >
                                                        <IconWrapper iconName={skill.icon} fontSize={{ xs: '2.5rem', sm: '3.5rem' }} />
                                                    </Box>

                                                    {/* Skill Name */}
                                                    <Typography
                                                        variant="body1"
                                                        align="center"
                                                        sx={{
                                                            fontWeight: 600,
                                                            color: '#fff',
                                                            zIndex: 1,
                                                            fontSize: { xs: '0.85rem', sm: '1rem' }
                                                        }}
                                                    >
                                                        {skill.name}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
