import React from 'react';
import { Card, Box, Typography } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { motion } from 'framer-motion';

const SkillCard = ({ name, icon }) => {
    const IconComponent = Icons[icon] || Icons.Code;

    return (
        <motion.div
            whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ height: '100%', perspective: '1000px' }}
        >
            <Card
                sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5,
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(77, 93, 251, 0.1), rgba(192, 132, 252, 0.1))',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 0
                    },
                    '&:hover': {
                        borderColor: 'rgba(77, 93, 251, 0.3)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        '&:before': { opacity: 1 },
                        '& .icon-box': {
                            transform: 'scale(1.1) rotate(5deg)',
                            background: 'linear-gradient(135deg, #4d5dfb, #c084fc)',
                            color: '#fff',
                            boxShadow: '0 0 20px rgba(77, 93, 251, 0.4)'
                        }
                    },
                }}
            >
                <Box
                    className="icon-box"
                    sx={{
                        p: 1.5,
                        borderRadius: '12px',
                        backgroundColor: 'rgba(77, 93, 251, 0.1)',
                        color: '#4d5dfb',
                        display: 'flex',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    <IconComponent sx={{ fontSize: '1.8rem' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', position: 'relative', zIndex: 1 }}>
                    {name}
                </Typography>
            </Card>
        </motion.div>
    );
};

export default SkillCard;
