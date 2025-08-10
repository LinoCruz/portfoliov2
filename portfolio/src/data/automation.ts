export interface AutomationProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
}

export interface AutomationVideo {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  youtubeUrl: string;
}

export interface AutomationService {
  title: string;
  description: string;
  examples: string[];
}

export const getAutomationProject = (language: string): AutomationProject => ({
  title: language === 'es' ? 'Sistema de Gestión de Inventarios E-commerce' : 'E-commerce Inventory Management System',
  description: language === 'es' 
    ? 'Sistema automatizado de seguimiento y reabastecimiento de inventarios que redujo el trabajo manual en un 85% y previno desabastecimientos para un minorista de tamaño mediano.'
    : 'Automated inventory tracking and reordering system that reduced manual work by 85% and prevented stockouts for a mid-size retailer.',
  technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Docker'],
  githubUrl: 'https://github.com/yourusername/inventory-automation',
  liveUrl: 'https://your-inventory-demo.com',
  metrics: [
    { label: language === 'es' ? 'Tiempo Ahorrado' : 'Time Saved', value: '40 hours/week' },
    { label: language === 'es' ? 'Reducción de Errores' : 'Error Reduction', value: '95%' },
    { label: 'ROI', value: '300%' }
  ]
});

export const getAutomationVideo = (language: string): AutomationVideo => ({
  title: language === 'es' ? 'Automatizando Procesos de Negocio con Python' : 'Automating Business Processes with Python',
  description: language === 'es'
    ? 'Tutorial completo de construcción de herramientas de automatización empresarial, desde procesamiento de datos hasta orquestación de flujos de trabajo.'
    : 'Complete walkthrough of building business automation tools, from data processing to workflow orchestration.',
  thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=280&fit=crop',
  duration: '1:25:45',
  youtubeUrl: 'https://youtube.com/watch?v=automation-example'
});

export const getAutomationServices = (language: string): AutomationService[] => [
  {
    title: language === 'es' ? 'Automatización de Procesos' : 'Process Automation',
    description: language === 'es'
      ? 'Optimiza tareas repetitivas y flujos de trabajo para ahorrar tiempo y reducir errores.'
      : 'Streamline repetitive tasks and workflows to save time and reduce errors.',
    examples: language === 'es'
      ? ['Automatización de entrada de datos', 'Generación de reportes', 'Flujos de correo electrónico', 'Procesamiento de archivos']
      : ['Data entry automation', 'Report generation', 'Email workflows', 'File processing']
  },
  {
    title: language === 'es' ? 'Soluciones con IA' : 'AI-Powered Solutions',
    description: language === 'es'
      ? 'Aprovecha la inteligencia artificial para mejorar la toma de decisiones e interacciones con clientes.'
      : 'Leverage artificial intelligence to enhance decision-making and customer interactions.',
    examples: language === 'es'
      ? ['Chatbots', 'Análisis de documentos', 'Análisis predictivo', 'Generación de contenido']
      : ['Chatbots', 'Document analysis', 'Predictive analytics', 'Content generation']
  },
  {
    title: language === 'es' ? 'Integración de Sistemas' : 'System Integration',
    description: language === 'es'
      ? 'Conecta diferentes sistemas empresariales para crear un flujo de datos y operaciones sin interrupciones.'
      : 'Connect different business systems to create seamless data flow and operations.',
    examples: language === 'es'
      ? ['Integraciones de API', 'Sincronización de bases de datos', 'Automatización de CRM', 'Herramientas de e-commerce']
      : ['API integrations', 'Database synchronization', 'CRM automation', 'E-commerce tools']
  }
];
