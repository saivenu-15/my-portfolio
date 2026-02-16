import emailjs from '@emailjs/browser';

/**
 * Service to handle sending emails via EmailJS
 * 
 * Instructions:
 * 1. Sign up for EmailJS (https://www.emailjs.com/)
 * 2. Create an Email Service, Email Template, and get your Public Key
 * 3. Add these to your .env file:
 *    VITE_EMAILJS_SERVICE_ID=your_service_id
 *    VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *    VITE_EMAILJS_PUBLIC_KEY=your_public_key
 */

export const sendEmail = async (formData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS environment variables are missing. Please check your .env file.');
        // Simulated success for demo purposes if keys are missing
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Faked email sent with data:', formData);
                resolve({ status: 200, text: 'OK' });
            }, 1500);
        });
    }

    try {
        const result = await emailjs.send(
            serviceId,
            templateId,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Sai Venu',
            },
            publicKey
        );
        return result;
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};
