import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const languageNames = {
  en: 'English',
  pl: 'Polski',
  ro: 'Română'
};

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded transition-colors text-[rgba(32,12,0,255)] hover:text-[rgba(213,17,42,255)]"
      >
        <span className="font-medium">{languageNames[language]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
          {Object.entries(languageNames).map(([code, name]) => (
            <button
              key={code}
              onClick={() => {
                setLanguage(code as 'en' | 'pl' | 'ro');
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                language === code
                  ? 'bg-[rgba(213,17,42,255)] text-white'
                  : 'text-[rgba(32,12,0,255)] hover:bg-gray-50 hover:text-[rgba(213,17,42,255)]'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}