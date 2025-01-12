import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('common.')}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h1 className="text-4xl font-bold mb-8 text-[rgba(32,12,0,255)]">
            {t('terms.title')}
          </h1>
          <p className="text-[rgba(32,12,0,0.7)] mb-4">
            {t('terms.lastUpdated')}: January 1, 2024
          </p>

          <div className="prose prose-lg max-w-none text-[rgba(32,12,0,0.7)]">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Memet Kebab website and services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">2. Use of Services</h2>
              <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use the services in any way that violates applicable laws</li>
                <li>Attempt to interfere with the proper functioning of the services</li>
                <li>Make unauthorized copies of any part of our services</li>
                <li>Access or attempt to access other users' accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">3. Orders and Payments</h2>
              <p>When placing an order through our services:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>You agree to provide current, complete, and accurate purchase information</li>
                <li>You agree to promptly update your account and payment information</li>
                <li>You agree to pay all charges at the prices in effect when incurring the charges</li>
                <li>You agree to pay all applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">4. Intellectual Property</h2>
              <p>
                The content, organization, graphics, design, and other matters related to the Site are protected under
                applicable copyrights, trademarks, and other proprietary rights. Copying, redistributing, use or publication
                of any such matters or any part of the Site is prohibited without our express permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">5. Limitation of Liability</h2>
              <p>
                Memet Kebab shall not be liable for any direct, indirect, incidental, special, or consequential damages
                that result from the use of, or the inability to use, our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">6. Contact Information</h2>
              <p>For any questions regarding these Terms of Service, please contact us at:</p>
              <p className="mt-2">
                Email: legal@memetkebab.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Kebab Street, Istanbul, Turkey
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
