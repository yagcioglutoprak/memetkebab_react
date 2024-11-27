import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded transition-colors ${
          language === 'en' 
            ? 'bg-[rgba(213,17,42,255)] text-white' 
            : 'text-[rgba(32,12,0,255)] hover:text-[rgba(213,17,42,255)]'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('pl')}
        className={`px-2 py-1 rounded transition-colors ${
          language === 'pl' 
            ? 'bg-[rgba(213,17,42,255)] text-white' 
            : 'text-[rgba(32,12,0,255)] hover:text-[rgba(213,17,42,255)]'
        }`}
      >
        PL
      </button>
    </div>
  );
}