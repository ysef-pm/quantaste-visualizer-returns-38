
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Index = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const animatedWords = ['Macro tilts', 'Statistical advantage', 'Data', 'Strategy'];

  // Sample data for the chart showing historical returns
  const chartData = [
    { year: '2019', quantaste: 12, sp500: 8 },
    { year: '2020', quantaste: 28, sp500: 16 },
    { year: '2021', quantaste: 45, sp500: 24 },
    { year: '2022', quantaste: 62, sp500: 28 },
    { year: '2023', quantaste: 98, sp500: 38 },
    { year: '2024', quantaste: 128, sp500: 48 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        {/* Performance Metrics */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full p-8 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-white text-3xl font-bold">128%</div>
            <div className="text-emerald-100 text-sm font-medium mt-2">Quantaste Portfolio</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-8 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-white text-3xl font-bold">48%</div>
            <div className="text-blue-100 text-sm font-medium mt-2">S&P 500</div>
          </div>
        </div>

        {/* Animated Headline */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Trade with{' '}
            <span className="relative inline-block h-20 overflow-hidden">
              <span 
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateY(-${currentWordIndex * 100}%)`,
                }}
              >
                {animatedWords.map((word, index) => (
                  <span 
                    key={index} 
                    className="block h-20 leading-tight"
                    style={{
                      transform: index === currentWordIndex ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.5s ease-in-out'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </span>{' '}
            but better.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience superior returns with our advanced portfolio management platform powered by data-driven insights.
          </p>
        </div>

        {/* Chart Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Historical Performance Comparison
          </h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis 
                  dataKey="year" 
                  stroke="#ffffff80"
                  fontSize={14}
                />
                <YAxis 
                  stroke="#ffffff80"
                  fontSize={14}
                  label={{ value: 'Returns (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#ffffff80' } }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="quantaste" 
                  stroke="#10b981" 
                  strokeWidth={4}
                  name="Quantaste Portfolio"
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#10b981', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sp500" 
                  stroke="#3b82f6" 
                  strokeWidth={4}
                  name="S&P 500"
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Trading Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
