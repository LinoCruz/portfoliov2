import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Github, ExternalLink, Star, GitFork, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectsSectionProps {
  language: string;
}

// Mock project data - replace with real data
const projects = [
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
  }
];

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  const getText = () => {
    if (language === 'es') {
      return {
        title: 'Proyectos',
        subtitle: 'Una colección de mi trabajo más impactante, mostrando varias tecnologías y enfoques de resolución de problemas.',
        featured: 'Destacado',
        showMore: showAllProjects ? 'Mostrar Menos' : 'Mostrar Más Proyectos',
        viewAllGithub: 'Ver Todos los Proyectos en GitHub',
        code: 'Código',
        live: 'En Vivo'
      };
    }
    return {
      title: 'Projects',
      subtitle: 'A collection of my most impactful work, showcasing various technologies and problem-solving approaches.',
      featured: 'Featured',
      showMore: showAllProjects ? 'Show Less' : 'Show More Projects',
      viewAllGithub: 'View All Projects on GitHub',
      code: 'Code',
      live: 'Live'
    };
  };

  const text = getText();

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="mb-4 text-primary text-5xl md:text-6xl font-bold">
          {text.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {text.subtitle}
        </p>
      </motion.div>

      {/* Featured Projects Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {language === 'es' ? project.descriptionEs : project.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">{text.featured}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        {text.code}
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          {text.live}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Show More Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <Button
          onClick={() => setShowAllProjects(!showAllProjects)}
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 px-6 py-3"
        >
          {showAllProjects ? (
            <ChevronUp className="w-4 h-4 mr-2" />
          ) : (
            <ChevronDown className="w-4 h-4 mr-2" />
          )}
          {text.showMore}
        </Button>
      </motion.div>

      {/* Additional Projects (Collapsible) */}
      <motion.div
        initial={false}
        animate={{ 
          height: showAllProjects ? 'auto' : 0,
          opacity: showAllProjects ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showAllProjects ? 1 : 0, y: showAllProjects ? 0 : 30 }}
              transition={{ duration: 0.6, delay: showAllProjects ? index * 0.1 : 0 }}
            >
              <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>
                    {language === 'es' ? project.descriptionEs : project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/20 text-primary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {project.stars}
                      </div>
                      <div className="flex items-center">
                        <GitFork className="w-3 h-3 mr-1" />
                        {project.forks}
                      </div>
                    </div>
                    
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View All Projects on GitHub Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 px-6 py-3">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            {text.viewAllGithub}
          </a>
        </Button>
      </motion.div>
    </section>
  );
}