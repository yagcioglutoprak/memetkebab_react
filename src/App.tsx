import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Facebook, Instagram, Twitter, Mail, Phone, MapPinned, Users, Star, Utensils, Timer, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import logo from './theme/memet-kebab-white-bcg-rgb.png';
import SEOMetaTags from './components/SEOMetaTags';
import HeroCarousel from './components/HeroCarousel';

function Home({ onOrderClick }: { onOrderClick: () => void }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(null);
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
      image: "/stock-photo-delicious-turkish-doner-kebabs-in-pita-bread-for-your-background-business-poster-wallpaper-2494294689.jpg",
      title: "BOGO Deal",
      description: "Buy one döner, get one free! Valid Monday-Thursday",
      link: "/menu?promo=bogo"
    },
    {
      image: "/stock-photo-delicious-turkish-doner-kebabs-in-pita-bread-for-your-background-business-poster-wallpaper-2494294689.jpg",
      title: "Family Feast Special",
      description: "30% off on family platters every weekend",
      link: "/menu?promo=family"
    },
    {
      image: "/stock-photo-delicious-turkish-doner-kebabs-in-pita-bread-for-your-background-business-poster-wallpaper-2494294689.jpg",
      title: "Student Discount",
      description: "Show your student ID for 15% off",
      link: "/menu?promo=student"
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
      title: t('products.classicDoner.title'),
      price: "$12.99",
      description: t('products.classicDoner.description'),
      image: "/Boeuf et Kebab avec Sauce Ail.jpg",
      isPromo: true
    },
    {
      title: t('products.mixedGrill.title'),
      price: "$18.99",
      description: t('products.mixedGrill.description'),
      image: "/Kebab avec frites.jpg"
    },
    {
      title: t('products.falafel.title'),
      price: "$11.99",
      description: t('products.falafel.description'),
      image: "/Shaurma au poulet dans pita.jpg"
    },
    {
      title: t('products.iskender.title'),
      price: "$16.99",
      description: t('products.iskender.description'),
      image: "/Kanapka z kebabem.jpg",
      isPromo: true
    }
  ];

  const promotions = [
    {
      title: t('promos.familyFeast.title'),
      description: t('promos.familyFeast.description'),
      image: "/stock-photo-delicious-turkish-doner-kebabs-in-pita-bread-for-your-background-business-poster-wallpaper-2494294689.jpg"
    },
    {
      title: t('promos.studentSpecial.title'),
      description: t('promos.studentSpecial.description'),
      image: "/Giros High-Res Stock Photo.jpg"
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
                    <p className="text-[rgba(32,12,0,0.7)]">123 Kebab Street, Warsaw, Poland</p>
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  
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
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <img src={logo} alt="Memet Kebab" className="w-32 mb-4" />
              <p className="text-[rgba(32,12,0,0.7)]">{t('footer.description')}</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[rgba(32,12,0,255)]">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/menu')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition">{t('nav.menu')}</button></li>
                <li><button onClick={() => navigate('/locations')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition">{t('nav.locations')}</button></li>
                <li><button onClick={() => navigate('/about')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition">{t('nav.about')}</button></li>
                <li><button onClick={() => navigate('/careers')} className="text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition">{t('nav.careers')}</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[rgba(32,12,0,255)]">{t('footer.contact')}</h3>
              <ul className="space-y-2">
                <li className="text-[rgba(32,12,0,0.7)]">{t('footer.address')}</li>
                <li className="text-[rgba(32,12,0,0.7)]">{t('footer.city')}</li>
                <li className="text-[rgba(32,12,0,0.7)]">{t('footer.phone')}</li>
                <li className="text-[rgba(32,12,0,0.7)]">{t('footer.email')}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[rgba(32,12,0,255)]">{t('footer.followUs')}</h3>
              <div className="flex space-x-4 mb-6">
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
              <div className="space-y-2">
                <button onClick={() => navigate('/privacy-policy')} className="block text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition">{t('nav.privacyPolicy')}</button>
                <button onClick={() => navigate('/terms-of-service')} className="block text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] transition">{t('nav.termsOfService')}</button>
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