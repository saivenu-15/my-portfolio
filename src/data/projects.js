import cropDiseaseImg from '../assets/images/crop-disease.png';
import expenseTrackerImg from '../assets/images/expense-tracker.png';
import financeClubImg from '../assets/images/finance-club.png';

export const projects = [
    {
        title: 'AI-Driven Crop Disease Detection System',
        description: 'Detects diseases in rice and pulse crops using plant leaf images. Trained a CNN model with 300-400 real plant images achieving 68% accuracy. Built an interactive Streamlit web app for image upload & prediction in a 22-member collaborative team.',
        tech: 'Python, PyTorch, CNN, Streamlit, Image Classification',
        github: 'https://github.com/Springboard-Internship-2025/AI-Driven-Web-Application-for-Automated-Disease-Detection-in-Rice-and-Pulse-Crops_Nov_Batch-6_2025/tree/sai-venu-gopala-swamy-rudramahanthi',
        live: 'https://cropdiseasedetection-ayw7ruufuizvvzidh4ig2j.streamlit.app/',
        role: 'AI / Full-Stack Developer',
        color: 'from-green-400 to-emerald-600',
        gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        icon: 'Agriculture',
        image: cropDiseaseImg
    },
    {
        title: 'Full-Stack Expense Tracker',
        description: 'A personal finance web application to track daily expenses with secure JWT-based authentication. Features include add, view, and manage expenses with a REST API-based architecture using MongoDB Atlas for persistent storage.',
        tech: 'Node.js, Express.js, MongoDB, React, JWT, REST API',
        github: 'https://github.com/saivenu-15/expense-tracker-mern',
        live: 'https://tangerine-yeot-2e336c.netlify.app',
        liveUrl: 'https://tangerine-yeot-2e336c.netlify.app',
        role: 'Full-Stack Developer',
        color: 'from-blue-400 to-indigo-600',
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
        icon: 'AccountBalanceWallet',
        image: expenseTrackerImg
    },
    {
        title: 'Finance Club Website',
        description: 'A responsive website for the college Finance Club built with vanilla HTML, CSS, and JavaScript. Features include club information, event listings, member profiles, and financial resources. This was my first web development project, showcasing fundamental web technologies.',
        tech: 'HTML, CSS, JavaScript',
        github: 'https://github.com/saivenu-15/Finance-Club',
        live: 'https://unique-praline-5099bd.netlify.app/',
        role: 'Frontend Developer',
        color: 'from-purple-400 to-pink-600',
        gradient: 'linear-gradient(135deg, #a855f7 0%, #db2777 100%)',
        icon: 'AccountBalance',
        image: financeClubImg
    },
];
