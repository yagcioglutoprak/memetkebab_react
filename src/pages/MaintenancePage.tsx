import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

export default function MaintenancePage() {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleOrderClick = () => {
    // No-op for maintenance page
  };

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = "/src/theme/memet-kebab-white-bcg-rgb.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden text-[rgba(32,12,0,255)]">
      <Header onOrderClick={handleOrderClick} />
      
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-[rgba(213,17,42,0.1)] rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-[rgba(213,17,42,0.1)] rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4">
        <motion.div 
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center h-screen flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <div className="relative w-64 mb-12">
            <motion.img
              src="/src/theme/memet-kebab-white-bcg-rgb.png"
              alt="Memet Kebab"
              className="w-64 mx-auto"
              initial={false}
              animate={{ 
                scale: imageLoaded ? 1 : 0.8, 
                opacity: imageLoaded ? 0.95 : 0 
              }}
              transition={{ duration: 0.5 }}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Maintenance Message */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-gray-200 max-w-2xl mx-auto
                     shadow-[0_0_15px_rgba(32,12,0,0.1),0_0_30px_rgba(32,12,0,0.1)] 
                     hover:shadow-[0_0_20px_rgba(32,12,0,0.15),0_0_40px_rgba(32,12,0,0.15)] 
                     transition-all duration-500"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl font-bold mb-6"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t('maintenance.title') || 'Under Maintenance'}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {t('maintenance.message') || 'Our website and app are currently being updated to serve you better. We\'ll be back soon!'}
            </motion.p>
            <motion.div 
              className="flex justify-center gap-6"
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div
                className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                <div className="w-3 h-3 bg-[rgba(213,17,42,255)] rounded-full animate-pulse" />
                <span>{t('maintenance.status') || 'In Progress'}</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
