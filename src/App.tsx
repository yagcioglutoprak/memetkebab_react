import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Facebook, Instagram, Twitter, Mail, Phone, MapPinned, Users, Star, Utensils, Timer, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage, LanguageProvider } from './contexts/LanguageContext';
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
import FranchisePage from './pages/FranchisePage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import logo from './theme/memet-kebab-white-bcg-rgb.png';
import cafe from './assets/carousel_images/cafe.png';
import calyDizienDoner from './assets/carousel_images/CALY_DIZIEN_DONER.webp';
import girl_eating_döner from './assets/carousel_images/girl_eating.jpg';
import megaZestawDoner from './assets/carousel_images/MEGA_ZESTAW_DONER.webp';
import SEOMetaTags from './components/SEOMetaTags';
import HeroCarousel from './components/HeroCarousel';
import donerDurum from './assets/menu_items /döner_png_dürüm.png';
import donerWithKetchup from './assets/menu_items /2_döner_with_ketchup.webp';
import wrap from './assets/menu_items /wrap.webp';
import singleDonerMenu from './assets/menu_items /single döner menü .webp';
import sandvic from './assets/menu_items /sandviç .webp';
import menuDurum from './assets/menu_items /menu_4_dürüm .webp';
import studentDiscount from './assets/student_discount.webp';

