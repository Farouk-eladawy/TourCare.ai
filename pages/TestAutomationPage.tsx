
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import AutomationWorkflow from '../components/AutomationWorkflow';
import { Language, TestAutomationPageContent } from '../types';

interface TestAutomationPageProps {
  content: TestAutomationPageContent;
  openAuthModal: () => void;
  lang: Language;
}

const TestAutomationPage: React.FC<TestAutomationPageProps> = ({ content, openAuthModal, lang }) => {
  return (
    <section className="relative py-16 bg-brand-white min-h-[80vh]">
      <ParticlesBackground id="particles-automation-test" />
      <div className="relative container mx-auto px-6 z-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {content.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          {content.subtitle}
        </p>
        <div className="my-8 max-w-3xl mx-auto p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 rounded-r-lg text-start">
            <p><strong className="font-bold">{content.demoNotice.title}</strong> {content.demoNotice.body}</p>
        </div>
        <AutomationWorkflow onBookConsultation={openAuthModal} lang={lang} />
      </div>
    </section>
  );
};

export default TestAutomationPage;
