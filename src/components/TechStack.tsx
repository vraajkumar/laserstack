import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';

const TechStack: React.FC = () => {
    const clouds = [
        {
            name: 'AWS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
        },
        {
            name: 'Azure',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg'
        },
        {
            name: 'GCP',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
        },
        {
            name: 'Digital Ocean',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg'
        },
        {
            name: 'Vercel',
            logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png'
        },
        {
            name: 'Railway',
            logo: 'https://railway.app/brand/logo-dark.svg'
        },
    ];

    return (
        <section id="expertise" className="section expertise-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Cloud & DevOps Expertise</h2>
                    <p className="section-subtitle">
                        We leverage top-tier cloud providers to build resilient infrastructure.
                    </p>
                </div>

                <div className="tech-grid">
                    {clouds.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="tech-card"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={tech.logo} alt={tech.name} className="tech-logo" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
