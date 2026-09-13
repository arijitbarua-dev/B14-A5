import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologiesSection from './components/TechnologiesSection';

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  // Add technology to stack
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      alert(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack((prevStack) => [...prevStack, tech]);
  };

  // Remove technology from stack
  const handleRemoveFromStack = (techId) => {
    setSelectedStack((prevStack) => prevStack.filter((item) => item.id !== techId));
  };

  // Clear entire stack
  const handleClearStack = () => {
    setSelectedStack([]);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Sticky Navbar Component */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Banner / Hero Section */}
        <Hero />

        {/* Technologies Grid & Sidebar Section */}
        <TechnologiesSection 
          selectedStack={selectedStack}
          onAddToStack={handleAddToStack}
          onRemoveFromStack={handleRemoveFromStack}
          onClearStack={handleClearStack}
        />
      </main>
    </div>
  );
}

export default App;
