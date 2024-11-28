import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Users, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import RecruitmentForm from '../components/RecruitmentForm';

export default function CareersPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-24 pb-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            {t('careers.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            {t('careers.description')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <GraduationCap className="w-12 h-12 text-[rgba(213,17,42,255)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Training & Development</h3>
            <p className="text-gray-600">Continuous learning opportunities and career growth paths</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <Heart className="w-12 h-12 text-[rgba(213,17,42,255)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Work-Life Balance</h3>
            <p className="text-gray-600">Flexible schedules and great benefits</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <Users className="w-12 h-12 text-[rgba(213,17,42,255)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Inclusive Culture</h3>
            <p className="text-gray-600">Join a diverse team that feels like family</p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <RecruitmentForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}