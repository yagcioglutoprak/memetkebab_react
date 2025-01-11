import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Heart, Clock } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div className="relative bg-gray-50">
      <Section id="about" className="py-24">
        <div className="container mx-auto px-4">
          {/* Main Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                className="relative inline-block mb-8"
              >
                <h2 className="text-5xl font-bold text-[rgba(32,12,0,255)]">
                  {t('about.title')}
                </h2>
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[rgba(213,17,42,255)]"></div>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="text-[rgba(32,12,0,0.8)] mb-8 leading-relaxed text-lg"
              >
                For decades, <span className="text-[rgba(213,17,42,255)] font-semibold">Memet Kebab</span> has been dedicated to bringing authentic cuisine to Europe. Our journey began with a simple vision: crafting the perfect <span className="text-[rgba(213,17,42,255)] font-semibold">döner</span> that would delight food lovers across the continent.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="text-[rgba(32,12,0,0.8)] leading-relaxed text-lg mb-8"
              >
                Our signature <span className="text-[rgba(213,17,42,255)] font-semibold">döner</span> is a masterpiece of culinary tradition – premium cuts of meat, carefully seasoned with our secret blend of spices, slowly roasted to perfection on a vertical spit. Each slice tells a story of quality, passion, and the rich heritage of street food elevated to restaurant excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <button
                  onClick={() => navigate('/about')}
                  className="bg-[rgba(213,17,42,255)] text-white px-10 py-4 rounded-full hover:bg-[rgba(193,15,38,255)] transition-colors duration-300 shadow-lg text-lg font-medium"
                >
                  {t('about.learnMore')}
                </button>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/public/Döner turc préparation.jpg"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Premium Meat Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="mt-16 bg-gradient-to-br from-white via-[rgba(213,17,42,0.05)] to-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[rgba(32,12,0,255)]">
                  {t('about.meat.title')}
                </h3>
                <p className="text-[rgba(32,12,0,0.7)] mb-8 leading-relaxed">
                  {t('about.meat.description')}
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgba(213,17,42,255)] p-3 rounded-full">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgba(32,12,0,255)] mb-2">
                        {t('about.meat.point1')}
                      </h4>
                      <p className="text-[rgba(32,12,0,0.7)]">
                        Our expert butchers carefully select premium cuts daily to ensure the highest quality in every dish.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgba(213,17,42,255)] p-3 rounded-full">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgba(32,12,0,255)] mb-2">
                        {t('about.meat.point2')}
                      </h4>
                      <p className="text-[rgba(32,12,0,0.7)]">
                        We maintain strict quality control standards and work only with certified European suppliers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgba(213,17,42,255)] p-3 rounded-full">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgba(32,12,0,255)] mb-2">
                        {t('about.meat.point3')}
                      </h4>
                      <p className="text-[rgba(32,12,0,0.7)]">
                        Our skilled chefs bring years of expertise to prepare each dish with precision and care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <img 
                    src="public/Döner Kebap Adana.jpg"
                    alt="Premium quality meat"
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(213,17,42,0.1)] to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => navigate('/about')}
              className="bg-[rgba(32,12,0,255)] text-white px-8 py-3 rounded-full hover:bg-[rgba(32,12,0,0.9)] transition-colors duration-300 shadow-lg"
            >
              {t('about.learnMore')}
            </button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ValueCard({ icon, title, description, delay }: ValueCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-[rgba(32,12,0,255)]">{title}</h4>
      <p className="text-[rgba(32,12,0,0.7)]">{description}</p>
    </motion.div>
  );
}