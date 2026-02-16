import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!prefersReducedMotion && <CustomCursor />}

      {!loading && (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', opacity: 1, transition: 'opacity 1s ease', overflowX: 'hidden' }}>
          <ScrollProgress />
          <Navbar />
          <Box component="main">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Leadership />
            <Contact />
          </Box>
          <Footer />
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
