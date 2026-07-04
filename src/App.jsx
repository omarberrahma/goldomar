import React from 'react';
import { CartProvider } from './context/CartContext';
import GoldDustCanvas from './components/GoldDustCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import RingFinder from './components/RingFinder';
import About from './components/About';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import Toast from './components/Toast';

function App() {
  return (
    <CartProvider>
      <div className="relative min-h-screen bg-onyx-solid text-white font-sans selection:bg-gold-500 selection:text-black">
        <GoldDustCanvas />
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Catalog />
          <RingFinder />
          <About />
        </main>
        <Footer />

        {/* Overlays */}
        <CartDrawer />
        <ProductDetailModal />
        <Toast />
      </div>
    </CartProvider>
  );
}

export default App;
