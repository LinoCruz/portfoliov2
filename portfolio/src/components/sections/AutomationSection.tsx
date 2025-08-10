import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Zap, Play, Github, ExternalLink, ArrowRight, Building, Workflow, Bot } from 'lucide-react';

interface AutomationSectionProps {
  language: string;
}

export function AutomationSection({ language }: AutomationSectionProps) {
  const getText = () => {
    if (language === 'es') {
      return {
        title: 'Automatización de Negocios',
        subtitle: 'Soluciones de automatización personalizadas que reducen costos, eliminan errores y escalan tu negocio de manera eficiente.',
        featuredProject: {
          title: 'Sistema de Gestión de Inventarios E-commerce',
          description: 'Sistema automatizado de seguimiento de inventario y reabastecimiento que redujo el trabajo manual en 85% y previno desabastecimientos para un minorista de tamaño medio.',
          githubText: 'Ver Código',
          liveText: 'Ver Demo',
          metrics: {
            timeSaved: 'Tiempo Ahorrado',
            errorReduction: 'Reducción de Errores',
            roi: 'ROI'
          }
        },
        featuredVideo: {
          title: 'Automatizando Procesos de Negocio con Python',
          description: 'Aprende cómo construir pipelines de automatización que pueden ahorrar miles de horas de trabajo manual en tu empresa.',
          watchText: 'Ver Tutorial'
        },
        services: {
          title: 'Servicios de Automatización',
          subtitle: 'Desde tareas simples hasta workflows complejos',
          processAutomation: {
            title: 'Automatización de Procesos',
            description: 'Optimiza flujos de trabajo repetitivos y libera tiempo para actividades de mayor valor.',
            examples: ['Procesamiento de datos', 'Generación de reportes', 'Gestión de archivos', 'Sincronización de sistemas']
          },
          aiSolutions: {
            title: 'Soluciones con IA',
            description: 'Aprovecha el machine learning para automatización inteligente y toma de decisiones.',
            examples: ['Análisis predictivo', 'Procesamiento de texto', 'Reconocimiento de imágenes', 'Chatbots inteligentes']
          },
          systemIntegration: {
            title: 'Integración de Sistemas',
            description: 'Conecta diferentes herramientas y plataformas para crear workflows unificados.',
            examples: ['APIs y webhooks', 'Sincronización de bases de datos', 'Automatización de e-commerce', 'Integración CRM']
          }
        },
        cta: {
          title: 'Automatiza Tu Negocio Hoy',
          subtitle: 'Deja que te muestre cómo la automatización puede transformar tus operaciones.',
          buttonText: 'Agendar Consulta Gratuita',
          secondaryButtonText: 'Ver Más Ejemplos'
        }
      };
    }
    return {
      title: 'Business Automation',
      subtitle: 'Custom automation solutions that reduce costs, eliminate errors, and scale your business efficiently.',
      featuredProject: {
        title: 'E-commerce Inventory Management System',
        description: 'Automated inventory tracking and reordering system that reduced manual work by 85% and prevented stockouts for a mid-size retailer.',
        githubText: 'View Code',
        liveText: 'Live Demo',
        metrics: {
          timeSaved: 'Time Saved',
          errorReduction: 'Error Reduction',
          roi: 'ROI'
        }
      },
      featuredVideo: {
        title: 'Automating Business Processes with Python',
        description: 'Learn how to build automation pipelines that can save thousands of hours of manual work in your business.',
        watchText: 'Watch Tutorial'
      },
      services: {
        title: 'Automation Services',
        subtitle: 'From simple tasks to complex workflows',
        processAutomation: {
          title: 'Process Automation',
          description: 'Streamline repetitive workflows and free up time for high-value activities.',
          examples: ['Data processing', 'Report generation', 'File management', 'System synchronization']
        },
        aiSolutions: {
          title: 'AI-Powered Solutions',
          description: 'Leverage machine learning for intelligent automation and decision-making.',
          examples: ['Predictive analytics', 'Text processing', 'Image recognition', 'Smart chatbots']
        },
        systemIntegration: {
          title: 'System Integration',
          description: 'Connect different tools and platforms to create unified workflows.',
          examples: ['APIs and webhooks', 'Database synchronization', 'E-commerce automation', 'CRM integration']
        }
      },
      cta: {
        title: 'Automate Your Business Today',
        subtitle: 'Let me show you how automation can transform your operations.',
        buttonText: 'Schedule Free Consultation',
        secondaryButtonText: 'View More Examples'
      }
    };
  };

  const text = getText();

  const featuredProject = {
    title: text.featuredProject.title,
    description: text.featuredProject.description,
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Docker'],
    githubUrl: 'https://github.com/yourusername/inventory-automation',
    liveUrl: 'https://your-inventory-demo.com',
    metrics: [
      { label: text.featuredProject.metrics.timeSaved, value: '40 hours/week' },
      { label: text.featuredProject.metrics.errorReduction, value: '95%' },
      { label: text.featuredProject.metrics.roi, value: '300%' }
    ]
  };

  const featuredVideo = {
    title: text.featuredVideo.title,
    description: text.featuredVideo.description,
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=280&fit=crop',
    duration: '1:25:45',
    youtubeUrl: 'https://youtube.com/watch?v=automation-example'
  };

  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: text.services.processAutomation.title,
      description: text.services.processAutomation.description,
      examples: text.services.processAutomation.examples
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: text.services.aiSolutions.title,
      description: text.services.aiSolutions.description,
      examples: text.services.aiSolutions.examples
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: text.services.systemIntegration.title,
      description: text.services.systemIntegration.description,
      examples: text.services.systemIntegration.examples
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="mb-4">
          <span className="gradient-text">{text.title}</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {text.subtitle}
        </p>
      </motion.div>

      {/* Featured Project and Video */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-primary text-primary-foreground">Featured Project</Badge>
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <CardTitle>{featuredProject.title}</CardTitle>
              <CardDescription className="text-base">
                {featuredProject.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {featuredProject.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-lg text-primary">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    {text.featuredProject.githubText}
                  </a>
                </Button>
                <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    {text.featuredProject.liveText}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow group">
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
                  <Play className="w-6 h-6" />
                </Button>
              </div>
              <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                Featured Tutorial
              </Badge>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {featuredVideo.duration}
              </div>
            </div>
            <CardHeader>
              <CardTitle>{featuredVideo.title}</CardTitle>
              <CardDescription className="text-base">
                {featuredVideo.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={featuredVideo.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  {text.featuredVideo.watchText}
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-center mb-8">Automation Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.examples.map((example) => (
                      <li key={example} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="w-3 h-3 mr-2 text-primary" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
      >
        <h3 className="mb-4">Ready to Automate Your Business?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let's discuss how automation can transform your operations. From small tasks to complex workflows, 
          I can help you build solutions that scale with your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
            <Zap className="w-4 h-4 mr-2" />
            {text.cta.buttonText}
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            {text.cta.secondaryButtonText}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}