import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Coffee } from 'lucide-react';

const BuyMeCoffee = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col justify-center items-center p-6 relative">
      <Helmet>
        <title>Buy Me a Coffee — Ravi Singh</title>
        <meta name="description" content="Support Ravi Singh's creative work — buy him a coffee to help fuel more art and content." />
      </Helmet>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square"
        >
          <img 
            src="/BuyMeACoffe.jpeg" 
            alt="Coffee" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="font-sans text-5xl md:text-6xl text-[#1A1A1A] mb-6 leading-tight">
            Buy Me a Coffee (No pressure)
          </h1>
          
          <div className="flex gap-3 mb-8">
            <span className="bg-[#F2E8DA] text-[#C9A84C] px-4 py-1 rounded-full text-xs uppercase tracking-wider font-bold">Donation</span>
            <span className="text-text-secondary text-sm flex items-center gap-1">• Support Creator</span>
          </div>

          <p className="font-sans text-lg text-text-secondary leading-relaxed mb-12">
            For the very few random people who clicked on this link, expect some free stuff in your inbox over the coming months. I'm really grateful to you guys!
          </p>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="font-sans text-2xl text-[#1A1A1A] mb-4">Support Ravi</h3>
            <p className="font-sans text-sm text-text-secondary mb-8 leading-relaxed">
              If you've found my content helpful, consider buying me a coffee. Thank you for your support!
            </p>
            
            <a 
              href="https://buymeacoffee.com/ravixart" target='blank'
              className="w-full bg-[#1A1A1A] text-white py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#333] transition-colors duration-300 group"
            >
              <Coffee size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="font-sans font-medium tracking-wide">Buy Me a Coffee</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
