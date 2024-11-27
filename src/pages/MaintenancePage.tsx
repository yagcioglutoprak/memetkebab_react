import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';

export default function MaintenancePage() {
  const { t } = useLanguage();

  const handleOrderClick = () => {
    // No-op for maintenance page
  };

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center h-screen flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.img
            src="https://i.ibb.co/gmLc3MQ/memet-kebab-white-bcg-rgb.png"
            alt="Memet Kebab"
            className="w-64 mx-auto mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.95 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />

          {/* Maintenance Message */}
          <div
            className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-gray-200 max-w-2xl mx-auto
                     shadow-[0_0_15px_rgba(32,12,0,0.1),0_0_30px_rgba(32,12,0,0.1)] 
                     hover:shadow-[0_0_20px_rgba(32,12,0,0.15),0_0_40px_rgba(32,12,0,0.15)] 
                     transition-all duration-500"
          >
            <motion.h1 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {t('maintenance.title') || 'Under Maintenance'}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              {t('maintenance.message') || 'Our website and app are currently being updated to serve you better. We\'ll be back soon!'}
            </motion.p>
            <div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <div
                className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                <div className="w-3 h-3 bg-[rgba(213,17,42,255)] rounded-full animate-pulse" />
                <span>{t('maintenance.status') || 'In Progress'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