function Home({ onOrderClick }: { onOrderClick: () => void }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = React.useRef(null);
  const dragConstraintsRef = React.useRef(null);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const nextSlide = (currentSlide + newDirection + carouselSlides.length) % carouselSlides.length;
    setCurrentSlide(nextSlide);
  };

  const carouselSlides = [
    {
      image: calyDizienDoner
    },
    {
      image: cafe
    },
    {
      image: girl_eating_döner
    },
    {
      image: megaZestawDoner
    }
  ];

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const menuItems = [
    {
      title: 'Mega Döner Roll',
      price: "€8.99",
      description: 'Classic dürüm with thin lavash bread, juicy döner meat, fresh vegetables, and creamy sauce.',
      image: donerDurum,
      isPromo: true
    },
    {
      title: 'Döner Fun Zestaw',
      price: "€12.99",
      description: 'A flavor-packed set! Tasty döner wrap, crispy fries, nuggets, and a cold drink. Perfect for lunch or a chill evening.',
      image: donerWithKetchup
    },
    {
      title:  'Wrapster Klasyk',
      price: "€7.99",
      description:  'Grilled triangular wrap filled with seasoned meat and fresh vegetables. A classic with a modern twist!',
      image: wrap
    },
    {
      title:  'Dürüm Solo Menu',
      price: "€10.99",
      description: 'Simple and satisfying. A döner wrap, fries, and a cold drink. All you need – solo but loaded.',
      image: singleDonerMenu,
      isPromo: true
    },
    {
      title:'Kids Kebab Mix',
      price: "€6.99",
      description:  'Small sandwich with meat, fresh veggies, and our mild sauce. Comes with fries and juice – perfect for little kebab fans!',
      image: sandvic
    },
    {
      title: 'Maxi Dürüm Zestaw',
      price: "€14.99",
      description: 'For the hungry ones! Two signature dürüms, fries, and a drink – a real feast.',
      image: menuDurum
    }
  ];

  const promotions = [
    {
      title: t('promos.studentSpecial.title'),
      description: t('promos.studentSpecial.description'),
      image: studentDiscount
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
      <Section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMjEzLDE3LDQyLDAuMDgpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Carousel Section */}
          <div>
            <HeroCarousel slides={carouselSlides} />
          </div>
        </div>
      </Section>

      {/* Menu Section */}
      <Section className="py-12 bg-white" id="menu">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 bg-gray-50 rounded-full mb-6"
            >
              <span className="text-[rgba(213,17,42,255)] font-medium text-sm">{t('menu.featuredItems')}</span>
            </motion.div>

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
              className="text-xl text-[rgba(32,12,0,0.7)] max-w-2xl mx-auto"
            >
              {t('menu.subtitle')}
            </motion.p>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
                onClick={() => setSelectedProduct(item)}
              >
                <div className="h-full bg-white rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-100 hover:shadow-xl">
                  {/* Image container */}
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gray-50">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {item.isPromo && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-[rgba(213,17,42,255)] text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                          {t('menu.popular')}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-[rgba(32,12,0,255)] group-hover:text-[rgba(213,17,42,255)] transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[rgba(213,17,42,255)]" />
                        <span className="text-[rgba(32,12,0,0.7)] text-sm">4.9</span>
                      </div>
                    </div>
                    <p className="text-[rgba(32,12,0,0.7)] text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-lg font-bold text-[rgba(32,12,0,255)]">
                        {item.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[rgba(213,17,42,255)] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[rgba(193,15,38,255)] transition-colors flex items-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOrderClick();
                        }}
                      >
                        {t('menu.order')}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Full Menu Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <button
              onClick={() => navigate('/menu')}
              className="inline-flex items-center gap-2 bg-[rgba(213,17,42,255)] text-white px-8 py-3 rounded-xl font-medium hover:bg-[rgba(193,15,38,255)] transition-colors group"
            >
              {t('menu.viewFullMenu')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Promotions */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-[rgba(32,12,0,255)] mb-8 text-center">{t('menu.specialOffers')}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {promotions.map((promo, index) => (
                  <motion.div
                    key={promo.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProduct(promo)}
                  >
                    <div className="relative h-full overflow-hidden rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="absolute inset-0">
                        <img 
                          src={promo.image}
                          alt={promo.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(32,12,0,0.7)] to-transparent" />
                      </div>
                      <div className="relative p-8 h-full min-h-[300px] flex flex-col justify-end">
                        <div className="space-y-2">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(213,17,42,255)] text-sm font-medium text-white mb-2">
                            {t('menu.limitedTime')}
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {promo.title}
                          </h3>
                          <p className="text-white/90">
                            {promo.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </Section>

      {/* App Promotion Section */}
      <Section className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <AppPromotion t={t} />
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[rgba(32,12,0,255)]">{t('contact.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[rgba(213,17,42,255)]" />
                  <div>
                    <h3 className="font-semibold text-[rgba(32,12,0,255)]">{t('contact.call')}</h3>
                    <p className="text-[rgba(32,12,0,0.7)]">+48 (608) 514 215</p>
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
                    <p className="text-[rgba(32,12,0,0.7)]">Księcia Józefa Poniatowskiego 24/1a, 50-326 Wrocław, Polska</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7732074162544!2d21.012250776191685!3d52.23235256484398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97552c0a87059!2sPalace%20of%20Culture%20and%20Science!5e0!3m2!1sen!2spl!4v1645564565478!5m2!1sen!2spl"
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
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  const handleOrderClick = () => {
    navigate('/menu');
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
      <SEOMetaTags />
      <ScrollToTop />
      <Header onOrderClick={handleOrderClick} />
      <Routes>
        <Route path="/" element={<Home onOrderClick={handleOrderClick} />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Newsletter Section */}
          <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-xl p-8 transform -translate-y-12 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-[rgba(32,12,0,255)] mb-2">{t('footer.newsletter')}</h3>
                <p className="text-[rgba(32,12,0,0.7)] mb-4">{t('footer.newsletterDesc')}</p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgba(213,17,42,0.3)] focus:border-[rgba(213,17,42,255)]"
                  />
                  <button className="bg-[rgba(213,17,42,255)] hover:bg-[rgba(193,15,38,255)] text-white font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                    {t('footer.subscribe')}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <img src={logo} alt="Memet Kebab" className="w-40 mb-6" />
              <p className="text-[rgba(32,12,0,0.7)] mb-6 max-w-md">{t('footer.description')}</p>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="bg-white p-2 rounded-full shadow-sm text-[rgba(213,17,42,255)] hover:text-white hover:bg-[rgba(213,17,42,255)] transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow-sm text-[rgba(213,17,42,255)] hover:text-white hover:bg-[rgba(213,17,42,255)] transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow-sm text-[rgba(213,17,42,255)] hover:text-white hover:bg-[rgba(213,17,42,255)] transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-[rgba(32,12,0,255)]">{t('footer.company')}</h3>
              <ul className="space-y-3">
                <li><button onClick={() => navigate('/about')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition flex items-center"><ArrowRight className="w-4 h-4 mr-2" />{t('footer.about')}</button></li>
                <li><button onClick={() => navigate('/menu')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition flex items-center"><ArrowRight className="w-4 h-4 mr-2" />{t('nav.menu')}</button></li>
                <li><button onClick={() => navigate('/locations')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition flex items-center"><ArrowRight className="w-4 h-4 mr-2" />{t('nav.locations')}</button></li>
                <li><button onClick={() => navigate('/careers')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition flex items-center"><ArrowRight className="w-4 h-4 mr-2" />{t('footer.careers')}</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-[rgba(32,12,0,255)]">{t('footer.legal')}</h3>
              <ul className="space-y-3">
                <li><button onClick={() => navigate('/privacy-policy')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition flex items-center"><ArrowRight className="w-4 h-4 mr-2" />{t('footer.privacy')}</button></li>
                <li><button onClick={() => navigate('/terms-of-service')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition flex items-center"><ArrowRight className="w-4 h-4 mr-2" />{t('footer.terms')}</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-[rgba(32,12,0,255)]">{t('footer.contact')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[rgba(213,17,42,255)] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[rgba(32,12,0,0.7)]">{t('footer.address')}</p>
                    <p className="text-[rgba(32,12,0,0.7)]">{t('footer.city')}</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-[rgba(213,17,42,255)] mr-3 flex-shrink-0" />
                  <p className="text-[rgba(32,12,0,0.7)]">{t('footer.phone')}</p>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-[rgba(213,17,42,255)] mr-3 flex-shrink-0" />
                  <p className="text-[rgba(32,12,0,0.7)]">{t('footer.email')}</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-[rgba(32,12,0,0.7)]">&copy; {new Date().getFullYear()} Memet Kebab. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WrappedApp() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

export default WrappedApp;