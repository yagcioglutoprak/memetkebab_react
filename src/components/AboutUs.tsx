import React from 'react';
import { motion } from 'framer-motion';
import { Star, Timer, Heart } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <Section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6"
            >
              {t('about.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 mb-6"
            >
              {t('about.text1')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300"
            >
              {t('about.text2')}
            </motion.p>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <Star className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t('features.quality')}</h3>
                <p className="text-sm text-gray-400">{t('features.qualityDesc')}</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <Timer className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t('features.service')}</h3>
                <p className="text-sm text-gray-400">{t('features.serviceDesc')}</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <Heart className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t('features.community')}</h3>
                <p className="text-sm text-gray-400">{t('features.communityDesc')}</p>
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-red-600 p-6 rounded-lg shadow-xl"
            >
              <p className="text-2xl font-bold">35+</p>
              <p className="text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}