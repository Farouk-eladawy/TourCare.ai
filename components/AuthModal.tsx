import React, { useState, useEffect } from 'react';
import { AuthModalContent, Language, AppointmentSlot } from '../types';
import { fetchAirtableSlots, bookConsultation } from '../lib/api';
import AppointmentPicker from './AppointmentPicker';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: AuthModalContent;
    lang: Language;
    planOfInterest: string | null;
}

type ModalState = 'loading_slots' | 'collecting_info' | 'confirming' | 'confirmed' | 'error';

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, content, lang, planOfInterest }) => {
    const [modalState, setModalState] = useState<ModalState>('loading_slots');
    
    // Form state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

    const [slots, setSlots] = useState<AppointmentSlot[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        if (isOpen) {
            // Reset form and state when modal is opened
            setModalState('loading_slots');
            setFirstName('');
            setLastName('');
            setEmail('');
            setNote('');
            setSelectedSlotId(null);
            setSlots([]);
            setErrorMessage('');

            // Fetch available slots
            const loadSlots = async () => {
                try {
                    const fetchedSlots = await fetchAirtableSlots();
                    setSlots(fetchedSlots);
                    setModalState('collecting_info');
                } catch (err) {
                    setErrorMessage(content.errorMessage);
                    setModalState('error');
                }
            };
            loadSlots();
        }
    }, [isOpen, content.errorMessage]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !selectedSlotId) {
            setErrorMessage('Please fill in all fields and select a time slot.');
            // A more sophisticated validation UI could be added here
            return;
        }
        
        const selectedSlot = slots.find(s => s.id === selectedSlotId);
        if (!selectedSlot) {
            setErrorMessage('Selected slot is not valid.');
            return;
        }

        setModalState('confirming');
        try {
            await bookConsultation({
                name: `${firstName} ${lastName}`,
                email: email,
                time: selectedSlot.fields.DateTime,
                planOfInterest: planOfInterest,
                note: note
            });
            setModalState('confirmed');
        } catch (err) {
            setErrorMessage(content.errorMessage);
            setModalState('error');
        }
    };

    const renderContent = () => {
        switch (modalState) {
            case 'loading_slots':
            case 'confirming':
                return (
                    <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto"></div>
                        <p className="text-gray-600 mt-4 font-semibold">
                            {modalState === 'loading_slots' ? 'Loading available times...' : content.confirming}
                        </p>
                    </div>
                );
            
            case 'collecting_info':
                return (
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{content.title}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input 
                                    type="text"
                                    placeholder={content.formPlaceholderFirstName}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                                />
                                <input 
                                    type="text"
                                    placeholder={content.formPlaceholderLastName}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                                />
                            </div>
                             <input 
                                type="email"
                                placeholder={content.formPlaceholderEmail}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                            />
                            <textarea
                                placeholder={content.formPlaceholderNote}
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                rows={3}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                            ></textarea>
                            
                            <div className="pt-2">
                                <h4 className="font-bold text-gray-900 mb-3 text-center text-base">{content.slotPickerTitle}</h4>
                                <div className="max-h-48 overflow-y-auto p-1 bg-gray-50 rounded-lg">
                                    <AppointmentPicker 
                                        availableSlots={slots}
                                        selectedSlotId={selectedSlotId}
                                        onSlotSelection={setSelectedSlotId}
                                        lang={lang}
                                        noSlotsMessage={content.noSlots}
                                    />
                                </div>
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full bg-brand-accent text-white font-bold py-3 px-4 rounded-md hover:bg-brand-accent-hover transition disabled:bg-gray-400"
                                disabled={!selectedSlotId}
                            >
                                {content.submitButton}
                            </button>
                        </form>
                    </div>
                );

            case 'confirmed':
                 return (
                    <div className="text-center py-8">
                        <h3 className="text-2xl font-bold text-green-600 mb-2">{content.confirmationTitle}</h3>
                        <p className="text-gray-600">{content.confirmationMessage}</p>
                    </div>
                 );

            case 'error':
                 return (
                    <div className="text-center py-8">
                        <h3 className="text-2xl font-bold text-red-600 mb-2">{content.errorTitle}</h3>
                        <p className="text-gray-600">{errorMessage}</p>
                    </div>
                 );
        }
    }

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" 
            onClick={onClose} 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="auth-modal-title"
        >
            <div 
                className="bg-white w-full max-w-lg rounded-lg shadow-2xl p-8 relative"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" aria-label={content.closeButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                {renderContent()}
            </div>
        </div>
    );
};

export default AuthModal;