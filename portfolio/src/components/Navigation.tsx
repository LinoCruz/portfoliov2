import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Moon, Sun, Languages } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  language: string;
  onLanguageChange: (lang: string) => void;
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export function Navigation({ currentPage, onPageChange, language, onLanguageChange }: NavigationProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    onLanguageChange(newLanguage);
  };

  const getBusinessButtonText = () => {
    return language === 'en' ? 'Business Automation' : 'Automatización de Negocios';
  };

  const getPortfolioText = () => {
    return language === 'en' ? (
      <>
        lino<span className="special-chars">@</span>portfolio<span className="special-chars">:~$</span>
      </>
    ) : (
      <>
        lino<span className="special-chars">@</span>portafolio<span className="special-chars">:~$</span>
      </>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Portfolio Title */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onPageChange('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <h2 className="terminal-text text-sm md:text-base">{getPortfolioText()}</h2>
            </button>
          </div>

          {/* Right Side - Business Solutions Button and Controls */}
          <div className="flex items-center space-x-4">
            {/* Business Solutions Button */}
            <Button
              onClick={() => onPageChange(currentPage === 'automation' ? 'home' : 'automation')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-4 py-2"
            >
              {getBusinessButtonText()}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 hover:bg-muted/50"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="p-2 hover:bg-muted/50 flex items-center space-x-1"
            >
              <Languages className="h-4 w-4" />
              <span className="text-xs uppercase">{language}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}