import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text-col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="hero-badge">
                                Global Expertise
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="hero-title"
                        >
                            Digital <br />
                            Transformation <br />
                            <span style={{ color: 'var(--color-text-light)' }}>Redefined.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hero-subtitle"
                        >
                            We partner with businesses globally to build scalable, secure digital solutions.
                            From CloudSecOps to Mobile innovation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="hero-actions"
                        >
                            <Link to="contact" smooth={true} duration={500} className="btn btn-primary cursor-pointer">
                                Start a Project
                            </Link>
                            <Link to="expertise" smooth={true} duration={500} className="btn btn-outline cursor-pointer">
                                Our Expertise <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="visual-main"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

