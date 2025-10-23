'use client';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import ProductPageLayout from '../../components/ProductPageLayout';

const PickupTimePage: React.FC = () => {
  const { content, openAuthModal } = useContext(AppContext);
  return <ProductPageLayout content={content.productPages.pickupTime} onChoosePlan={openAuthModal} />;
};

export default PickupTimePage;
