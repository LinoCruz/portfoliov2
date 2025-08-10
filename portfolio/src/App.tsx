import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { LandingSection } from './components/sections/LandingSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { VideosSection } from './components/sections/VideosSection';
import { ContactSection } from './components/sections/ContactSection';
import { AutomationPage } from './components/AutomationPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('home'); // Used for scroll tracking
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');

  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  // Handle section changes and smooth scrolling
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle page changes
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      setActiveSection('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle language changes
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Update active section based on scroll position (only for home page)
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

  // Render different pages
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'automation':
        return <AutomationPage language={language} />;
      default:
        return (
          <main className="pt-16">
            {/* Landing Section */}
            <div id="home">
              <LandingSection onSectionChange={handleSectionChange} language={language} />
            </div>

            {/* Projects Section */}
            <div id="projects" className="min-h-screen">
              <ProjectsSection language={language} />
            </div>

            {/* Videos Section */}
            <div id="videos" className="min-h-screen">
              <VideosSection language={language} />
            </div>

            {/* Contact Section */}
            <div id="contact" className="min-h-screen">
              <ContactSection language={language} />
            </div>
          </main>
        );
    }
  };

  const getFooterText = () => {
    if (language === 'es') {
      return {
        portfolio: 'Gracias por visitar mi portafolio',
        built: 'Construido con React, TypeScript y Tailwind CSS. Hecho con amor, creatividad y mucho café.',
        rights: 'Todos los derechos reservados.'
      };
    }
    return {
      portfolio: 'Thank you for visiting my portfolio',
      built: 'Built with React, TypeScript, and Tailwind CSS. Made with love, creativity, and a high dose of caffeine.',
      rights: 'All rights reserved.'
    };
  };

  const footerText = getFooterText();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        language={language}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Current Page Content */}
      {renderCurrentPage()}

      {/* Footer - only show on home page */}
      {currentPage === 'home' && (
        <footer className="bg-card border-t border-border/50 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="gradient-text mb-4">{footerText.portfolio}</div>
            <p className="text-muted-foreground text-sm">
              {footerText.built}
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              © 2024 Lino Cruz. {footerText.rights}
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}