'use client';
import React, { useContext } from 'react';
import FaqSection from '../components/FaqSection';
import { AppContext } from '../context/AppContext';

const FaqPage: React.FC = () => {
  const { content } = useContext(AppContext);
  return <FaqSection content={content.faqSection} />;
};

export default FaqPage;
