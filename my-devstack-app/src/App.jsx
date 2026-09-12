import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologiesSection from './components/TechnologiesSection';

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  // Add technology to stack (enforcing 1 tech per category)
  const handleAddToStack = (tech) => {
    setSelectedStack((prevStack) => {
      if (prevStack.some((item) => item.id === tech.id)) {
        return prevStack;
      }
      // Replace existing technology in the same category
      const filtered = prevStack.filter((item) => item.category !== tech.category);
      return [...filtered, tech];
    });
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
