import React, { useState } from 'react';
import { ContactPageContent } from '../types';
import ParticlesBackground from '../components/ParticlesBackground';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactPage: React.FC<{ content: ContactPageContent }> = ({ content }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        platform: [] as string[],
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const titleRef = useScrollAnimation<HTMLDivElement>();
    const reasonsRef = useScrollAnimation<HTMLDivElement>({ delay: '150ms' });
    const infoRef = useScrollAnimation<HTMLDivElement>({ delay: '300ms' });
    const formRef = useScrollAnimation<HTMLDivElement>({ delay: '450ms' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePlatformToggle = (option: string) => {
        setFormData(prev => {
            const currentPlatforms = prev.platform;
            const newPlatforms = currentPlatforms.includes(option)
                ? currentPlatforms.filter(p => p !== option)
                : [...currentPlatforms, option];
            return { ...prev, platform: newPlatforms };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setError('');
        setIsSent(false);

        if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone || !formData.message) {
            setError('Please fill out all required fields.');
            setIsSending(false);
            return;
        }

        try {
            const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
            if (!webhookUrl) {
                console.warn("VITE_MAKE_WEBHOOK_URL is not set. Simulating API call.");
                await new Promise(resolve => setTimeout(resolve, 1500));
            } else {
                 const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...formData, source: 'Contact Form' })
                });
                if (!response.ok) throw new Error('Network response was not ok.');
            }
            
            setIsSent(true);
            setFormData({
                companyName: '',
                contactPerson: '',
                email: '',
                phone: '',
                platform: [],
                message: ''
            });

        } catch (err) {
            setError('Failed to send message. Please try again later.');
            console.error(err);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact-us" className="relative py-16 bg-brand-white">
            <ParticlesBackground id="particles-contact" />
            <div className="relative container mx-auto px-6 z-20">
                
                <div ref={titleRef} className="scroll-animate text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">{content.pageTitle}</h2>
                    <p className="text-gray-600 mt-4 text-lg whitespace-pre-line">{content.intro}</p>
                </div>
                
                <div ref={reasonsRef} className="scroll-animate max-w-5xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-brand-accent mb-6 text-center">{content.whyContact.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {content.whyContact.reasons.map((reason, index) => (
                            <div key={index} className="flex items-center gap-3 text-gray-700 bg-gray-100 p-3 rounded-lg">
                                <span className="text-brand-accent text-xl">✓</span> 
                                <span>{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left Column: Contact Info */}
                    <div ref={infoRef} className="scroll-animate lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-accent mb-4">{content.directContact.title}</h3>
                            <ul className="space-y-3">
                                {content.directContact.items.map(item => (
                                    <li key={item.label} className="flex items-start gap-3">
                                        <span className="text-2xl pt-1">{item.icon}</span>
                                        <div>
                                            <span className="font-semibold text-gray-800">{item.label}</span>
                                            {item.href ? (
                                                <a href={item.href} className="block text-gray-600 hover:text-brand-accent transition">{item.value}</a>
                                            ) : (
                                                <span className="block text-gray-600">{item.value}</span>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-brand-accent mb-4">{content.instantChannels.title}</h3>
                             <ul className="space-y-3">
                                {content.instantChannels.items.map(item => (
                                    <li key={item.label} className="flex items-start gap-3">
                                        <span className="text-2xl pt-1">{item.icon}</span>
                                        <div>
                                            <span className="font-semibold text-gray-800">{item.label}</span>
                                            {item.href ? (
                                                 <a href={item.href} target="_blank" rel="noopener noreferrer" className="block text-brand-accent hover:underline">{item.action}</a>
                                            ) : (
                                                <span className="block text-gray-600">{item.action}</span>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div ref={formRef} className="scroll-animate lg:col-span-3 bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-gray-200/80">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.formSection.title}</h3>
                        <p className="text-gray-600 mb-6">{content.formSection.subtitle}</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                             <div className="grid sm:grid-cols-2 gap-4">
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder={content.formSection.form.companyName} required className="w-full bg-brand-light-gray border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-brand-accent focus:border-brand-accent" />
                                <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} placeholder={content.formSection.form.contactPerson} required className="w-full bg-brand-light-gray border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-brand-accent focus:border-brand-accent" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={content.formSection.form.email} required className="w-full bg-brand-light-gray border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-brand-accent focus:border-brand-accent" />
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={content.formSection.form.phone} required className="w-full bg-brand-light-gray border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-brand-accent focus:border-brand-accent" />
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{content.formSection.form.platforms}</label>
                                <div className="flex flex-wrap gap-2">
                                    {content.formSection.form.platformOptions.map(opt => (
                                        <button
                                            type="button"
                                            key={opt}
                                            onClick={() => handlePlatformToggle(opt)}
                                            className={`px-3 py-2 text-sm font-semibold rounded-md transition border-2 ${
                                                formData.platform.includes(opt) 
                                                ? 'bg-brand-accent text-white border-brand-accent' 
                                                : 'bg-transparent text-gray-700 border-gray-300 hover:border-brand-accent/50'
                                            }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                             </div>
                            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={content.formSection.form.message} rows={5} required className="w-full bg-brand-light-gray border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-brand-accent focus:border-brand-accent"></textarea>
                            
                            <button type="submit" disabled={isSending} className="w-full bg-brand-accent text-white font-bold py-3 px-4 rounded-md hover:bg-brand-accent-hover transition disabled:bg-gray-500">
                                {isSending ? content.formSection.form.sendingButton : content.formSection.form.submitButton}
                            </button>
                             {isSent && <p className="text-green-600 text-center mt-4">✅ Message sent successfully! We will get back to you shortly.</p>}
                             {error && <p className="text-red-600 text-center mt-4">⚠️ {error}</p>}

                        </form>
                        <p className="text-center text-gray-500 mt-6 text-sm">{content.formSection.confirmation}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;