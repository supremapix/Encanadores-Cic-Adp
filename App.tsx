import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FixedButtons from './components/FixedButtons';
import Home from './pages/Home';
import DynamicPage from './pages/DynamicPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Dynamic routes for Locations and Services */}
            <Route path="/bairro/:name" element={<DynamicPage type="bairro" />} />
            <Route path="/cidade/:name" element={<DynamicPage type="cidade" />} />
            <Route path="/servico/:name" element={<DynamicPage type="servico" />} />
          </Routes>
        </main>
        
        <Footer />
        <FixedButtons />
      </div>
    </Router>
  );
};

export default App;