import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <Box id="projects" sx={{ py: 10, backgroundColor: 'rgba(77, 93, 251, 0.01)' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom color="primary.main" sx={{ fontWeight: 700, mb: 3 }}>
                    Featured Projects
                </Typography>
                <Typography variant="body1" align="center" color="rgba(255,255,255,0.6)" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}>
                    Real-world applications I've built to solve practical problems and strengthen my development skills.
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{ height: '100%' }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
