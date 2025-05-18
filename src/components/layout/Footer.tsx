import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowUpRight
} from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext'; // Import ThemeContext

export function Footer() {
  const themeContext = useContext(ThemeContext);
    
        if (!themeContext) {
        throw new Error('ThemeContext must be used within a ThemeProvider');
      }
      const { theme } = themeContext;
    
      const imageSrc = theme === 'dark' 
        ? '/src/images/rveel_wbg.png' // Dark mode image
        : '/src/images/rveel_bbg.png'; // Light mode image
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={imageSrc} alt="Rveel" className="h-8 w-auto" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white"></span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
              Empowering businesses with cutting-edge software solutions, AI innovation, and fintech expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/software" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/solutions/fintech" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Payment Gateway
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Innovation Drive, San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">contact@rveel.com</span>
              </li>
              
              <li className="pt-2">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                >
                  Get in Touch
                  <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-dark-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Rveel Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}