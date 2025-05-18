import React from 'react';

export function Services() {
  return (
    <section className="bg-gray-50 dark:bg-dark-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center sm:text-5xl">
          Our Services
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
          At Rveel, we build powerful, scalable, and forward-looking technology solutions that help businesses grow, adapt, and lead. From custom software to intelligent systems and fintech APIs, our services are designed to meet today’s needs and anticipate tomorrow’s challenges.
        </p>

        <div className="mt-12 space-y-12">
          {/* Custom Software Development */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              🔧 Custom Software Development
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We design and develop reliable, user-centric software tailored to your unique business goals. Whether it’s a mobile app, web platform, or internal tool, we deliver solutions that are fast, scalable, and secure.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Web & Mobile App Development</li>
              <li>Enterprise Software Solutions</li>
              <li>API Design & Integration</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          {/* AI Agents & Intelligent Systems */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              🤖 AI Agents & Intelligent Systems
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We’re building the future of automation with AI-driven tools that think, learn, and adapt. Our AI modules are designed to improve decision-making, streamline operations, and deliver personalized user experiences.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Intelligent AI Agents</li>
              <li>Predictive Models</li>
              <li>AI Chatbots & Virtual Assistants</li>
              <li>Custom AI Modules for Business Automation</li>
            </ul>
          </div>

          {/* Fintech Solutions & Payment APIs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              💳 Fintech Solutions & Payment APIs
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Rveel is entering the fintech space with a focus on seamless, secure, and developer-friendly solutions. We build modern financial tools that simplify transactions and help businesses scale with confidence.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Payment Gateway Integration</li>
              <li>Custom Fintech API Development</li>
              <li>Digital Wallet Systems</li>
              <li>AI-Powered Fraud Detection</li>
              <li>Transaction Analytics</li>
            </ul>
          </div>

          {/* API Development & Integration */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              🔄 API Development & Integration
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We specialize in building robust and well-documented APIs that help systems talk to each other effectively. From RESTful services to GraphQL APIs, we ensure seamless integration across platforms.
            </p>
          </div>
        </div>

        {/* Why Choose Rveel */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            🚀 Why Choose Rveel?
          </h2>
          <ul className="mt-6 space-y-4 text-gray-600 dark:text-gray-300 text-center">
            <li>💡 Innovation-Driven</li>
            <li>🧩 Modular & Scalable Solutions</li>
            <li>🔐 Security & Performance Focused</li>
            <li>🤝 Collaborative & Transparent Process</li>
            <li>🌍 Future-Ready Tech Stack</li>
          </ul>
        </div>
      </div>
    </section>
  );
}