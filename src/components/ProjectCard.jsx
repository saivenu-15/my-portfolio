import React from 'react';
import { Card, CardContent, Typography, Box, Button, Chip } from '@mui/material';
import { GitHub, OpenInNew, Code } from '@mui/icons-material';
import * as MuiIcons from '@mui/icons-material';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tech, github, live, role, gradient, icon, image }) => {
    const techStack = tech.split(',').map(item => item.trim());

    // Dynamic Icon Component
    const IconComponent = MuiIcons[icon] || Code;

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ height: '100%' }}
        >
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    '&:hover': {
                        borderColor: 'rgba(192, 132, 252, 0.3)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    }
                }}
            >
                {/* Image/Gradient Banner */}
                <Box
                    sx={{
                        height: '200px',
                        width: '100%',
                        background: image ? `url(${image})` : gradient || 'linear-gradient(135deg, #4d5dfb, #c084fc)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Overlay if image */}
                    {image && (
                        <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
                    )}

                    {/* Icon (if no image or as overlay) */}
                    {!image && (
                        <IconComponent sx={{ fontSize: '5rem', color: 'rgba(255,255,255,0.8)', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
                    )}

                    {/* Badge */}
                    {role && (
                        <Chip
                            label={role}
                            size="small"
                            sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(4px)',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}
                        />
                    )}
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#fff', mb: 1.5 }}>
                        {title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.6, flexGrow: 1 }}>
                        {description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 3 }}>
                        {techStack.map((skill, index) => (
                            <Chip
                                key={index}
                                label={skill}
                                size="small"
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '0.7rem',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            />
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                        {github && (
                            <Button
                                variant="outlined"
                                startIcon={<GitHub />}
                                href={github}
                                target="_blank"
                                fullWidth
                                sx={{
                                    borderColor: 'rgba(255,255,255,0.2)',
                                    color: '#fff',
                                    '&:hover': {
                                        borderColor: '#fff',
                                        background: 'rgba(255,255,255,0.05)'
                                    }
                                }}
                            >
                                Code
                            </Button>
                        )}
                        {live && (
                            <Button
                                variant="contained"
                                startIcon={<OpenInNew />}
                                href={live}
                                target="_blank"
                                fullWidth
                                sx={{
                                    background: 'linear-gradient(90deg, #4d5dfb, #c084fc)',
                                    color: '#fff',
                                    boxShadow: '0 4px 15px rgba(77, 93, 251, 0.3)',
                                    '&:hover': {
                                        boxShadow: '0 6px 20px rgba(77, 93, 251, 0.5)',
                                    }
                                }}
                            >
                                Demo
                            </Button>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
