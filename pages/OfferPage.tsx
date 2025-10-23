'use client';
import React, { useContext } from 'react';
import CommercialOffer from '../components/CommercialOffer';
import { AppContext } from '../context/AppContext';

const OfferPage: React.FC = () => {
  const { content } = useContext(AppContext);
  return <CommercialOffer content={content.commercialOffer} />;
};

export default OfferPage;
