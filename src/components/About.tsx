import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Briefcase, Award } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-content"
                    >
                        <h2>
                            Global Experience, <br />
                            <span className="gradient-text">Local Commitment</span>
                        </h2>
                        <p>
                            Our foundation is built on decades of industry experience.
                            We don't just write code; we build relationships and partner with you to take your business to the next level.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Serving Clients In:</h3>
                            <div className="regions-list">
                                <span className="region-tag">North America</span>
                                <span className="region-tag">Europe</span>
                                <span className="region-tag">South-East Asia</span>
                                <span className="region-tag">India</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Domain Expertise:</h3>
                            <div className="regions-list">
                                <span className="region-tag">Retail</span>
                                <span className="region-tag">Banking</span>
                                <span className="region-tag">Insurance</span>
                                <span className="region-tag">Consumer Electronics</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="stats-grid"
                    >
                        <div className="stat-card">
                            <div className="stat-icon"><Briefcase size={28} /></div>
                            <div className="stat-number">20+</div>
                            <div className="stat-label">Years Experience</div>
                            <div className="stat-desc">In Software Industry</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><Globe size={28} /></div>
                            <div className="stat-number">4</div>
                            <div className="stat-label">Continents</div>
                            <div className="stat-desc">Global Client Base</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><Award size={28} /></div>
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Commitment</div>
                            <div className="stat-desc">To Your Success</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><Users size={28} /></div>
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support</div>
                            <div className="stat-desc">Always Available</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
