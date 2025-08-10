import React from 'react';
import { Button } from '../ui/button';
import { Languages } from 'lucide-react';
import { Language } from '../../utils/i18n';

interface LanguageSwitchProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageSwitch = React.memo(({ language, onLanguageChange }: LanguageSwitchProps) => {
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    onLanguageChange(newLanguage);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="p-2 hover:bg-muted/50 flex items-center space-x-1"
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs uppercase">{language}</span>
    </Button>
  );
});
