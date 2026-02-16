import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <Box id="projects" sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, sm: 3, md: 0 }, backgroundColor: 'rgba(77, 93, 251, 0.01)' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom color="primary.main" sx={{ fontWeight: 700, mb: { xs: 2, md: 3 }, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }, px: { xs: 2, sm: 0 } }}>
                    Featured Projects
                </Typography>
                <Typography variant="body1" align="center" color="rgba(255,255,255,0.6)" sx={{ mb: { xs: 4, md: 6 }, maxWidth: '700px', mx: 'auto', fontSize: { xs: '0.9rem', md: '1rem' }, px: { xs: 2, sm: 0 } }}>
                    Real-world applications I've built to solve practical problems and strengthen my development skills.
                </Typography>
                <Grid container spacing={{ xs: 3, md: 4 }}>
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
