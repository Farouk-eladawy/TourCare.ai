'use client';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import ProductPageLayout from '../../components/ProductPageLayout';

const LiveSupportPage: React.FC = () => {
  const { content, openAuthModal } = useContext(AppContext);
  return <ProductPageLayout content={content.productPages.liveSupport} onChoosePlan={openAuthModal} />;
};

export default LiveSupportPage;
