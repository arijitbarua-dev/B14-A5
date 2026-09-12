import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologiesSection from './components/TechnologiesSection';

function App() {
  const handleAddToStack = (tech) => {
    console.log('Added to stack:', tech);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Sticky Navbar Component */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Banner / Hero Section */}
        <Hero />

        {/* Technologies Grid Section */}
        <TechnologiesSection onAddToStack={handleAddToStack} />
      </main>
    </div>
  );
}

export default App;
