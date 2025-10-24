'use client';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import Hero from '../components/Hero';
import WhoItIsFor from '../components/WhoItIsFor';
import TrustedPartners from '../components/TrustedPartners';
import Stats from '../components/Stats';
import Workflow from '../components/Workflow';
import VisualFeatures from '../components/VisualFeatures';
import CtaSection from '../components/CtaSection';
import Integrations from '../components/Integrations';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
    const { content, setIsVideoModalOpen, openAuthModal } = useContext(AppContext);
    return (
        <>
            <Hero 
                content={content.hero} 
                onWatchIntroClick={() => setIsVideoModalOpen(true)}
                onBookConsultationClick={() => openAuthModal()}
            />
            <TrustedPartners content={content.trustedPartners} />
            <Stats content={content.stats} />
            <WhoItIsFor content={content.whoItIsFor} />
            <Workflow content={content.workflow} />
            <VisualFeatures content={content.visualFeatures} />
            <CtaSection content={content.ctaSection} onBookConsultationClick={() => openAuthModal()} />
            <Integrations content={content.integrations} />
            <Testimonials content={content.testimonials} />
        </>
    );
}

export default HomePage;
