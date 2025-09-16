import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Services />
      <Classes />
      <Gallery />
      <Membership />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;