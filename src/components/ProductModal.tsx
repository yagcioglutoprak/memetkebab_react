import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf, Award, Clock, Heart, ThumbsUp, Utensils } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductModalProps {
  product: {
    title: string;
    price: string;
    description: string;
    image: string;
    isPromo?: boolean;
  } | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  if (!product) return null;

  const features = [
    { icon: <Leaf className="w-5 h-5 text-[rgba(213,17,42,255)]" />, text: t('product.features.fresh') },
    { icon: <Award className="w-5 h-5 text-[rgba(213,17,42,255)]" />, text: t('product.features.halal') },
    { icon: <Clock className="w-5 h-5 text-[rgba(213,17,42,255)]" />, text: t('product.features.made') },
    { icon: <ThumbsUp className="w-5 h-5 text-[rgba(213,17,42,255)]" />, text: t('product.features.chef') },
    { icon: <Utensils className="w-5 h-5 text-[rgba(213,17,42,255)]" />, text: t('product.features.traditional') },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[rgba(32,12,0,0.8)] backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl max-w-3xl w-full overflow-hidden relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[rgba(32,12,0,0.1)] hover:bg-[rgba(32,12,0,0.2)] transition-colors z-10"
          >
            <X className="w-5 h-5 text-[rgba(32,12,0,255)]" />
          </button>

          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-full">
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.isPromo && (
                <div className="absolute top-4 left-4 bg-[rgba(213,17,42,255)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t('menu.specialOffer')}
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-[rgba(32,12,0,255)]">{product.title}</h3>
                <button className="p-2 hover:bg-[rgba(32,12,0,0.1)] rounded-full transition-colors">
                  <Heart className="w-6 h-6 text-[rgba(213,17,42,255)]" />
                </button>
              </div>

              <p className="text-[rgba(213,17,42,255)] text-xl font-bold mb-4">{product.price}</p>
              <p className="text-[rgba(32,12,0,0.7)] mb-6">{product.description}</p>

              <div className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {feature.icon}
                    <span className="text-sm text-[rgba(32,12,0,0.7)]">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => {
                    onClose();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-[rgba(213,17,42,255)] hover:bg-[rgba(193,15,38,255)] text-white py-3 rounded-lg transition-colors"
                >
                  {t('product.orderNow')}
                </button>
                <button className="w-full bg-[rgba(32,12,0,0.1)] hover:bg-[rgba(32,12,0,0.2)] text-[rgba(32,12,0,255)] py-3 rounded-lg transition-colors">
                  {t('product.addFavorites')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}