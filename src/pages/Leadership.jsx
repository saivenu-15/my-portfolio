import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { leadership } from '../data/leadership';
import * as Icons from '@mui/icons-material';
import { motion } from 'framer-motion';

const Leadership = () => {
    return (
        <Box id="leadership" sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, sm: 3, md: 0 }, backgroundColor: 'rgba(192, 132, 252, 0.02)' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom color="primary.main" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } }}>
                    Leadership & Responsibility
                </Typography>
                <Typography variant="body1" align="center" color="rgba(255,255,255,0.6)" sx={{ mb: { xs: 4, md: 6 }, maxWidth: '700px', mx: 'auto', fontSize: { xs: '0.9rem', md: '1rem' }, px: { xs: 2, sm: 0 } }}>
                    Roles and responsibilities that helped me develop teamwork, discipline, and leadership skills.
                </Typography>

                {/* Vertical Card Structure */}
                <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
                    {leadership.map((role, index) => {
                        const IconComponent = Icons[role.icon] || Icons.Star;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card sx={{
                                    mb: 2.5,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 24px rgba(77, 93, 251, 0.15)'
                                    }
                                }}>
                                    <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 1.5, md: 2.5 }, flexDirection: { xs: 'column', sm: 'row' } }}>
                                            {/* Icon */}
                                            <Box sx={{
                                                p: 1.5,
                                                borderRadius: 2,
                                                backgroundColor: 'rgba(77, 93, 251, 0.15)',
                                                color: 'primary.main',
                                                display: 'flex',
                                                flexShrink: 0
                                            }}>
                                                <IconComponent sx={{ fontSize: '1.75rem' }} />
                                            </Box>

                                            {/* Content */}
                                            <Box sx={{ flex: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2, mb: 1 }}>
                                                    <Box>
                                                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                                            {role.title}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                                                            {role.organization}
                                                        </Typography>
                                                    </Box>
                                                    <Chip
                                                        label={role.duration}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: 'rgba(192, 132, 252, 0.15)',
                                                            color: '#c084fc',
                                                            fontWeight: 600,
                                                            fontSize: '0.75rem'
                                                        }}
                                                    />
                                                </Box>
                                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: { xs: '0.85rem', md: '0.875rem' } }}>
                                                    {role.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default Leadership;
