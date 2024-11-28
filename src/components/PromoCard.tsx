import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PromoCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
  index?: number;
}

export default function PromoCard({ title, description, image, onClick, index = 0 }: PromoCardProps) {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl bg-[rgba(213,17,42,255)] cursor-pointer shadow-xl group"
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover mix-blend-multiply opacity-60 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="relative p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/90 mb-4 text-sm">{description}</p>
        <motion.div 
          className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:text-white"
          whileHover={{ x: 5 }}
        >
          {t('menu.viewDetails')} <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}