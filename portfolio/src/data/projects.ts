export interface Project {
  id: number;
  title: string;
  description: string;
  descriptionEs: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.',
    descriptionEs: 'Una solución de e-commerce full-stack construida con React, Node.js y PostgreSQL. Incluye autenticación de usuarios, integración de pagos y panel de administración.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.com',
    stars: 45,
    forks: 12,
    featured: true
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI integration using OpenAI API. Includes message history, user presence, and smart replies.',
    descriptionEs: 'Aplicación de chat en tiempo real con integración de IA usando la API de OpenAI. Incluye historial de mensajes, presencia de usuarios y respuestas inteligentes.',
    technologies: ['Next.js', 'Socket.io', 'OpenAI', 'MongoDB', 'TypeScript'],
    githubUrl: 'https://github.com/yourusername/ai-chat-app',
    liveUrl: 'https://your-chat-demo.com',
    stars: 78,
    forks: 23,
    featured: true
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication, file uploads, and real-time notifications.',
    descriptionEs: 'API RESTful para gestión de tareas con autenticación, carga de archivos y notificaciones en tiempo real.',
    technologies: ['Express.js', 'MongoDB', 'JWT', 'Multer', 'Socket.io'],
    githubUrl: 'https://github.com/yourusername/task-api',
    stars: 32,
    forks: 8,
    featured: false
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with location-based forecasts, charts, and weather alerts.',
    descriptionEs: 'Panel meteorológico interactivo con pronósticos basados en ubicación, gráficos y alertas climáticas.',
    technologies: ['Vue.js', 'Chart.js', 'Weather API', 'Vuex', 'SCSS'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-demo.com',
    stars: 56,
    forks: 15,
    featured: false
  },
  {
    id: 5,
    title: 'Code Snippet Manager',
    description: 'A tool for developers to organize, search, and share code snippets with syntax highlighting.',
    descriptionEs: 'Una herramienta para desarrolladores para organizar, buscar y compartir fragmentos de código con resaltado de sintaxis.',
    technologies: ['React', 'Firebase', 'CodeMirror', 'Algolia', 'Material-UI'],
    githubUrl: 'https://github.com/yourusername/snippet-manager',
    liveUrl: 'https://your-snippets-demo.com',
    stars: 89,
    forks: 34,
    featured: true
  },
  {
    id: 6,
    title: 'Blockchain Voting System',
    description: 'Decentralized voting application built on Ethereum with transparent and secure voting mechanisms.',
    descriptionEs: 'Aplicación de votación descentralizada construida en Ethereum con mecanismos de votación transparentes y seguros.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Truffle', 'MetaMask'],
    githubUrl: 'https://github.com/yourusername/blockchain-voting',
    stars: 123,
    forks: 45,
    featured: false
  },
  {
    id: 7,
    title: 'Social Media Analytics',
    description: 'Advanced analytics dashboard for social media metrics with real-time data visualization and insights.',
    descriptionEs: 'Panel de análisis avanzado para métricas de redes sociales con visualización de datos en tiempo real e insights.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    githubUrl: 'https://github.com/yourusername/social-analytics',
    liveUrl: 'https://your-analytics-demo.com',
    stars: 67,
    forks: 21,
    featured: false
  },
  {
    id: 8,
    title: 'IoT Device Manager',
    description: 'Comprehensive IoT device management platform with real-time monitoring, control, and automation features.',
    descriptionEs: 'Plataforma integral de gestión de dispositivos IoT con monitoreo en tiempo real, control y características de automatización.',
    technologies: ['Node.js', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
    githubUrl: 'https://github.com/yourusername/iot-manager',
    stars: 54,
    forks: 18,
    featured: false
  },
  {
    id: 9,
    title: 'Business Automation Suite',
    description: 'Comprehensive business automation platform with workflow management, data processing, and AI-powered insights for enterprise operations.',
    descriptionEs: 'Suite integral de automatización empresarial con gestión de flujos de trabajo, procesamiento de datos e insights impulsados por IA para operaciones empresariales.',
    technologies: ['Python', 'Django', 'Celery', 'PostgreSQL', 'React', 'OpenAI'],
    githubUrl: 'https://github.com/yourusername/business-automation',
    liveUrl: 'https://your-automation-demo.com',
    stars: 156,
    forks: 42,
    featured: true
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getOtherProjects = () => projects.filter(project => !project.featured);
