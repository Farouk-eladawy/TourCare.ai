'use client';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Pricing from '../components/Pricing';

const PricingPage: React.FC = () => {
    const { content, openAuthModal } = useContext(AppContext);
    return (
        <Pricing 
            content={content.pricing}
            onChoosePlan={openAuthModal}
        />
    );
};

export default PricingPage;
