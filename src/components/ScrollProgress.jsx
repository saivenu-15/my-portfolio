import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

/**
 * ScrollProgress Component
 * Displays a progress bar at the top of the page showing scroll progress
 * Updates in real-time as user scrolls through the page
 */
const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #4d5dfb, #c084fc)',
                transformOrigin: 'left',
                transform: `scaleX(${scrollProgress / 100})`,
                zIndex: 9999,
                boxShadow: '0 0 10px rgba(77, 93, 251, 0.5)',
                transition: 'transform 0.1s ease-out'
            }}
        />
    );
};

export default ScrollProgress;
