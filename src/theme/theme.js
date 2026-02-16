import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
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
            fontWeight: 800,
            letterSpacing: '-0.02em',
            '@media (max-width:600px)': {
                fontSize: '2.2rem',
            },
        },
        h2: {
            fontWeight: 700,
            letterSpacing: '-0.01em',
            marginBottom: '1rem',
            '@media (max-width:600px)': {
                fontSize: '1.8rem',
            },
        },
        h3: {
            fontWeight: 700,
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.8)',
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    '@media (min-width: 600px)': {
                        paddingLeft: '32px',
                        paddingRight: '32px',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    textTransform: 'none',
                    padding: '8px 24px',
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

theme = responsiveFontSizes(theme);

export default theme;
