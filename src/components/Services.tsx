import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Cloud, CheckCircle, ShieldCheck } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Core <span className="gradient-text">Services</span></h2>
                    <p className="section-subtitle">
                        Comprehensive digital solutions tailored to your business needs.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="services-grid"
                >
                    {/* Web Development */}
                    <motion.div variants={item} className="service-card">
                        <div className="service-icon">
                            <Monitor size={28} />
                        </div>
                        <h3 className="service-title">Web Development</h3>
                        <p className="service-desc">
                            Modern, responsive, and high-performance web applications built with the latest technologies.
                        </p>
                        <ul className="service-features">
                            <li><CheckCircle size={16} /> Single Page Applications (SPA)</li>
                            <li><CheckCircle size={16} /> Progressive Web Apps (PWA)</li>
                            <li><CheckCircle size={16} /> Enterprise Portals</li>
                            <li><CheckCircle size={16} /> E-commerce Solutions</li>
                        </ul>
                    </motion.div>

                    {/* Mobile Development */}
                    <motion.div variants={item} className="service-card">
                        <div className="service-icon">
                            <Smartphone size={28} />
                        </div>
                        <h3 className="service-title">Mobile Development</h3>
                        <p className="service-desc">
                            Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.
                        </p>
                        <ul className="service-features">
                            <li><CheckCircle size={16} /> React Native & Flutter</li>
                            <li><CheckCircle size={16} /> iOS & Android Native</li>
                            <li><CheckCircle size={16} /> App Store Optimization</li>
                            <li><CheckCircle size={16} /> Mobile UI/UX Design</li>
                        </ul>
                    </motion.div>

                    {/* DevOps & CloudSecOps */}
                    <motion.div variants={item} className="service-card">
                        <span className="highlight-badge">Core Expertise</span>
                        <div className="service-icon">
                            <Cloud size={28} />
                        </div>
                        <h3 className="service-title">DevOps & CloudSecOps</h3>
                        <p className="service-desc">
                            Secure, scalable, and automated infrastructure to accelerate your deployment and ensure reliability.
                        </p>
                        <ul className="service-features">
                            <li><ShieldCheck size={16} /> Cloud Security & Compliance</li>
                            <li><CheckCircle size={16} /> CI/CD Pipelines</li>
                            <li><CheckCircle size={16} /> Infrastructure as Code</li>
                            <li><CheckCircle size={16} /> 24/7 Monitoring & Support</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
