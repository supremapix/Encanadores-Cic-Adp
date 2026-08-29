import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FixedButtons from './components/FixedButtons';
import FloatingTips from './components/FloatingTips';
import Home from './pages/Home';
import DynamicPage from './pages/DynamicPage';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Dynamic SEO Routes */}
            <Route path="/bairro/:name" element={<DynamicPage type="bairro" />} />
            <Route path="/cidade/:name" element={<DynamicPage type="cidade" />} />
            <Route path="/servico/:name" element={<DynamicPage type="servico" />} />
            
            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
        <FixedButtons />
        <FloatingTips />
      </div>
    </Router>
  );
};

export default App;
