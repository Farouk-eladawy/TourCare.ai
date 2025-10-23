import React from 'react';
import { ProductPageContent } from '../../types';
import ProductPageLayout from '../../components/ProductPageLayout';

interface PickupTimePageProps {
  content: ProductPageContent;
  openAuthModal: (planName: string | null) => void;
}

const PickupTimePage: React.FC<PickupTimePageProps> = ({ content, openAuthModal }) => {
  return <ProductPageLayout content={content} onChoosePlan={openAuthModal} />;
};

export default PickupTimePage;
