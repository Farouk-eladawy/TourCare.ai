import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ClientLayout from './components/ClientLayout';

import HomePage from './pages/HomePage';
import OfferPage from './pages/OfferPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import DemoPage from './pages/DemoPage';

import OperationSysPage from './pages/products/OperationSysPage';
import PickupTimePage from './pages/products/PickupTimePage';
import LiveSupportPage from './pages/products/LiveSupportPage';

function App() {
  return (
    <HashRouter>
      {/* FIX: Wrapped Routes in ClientLayout to provide the required `children` prop. */}
      <ClientLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<OfferPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/demo" element={<DemoPage />} />
          
          {/* Product Pages */}
          <Route path="/products/operation-sys" element={<OperationSysPage />} />
          <Route path="/products/pickup-time" element={<PickupTimePage />} />
          <Route path="/products/live-support" element={<LiveSupportPage />} />
        </Routes>
      </ClientLayout>
    </HashRouter>
  );
}

export default App;