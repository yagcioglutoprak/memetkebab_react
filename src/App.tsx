import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Facebook, Instagram, Twitter, Mail, Phone, MapPinned, Users, Star, Utensils, Timer, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import Section from './components/Section';
import MenuCard from './components/MenuCard';
import PromoCard from './components/PromoCard';
import AppPromotion from './components/AppPromotion';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import ProductModal from './components/ProductModal';
import Locations from './pages/Locations';
import MenuPage from './pages/MenuPage';
import MaintenancePage from './pages/MaintenancePage';

function Home({ onOrderClick }: { onOrderClick: () => void }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  const menuItems = [
    {
      title: t('products.classicDoner.title'),
      price: "$12.99",
      description: t('products.classicDoner.description'),
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80",
      isPromo: true
    },
    {
      title: t('products.mixedGrill.title'),
      price: "$18.99",
      description: t('products.mixedGrill.description'),
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
    },
    {
      title: t('products.falafel.title'),
      price: "$11.99",
      description: t('products.falafel.description'),
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80"
    },
    {
      title: t('products.iskender.title'),
      price: "$16.99",
      description: t('products.iskender.description'),
      image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&q=80",
      isPromo: true
    }
  ];

  const promotions = [
    {
      title: t('promos.familyFeast.title'),
      description: t('promos.familyFeast.description'),
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80"
    },
    {
      title: t('promos.studentSpecial.title'),
      description: t('promos.studentSpecial.description'),
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      {/* Hero Section */}
      <Section className="relative h-screen pt-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&q=80"
            alt="Döner kebab"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.img
              src="https://i.ibb.co/gmLc3MQ/memet-kebab-white-bcg-rgb.png"
              alt="Memet Kebab"
              className="w-64 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <h1 className="text-6xl font-bold mb-6">
              {t('hero.title')}
              <span className="text-red-600"> Döner</span>
            </h1>
            <p className="text-xl mb-8">{t('hero.subtitle')}</p>
            <button 
              onClick={onOrderClick}
              className="bg-red-600 px-8 py-3 rounded-full text-lg hover:bg-red-700 transition"
            >
              {t('hero.orderNow')}
            </button>
          </motion.div>
        </div>
      </Section>

      {/* Menu Section */}
      <Section id="menu" className="bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 pt-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              {t('menu.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400"
            >
              {t('menu.subtitle')}
            </motion.p>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <MenuCard
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  isPromo={item.isPromo}
                  onClick={() => setSelectedProduct(item)}
                />
              </motion.div>
            ))}
          </div>

          {/* Promotions */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {promotions.map((promo, index) => (
              <motion.div
                key={promo.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PromoCard
                  title={promo.title}
                  description={promo.description}
                  image={promo.image}
                  onClick={() => setSelectedProduct(promo)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => navigate('/menu')}
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
              {t('menu.viewFull')} <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </Section>

      {/* About Us Section */}
      <Section id="about" className="py-24 bg-gray-950 relative overflow-hidden">
        <AboutUs />
      </Section>

      {/* App Promotion Section */}
      <AppPromotion t={t} className="py-24 bg-gray-950" />

      {/* Careers Section */}
      <Careers t={t} />

      {/* Contact Section */}
      <Section id="contact" className="py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">{t('contact.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="font-semibold">{t('contact.call')}</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="font-semibold">{t('contact.email')}</h3>
                    <p className="text-gray-400">info@memetkebab.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPinned className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="font-semibold">{t('contact.visit')}</h3>
                    <p className="text-gray-400">123 Kebab Street, Istanbul, Turkey</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2755888565207!2d28.977549315415467!3d41.008237779300454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd6570f4e1%3A0xe8b2b9e5c49a9c6f!2sGrand%20Bazaar!5e0!3m2!1sen!2sus!4v1645564565478!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === "1";

  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ScrollToTop />
      <Header onOrderClick={scrollToContact} />
      <Routes>
        <Route path="/" element={<Home onOrderClick={scrollToContact} />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      
      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <motion.img 
              src="https://i.ibb.co/gmLc3MQ/memet-kebab-white-bcg-rgb.png" 
              alt="Memet Kebab" 
              className="h-24 hover:scale-105 transition-transform duration-300"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            />
            <div className="flex gap-6">
              <Facebook className="w-6 h-6 hover:text-red-600 cursor-pointer transition" />
              <Instagram className="w-6 h-6 hover:text-red-600 cursor-pointer transition" />
              <Twitter className="w-6 h-6 hover:text-red-600 cursor-pointer transition" />
            </div>
            <div className="text-sm text-gray-400">
              {t('footer.rights')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;