'use client';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import AutomationWorkflow from '../components/AutomationWorkflow';

const TestAutomationPage: React.FC = () => {
    const { openAuthModal, lang } = useContext(AppContext);
    return (
        <div className="bg-brand-light-gray">
             <AutomationWorkflow onBookConsultation={openAuthModal} lang={lang} />
        </div>
    );
};

export default TestAutomationPage;
