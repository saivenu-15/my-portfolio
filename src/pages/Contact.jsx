import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Alert, CircularProgress, Card, IconButton, Chip } from '@mui/material';
import { Send, GitHub, LinkedIn, Email, LocationOn } from '@mui/icons-material';
import { sendEmail } from '../services/emailService';
import { motion } from 'framer-motion';

const intentOptions = [
    'Interested in Hiring',
    'Project Collaboration',
    'Some Chit-Chat',
    'Technical Discussion',
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', intent: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleIntentClick = (intent) => {
        setFormData({ ...formData, intent });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            await sendEmail({ ...formData, message: `Intent: ${formData.intent}\n\n${formData.message}` });
            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', message: '', intent: '' });
        } catch (err) {
            setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
        }
    };

    const CustomInput = (props) => (
        <TextField
            fullWidth
            variant="outlined"
            {...props}
            sx={{
                '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#fff',
                    '& fieldset': { border: 'none' },
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
                    },
                    '&.Mui-focused': {
                        backgroundColor: 'rgba(5, 5, 20, 0.8)',
                        boxShadow: '0 0 0 2px rgba(77, 93, 251, 0.4), 0 10px 40px rgba(77, 93, 251, 0.2)',
                        transform: 'scale(1.01)',
                    }
                },
                '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.5)',
                    transition: 'all 0.3s ease',
                    '&.Mui-focused': { color: '#c084fc', transform: 'translate(14px, -9px) scale(0.75)' }
                },
                '& .MuiInputBase-input': {
                    fontWeight: 500,
                    letterSpacing: '0.02em'
                },
                ...props.sx
            }}
        />
    );

    return (
        <Box id="contact" sx={{ py: 20, position: 'relative', overflow: 'hidden' }}>
            {/* Background Flair */}
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '20%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(77, 93, 251, 0.05) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: 12, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h2" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-0.02em', mb: 3 }}>
                            Ready to <span className="gradient-text">Collaborate?</span>
                        </Typography>
                        <Typography variant="body1" color="rgba(255,255,255,0.6)" sx={{ maxWidth: '600px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                            Searching for a robust, scalable frontend solution? Or maybe just want to say hi? I'm always open to discussing new ideas and opportunities.
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={8}>
                    {/* Contact Info */}
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 5, color: '#fff', borderLeft: '4px solid #4d5dfb', pl: 3 }}>
                                    Contact Details
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    {[
                                        { icon: <Email />, label: 'Email Me', value: 'rsvgswamy@gmail.com', href: 'mailto:rsvgswamy@gmail.com', color: '#c084fc' },
                                        { icon: <LocationOn />, label: 'Based In', value: 'Srikakulam, Andhra Pradesh, India', color: '#4d5dfb' }
                                    ].map((item, index) => (
                                        <Box key={index} sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4,
                                            p: 3,
                                            borderRadius: '20px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                background: 'rgba(255,255,255,0.05)',
                                                transform: 'translateY(-5px)',
                                                borderColor: item.color
                                            }
                                        }}>
                                            <Box sx={{
                                                p: 2,
                                                borderRadius: '16px',
                                                background: `linear-gradient(135deg, ${item.color}20, transparent)`,
                                                color: item.color,
                                                boxShadow: `0 8px 20px ${item.color}20`
                                            }}>
                                                {item.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', mb: 0.5 }}>
                                                    {item.label}
                                                </Typography>
                                                {item.href ? (
                                                    <Typography
                                                        component="a"
                                                        href={item.href}
                                                        variant="h6"
                                                        sx={{ color: '#fff', textDecoration: 'none', fontWeight: 600, '&:hover': { color: item.color } }}
                                                    >
                                                        {item.value}
                                                    </Typography>
                                                ) : (
                                                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>{item.value}</Typography>
                                                )}
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>

                                <Box sx={{ mt: 8 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#fff', textAlign: 'center' }}>
                                        Follow My Journey
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                        {[
                                            { icon: <GitHub />, url: "https://github.com/saivenu-15" },
                                            { icon: <LinkedIn />, url: "https://www.linkedin.com/in/sai-venu-gopala-swamy-rudramahanathi-6248b3312/" }
                                        ].map((social, index) => (
                                            <IconButton
                                                key={index}
                                                component="a"
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="clickable"
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                    color: '#fff',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    '&:hover': {
                                                        backgroundColor: '#4d5dfb',
                                                        transform: 'translateY(-5px) scale(1.1)',
                                                        boxShadow: '0 10px 30px rgba(77, 93, 251, 0.4)'
                                                    },
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            >
                                                {social.icon}
                                            </IconButton>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card sx={{
                                p: { xs: 4, md: 6 },
                                background: 'rgba(255, 255, 255, 0.01)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '32px',
                                boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Form decorative glow */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '300px',
                                    height: '300px',
                                    background: 'radial-gradient(circle at 100% 0%, rgba(192, 132, 252, 0.1), transparent 70%)',
                                    pointerEvents: 'none'
                                }} />

                                {status.success && (
                                    <Alert severity="success" sx={{ mb: 4, borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid #10b981' }}>
                                        Message sent successfully! I'll get back to you shortly. 🚀
                                    </Alert>
                                )}
                                {status.error && (
                                    <Alert severity="error" sx={{ mb: 4, borderRadius: '16px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444' }}>
                                        {status.error}
                                    </Alert>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <Box sx={{ mb: 5 }}>
                                        <Typography variant="overline" sx={{ mb: 2.5, color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '0.1em', display: 'block' }}>
                                            I'D LIKE TO DISCUSS...
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                            {intentOptions.map((intent) => (
                                                <Chip
                                                    key={intent}
                                                    label={intent}
                                                    onClick={() => handleIntentClick(intent)}
                                                    className="clickable"
                                                    sx={{
                                                        height: '42px',
                                                        px: 1,
                                                        backgroundColor: formData.intent === intent ? '#4d5dfb' : 'rgba(255, 255, 255, 0.03)',
                                                        color: formData.intent === intent ? '#fff' : 'rgba(255,255,255,0.6)',
                                                        border: formData.intent === intent ? '1px solid #4d5dfb' : '1px solid rgba(255, 255, 255, 0.08)',
                                                        fontWeight: formData.intent === intent ? 700 : 500,
                                                        fontSize: '0.9rem',
                                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        '&:hover': {
                                                            backgroundColor: formData.intent === intent ? '#3b4bda' : 'rgba(255, 255, 255, 0.08)',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: formData.intent === intent ? '0 10px 20px -5px rgba(77, 93, 251, 0.4)' : 'none'
                                                        },
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    <Grid container spacing={4}>
                                        <Grid item xs={12} sm={6}>
                                            <CustomInput
                                                label="Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <CustomInput
                                                label="Email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <CustomInput
                                                label="Your Message"
                                                name="message"
                                                multiline
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                endIcon={status.loading ? <CircularProgress size={24} color="inherit" /> : <Send />}
                                                disabled={status.loading || !formData.intent}
                                                fullWidth
                                                className="clickable"
                                                sx={{
                                                    py: 2.2,
                                                    borderRadius: '16px',
                                                    fontWeight: 800,
                                                    letterSpacing: '0.05em',
                                                    textTransform: 'uppercase',
                                                    fontSize: '1rem',
                                                    background: 'linear-gradient(90deg, #4d5dfb, #c084fc)',
                                                    boxShadow: '0 10px 30px rgba(77, 93, 251, 0.3)',
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    '&:hover': {
                                                        boxShadow: '0 20px 40px rgba(77, 93, 251, 0.5)',
                                                        transform: 'translateY(-3px) scale(1.02)'
                                                    },
                                                    '&:disabled': {
                                                        background: 'rgba(255,255,255,0.05)',
                                                        color: 'rgba(255,255,255,0.2)'
                                                    }
                                                }}
                                            >
                                                {status.loading ? 'Sending...' : 'Send Message'}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
