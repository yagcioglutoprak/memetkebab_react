import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Clock, Heart, Award, Coffee, Users } from 'lucide-react';

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[rgba(213,17,42,0.15)] via-white to-[rgba(213,17,42,0.1)] py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 animate-pulse"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(213,17,42,0.05) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(213,17,42,0.05) 0%, transparent 40%)'
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 mx-auto mb-8 relative"
          >
            <img 
              src="/src/theme/memet-kebab-white-bcg-rgb.png" 
              alt="Memet Logo"
              className="w-full h-full object-contain"
            />
            <motion.div
              className="absolute inset-0 border-2 border-[rgba(213,17,42,0.3)] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-6 text-[rgba(32,12,0,255)] relative">
              <span className="relative inline-block">
                {t('about.title')}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-[rgba(213,17,42,0.2)] -z-10"
                ></motion.div>
              </span>
            </h1>
            <p className="text-xl text-[rgba(32,12,0,0.7)] mb-8 leading-relaxed">
              {t('about.text1')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgba(213,17,42,0.03)] transform skew-x-12"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-[rgba(213,17,42,255)] mr-4"></div>
              <h2 className="text-4xl font-bold text-[rgba(32,12,0,255)]">
                {t('about.history')}
              </h2>
            </div>
            <div className="prose prose-lg relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[rgba(213,17,42,0.2)] to-transparent"></div>
              <div className="pl-8">
                <p className="text-[rgba(32,12,0,0.7)] mb-6 leading-relaxed text-lg">
                  {t('about.history.part1')}
                </p>
                <p className="text-[rgba(32,12,0,0.7)] mb-6 leading-relaxed text-lg">
                  {t('about.history.part2')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-br from-[rgba(213,17,42,0.08)] via-white to-[rgba(213,17,42,0.05)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[rgba(32,12,0,255)] relative inline-block">
              {t('about.values')}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[rgba(213,17,42,255)]"></div>
            </h2>
            <p className="text-[rgba(32,12,0,0.7)] max-w-2xl mx-auto text-lg mt-8">
              {t('about.values.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[rgba(213,17,42,0.1)] rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <Award className="w-12 h-12 text-[rgba(213,17,42,255)] relative z-10 mx-auto" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-[rgba(32,12,0,255)]">{t('about.values.quality.title')}</h3>
              <p className="text-[rgba(32,12,0,0.7)]">
                {t('about.values.quality.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[rgba(213,17,42,0.1)] rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <Clock className="w-12 h-12 text-[rgba(213,17,42,255)] relative z-10 mx-auto" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-[rgba(32,12,0,255)]">{t('about.values.tradition.title')}</h3>
              <p className="text-[rgba(32,12,0,0.7)]">
                {t('about.values.tradition.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[rgba(213,17,42,0.1)] rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <Users className="w-12 h-12 text-[rgba(213,17,42,255)] relative z-10 mx-auto" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-[rgba(32,12,0,255)]">{t('about.values.community.title')}</h3>
              <p className="text-[rgba(32,12,0,0.7)]">
                {t('about.values.community.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[rgba(213,17,42,0.1)] rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <Heart className="w-12 h-12 text-[rgba(213,17,42,255)] relative z-10 mx-auto" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-[rgba(32,12,0,255)]">{t('about.values.service.title')}</h3>
              <p className="text-[rgba(32,12,0,0.7)]">
                {t('about.values.service.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-[rgba(32,12,0,255)] relative inline-block">
              {t('about.commitment')}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-3 left-0 h-1 bg-[rgba(213,17,42,255)]"
              ></motion.div>
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <p className="text-[rgba(32,12,0,0.7)] mb-6 leading-relaxed text-lg">
                {t('about.commitment.part1')}
              </p>
              <p className="text-[rgba(32,12,0,0.7)] leading-relaxed text-lg">
                {t('about.commitment.part2')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
