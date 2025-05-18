import React, { useState, useEffect,useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext'; // Import ThemeContext

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { 
    name: 'Solutions', 
    path: '#',
    dropdown: [
      { name: 'AI & Machine Learning', path: '/solutions/ai' },
      { name: 'Fintech', path: '/solutions/fintech' },
      { name: 'Custom Software', path: '/solutions/software' },
    ]
  },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {

   const themeContext = useContext(ThemeContext);
  
      if (!themeContext) {
      throw new Error('ThemeContext must be used within a ThemeProvider');
    }
    const { theme } = themeContext;
  
    const imageSrc = theme === 'dark' 
      ? '/images/rveel_wbg.png' // Dark mode image
      : '/images/rveel_bbg.png'; // Light mode image

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
 
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark-900/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img   src={imageSrc}alt="Rveel" className="h-8 w-auto" />
            <span className="text-xl font-semibold text-gray-900 dark:text-white"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div className="relative group" key={link.name}>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeDropdown === link.name
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  {activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-dark-800 ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                    >
                      <div className="py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button
              className="md:hidden text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700"
        >
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-md"
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === link.name && (
                      <div className="pl-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-md"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 text-sm font-medium rounded-md ${
                      location.pathname === link.path
                        ? 'bg-primary-50 dark:bg-dark-800 text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}