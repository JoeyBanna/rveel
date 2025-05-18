import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-1 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg p-1 transition-colors duration-300">
      <button
        onClick={() => setTheme('light')}
        className={`p-1.5 rounded-md text-sm flex items-center justify-center transition-colors duration-300 ${
          theme === 'light' 
            ? 'bg-primary-100 text-primary-600 dark:bg-dark-700 dark:text-primary-400' 
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
        }`}
        aria-label="Light mode"
      >
        <Sun size={16} className="mr-1" />
        <span className="sr-only md:not-sr-only md:inline-block">Light</span>
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`p-1.5 rounded-md text-sm flex items-center justify-center transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-primary-100 text-primary-600 dark:bg-dark-700 dark:text-primary-400'
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
        }`}
        aria-label="Dark mode"
      >
        <Moon size={16} className="mr-1" />
        <span className="sr-only md:not-sr-only md:inline-block">Dark</span>
      </button>
      

    </div>
  );
}