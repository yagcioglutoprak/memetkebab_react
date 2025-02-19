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
    ['rgba(249, 250, 251, 0.5)', 'rgba(249, 250, 251, 0.95)']
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
      className="fixed w-full z-50 backdrop-blur-md shadow-sm transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-gray-50/80"></div>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        <motion.div
          style={{ scale: logoScale }}
          className="relative group cursor-pointer"
          onClick={handleLogoClick}
        >
          <motion.img 
            src="https://i.ibb.co/gmLc3MQ/memet-kebab-white-bcg-rgb.png" 
            alt="Memet Kebab" 
            className="h-12 md:h-14 transition-transform duration-300"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-xl shadow-sm">
            {[
              { label: t('nav.about'), action: () => navigate('/about') },
              { label: t('nav.menu'), action: () => navigate('/menu') },
              { label: t('nav.locations'), action: () => navigate('/locations') },
              { label: t('nav.franchise'), action: () => navigate('/franchise') },
              { label: t('nav.contact'), action: () => handleNavigation('contact') },
              { label: t('nav.joinUs'), action: () => navigate('/careers') }
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={item.action}
                className="px-4 py-2 text-sm font-medium text-[rgba(32,12,0,0.7)] hover:text-[rgba(213,17,42,255)] rounded-lg transition-colors relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
                <div className="absolute inset-0 bg-[rgba(213,17,42,255)]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <motion.button 
              onClick={onOrderClick}
              className="bg-[rgba(213,17,42,255)] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[rgba(193,15,38,255)] transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.orderNow')}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 rounded-xl hover:bg-[rgba(213,17,42,255)]/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6 text-[rgba(32,12,0,255)]" />
        </motion.button>

        {/* Mobile Menu */}
        <motion.div 
          className={`${isOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col items-stretch gap-3">
            {[
              { label: t('nav.about'), action: () => { navigate('/about'); setIsOpen(false); } },
              { label: t('nav.menu'), action: () => { navigate('/menu'); setIsOpen(false); } },
              { label: t('nav.locations'), action: () => { navigate('/locations'); setIsOpen(false); } },
              { label: t('nav.contact'), action: () => { handleNavigation('contact'); setIsOpen(false); } },
              { label: t('nav.joinUs'), action: () => { navigate('/careers'); setIsOpen(false); } }
            ].map((item, index) => (
              <motion.button 
                key={index}
                onClick={item.action}
                className="w-full text-left py-3 px-4 rounded-xl hover:bg-[rgba(213,17,42,255)]/5 transition-colors text-[rgba(32,12,0,0.7)] hover:text-[rgba(32,12,0,255)] font-medium"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <div className="w-full border-t border-gray-100 my-3"></div>
            
            <div className="px-4">
              <LanguageSwitcher />
            </div>
            
            <motion.button 
              onClick={() => { onOrderClick(); setIsOpen(false); }}
              className="mx-4 bg-[rgba(213,17,42,255)] text-white text-center py-3 px-6 rounded-xl hover:bg-[rgba(193,15,38,255)] transition-colors text-base font-medium shadow-lg"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {t('nav.orderNow')}
            </motion.button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}