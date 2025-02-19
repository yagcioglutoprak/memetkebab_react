import React, { createContext, useContext, useState } from 'react';
import { enTranslations } from './english_lang';
import { deTranslations } from './de_lang';
import { csTranslations } from './czech_lang';
import { huTranslations } from './hungarian_lang';
import { plTranslations } from './pl_lang';
import { roTranslations } from './romanaian_lang';
import { ruTranslations } from './ru_lang';
import { slTranslations } from './slovenian_lang';
import { ukTranslations } from './ukranian_lang';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const translations: { [key: string]: { [key: string]: string } } = {
  en: enTranslations,
  de: deTranslations,
  cs: csTranslations,
  hu: huTranslations,
  pl: plTranslations,
  ro: roTranslations,
  ru: ruTranslations,
  sl: slTranslations,
  uk: ukTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get initial language from browser or localStorage, default to English
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
      return savedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'en';
  });

  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
