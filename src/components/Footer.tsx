import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Laser Stack</h3>
                        <p>
                            Partnering with global leaders to deliver scalable, secure solutions.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="about" smooth={true} duration={500} className="cursor-pointer">About Us</Link></li>
                            <li><Link to="services" smooth={true} duration={500} className="cursor-pointer">Services</Link></li>
                            <li><Link to="expertise" smooth={true} duration={500} className="cursor-pointer">Expertise</Link></li>
                            <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li>Web Development</li>
                            <li>Mobile Apps</li>
                            <li>DevOps</li>
                            <li>CloudSecOps</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Laser Stack Software Solutions Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
