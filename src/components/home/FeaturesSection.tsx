import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { LinkButton } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';

export function FeaturesSection() {
  const featuresLeft = [
    {
      title: 'AI & Machine Learning',
      description: 'Leverage cutting-edge AI technology to optimize operations, personalize customer experiences, and gain competitive advantages.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/solutions/ai',
    },
  ];

  const featuresRight = [
    {
      title: 'Payment Gateway',
      description: "Accelerate your financial services with our secure, compliant, and innovative API's designed for the digital economy.",
      image: 'https://images.pexels.com/photos/7876439/pexels-photo-7876439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/solutions/fintech',
    },
  ];

  return (
    <Section className="py-24 bg-gray-50 dark:bg-dark-800">
      <div className="text-center mb-16">
        <h2 className="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase">Our Expertise</h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Advanced Technologies for Modern Solutions
        </h3>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
          We specialize in developing innovative solutions using the latest technologies in AI, Machine Learning, and Fintech.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 mt-16">
        {/* Left Feature */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="h-64 sm:h-80 rounded-2xl overflow-hidden mb-6">
            <img
              src={featuresLeft[0].image}
              alt="AI & Machine Learning"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {featuresLeft[0].title}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {featuresLeft[0].description}
          </p>
          <LinkButton
            to={featuresLeft[0].link}
            variant="outline"
            icon={<ArrowUpRight size={16} />}
          >
            Learn More
          </LinkButton>
        </motion.div>

        {/* Right Feature */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="h-64 sm:h-80 rounded-2xl overflow-hidden mb-6">
            <img
              src={featuresRight[0].image}
              alt="Payment Gateway"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {featuresRight[0].title}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {featuresRight[0].description}
          </p>
          <LinkButton
            to={featuresRight[0].link}
            variant="outline"
            icon={<ArrowUpRight size={16} />}
          >
            Learn More
          </LinkButton>
        </motion.div>
      </div>
    </Section>
  );
}