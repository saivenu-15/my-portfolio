import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4d5dfb', // Vibrant Blue
        },
        secondary: {
            main: '#c084fc', // Light Purple
        },
        background: {
            default: '#030014', // Darker background
            paper: 'rgba(255, 255, 255, 0.03)', // Slimmer glass
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.5rem',
        },
        body1: {
            fontSize: '1.1rem',
            lineHeight: 1.6,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    textTransform: 'none',
                    padding: '10px 25px',
                    fontWeight: 600,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 20,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
});

export default theme;
