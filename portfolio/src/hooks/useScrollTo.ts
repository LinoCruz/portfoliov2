import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollToSection = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    scrollToSection,
    scrollToTop
  };
};
