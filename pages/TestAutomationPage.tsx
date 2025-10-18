import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import AutomationWorkflow from '../components/AutomationWorkflow';
import { Language } from '../types';

interface TestAutomationPageProps {
  openAuthModal: () => void;
  lang: Language;
}

const TestAutomationPage: React.FC<TestAutomationPageProps> = ({ openAuthModal, lang }) => {
  const content = {
    en: {
      title: "Experience Our Automation in Action",
      subtitle: "This is a live demonstration. Follow the steps below to see how our system handles a booking from start to finish. Each action you take will trigger a real automated workflow."
    },
    ar: {
      title: "جرب الأتمتة الخاصة بنا مباشرة",
      subtitle: "هذه محاكاة حية. اتبع الخطوات أدناه لترى كيف يتعامل نظامنا مع الحجز من البداية إلى النهاية. كل إجراء تتخذه سيؤدي إلى تشغيل سير عمل آلي حقيقي."
    }
  }

  const pageContent = content[lang];

  return (
    <section className="relative py-16 bg-brand-white min-h-[80vh]">
      <ParticlesBackground id="particles-automation-test" />
      <div className="relative container mx-auto px-6 z-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {pageContent.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-16">
          {pageContent.subtitle}
        </p>
        <AutomationWorkflow onBookConsultation={openAuthModal} lang={lang} />
      </div>
    </section>
  );
};

export default TestAutomationPage;