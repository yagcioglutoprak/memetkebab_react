import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Clock, Heart, Award, Coffee, Users } from 'lucide-react';

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[rgba(213,17,42,0.15)] via-white to-[rgba(213,17,42,0.1)] py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 animate-pulse"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(213,17,42,0.05) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(213,17,42,0.05) 0%, transparent 40%)'
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 mx-auto mb-8 relative"
          >
            <img 
              src="/memet-kebab-white-bcg-rgb.png" 
              alt="Memet Logo"
              className="w-full h-full object-contain"
            />
            <motion.div
              className="absolute inset-0 border-2 border-[rgba(213,17,42,0.3)] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-6 text-[rgba(32,12,0,255)] relative">
              <span className="relative inline-block">
                Our Story
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-[rgba(213,17,42,0.2)] -z-10"
                ></motion.div>
              </span>
            </h1>
            <p className="text-xl text-[rgba(32,12,0,0.7)] mb-8 leading-relaxed">
              For generations, we have been committed to crafting the perfect döner using only real, premium-quality meat. Our journey began with a simple vision: to serve exceptional food at reasonable prices, staying true to time-honored recipes passed down through our family. Today, we continue this tradition by carefully selecting the finest ingredients and preparing each dish with the same dedication and expertise that has made us a beloved name across Europe.
            </p>
          </motion.div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgba(213,17,42,0.03)] transform skew-x-12"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center mb-12">
            <div className="w-12 h-1 bg-[rgba(213,17,42,255)] mr-4"></div>
            <h2 className="text-4xl font-bold text-[rgba(32,12,0,255)]">
              The Art of <span className="text-[rgba(213,17,42,255)]">Döner</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-lg relative"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[rgba(213,17,42,0.2)] to-transparent"></div>
              <div className="pl-8">
                <p className="text-[rgba(32,12,0,0.7)] mb-6 leading-relaxed text-lg">
                  At the heart of <span className="text-[rgba(213,17,42,255)] font-semibold">Memet Kebab</span>, our <span className="text-[rgba(213,17,42,255)] font-semibold">döner</span> is more than just food – it's a culinary masterpiece that celebrates centuries-old Turkish tradition with contemporary excellence. Every day, our master chefs meticulously layer premium cuts of meat, seasoned with our signature blend of authentic spices, passed down through generations of culinary artisans.
                </p>
                <p className="text-[rgba(32,12,0,0.7)] mb-6 leading-relaxed text-lg">
                  The art of <span className="text-[rgba(213,17,42,255)] font-semibold">döner</span> making begins with selecting the finest quality meat, which is marinated for 24 hours to ensure perfect flavor absorption. The meat is then skillfully stacked on our vertical spits, creating the iconic cone shape that slowly rotates and roasts to perfection, allowing the flavors to develop and the exterior to achieve its characteristic crispy texture while keeping the inside tender and juicy.
                </p>
                <p className="text-[rgba(32,12,0,0.7)] mb-6 leading-relaxed text-lg">
                  Each slice of our <span className="text-[rgba(213,17,42,255)] font-semibold">döner</span> is carved with precision, capturing both the crispy exterior and the succulent interior in every portion. We serve it in various ways – whether wrapped in our freshly baked flatbreads, served on a plate with aromatic rice, or as part of our signature dishes – always maintaining the authentic taste that has made us a beloved name in European Turkish cuisine.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="sticky top-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/prep.jpg"
                    alt="The Art of Döner Preparation" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-transparent"></div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[rgba(32,12,0,0.6)] text-sm italic">Traditional Turkish döner preparation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium Quality Meat Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white via-[rgba(213,17,42,0.05)] to-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[rgba(32,12,0,255)]">
                  {t('about.meat.title')}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {t('about.meat.detailed.description').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-[rgba(32,12,0,0.7)] mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="space-y-8 mt-12">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgba(213,17,42,255)] p-3 rounded-full">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[rgba(32,12,0,255)] mb-2 text-xl">
                        {t('about.meat.point1')}
                      </h3>
                      <p className="text-[rgba(32,12,0,0.7)] leading-relaxed">
                        {t('about.meat.detailed.point1')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgba(213,17,42,255)] p-3 rounded-full">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[rgba(32,12,0,255)] mb-2 text-xl">
                        {t('about.meat.point2')}
                      </h3>
                      <p className="text-[rgba(32,12,0,0.7)] leading-relaxed">
                        {t('about.meat.detailed.point2')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgba(213,17,42,255)] p-3 rounded-full">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[rgba(32,12,0,255)] mb-2 text-xl">
                        {t('about.meat.point3')}
                      </h3>
                      <p className="text-[rgba(32,12,0,0.7)] leading-relaxed">
                        {t('about.meat.detailed.point3')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="sticky top-24"
                >
                  <img 
                    src="/Döner Kebap Adana.jpg"
                    alt="Premium quality meat"
                    className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(213,17,42,0.1)] to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-br from-[rgba(213,17,42,0.08)] via-white to-[rgba(213,17,42,0.05)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[rgba(32,12,0,255)] relative inline-block">
              {t('about.values.title')}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[rgba(213,17,42,255)]"></div>
            </h2>
            <p className="text-[rgba(32,12,0,0.7)] max-w-2xl mx-auto text-lg mt-8">
              {t('about.values.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[rgba(213,17,42,0.1)] rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <Award className="w-12 h-12 text-[rgba(213,17,42,255)] relative z-10 mx-auto" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-[rgba(32,12,0,255)]">{t('about.values.quality.title')}</h3>
              <p className="text-[rgba(32,12,0,0.7)]">
                {t('about.values.quality.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[rgba(213,17,42,0.1)] rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <Clock className="w-12 h-12 text-[rgba(213,17,42,255)] relative z-10 mx-auto" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-[rgba(32,12,0,255)]">{t('about.values.tradition.title')}</h3>
              <p className="text-[rgba(32,12,0,0.7)]">
                {t('about.values.tradition.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[rgba(213,17,42,0.1)] rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <Users className="w-12 h-12 text-[rgba(213,17,42,255)] relative z-10 mx-auto" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-[rgba(32,12,0,255)]">{t('about.values.community.title')}</h3>
              <p className="text-[rgba(32,12,0,0.7)]">
                {t('about.values.community.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[rgba(213,17,42,0.1)] rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <Heart className="w-12 h-12 text-[rgba(213,17,42,255)] relative z-10 mx-auto" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-[rgba(32,12,0,255)]">{t('about.values.service.title')}</h3>
              <p className="text-[rgba(32,12,0,0.7)]">
                {t('about.values.service.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-[rgba(32,12,0,255)] relative inline-block">
              {t('about.commitment')}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-3 left-0 h-1 bg-[rgba(213,17,42,255)]"
              ></motion.div>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <p className="text-[rgba(32,12,0,0.7)] mb-6 leading-relaxed text-lg">
                  {t('about.commitment.part1')}
                </p>
                <p className="text-[rgba(32,12,0,0.7)] leading-relaxed text-lg">
                  {t('about.commitment.part2')}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="stock-photo--a-famous-kebab-restaurant-that-i-ate-in-berlin-germany-fresh-vegetables-and-fast-service-was-1931061614.jpg"
                    alt="People enjoying döner" 
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[rgba(32,12,0,0.6)] text-sm italic">Creating memorable dining experiences for our customers</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
