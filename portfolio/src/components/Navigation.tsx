import { Button } from './ui/button';
import { ThemeToggle } from './common/ThemeToggle';
import { LanguageSwitch } from './common/LanguageSwitch';
import { useTheme } from '../hooks/useTheme';
import { Language, navigationTranslations, t } from '../utils/i18n';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export function Navigation({ currentPage, onPageChange, language, onLanguageChange }: NavigationProps) {
  const { isDark, toggleTheme } = useTheme();

  const getPortfolioText = () => {
    if (language === 'en') {
      return (
        <>
          lino<span className="special-chars">@</span>portfolio<span className="special-chars">:~$</span>
        </>
      );
    }
    return (
      <>
        lino<span className="special-chars">@</span>portafolio<span className="special-chars">:~$</span>
      </>
    );
  };

  const businessButtonText = t(navigationTranslations, 'businessAutomation', language);
  const businessButtonTextDesktop = t(navigationTranslations, 'businessAutomationDesktop', language);

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
          <div className="flex items-center space-x-1 md:space-x-4">
            {/* Business Solutions Button */}
            <Button
              onClick={() => onPageChange(currentPage === 'automation' ? 'home' : 'automation')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-2 py-2 md:px-4 text-xs md:text-sm"
            >
              <span className="md:hidden">{businessButtonText}</span>
              <span className="hidden md:inline">{businessButtonTextDesktop}</span>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

            {/* Language Toggle */}
            <LanguageSwitch language={language} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </nav>
  );
}