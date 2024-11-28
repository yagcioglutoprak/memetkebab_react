import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Apple, Star, Download, Clock, Smartphone } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

export default function AppPromotion({ t, className }: AppPromotionProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const handleStoreClick = (store: 'ios' | 'android') => {
    const urls = {
      ios: 'https://apps.apple.com/your-app-link',
      android: 'https://play.google.com/store/apps/your-app-link'
    };
    window.open(urls[store], '_blank');
  };

  return (
    <Section className={`${className} bg-gray-50 py-20 relative overflow-hidden`}>
      <div className="container mx-auto px-4">
        <div className="bg-[rgba(213,17,42,255)] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
          {/* Floating Background Elements */}
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <motion.h2 
                    className="text-4xl font-bold mb-3 text-white"
                    {...floatingAnimation}
                  >
                    {t('app.title')}
                  </motion.h2>
                  <p className="text-lg text-white/90">{t('app.subtitle')}</p>
                </div>
                
                <motion.div 
                  className="bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/20 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://memetkebab.app"
                        alt="QR Code"
                        className="w-28 h-28 rounded-xl relative z-10"
                      />
                    </motion.div>
                    
                    <div className="space-y-3 flex-1">
                      <p className="text-base font-semibold flex items-center gap-2 text-white/90 mb-4">
                        <QrCode className="w-5 h-5 text-white" />
                        {t('app.scan')}
                      </p>
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => handleStoreClick('ios')}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.95)" }}
                          className="flex items-center justify-center gap-2 bg-white text-[rgba(213,17,42,255)] px-4 py-2.5 rounded-xl transition-colors group flex-1"
                        >
                          <Apple className="w-5 h-5 group-hover:text-[rgba(213,17,42,255)] transition-colors" />
                          <span className="font-medium text-sm">App Store</span>
                        </motion.button>
                        <motion.button
                          onClick={() => handleStoreClick('android')}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.95)" }}
                          className="flex items-center justify-center gap-2 bg-white text-[rgba(213,17,42,255)] px-4 py-2.5 rounded-xl transition-colors group flex-1"
                        >
                          <Smartphone className="w-5 h-5 group-hover:text-[rgba(213,17,42,255)] transition-colors" />
                          <span className="font-medium text-sm">Play Store</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="grid grid-cols-3 gap-3">
                      <motion.div 
                        className="bg-white/10 p-3 rounded-xl text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-5 h-5 mx-auto mb-1.5 text-white" />
                        <p className="text-xs font-medium text-white/90">{t('stats.rating')}</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white/10 p-3 rounded-xl text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Download className="w-5 h-5 mx-auto mb-1.5 text-white" />
                        <p className="text-xs font-medium text-white/90">{t('stats.downloads')}</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white/10 p-3 rounded-xl text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Clock className="w-5 h-5 mx-auto mb-1.5 text-white" />
                        <p className="text-xs font-medium text-white/90">{t('stats.install')}</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-xl opacity-30"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
                  alt="Mobile app"
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>
              
              <motion.div 
                className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 rounded-lg p-2">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-base text-white">{t('promo.firstOrder.discount')}</p>
                    <p className="text-xs text-white/90">{t('promo.firstOrder.text')}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}