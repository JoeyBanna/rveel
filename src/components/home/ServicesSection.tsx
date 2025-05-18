import React from 'react';
import { Section } from '../ui/Section';
import { Code, LineChart, Share2, Cpu, Shield, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Code size={24} />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your specific business needs and challenges.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to gain insights, automate processes, and drive innovation.',
  },
  {
    icon: <LineChart size={24} />,
    title: 'Payment Gateway',
    description: 'Modern financial technology solutions that streamline operations and enhance customer experiences.',
  },
  {
    icon: <Share2 size={24} />,
    title: 'Cloud Integration',
    description: 'Seamless integration with cloud platforms to ensure scalability, reliability, and performance.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Cybersecurity',
    description: 'Comprehensive security measures to protect your data and applications from threats.',
  },
  {
    icon: <Database size={24} />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights to drive better business decisions.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <Section className="py-24 bg-white dark:bg-dark-900">
      <div className="text-center mb-16">
        <h2 className="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase">Services</h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Comprehensive Solutions for Modern Businesses
        </h3>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
          We offer a range of services to help your business thrive in today's digital landscape.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8 transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-dark-700"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-5">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}