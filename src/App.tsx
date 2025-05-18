import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFound';
import { About } from './components/about/about'; // Import the About component
import { Services } from './components/services';
import { Fintech } from './components/solutions/fintech';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about" element={<About />} /> {/* Add About route */}
          <Route path="/services" element={<Services />} />
          <Route path="/solutions/fintech" element={<Fintech />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;