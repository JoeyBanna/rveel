import React from 'react';
import { LinkButton } from '../ui/Button';

export function Fintech() {
  return (
    <section className="bg-gray-50 dark:bg-dark-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center sm:text-5xl">
          💳 Fintech Solutions & Payment APIs
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
          Powering Seamless, Secure & Scalable Financial Experiences
        </p>

        <div className="mt-12 space-y-12">
          {/* Why Choose Rveell Fintech Solutions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              💡 Why Choose Rveell Fintech Solutions?
            </h2>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Modern APIs for smooth integration into web or mobile platforms</li>
              <li>Secure Infrastructure that protects your users and transactions</li>
              <li>Developer-Friendly Docs and SDKs for quick onboarding</li>
              <li>Scalable Systems that grow with your business</li>
              <li>AI-Enhanced Fraud Detection for real-time protection</li>
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              🧰 What We Offer
            </h2>

            {/* Online Payment Gateway */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                🧾 Online Payment Gateway
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Accept secure payments on your website or app with minimal setup. Our system supports a variety of payment methods including cards, mobile money, and bank transfers.
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Fast Setup</li>
                <li>Real-Time Payments</li>
                <li>PCI-DSS Compliant</li>
              </ul>
              {/* Image Area */}
              <div className="mt-4">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Insert Image Here</span>
                </div>
              </div>
            </div>

            {/* AI-Powered Fraud Detection */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                🧠 AI-Powered Fraud Detection
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Our intelligent systems analyze transactions in real time, identifying unusual patterns and flagging potential threats before they escalate.
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Protect Your Revenue</li>
                <li>Reduce Chargebacks</li>
                <li>Machine-Learning Backed</li>
              </ul>
              {/* Image Area */}
              <div className="mt-4">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Insert Image Here</span>
                </div>
              </div>
            </div>

            {/* Digital Wallet Integration */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                💼 Digital Wallet Integration
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Enable users to store, manage, and spend funds seamlessly across your platform. From peer-to-peer transfers to withdrawals, our wallet module is ready for deployment.
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Instant Wallet Top-Up</li>
                <li>Secure Storage</li>
                <li>Custom Rules & Limits</li>
              </ul>
              {/* Image Area */}
              <div className="mt-4">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Insert Image Here</span>
                </div>
              </div>
            </div>

            {/* Custom Fintech API Development */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                🔌 Custom Fintech API Development
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Need a tailored solution? We design and build APIs for banks, startups, and platforms that want full control over their payment workflows, user management, and financial reporting.
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>REST/GraphQL APIs</li>
                <li>Scalable Architecture</li>
                <li>Admin Dashboards</li>
              </ul>
              {/* Image Area */}
              <div className="mt-4">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Insert Image Here</span>
                </div>
              </div>
            </div>

            {/* Transaction Analytics */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                📊 Transaction Analytics
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Visualize every payment, refund, and transfer with powerful dashboards. Our analytics tools help you make data-informed financial decisions with ease.
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Real-Time Data</li>
                <li>Exportable Reports</li>
                <li>Customer Insights</li>
              </ul>
              {/* Image Area */}
              <div className="mt-4">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Insert Image Here</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            🚀 Start Building With Rveell Today
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Ready to power your app with smart fintech infrastructure? Whether you’re a startup or scaling enterprise, Rveell’s fintech suite gives you the tools you need to succeed.
          </p>
          <button className="mt-6 px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-500">
            <LinkButton 
                          to="/contact" 
                          className="bg-black text-primary-600 hover:bg-gray-100"
                          size="lg"
                        >
                         👉 Contact Us
         </LinkButton>
            

          </button>
        </div>
      </div>
    </section>
  );
}