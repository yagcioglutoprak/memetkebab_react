import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Utensils, Users, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

interface Location {
  id: number;
  name: string;
  address: string;
  status: 'active' | 'coming-soon';
  hours?: string;
  phone?: string;
}

export default function Locations() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const locations: Location[] = [
    {
      id: 1,
      name: 'Memet Kebab Kraków',
      address: 'ul. Starowiślna 16, 31-038 Kraków',
      status: 'active',
      hours: '11:00 - 23:00',
      phone: '+48 123 456 789'
    },
    {
      id: 2,
      name: 'Memet Kebab Warszawa',
      address: 'ul. Nowy Świat 15, 00-029 Warszawa',
      status: 'coming-soon'
    },
    {
      id: 3,
      name: 'Memet Kebab Wrocław',
      address: 'ul. Rynek 13, 50-101 Wrocław',
      status: 'coming-soon'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-24 pb-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('common.backToHome')}
        </motion.button>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            {t('locations.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            {t('locations.description')}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {locations.map((location, index) => (
            <motion.div 
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative p-6"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{location.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <p className="line-clamp-2">{location.address}</p>
                  </div>
                </div>
                {location.status === 'coming-soon' && (
                  <span className="px-3 py-1 bg-[rgba(213,17,42,255)] text-white text-sm rounded-full whitespace-nowrap ml-2">
                    {t('locations.comingSoon')}
                  </span>
                )}
              </div>

              {location.status === 'active' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="w-4 h-4 flex-shrink-0 text-[rgba(213,17,42,255)]" />
                    <p className="line-clamp-1">{t('locations.flagship')}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Utensils className="w-4 h-4 flex-shrink-0 text-[rgba(213,17,42,255)]" />
                    <p className="line-clamp-1">{t('locations.dineIn')}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 flex-shrink-0 text-[rgba(213,17,42,255)]" />
                    <p className="line-clamp-1">{t('locations.capacity')}</p>
                  </div>
                  {location.hours && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600">
                        <span className="font-semibold text-gray-900">{t('locations.hours')}: </span>
                        <span className="line-clamp-2">{location.hours}</span>
                      </p>
                    </div>
                  )}
                  {location.phone && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600">
                        <span className="font-semibold text-gray-900">{t('locations.phone')}: </span>
                        <span className="line-clamp-1">{location.phone}</span>
                      </p>
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={() => navigate('/menu')}
                      className="w-full px-6 py-3 bg-[rgba(213,17,42,255)] hover:bg-[rgba(193,15,38,255)] text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Utensils className="w-5 h-5 flex-shrink-0" />
                      {t('locations.viewMenu')}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-gray-600 rounded-full transition-colors"
        >
          {t('locations.back')}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-24 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('locations.expansion')}</h2>
          <p className="text-gray-600 mb-16 text-lg">
            {t('locations.expansionText')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-xl shadow-lg p-8"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-[rgba(213,17,42,255)] rounded-full p-4 shadow-lg">
                  <Award className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4 text-gray-900">{t('locations.quality')}</h3>
              <p className="text-gray-600">{t('locations.qualityText')}</p>
              <div className="absolute -right-2 -top-2">
                <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                  Premium
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-xl shadow-lg p-8"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-[rgba(213,17,42,255)] rounded-full p-4 shadow-lg">
                  <Utensils className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4 text-gray-900">{t('locations.tradition')}</h3>
              <p className="text-gray-600">{t('locations.traditionText')}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-xl shadow-lg p-8"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-[rgba(213,17,42,255)] rounded-full p-4 shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4 text-gray-900">{t('locations.community')}</h3>
              <p className="text-gray-600">{t('locations.communityText')}</p>
              <div className="absolute -right-2 -top-2">
                <div className="bg-blue-500 text-black text-xs font-bold px-2 py-1 rounded-full transform rotate-6">
                  Local Love
                </div>
              </div>
            </motion.div>
          </div>

          {/* Franchise Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mb-24"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('locations.franchiseTitle')}</h2>
            <p className="text-gray-600 mb-8">
              {t('locations.franchiseDescription')}
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[rgba(213,17,42,255)]">
                {t('locations.franchiseContact')}
              </h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href={`mailto:${t('locations.franchiseEmail')}`}
                  className="hover:text-[rgba(213,17,42,255)] transition-colors"
                >
                  {t('locations.franchiseEmail')}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href={`tel:${t('locations.franchisePhone')}`}
                  className="hover:text-[rgba(213,17,42,255)] transition-colors"
                >
                  {t('locations.franchisePhone')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center justify-center pb-12"
          >
            <motion.img
              src="https://i.ibb.co/gmLc3MQ/memet-kebab-white-bcg-rgb.png"
              alt="Memet Kebab"
              className="h-24 mb-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
