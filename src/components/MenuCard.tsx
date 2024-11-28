import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface MenuCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  isPromo?: boolean;
  onClick?: () => void;
  index?: number;
}

export default function MenuCard({ title, price, description, image, isPromo, onClick, index = 0 }: MenuCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-[rgba(32,12,0,0.1)] shadow-lg transition-all duration-300 cursor-pointer ${
        isPromo ? 'border-2 border-[rgba(213,17,42,255)]' : ''
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      {isPromo && (
        <div className="absolute top-4 right-4 bg-[rgba(213,17,42,255)] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          Special Offer
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-[rgba(32,12,0,255)]">{title}</h3>
          <span className="text-[rgba(213,17,42,255)] font-bold">{price}</span>
        </div>
        <p className="text-[rgba(32,12,0,0.7)] text-sm">{description}</p>
      </div>
    </motion.div>
  );
}