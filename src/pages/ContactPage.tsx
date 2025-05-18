import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { Section } from '../components/ui/Section';

export function ContactPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-gray-50 dark:bg-dark-800">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're here to help with your technology needs. Reach out to discuss how we can help transform your business.
          </p>
        </div>
      </Section>
      <ContactForm />
    </>
  );
}