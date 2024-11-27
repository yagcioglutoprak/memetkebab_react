import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Utensils, Users } from 'lucide-react';
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
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80"
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('locations.title')}</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              {t('locations.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className={`bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  location.status === 'coming-soon' ? 'opacity-75' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <p>{location.address}</p>
                    </div>
                  </div>
                  {location.status === 'coming-soon' && (
                    <span className="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {t('locations.comingSoon')}
                    </span>
                  )}
                </div>

                {location.status === 'active' && (
                  <div className="mt-4 text-gray-400">
                    <p className="mb-2">
                      <span className="font-semibold text-white">
                        {t('locations.hours')}:{' '}
                      </span>
                      {location.hours}
                    </p>
                    <p>
                      <span className="font-semibold text-white">
                        {t('locations.phone')}:{' '}
                      </span>
                      {location.phone}
                    </p>
                    <button
                      onClick={() => navigate('/menu')}
                      className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors w-full"
                    >
                      {t('menu.viewFull')}
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-24 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">{t('locations.expansion')}</h2>
            <p className="text-gray-400 mb-16 text-lg">
              {t('locations.expansionText')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-xl"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 rounded-full p-4 shadow-lg">
                    <Award className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4">{t('locations.quality')}</h3>
                <p className="text-gray-400">{t('locations.qualityText')}</p>
                <div className="absolute -right-2 -top-2">
                  <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                    Premium
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-xl"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 rounded-full p-4 shadow-lg">
                    <Utensils className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4">{t('locations.tradition')}</h3>
                <p className="text-gray-400">{t('locations.traditionText')}</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-xl"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 rounded-full p-4 shadow-lg">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4">{t('locations.community')}</h3>
                <p className="text-gray-400">{t('locations.communityText')}</p>
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
              className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-xl max-w-2xl mx-auto mb-24"
            >
              <h2 className="text-3xl font-bold mb-4">{t('locations.franchiseTitle')}</h2>
              <p className="text-gray-400 mb-8">
                {t('locations.franchiseDescription')}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-500">
                  {t('locations.franchiseContact')}
                </h3>
                <div className="flex items-center space-x-2 text-gray-300">
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
                    className="hover:text-red-500 transition-colors"
                  >
                    {t('locations.franchiseEmail')}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
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
                    className="hover:text-red-500 transition-colors"
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
    </div>
  );
}
