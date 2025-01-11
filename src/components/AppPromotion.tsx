import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Apple, Star, Download, Clock, Smartphone, ArrowRight } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../theme/memet-kebab-white-bcg-rgb.png';

export default function AppPromotion({ t, className }: AppPromotionProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const handleStoreClick = (store: 'ios' | 'android') => {
    const urls = {
      ios: 'https://apps.apple.com/your-app-link',
      android: 'https://play.google.com/store/apps/your-app-link'
    };
    window.open(urls[store], '_blank');
  };

  const features = [
    { icon: Clock, text: t('app.features.fast') },
    { icon: Star, text: t('app.features.rewards') },
    { icon: Download, text: t('app.features.offline') },
  ];

  return (
    <Section className={`${className} bg-gradient-to-br from-gray-900 to-gray-800 py-24 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-lg rounded-full"
                >
                  <motion.img
                    src={logo}
                    alt="Memet Kebab"
                    className="h-8 mr-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                  <span className="text-[rgba(213,17,42,255)] font-medium text-sm">New</span>
                  <div className="w-1 h-1 mx-2 bg-white/40 rounded-full"></div>
                  <span className="text-white/80 text-sm">Mobile App v2.0</span>
                </motion.div>
                
                <h2 className="text-5xl font-bold text-white leading-tight">
                  {t('app.title')}
                  <span className="text-[rgba(213,17,42,255)]">.</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  {t('app.subtitle')}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-lg rounded-2xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 bg-[rgba(213,17,42,255)]/10 rounded-xl">
                      <feature.icon className="w-6 h-6 text-[rgba(213,17,42,255)]" />
                    </div>
                    <p className="text-white/90">{feature.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-white/20 text-white px-6 py-3 rounded-xl font-medium cursor-not-allowed relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent animate-shimmer"></div>
                  <Apple className="w-5 h-5" />
                  <span>Coming Soon</span>
                  <div className="w-2 h-2 rounded-full bg-[rgba(213,17,42,255)] animate-pulse"></div>
                </div>
                <div
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-[rgba(213,17,42,255)]/20 text-white px-6 py-3 rounded-xl font-medium cursor-not-allowed relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(213,17,42,255)]/5 to-transparent animate-shimmer"></div>
                  <Smartphone className="w-5 h-5" />
                  <span>Coming Soon</span>
                  <div className="w-2 h-2 rounded-full bg-[rgba(213,17,42,255)] animate-pulse"></div>
                </div>
              </div>
            </motion.div>

            {/* Right column - App preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative lg:ml-40 mt-16 lg:mt-0 flex justify-center"
            >
              <div className="relative">
                {/* Gradient orbs */}
                <div className="absolute -top-20 -right-20 w-48 lg:w-64 h-48 lg:h-64 bg-[rgba(213,17,42,255)]/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-48 lg:w-64 h-48 lg:h-64 bg-purple-500/20 rounded-full blur-3xl" />
                
                {/* Phone mockup */}
                <div className="relative w-[280px] lg:w-[320px]">
                  {/* iPhone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 lg:w-32 h-6 lg:h-7 bg-[#1a1d24] rounded-b-3xl z-20" />
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 lg:w-24 h-4 lg:h-5 bg-black rounded-[1.25rem] z-20" />
                  
                  <div className="relative w-full h-[560px] lg:h-[640px] bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={logo}
                        alt="App Preview"
                        className="w-48 lg:w-56 object-contain"
                      />
                    </div>
                  </div>

                  {/* Phone frame */}
                  <div className="absolute inset-0 border-[6px] lg:border-[8px] border-[#1a1d24] rounded-[2.5rem] shadow-2xl" />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="hidden lg:flex absolute top-20 -right-16 bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <div>
                      <p className="text-white font-medium">4.9 Rating</p>
                      <p className="text-white/60 text-sm">2k+ Reviews</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="hidden lg:flex absolute bottom-20 -left-16 bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-8 h-8 text-[rgba(213,17,42,255)]" />
                    <div>
                      <p className="text-white font-medium">100k+</p>
                      <p className="text-white/60 text-sm">Downloads</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}