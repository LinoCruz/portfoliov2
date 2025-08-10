import { useState, useEffect } from 'react';
import { Language } from '../utils/i18n';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);
  };

  return {
    language,
    changeLanguage,
    toggleLanguage
  };
};
