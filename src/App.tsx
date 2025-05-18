import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFound';
import { About } from './components/about/about'; // Import the About component

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about" element={<About />} /> {/* Add About route */}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;