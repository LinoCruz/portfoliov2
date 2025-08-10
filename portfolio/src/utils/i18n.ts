export type Language = 'en' | 'es';

export interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

// Landing Section Translations
export const landingTranslations: Translations = {
  greeting: {
    en: "Hi there!",
    es: "¡Saludos!"
  },
  title: {
    en: "I'm Lino",
    es: "Soy Lino"
  },
  description: {
    en: "I'm an AI engineer. I design innovative solutions and automated systems that help companies scale. I believe that, when applied well, AI improves efficiency, expands opportunities for growth, and accelerates goal achievement.",
    es: "Soy ingeniero de IA. Diseño soluciones innovadoras y sistemas automatizados que ayudan a las empresas a escalar. Creo que la IA, bien aplicada, mejora la eficiencia, amplía oportunidades de crecimiento y acelera el logro de objetivos."
  },
  viewProjects: {
    en: 'View Projects',
    es: 'Ver Proyectos'
  },
  getResume: {
    en: 'Get My Resume',
    es: 'Ver mi CV'
  },
  development: {
    en: 'Development',
    es: 'Desarrollo'
  },
  developmentDesc: {
    en: 'Full-stack solutions with modern technologies',
    es: 'Soluciones full-stack con tecnologías modernas'
  },
  education: {
    en: 'Tutorials',
    es: 'Tutoriales'
  },
  educationDesc: {
    en: 'Videos and content to help other developers learn',
    es: 'Videos y contenido para ayudar a otros desarrolladores a aprender'
  },
  professional: {
    en: 'Professional',
    es: 'Profesional'
  },
  professionalDesc: {
    en: 'Detailed resume and portfolio showcase',
    es: 'CV detallado y portafolio de proyectos'
  }
};

// Projects Section Translations
export const projectsTranslations: Translations = {
  title: {
    en: 'Projects',
    es: 'Proyectos'
  },
  subtitle: {
    en: 'A collection of my most impactful work, showcasing various technologies and problem-solving approaches.',
    es: 'Una colección de mi trabajo más impactante, mostrando varias tecnologías y enfoques de resolución de problemas.'
  },
  featured: {
    en: 'Featured',
    es: 'Destacado'
  },
  showMoreProjects: {
    en: 'Show More Projects',
    es: 'Mostrar Más Proyectos'
  },
  showLess: {
    en: 'Show Less',
    es: 'Mostrar Menos'
  },
  viewAllGithub: {
    en: 'View All Projects on GitHub',
    es: 'Ver Todos los Proyectos en GitHub'
  },
  code: {
    en: 'Code',
    es: 'Código'
  },
  live: {
    en: 'Live',
    es: 'En Vivo'
  }
};

// Navigation Translations
export const navigationTranslations: Translations = {
  businessAutomation: {
    en: 'For Businesses',
    es: 'Para Empresas'
  },
  businessAutomationDesktop: {
    en: 'Business Automation',
    es: 'Automatización de Negocios'
  },
  portfolioTitle: {
    en: 'lino@portfolio:~$',
    es: 'lino@portafolio:~$'
  }
};

// Automation Page Translations
export const automationTranslations: Translations = {
  title: {
    en: 'Business Automation Services',
    es: 'Servicios de Automatización Empresarial'
  },
  subtitle: {
    en: 'Transform your business operations with custom automation solutions that save time, reduce costs, and eliminate human error.',
    es: 'Transforma las operaciones de tu negocio con soluciones de automatización personalizadas que ahorran tiempo, reducen costos y eliminan errores humanos.'
  },
  featuredProject: {
    en: 'Featured Project',
    es: 'Proyecto Destacado'
  },
  featuredTutorial: {
    en: 'Featured Tutorial',
    es: 'Tutorial Destacado'
  },
  watchTutorial: {
    en: 'Watch Tutorial',
    es: 'Ver Tutorial'
  },
  services: {
    en: 'Automation Services',
    es: 'Servicios de Automatización'
  },
  ctaTitle: {
    en: 'Ready to Automate Your Business?',
    es: '¿Listo para Automatizar tu Negocio?'
  },
  ctaDescription: {
    en: "Let's discuss how automation can transform your operations. From small tasks to complex workflows, I can help you build solutions that scale with your business.",
    es: "Hablemos sobre cómo la automatización puede transformar tus operaciones. Desde tareas pequeñas hasta flujos de trabajo complejos, puedo ayudarte a construir soluciones que escalen con tu negocio."
  },
  consultation: {
    en: 'Get Free Consultation',
    es: 'Consulta Gratuita'
  },
  moreExamples: {
    en: 'View More Examples',
    es: 'Ver Más Ejemplos'
  },
  code: {
    en: 'Code',
    es: 'Código'
  },
  demo: {
    en: 'Demo',
    es: 'Demo'
  }
};

// Footer Translations
export const footerTranslations: Translations = {
  portfolio: {
    en: 'Thank you for visiting my portfolio',
    es: 'Gracias por visitar mi portafolio'
  },
  built: {
    en: 'Built with React, TypeScript, and Tailwind CSS. Made with love, creativity, and a high dose of caffeine.',
    es: 'Construido con React, TypeScript y Tailwind CSS. Hecho con amor, creatividad y mucho café.'
  },
  rights: {
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.'
  }
};

// Utility function to get translated text
export const t = (translations: Translations, key: string, language: Language): string => {
  return translations[key]?.[language] || translations[key]?.en || key;
};
