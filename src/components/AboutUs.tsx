import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Timer, Heart, ArrowRight } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div className="relative bg-gray-50">
      <Section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                className="text-4xl font-bold mb-6 text-[rgba(32,12,0,255)]"
              >
                {t('about.title')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="text-[rgba(32,12,0,0.7)] mb-6"
              >
                {t('about.text1')}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="text-[rgba(32,12,0,0.7)]"
              >
                {t('about.text2')}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                onClick={() => navigate('/about')}
                className="mt-6 px-6 py-3 bg-[rgba(213,17,42,255)] text-white rounded-lg hover:bg-[rgba(193,15,38,255)] transition-colors flex items-center gap-2"
              >
                {t('about.learnMore')}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <Star className="w-8 h-8 text-[rgba(213,17,42,255)] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-[rgba(32,12,0,255)]">{t('features.quality')}</h3>
                  <p className="text-sm text-[rgba(32,12,0,0.7)]">{t('features.qualityDesc')}</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <Timer className="w-8 h-8 text-[rgba(213,17,42,255)] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-[rgba(32,12,0,255)]">{t('features.service')}</h3>
                  <p className="text-sm text-[rgba(32,12,0,0.7)]">{t('features.serviceDesc')}</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <Heart className="w-8 h-8 text-[rgba(213,17,42,255)] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-[rgba(32,12,0,255)]">{t('features.community')}</h3>
                  <p className="text-sm text-[rgba(32,12,0,0.7)]">{t('features.communityDesc')}</p>
                </motion.div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&q=80"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-[rgba(213,17,42,255)] p-6 rounded-lg shadow-xl text-white"
              >
                <p className="text-2xl font-bold">35+</p>
                <p className="text-sm">Years of Excellence</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}