import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  onOrderClick: () => void;
}

export default function Header({ onOrderClick }: HeaderProps) {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const logoScale = useTransform(scrollY, [0, 100], [1.2, 1]);
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <motion.header 
      style={{ backgroundColor: headerBg }}
      className="fixed w-full z-50 backdrop-blur-sm transition-all duration-300 text-[rgba(32,12,0,255)]"
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          style={{ scale: logoScale }}
          className="relative group cursor-pointer"
          onClick={handleLogoClick}
        >
          <motion.img 
            src="https://i.ibb.co/gmLc3MQ/memet-kebab-white-bcg-rgb.png" 
            alt="Memet Kebab" 
            className="h-12 md:h-16 transition-transform duration-300"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => handleNavigation('about')} className="hover:text-[rgba(213,17,42,255)] transition">{t('nav.about')}</button>
          <button onClick={() => navigate('/menu')} className="hover:text-[rgba(213,17,42,255)] transition">{t('nav.menu')}</button>
          <button onClick={() => navigate('/locations')} className="hover:text-[rgba(213,17,42,255)] transition">{t('nav.locations')}</button>
          <button onClick={() => handleNavigation('contact')} className="hover:text-[rgba(213,17,42,255)] transition">{t('nav.contact')}</button>
          <button onClick={() => handleNavigation('careers')} className="hover:text-[rgba(213,17,42,255)] transition">{t('nav.joinUs')}</button>
          <LanguageSwitcher />
          <button 
            onClick={onOrderClick}
            className="bg-[rgba(213,17,42,255)] text-white px-6 py-2 rounded-full hover:bg-[rgba(193,15,38,255)] transition"
          >
            {t('nav.orderNow')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6 text-[rgba(32,12,0,255)]" />
        </motion.button>

        {/* Mobile Menu */}
        <motion.div 
          className={`${isOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col items-center gap-6">
            <motion.button 
              onClick={() => { handleNavigation('about'); setIsOpen(false); }} 
              className="w-full text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.about')}
            </motion.button>
            <motion.button 
              onClick={() => { navigate('/menu'); setIsOpen(false); }} 
              className="w-full text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.menu')}
            </motion.button>
            <motion.button 
              onClick={() => { navigate('/locations'); setIsOpen(false); }} 
              className="w-full text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.locations')}
            </motion.button>
            <motion.button 
              onClick={() => { handleNavigation('contact'); setIsOpen(false); }} 
              className="w-full text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.contact')}
            </motion.button>
            <motion.button 
              onClick={() => { handleNavigation('careers'); setIsOpen(false); }} 
              className="w-full text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.joinUs')}
            </motion.button>
            
            <div className="w-full border-t border-gray-200 my-2"></div>
            
            <LanguageSwitcher />
            
            <motion.button 
              onClick={() => { onOrderClick(); setIsOpen(false); }}
              className="w-full bg-[rgba(213,17,42,255)] text-white text-center py-3 px-6 rounded-lg hover:bg-[rgba(193,15,38,255)] transition-colors text-lg font-medium"
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.orderNow')}
            </motion.button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}