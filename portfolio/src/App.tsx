import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingSection } from './components/sections/LandingSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { VideosSection } from './components/sections/VideosSection';
import { ContactSection } from './components/sections/ContactSection';
import { AutomationPage } from './components/AutomationPage';
import { useLanguage } from './hooks/useLanguage';
import { useScrollTo } from './hooks/useScrollTo';
import { useActiveSection } from './hooks/useActiveSection';
import { footerTranslations, t } from './utils/i18n';
import { GithubIcon } from './components/common/GithubIcon';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { language, changeLanguage } = useLanguage();
  const { scrollToSection, scrollToTop } = useScrollTo();
  const { activeSection, setActiveSection } = useActiveSection(currentPage);

  // Handle section changes and smooth scrolling
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  // Handle page changes
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      setActiveSection('home');
    }
    scrollToTop();
  };

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
    return {
      portfolio: t(footerTranslations, 'portfolio', language),
      built: t(footerTranslations, 'built', language),
      rights: t(footerTranslations, 'rights', language)
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
        onLanguageChange={changeLanguage}
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
            <div className="flex justify-center items-center mt-4 gap-2">
              <a
                href="https://github.com/LinoCruz/portfoliov2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View portfolio source on GitHub"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon className="w-5 h-5 mr-1" />
                <span className="text-xs">Source on GitHub</span>
              </a>
            </div>
            <p className="text-muted-foreground text-xs mt-2">
              © 2024 Lino Cruz. {footerText.rights}
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}