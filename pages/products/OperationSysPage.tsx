'use client';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import ParticlesBackground from '../../components/ParticlesBackground';
import CtaSection from '../../components/CtaSection';
import { ProductPricingCard } from '../../components/ProductPageLayout';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const OperationSysPage: React.FC = () => {
  const { content, openAuthModal } = useContext(AppContext);
  const pageContent = content.productPages.operationSys;
  
  const heroRef = useScrollAnimation<HTMLElement>();
  const descriptionRef = useScrollAnimation<HTMLElement>();
  const pricingRef = useScrollAnimation<HTMLElement>();
  
  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="scroll-animate relative py-20 md:py-28 text-center bg-gray-100">
        <ParticlesBackground id={`particles-${pageContent.navTitle}-hero`} />
        <div className="absolute inset-0 bg-white/30 z-10"></div>
        <div className="relative container mx-auto px-6 z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {pageContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            {pageContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section ref={descriptionRef} className="scroll-animate py-16 bg-brand-white">
         <div className="container mx-auto px-6 z-20">
             <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-brand-accent mb-4">{pageContent.descriptionSection.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{pageContent.descriptionSection.content}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pageContent.descriptionSection.features.map((feature, index) => (
                        <div key={index} className="bg-brand-light-gray/50 p-6 rounded-lg border-l-4 border-brand-accent flex items-start gap-4 transition-all duration-300 hover:bg-white h-full">
                            <div className="text-3xl flex-shrink-0 pt-1">{feature.icon}</div>
                            <p className="text-gray-700">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </section>
      
      {/* Pricing Section */}
      {pageContent.pricing && (
        <section ref={pricingRef} className="scroll-animate relative py-16 bg-brand-light-gray">
            <div className="relative container mx-auto px-6 text-center z-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">{pageContent.pricing.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pageContent.pricing.plans.map((plan, index) => (
                        <ProductPricingCard key={index} plan={plan} onChoosePlan={openAuthModal} isFeatured={index === 1} />
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* CTA Section */}
      <CtaSection content={pageContent.cta} onBookConsultationClick={() => openAuthModal(null)} />
    </>
  );
};

export default OperationSysPage;
