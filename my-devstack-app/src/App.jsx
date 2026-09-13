import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologiesSection from './components/TechnologiesSection';
import Footer from './components/Footer';

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  // Add technology to stack
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return;
    }
    setSelectedStack((prevStack) => [...prevStack, tech]);
    toast.success(`${tech.name} added to stack!`, {
      position: 'bottom-right',
      autoClose: 3000,
    });
  };

  // Remove technology from stack
  const handleRemoveFromStack = (techId) => {
    const removedItem = selectedStack.find((item) => item.id === techId);
    setSelectedStack((prevStack) => prevStack.filter((item) => item.id !== techId));
    if (removedItem) {
      toast.error(`${removedItem.name} removed from stack.`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  // Clear entire stack
  const handleClearStack = () => {
    if (selectedStack.length > 0) {
      setSelectedStack([]);
      toast.error('All technologies removed from stack.', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      {/* Toast Notification Container */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover />

      {/* Sticky Navbar Component */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
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

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
