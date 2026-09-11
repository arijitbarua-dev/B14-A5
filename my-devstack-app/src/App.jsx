import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Sticky Navbar Component */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Banner / Hero Section */}
        <Hero />
      </main>
    </div>
  );
}

export default App;
