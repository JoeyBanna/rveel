import React, { useContext } from 'react';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LinkButton } from '../ui/Button';
import { ThemeContext } from '../../context/ThemeContext'; // Import ThemeContext

export function HeroSection() {

  const themeContext = useContext(ThemeContext);

    if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }
  const { theme } = themeContext;

  const imageSrc = theme === 'dark' 
    ? '/src/images/rveel_wbg.png' // Dark mode image
    : '/src/images/rveel_bbg.png'; // Light mode image
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="block">Transforming Ideas Into</span>
                <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">
                  Digital Excellence
                </span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                At Rveel Technologies, we combine cutting-edge software development, AI innovation, and fintech expertise to help businesses thrive in the digital age. Our solutions are tailored to meet your unique challenges and drive meaningful results.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <LinkButton 
                  to="/contact" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get Started
                </LinkButton>
                <LinkButton 
                  to="/services" 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight size={18} />}
                >
                  Explore Services
                </LinkButton>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="hidden lg:flex lg:col-span-5 lg:items-center">
            <motion.div 
              className="relative h-96 w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                   src={imageSrc} 
                alt="Rveel" 
                className="absolute inset-0 w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Hero Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white dark:bg-dark-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full transform translate-y-1">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            className="text-gray-50 dark:text-dark-800"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,224C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}