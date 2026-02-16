import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Vary speed for realism
                const increment = Math.floor(Math.random() * 10) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (count === 100) {
            setTimeout(() => {
                onComplete();
            }, 800);
        }
    }, [count, onComplete]);

    return (
        <Box
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 99999,
                backgroundColor: '#030014',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: '4rem', md: '8rem' },
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)',
                        position: 'relative',
                        letterSpacing: '-0.05em'
                    }}
                >
                    {count}%
                    <Box
                        component={motion.span}
                        sx={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            color: '#fff',
                            overflow: 'hidden',
                            width: '100%',
                            height: `${count}%`,
                            display: 'flex',
                            alignItems: 'end',
                            WebkitTextStroke: '0px',
                            transition: 'height 0.1s linear'
                        }}
                    >
                    </Box>
                </Typography>
            </motion.div>

            <Box
                sx={{
                    width: '200px',
                    height: '2px',
                    background: 'rgba(255,255,255,0.1)',
                    mt: 4,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <motion.div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #4d5dfb, #c084fc)',
                        transformOrigin: 'left'
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: count / 100 }}
                />
            </Box>

            <Typography
                variant="overline"
                sx={{
                    mt: 2,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.2em',
                    animation: 'pulse 1.5s infinite'
                }}
            >
                LOADING EXPERIENCE...
            </Typography>
        </Box>
    );
};

export default Preloader;
