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
    title: 'CV-Fitter',
    description: 'AI-powered application that helps users optimize and refine their CVs for specific job positions. Uses artificial intelligence to rephrase content and include relevant keywords based on job descriptions, increasing chances of passing automated resume screenings.',
    descriptionEs: 'Aplicación impulsada por IA que ayuda a los usuarios a optimizar y mejorar sus CVs para posiciones específicas. Utiliza inteligencia artificial para reformular el contenido e incluir palabras clave relevantes según la descripción del puesto.',
    technologies: ['React', 'Tailwind CSS', 'Python', 'Flask', 'OpenAI API', 'PyMuPDF', 'PyPDF2', 'BeautifulSoup'],
    githubUrl: 'https://github.com/LinoCruz/cv-fitter',
    liveUrl: 'https://cv-fitter.vercel.app',
    stars: 0,
    forks: 0,
    featured: true
  },
  {
    id: 2,
    title: 'SafeMaps (iShelter)',
    description: 'Hackathon project to help Ukrainian refugees find temporary housing. Hosts can offer space or donate, and refugees can find shelter. Includes features for announcements, user profiles, and messaging.',
    descriptionEs: 'Proyecto de hackathon para ayudar a refugiados ucranianos a encontrar alojamiento temporal. Los anfitriones pueden ofrecer espacio o donar, y los refugiados pueden encontrar refugio. Incluye anuncios, perfiles de usuario y mensajería.',
    technologies: ['React', 'Tailwind CSS', 'Radix UI', 'Daisy UI', 'Axios', 'Python', 'Django', 'Django Rest Framework', 'MapBox API', 'PayPal API', 'SQLite'],
    githubUrl: 'https://github.com/CodingDojoHackathonTeam2/SafeMaps',
    stars: 2,
    forks: 0,
    featured: true
  },
  {
    id: 3,
    title: 'Enrolee',
    description: 'Full-stack project for students, faculty, and staff to register for classes, conferences, workshops, and more. Students can search and enroll, while faculty can create events and track registrations.',
    descriptionEs: 'Proyecto full-stack para que estudiantes, profesores y personal se registren en clases, conferencias, talleres y más. Los estudiantes pueden buscar e inscribirse, mientras que los profesores pueden crear eventos y rastrear inscripciones.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL'],
    githubUrl: 'https://github.com/LinoCruz/enrolee',
    stars: 0,
    forks: 1,
    featured: false
  },
  {
    id: 4,
    title: 'Javaction Project',
    description: 'Webapp for developers to practice algorithms in Java. Clone or fork the repo, run as a Spring Boot app, and access via browser.',
    descriptionEs: 'Aplicación web para que desarrolladores practiquen algoritmos en Java. Clona o haz fork del repositorio, ejecútalo como una app de Spring Boot y accede desde el navegador.',
    technologies: ['Java', 'Spring Boot', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/LinoCruz/javaction-project',
    stars: 0,
    forks: 0,
    featured: false
  },  
  {
    id: 5,
    title: 'Portfolio v2',
    description: 'Personal portfolio website built with React, TypeScript, and Tailwind CSS. Showcases my projects, skills, and contact information. Open source and designed for modern web standards.',
    descriptionEs: 'Sitio web de portafolio personal construido con React, TypeScript y Tailwind CSS. Muestra mis proyectos, habilidades e información de contacto. Código abierto y diseñado para estándares web modernos.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/LinoCruz/portfoliov2',
    liveUrl: '',
    stars: 0,
    forks: 0,
    featured: true
  },
  {
    id: 6,
    title: 'Belcorp Service for Cosmetic Vendors',
    description: 'Service for cosmetic vendors to manage their products and sales, built with React and Node.js.',
    descriptionEs: 'Servicio para que los vendedores de cosméticos gestionen sus productos y ventas, construido con React y Node.js.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/khaeldev/hackathon-belcorp-service',
    liveUrl: '',
    stars: 0,
    forks: 0,
    featured: true
  },
  {
    id: 7,
    title: 'Article PCA',
    description: 'Principal Component Analysis (PCA) study of Peruvian macroeconomic indicators (2020-2021), covering political transition and health crisis periods. Implements PCA using Python and Jupyter notebooks.',
    descriptionEs: 'Estudio de Análisis de Componentes Principales (PCA) de indicadores macroeconómicos peruanos (2020-2021), abarcando períodos de transición política y crisis sanitaria. Implementa PCA usando Python y Jupyter notebooks.',
    technologies: ['Python', 'Jupyter Notebook', 'NumPy', 'pandas', 'scikit-learn', 'matplotlib', 'seaborn'],
    githubUrl: 'https://github.com/LinoCruz/article-pca',
    stars: 0,
    forks: 0,
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getOtherProjects = () => projects.filter(project => !project.featured);
