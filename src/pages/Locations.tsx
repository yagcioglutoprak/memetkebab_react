import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Utensils, Users, ArrowLeft, Clock, Phone, ExternalLink } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-[rgba(32,12,0,0.7)] hover:text-[rgba(32,12,0,255)] transition-colors mb-12"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('common.backToHome')}
          </motion.button>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 bg-[rgba(213,17,42,255)]/5 rounded-full mb-6"
            >
              <span className="text-[rgba(213,17,42,255)] font-medium text-sm">Our Locations</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6 text-[rgba(32,12,0,255)]"
            >
              {t('locations.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[rgba(32,12,0,0.7)]"
            >
              {t('locations.description')}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="container mx-auto px-4 pb-24">
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
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgba(213,17,42,255)] to-[rgba(193,15,38,255)] rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-[rgba(32,12,0,255)] group-hover:text-[rgba(213,17,42,255)] transition-colors">
                      {location.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[rgba(32,12,0,0.7)]">
                      <MapPin className="w-4 h-4 flex-shrink-0 text-[rgba(213,17,42,255)]" />
                      <p className="line-clamp-2">{location.address}</p>
                    </div>
                  </div>
                  {location.status === 'coming-soon' && (
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgba(213,17,42,255)] to-[rgba(193,15,38,255)] rounded-full blur opacity-50"></div>
                      <span className="relative px-3 py-1 bg-white text-[rgba(213,17,42,255)] text-sm font-medium rounded-full border border-[rgba(213,17,42,255)] whitespace-nowrap">
                        {t('locations.comingSoon')}
                      </span>
                    </div>
                  )}
                </div>

                {location.status === 'active' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 text-[rgba(32,12,0,0.7)]">
                          <Clock className="w-4 h-4 text-[rgba(213,17,42,255)]" />
                          <p className="text-sm font-medium">{location.hours}</p>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 text-[rgba(32,12,0,0.7)]">
                          <Phone className="w-4 h-4 text-[rgba(213,17,42,255)]" />
                          <p className="text-sm font-medium">{location.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-4">
                      <div className="flex items-center gap-2 text-[rgba(32,12,0,0.7)]">
                        <Award className="w-4 h-4 text-[rgba(213,17,42,255)]" />
                        <p className="text-sm">{t('locations.flagship')}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[rgba(32,12,0,0.7)]">
                        <Utensils className="w-4 h-4 text-[rgba(213,17,42,255)]" />
                        <p className="text-sm">{t('locations.dineIn')}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[rgba(32,12,0,0.7)]">
                        <Users className="w-4 h-4 text-[rgba(213,17,42,255)]" />
                        <p className="text-sm">{t('locations.capacity')}</p>
                      </div>
                    </div>

                    <div className="pt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/menu')}
                        className="w-full px-6 py-3 bg-[rgba(213,17,42,255)] hover:bg-[rgba(193,15,38,255)] text-white rounded-xl transition-colors flex items-center justify-center gap-2 font-medium"
                      >
                        <Utensils className="w-5 h-5" />
                        {t('locations.viewMenu')}
                      </motion.button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expansion Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-24 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-[rgba(213,17,42,255)]/5 rounded-full mb-6">
            <span className="text-[rgba(213,17,42,255)] font-medium text-sm">Growing Together</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-[rgba(32,12,0,255)]">
            {t('locations.expansion')}
          </h2>
          <p className="text-[rgba(32,12,0,0.7)] mb-16 text-lg">
            {t('locations.expansionText')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Quality First', text: t('locations.qualityText') },
              { icon: Users, title: 'Community Focus', text: t('locations.communityText') },
              { icon: MapPin, title: 'Strategic Growth', text: t('locations.growthText') }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[rgba(213,17,42,255)] rounded-xl p-3 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-[rgba(32,12,0,255)]">
                  {item.title}
                </h3>
                <p className="text-[rgba(32,12,0,0.7)] text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Franchise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 mb-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(213,17,42,255)]/5 to-transparent rounded-3xl"></div>
          <div className="relative container mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center px-4 py-1.5 bg-[rgba(213,17,42,255)]/5 rounded-full mb-6">
                <span className="text-[rgba(213,17,42,255)] font-medium text-sm">Join Our Family</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-[rgba(32,12,0,255)]">
                {t('franchise.title')}
              </h2>
              <p className="text-[rgba(32,12,0,0.7)] mb-8 text-lg leading-relaxed">
                {t('franchise.description')}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[rgba(32,12,0,255)]">
                  {t('locations.franchiseContact')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-[rgba(32,12,0,0.7)]">
                      <Phone className="w-4 h-4 text-[rgba(213,17,42,255)]" />
                      <p className="text-sm font-medium">{t('locations.franchisePhone')}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-[rgba(32,12,0,0.7)]">
                      <ExternalLink className="w-4 h-4 text-[rgba(213,17,42,255)]" />
                      <p className="text-sm font-medium">{t('locations.franchiseEmail')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {[
                { number: '10+', label: t('franchise.years') },
                { number: '100K+', label: t('franchise.customers') },
                { number: '99%', label: t('franchise.satisfaction') },
                { number: '24/7', label: t('franchise.support') }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl font-bold text-[rgba(213,17,42,255)] mb-2">{stat.number}</div>
                  <div className="text-sm text-[rgba(32,12,0,0.7)]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
