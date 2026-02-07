
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FixedButtons from './components/FixedButtons';
import Home from './pages/Home';
import DynamicPage from './pages/DynamicPage';
import Sitemap from './pages/Sitemap';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Dynamic routes for Locations and Services */}
            <Route path="/bairro/:name" element={<DynamicPage type="bairro" />} />
            <Route path="/cidade/:name" element={<DynamicPage type="cidade" />} />
            <Route path="/servico/:name" element={<DynamicPage type="servico" />} />
            
            {/* Catch-all route to prevent 404 by redirecting to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
        <FixedButtons />
      </div>
    </Router>
  );
};

export default App;
