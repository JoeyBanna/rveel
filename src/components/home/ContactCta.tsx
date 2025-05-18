import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { LinkButton } from '../ui/Button';
import { MessageSquare } from 'lucide-react';

export function ContactCta() {
  return (
    <Section className="py-16 bg-white dark:bg-dark-900">
      <motion.div 
        className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-10 sm:p-16 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-white transform translate-x-1/3 -translate-y-1/2" />
          <div className="absolute right-16 bottom-12 w-40 h-40 rounded-full bg-white" />
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-white/90 mb-10">
            Get in touch with our team to discuss how we can help you achieve your technology goals and drive innovation in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LinkButton 
              to="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100"
              size="lg"
            >
              Contact Us
            </LinkButton>
            <LinkButton 
              to="/services" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              size="lg"
              icon={<MessageSquare size={18} />}
            >
              Request a Consultation
            </LinkButton>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}