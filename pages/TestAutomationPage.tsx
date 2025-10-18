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
      title: "Try the Live Experience",
      subtitle: "This is a live demonstration. Follow the steps below to see how our system handles a booking from start to finish. Each action you take will trigger a real automated workflow."
    },
    ar: {
      title: "جرب التجربة الحية",
      subtitle: "هذه محاكاة حية. اتبع الخطوات أدناه لترى كيف يتعامل نظامنا مع الحجز من البداية إلى النهاية. كل إجراء تتخذه سيؤدي إلى تشغيل سير عمل آلي حقيقي."
    },
    de: {
        title: "Das Live-Erlebnis testen",
        subtitle: "Dies ist eine Live-Demonstration. Befolgen Sie die nachstehenden Schritte, um zu sehen, wie unser System eine Buchung von Anfang bis Ende abwickelt. Jede von Ihnen durchgeführte Aktion löst einen echten automatisierten Arbeitsablauf aus."
    },
    es: {
        title: "Probar la experiencia en vivo",
        subtitle: "Esta es una demostración en vivo. Siga los pasos a continuación para ver cómo nuestro sistema maneja una reserva de principio a fin. Cada acción que realice activará un flujo de trabajo automatizado real."
    }
  }

  const pageContent = content[lang] || content.en;

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