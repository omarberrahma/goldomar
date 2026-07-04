import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import GoldDustCanvas from './components/GoldDustCanvas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LocationPage from './pages/LocationPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="relative min-h-screen bg-onyx-solid text-white font-body selection:bg-gold-500 selection:text-black">
          <GoldDustCanvas />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>

          <Footer />

          {/* Global Overlays */}
          <ProductDetailModal />
          <Toast />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
