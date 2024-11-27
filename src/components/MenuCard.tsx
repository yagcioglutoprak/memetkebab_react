import React from 'react';
import { motion } from 'framer-motion';

interface MenuCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  isPromo?: boolean;
  onClick: () => void;
}

export default function MenuCard({ title, price, description, image, isPromo, onClick }: MenuCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative overflow-hidden rounded-xl bg-gray-950/90 backdrop-blur-sm border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        isPromo ? 'border-2 border-red-600' : ''
      }`}
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      {isPromo && (
        <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          Special Offer
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-red-600 font-bold">{price}</span>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}