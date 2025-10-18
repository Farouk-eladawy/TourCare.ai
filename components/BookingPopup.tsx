import React, { useState } from 'react';
import { Language } from '../types';

interface BookingPopupProps {
    onClose: () => void;
    onSubmit: (info: { name: string; whatsapp: string; email: string }) => Promise<void>;
    lang: Language;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ onClose, onSubmit, lang }) => {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const content = {
        en: {
            title: "Start Your Automated Journey",
            namePlaceholder: "Full Name",
            whatsappPlaceholder: "WhatsApp Number (e.g., +1...)",
            emailPlaceholder: "Email Address",
            submitButton: "Start Automation",
            submittingButton: "Starting...",
            validationError: "Please fill in all fields correctly."
        },
        ar: {
            title: "ابدأ رحلتك المؤتمتة",
            namePlaceholder: "الاسم الكامل",
            whatsappPlaceholder: "رقم الواتساب (مثال: +971...)",
            emailPlaceholder: "البريد الإلكتروني",
            submitButton: "ابدأ الأتمتة",
            submittingButton: "جاري البدء...",
            validationError: "يرجى ملء جميع الحقول بشكل صحيح."
        }
    };
    const modalContent = content[lang];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!name.trim() || !whatsapp.trim() || !email.trim()) {
            setError(modalContent.validationError);
            return;
        }
        setIsSubmitting(true);
        await onSubmit({ name, whatsapp, email });
        setIsSubmitting(false); // The parent will close the modal on success
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" 
            onClick={onClose}
        >
            <div 
                className="bg-white w-full max-w-md rounded-lg shadow-2xl p-8 relative"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{modalContent.title}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                     <input 
                        type="text"
                        placeholder={modalContent.namePlaceholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                    />
                    <input 
                        type="tel"
                        placeholder={modalContent.whatsappPlaceholder}
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                    />
                    <input 
                        type="email"
                        placeholder={modalContent.emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                    />
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button 
                        type="submit"
                        className="w-full bg-brand-accent text-white font-bold py-3 px-4 rounded-md hover:bg-brand-accent-hover transition disabled:bg-gray-400"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? modalContent.submittingButton : modalContent.submitButton}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingPopup;