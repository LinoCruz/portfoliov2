import { useState, useEffect } from 'react';
import { Language } from '../utils/i18n';

const getBrowserLanguage = (): Language => {
  // Check browser language preferences
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // Extract the language code (e.g., 'es' from 'es-ES' or 'es-MX')
  const langCode = browserLang.toLowerCase().split('-')[0];
  
  // Return 'es' if browser is set to Spanish, otherwise default to 'en'
  return langCode === 'es' ? 'es' : 'en';
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // First, check if there's a saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      // Use saved preference if available
      setLanguage(savedLanguage);
    } else {
      // If no saved preference, detect browser language
      const browserLanguage = getBrowserLanguage();
      setLanguage(browserLanguage);
      // Save the detected language as the initial preference
      localStorage.setItem('language', browserLanguage);
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
