
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [currentInvestorIndex, setCurrentInvestorIndex] = useState(0);
  const famousInvestors = ['Warren Buffet', 'Ray Dalio', 'Cathie Wood', 'Peter Lynch'];

  // Investor profile images - using publicly accessible placeholder images
  const investorImages = [
    {
      name: 'Warren Buffet',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Value investing pioneer and CEO of Berkshire Hathaway'
    },
    {
      name: 'Ray Dalio',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Founder of Bridgewater Associates and macroeconomic strategist'
    },
    {
      name: 'Cathie Wood',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop&crop=face',
      description: 'Founder of ARK Invest and disruptive innovation investor'
    },
    {
      name: 'Peter Lynch',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      description: 'Legendary fund manager of Fidelity Magellan Fund'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInvestorIndex((prevIndex) => (prevIndex + 1) % famousInvestors.length);
    }, 5000); // Changed from 2000 to 5000 (5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header with Auth Buttons */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Quantaste</div>
        <div className="flex space-x-4">
          <Button variant="default" className="bg-gray-800 text-white hover:bg-gray-700">
            Log In
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
            Sign Up
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Animated Headline - Adjusted for better fit */}
        <div className="text-center mb-20 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Trade Like{' '}
            <span className="relative inline-block w-auto min-w-[300px] md:min-w-[320px] h-16 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentInvestorIndex}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent flex items-center justify-center whitespace-nowrap text-4xl md:text-5xl"
                >
                  {famousInvestors[currentInvestorIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            but better.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn from the investment strategies of legendary investors while improving upon them with data-driven insights.
          </p>
        </div>

        {/* Investor Carousel Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Learn From The Best Investors
          </h2>
          
          <div className="w-full max-w-4xl mx-auto relative h-[400px]">
            <div className="overflow-hidden h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentInvestorIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  className="w-full h-full flex justify-center"
                >
                  <div className="rounded-xl overflow-hidden bg-black/50 border border-white/10 w-full max-w-md">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={investorImages[currentInvestorIndex].image} 
                        alt={investorImages[currentInvestorIndex].name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white">{investorImages[currentInvestorIndex].name}</h3>
                      <p className="text-sm text-gray-300 mt-2">{investorImages[currentInvestorIndex].description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <button 
              className="absolute top-1/2 -left-2 -translate-y-1/2 bg-black/50 text-white border-white/20 h-8 w-8 rounded-full flex items-center justify-center"
              onClick={() => setCurrentInvestorIndex((prev) => (prev === 0 ? famousInvestors.length - 1 : prev - 1))}
            >
              ←
            </button>
            <button 
              className="absolute top-1/2 -right-2 -translate-y-1/2 bg-black/50 text-white border-white/20 h-8 w-8 rounded-full flex items-center justify-center"
              onClick={() => setCurrentInvestorIndex((prev) => (prev + 1) % famousInvestors.length)}
            >
              →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 h-auto">
            Start Trading Now
          </Button>
          <p className="text-gray-400 mt-4">Join thousands of investors already using our platform</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
