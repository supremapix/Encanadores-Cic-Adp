
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FixedButtons from './components/FixedButtons';
import Home from './pages/Home';
import DynamicPage from './pages/DynamicPage';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Dynamic SEO Routes */}
            <Route path="/bairro/:name" element={<DynamicPage type="bairro" />} />
            <Route path="/cidade/:name" element={<DynamicPage type="cidade" />} />
            <Route path="/servico/:name" element={<DynamicPage type="servico" />} />
            
            {/* 404 Page */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
        <FixedButtons />
      </div>
    </Router>
  );
};

export default App;
