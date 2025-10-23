import React from 'react';
import { ProductPageContent } from '../../types';
import ProductPageLayout from '../../components/ProductPageLayout';

interface LiveSupportPageProps {
  content: ProductPageContent;
  openAuthModal: (planName: string | null) => void;
}

const LiveSupportPage: React.FC<LiveSupportPageProps> = ({ content, openAuthModal }) => {
  return <ProductPageLayout content={content} onChoosePlan={openAuthModal} />;
};

export default LiveSupportPage;
