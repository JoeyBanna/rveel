import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'system';
  });
  
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'system') {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPreference);
      
      if (systemPreference) {
        root.classList.add('dark');
        root.style.backgroundColor = ''; // Reset to default for dark mode
      } else {
        root.classList.remove('dark');
        root.style.backgroundColor = '#A7A69E'; // Light mode background
      }
    } else {
      setIsDarkMode(theme === 'dark');
      
      if (theme === 'dark') {
        root.classList.add('dark');
        root.style.backgroundColor = ''; // Reset to default for dark mode
      } else {
        root.classList.remove('dark');
        root.style.backgroundColor = '#A7A69E'; // Light mode background
      }
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        setIsDarkMode(mediaQuery.matches);
        
        if (mediaQuery.matches) {
          document.documentElement.classList.add('dark');
          document.documentElement.style.backgroundColor = ''; // Reset to default for dark mode
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.style.backgroundColor = '#A7A69E'; // Light mode background
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    isDarkMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}