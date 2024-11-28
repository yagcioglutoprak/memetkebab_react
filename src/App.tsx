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
import ProductModal from './components/ProductModal';
import Locations from './pages/Locations';
import MenuPage from './pages/MenuPage';
import MaintenancePage from './pages/MaintenancePage';
import CareersPage from './pages/CareersPage';

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
            <h1 className="text-6xl font-bold mb-6 text-[rgba(32,12,0,255)]">
              {t('hero.title')}
              <span className="text-[rgba(213,17,42,255)]"> Döner</span>
            </h1>
            <p className="text-xl mb-8 text-[rgba(32,12,0,0.7)]">{t('hero.subtitle')}</p>
            <button 
              onClick={onOrderClick}
              className="bg-[rgba(213,17,42,255)] text-white px-8 py-3 rounded-full text-lg hover:bg-[rgba(193,15,38,255)] transition"
            >
              {t('hero.orderNow')}
            </button>
          </motion.div>
        </div>
      </Section>

      {/* Menu Section */}
      <Section id="menu" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 pt-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4 text-[rgba(32,12,0,255)]"
            >
              {t('menu.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[rgba(32,12,0,0.7)]"
            >
              {t('menu.subtitle')}
            </motion.p>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative"
              >
                <MenuCard
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  isPromo={item.isPromo}
                  onClick={() => setSelectedProduct(item)}
                  index={index}
                />
              </motion.div>
            ))}
          </div>

          {/* Promotions */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {promotions.map((promo, index) => (
              <motion.div
                key={promo.title}
                className="relative"
              >
                <PromoCard
                  title={promo.title}
                  description={promo.description}
                  image={promo.image}
                  onClick={() => setSelectedProduct(promo)}
                  index={index}
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
              className="inline-flex items-center gap-2 bg-[rgba(213,17,42,255)] text-white px-8 py-3 rounded-full hover:bg-[rgba(193,15,38,255)] transition-colors"
            >
              {t('menu.viewFull')} <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </Section>

      {/* About Us Section */}
      <Section id="about" className="py-24 bg-white relative overflow-hidden">
        <AboutUs />
      </Section>

      {/* App Promotion Section */}
      <AppPromotion t={t} className="py-24 bg-gray-50" />

      {/* Contact Section */}
      <Section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[rgba(32,12,0,255)]">{t('contact.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[rgba(213,17,42,255)]" />
                  <div>
                    <h3 className="font-semibold text-[rgba(32,12,0,255)]">{t('contact.call')}</h3>
                    <p className="text-[rgba(32,12,0,0.7)]">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[rgba(213,17,42,255)]" />
                  <div>
                    <h3 className="font-semibold text-[rgba(32,12,0,255)]">{t('contact.email')}</h3>
                    <p className="text-[rgba(32,12,0,0.7)]">info@memetkebab.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPinned className="w-6 h-6 text-[rgba(213,17,42,255)]" />
                  <div>
                    <h3 className="font-semibold text-[rgba(32,12,0,255)]">{t('contact.visit')}</h3>
                    <p className="text-[rgba(32,12,0,0.7)]">123 Kebab Street, Istanbul, Turkey</p>
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
    <div className="min-h-screen bg-white text-[rgba(32,12,0,255)]">
      <ScrollToTop />
      <Header onOrderClick={scrollToContact} />
      <Routes>
        <Route path="/" element={<Home onOrderClick={scrollToContact} />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/src/theme/memet-kebab-white-bcg-rgb.png" alt="Memet Kebab" className="w-32 mb-4" />
              <p className="text-[rgba(32,12,0,0.7)]">{t('footer.description')}</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[rgba(32,12,0,255)]">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)]">{t('nav.menu')}</a></li>
                <li><a href="#about" className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)]">{t('nav.about')}</a></li>
                <li><a href="#contact" className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)]">{t('nav.contact')}</a></li>
                <li><a href="#careers" className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)]">{t('nav.careers')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[rgba(32,12,0,255)]">{t('footer.contact')}</h3>
              <ul className="space-y-2">
                <li className="text-[rgba(32,12,0,0.7)]">123 Kebab Street</li>
                <li className="text-[rgba(32,12,0,0.7)]">Istanbul, Turkey</li>
                <li className="text-[rgba(32,12,0,0.7)]">+1 (555) 123-4567</li>
                <li className="text-[rgba(32,12,0,0.7)]">info@memetkebab.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[rgba(32,12,0,255)]">{t('footer.followUs')}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-[rgba(213,17,42,255)] hover:text-[rgba(193,15,38,255)]">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-[rgba(213,17,42,255)] hover:text-[rgba(193,15,38,255)]">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-[rgba(213,17,42,255)] hover:text-[rgba(193,15,38,255)]">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-[rgba(32,12,0,0.7)]">&copy; {new Date().getFullYear()} Memet Kebab. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;