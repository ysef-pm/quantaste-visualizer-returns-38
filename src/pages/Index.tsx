
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
  const famousInvestors = ['Warren Buffet', 'Ray Dalio', 'Marc Andreessen', 'Cathie Wood', 'Peter Lynch'];

  // Investor profile images
  const investorImages = [
    {
      name: 'Warren Buffet',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=774&auto=format&fit=crop',
      description: 'Value investing pioneer and CEO of Berkshire Hathaway'
    },
    {
      name: 'Ray Dalio',
      image: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?q=80&w=870&auto=format&fit=crop',
      description: 'Founder of Bridgewater Associates and macroeconomic strategist'
    },
    {
      name: 'Marc Andreessen',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=774&auto=format&fit=crop',
      description: 'Venture capitalist and co-founder of Andreessen Horowitz'
    },
    {
      name: 'Cathie Wood',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=776&auto=format&fit=crop',
      description: 'Founder of ARK Invest and disruptive innovation investor'
    },
    {
      name: 'Peter Lynch',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=869&auto=format&fit=crop',
      description: 'Legendary fund manager of Fidelity Magellan Fund'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInvestorIndex((prevIndex) => (prevIndex + 1) % famousInvestors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header with Auth Buttons */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Quantaste</div>
        <div className="flex space-x-4">
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Log In
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
            Sign Up
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Animated Headline - Moved up */}
        <div className="text-center mb-20 mt-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Trade Like{' '}
            <span className="relative inline-block min-w-[400px] h-20 overflow-hidden">
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
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent flex items-center justify-center"
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
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {investorImages.map((investor, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-xl overflow-hidden bg-black/50 border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={investor.image} 
                          alt={investor.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-white">{investor.name}</h3>
                        <p className="text-sm text-gray-300 mt-2">{investor.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-black/50 text-white border-white/20" />
            <CarouselNext className="right-0 bg-black/50 text-white border-white/20" />
          </Carousel>
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
