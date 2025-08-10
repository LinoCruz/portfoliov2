import { useState, useEffect } from 'react';

export const useActiveSection = (currentPage: string) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'projects', 'videos', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navigation

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return {
    activeSection,
    setActiveSection
  };
};
