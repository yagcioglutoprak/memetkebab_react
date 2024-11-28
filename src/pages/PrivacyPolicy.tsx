import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
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
          {t('common.backToHome')}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h1 className="text-4xl font-bold mb-8 text-[rgba(32,12,0,255)]">
            {t('privacy.title')}
          </h1>
          <p className="text-[rgba(32,12,0,0.7)] mb-4">
            {t('privacy.lastUpdated')}: January 1, 2024
          </p>

          <div className="prose prose-lg max-w-none text-[rgba(32,12,0,0.7)]">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information</li>
                <li>Order history and preferences</li>
                <li>Payment information</li>
                <li>Delivery addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Process your orders and payments</li>
                <li>Communicate with you about your orders</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services and develop new features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisers and auditors</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">4. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[rgba(32,12,0,255)]">5. Contact Us</h2>
              <p>If you have any questions about our Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                Email: privacy@memetkebab.com<br />
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
