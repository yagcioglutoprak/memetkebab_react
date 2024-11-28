import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Users } from 'lucide-react';
import Section from './Section';
import RecruitmentForm from './RecruitmentForm';
import { COLORS } from '../constants/colors';

export default function Careers({ t }: { t: (key: string) => string }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

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
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="text-4xl font-bold mb-6 text-white"
            >
              {t('careers.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              {t('careers.description')}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
            >
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-[rgba(213,17,42,255)]" />
              <h3 className="text-xl font-bold mb-2 text-white">{t('careers.training.title')}</h3>
              <p className="text-white/80">{t('careers.training.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
            >
              <Heart className="w-12 h-12 mx-auto mb-4 text-[rgba(213,17,42,255)]" />
              <h3 className="text-xl font-bold mb-2 text-white">{t('careers.benefits.title')}</h3>
              <p className="text-white/80">{t('careers.benefits.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
            >
              <Users className="w-12 h-12 mx-auto mb-4 text-[rgba(213,17,42,255)]" />
              <h3 className="text-xl font-bold mb-2 text-white">{t('careers.team.title')}</h3>
              <p className="text-white/80">{t('careers.team.description')}</p>
            </motion.div>
          </div>

          <RecruitmentForm t={t} />
        </div>
      </Section>
    </div>
  );
}