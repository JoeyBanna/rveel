import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to your backend
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate for demo
        setFormStatus('success');
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <Section className="py-24 bg-white dark:bg-dark-900">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have a question or want to learn more about our services? Fill out the form and one of our experts will get back to you shortly.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email Us</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  <a href="mailto:contact@reveltech.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                    contact@reveltech.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Call Us</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  <a href="tel:+15551234567" className="hover:text-primary-600 dark:hover:text-primary-400">
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Visit Us</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {formStatus === 'success' && (
              <div className="bg-success-50 dark:bg-success-900/20 text-success-800 dark:text-success-200 rounded-lg p-4 flex items-center mb-6">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="bg-error-50 dark:bg-error-900/20 text-error-800 dark:text-error-200 rounded-lg p-4 flex items-center mb-6">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p>There was an error sending your message. Please try again later.</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white text-gray-900"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white text-gray-900"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white text-gray-900"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white text-gray-900"
                  placeholder="Acme Inc."
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Service You're Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white text-gray-900"
              >
                <option value="">Select a service...</option>
                <option value="software-development">Custom Software Development</option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="fintech">Payment Gateway</option>
                <option value="cloud">Cloud Integration</option>
                <option value="security">Cybersecurity</option>
                <option value="data">Data Analytics</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white text-gray-900"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>
            
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={formStatus === 'submitting'}
              icon={formStatus === 'submitting' ? undefined : <Send size={18} />}
            >
              {formStatus === 'submitting' ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}