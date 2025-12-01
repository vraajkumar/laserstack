import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        honeypot: '' // Hidden field for bots
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Spam Check
        if (formData.honeypot) {
            console.log('Bot detected!');
            return;
        }

        if (!formRef.current) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
            // Sign up at https://www.emailjs.com/
            const SERVICE_ID = 'YOUR_SERVICE_ID';
            const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
            const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '', honeypot: '' });
            alert('Message sent successfully! We will get back to you soon.');
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            alert('Failed to send message. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-container"
                >
                    <div className="contact-info">
                        <h2>Let's Build Something Amazing</h2>
                        <p>
                            Have a project in mind? We'd love to hear from you.
                            Partner with us to transform your digital presence.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Mail size={24} />
                                </div>
                                {/* Obfuscated Email Display */}
                                <span>contact<span style={{ display: 'none' }}>-remove-this-</span>@laserstack.com</span>
                            </div>
                        </div>
                    </div>

                    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                        {/* Honeypot Field */}
                        <div style={{ display: 'none' }}>
                            <input
                                type="text"
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name" // Must match EmailJS template variable {{name}}
                                className="form-input"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email" // Must match EmailJS template variable {{email}}
                                className="form-input"
                                placeholder="your@email.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea
                                name="message" // Must match EmailJS template variable {{message}}
                                className="form-textarea"
                                placeholder="Tell us about your project..."
                                required
                                value={formData.message}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>Sending... <Loader2 className="animate-spin" size={18} style={{ marginLeft: '8px' }} /></>
                            ) : (
                                <>Send Message <Send size={18} style={{ marginLeft: '8px' }} /></>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

