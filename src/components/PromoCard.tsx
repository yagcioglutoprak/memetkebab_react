import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PromoCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export default function PromoCard({ title, description, image, onClick }: PromoCardProps) {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-950 to-red-900 cursor-pointer shadow-xl group border border-red-800/30"
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover mix-blend-overlay opacity-50 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="relative p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-100 mb-4 text-sm">{description}</p>
        <motion.div 
          className="inline-flex items-center gap-2 text-white font-medium text-sm"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, x: 5 }}
        >
          {t('menu.viewDetails')} <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}