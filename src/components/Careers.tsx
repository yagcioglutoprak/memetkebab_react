import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Users } from 'lucide-react';
import Section from './Section';
import RecruitmentForm from './RecruitmentForm';

export default function Careers({ t }: { t: (key: string) => string }) {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
          alt="Restaurant kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <Section id="careers" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6"
            >
              {t('careers.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              {t('careers.description')}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-8 bg-gray-950/60 backdrop-blur-sm rounded-xl border border-gray-800 shadow-lg"
            >
              <GraduationCap className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('careers.training.title')}</h3>
              <p className="text-gray-300">{t('careers.training.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-gray-950/60 backdrop-blur-sm rounded-xl border border-gray-800 shadow-lg"
            >
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('careers.benefits.title')}</h3>
              <p className="text-gray-300">{t('careers.benefits.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-gray-950/60 backdrop-blur-sm rounded-xl border border-gray-800 shadow-lg"
            >
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('careers.team.title')}</h3>
              <p className="text-gray-300">{t('careers.team.description')}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <RecruitmentForm t={t} />
          </motion.div>
        </div>
      </Section>
    </div>
  );
}