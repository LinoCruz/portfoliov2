import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Zap, Play, Github, ExternalLink, ArrowRight, Building, Workflow, Bot } from 'lucide-react';

interface AutomationPageProps {
  language: string;
}

export function AutomationPage({ language }: AutomationPageProps) {
  const featuredProject = {
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
  };

  const featuredVideo = {
    title: language === 'es' ? 'Automatizando Procesos de Negocio con Python' : 'Automating Business Processes with Python',
    description: language === 'es'
      ? 'Tutorial completo de construcción de herramientas de automatización empresarial, desde procesamiento de datos hasta orquestación de flujos de trabajo.'
      : 'Complete walkthrough of building business automation tools, from data processing to workflow orchestration.',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=280&fit=crop',
    duration: '1:25:45',
    youtubeUrl: 'https://youtube.com/watch?v=automation-example'
  };

  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: language === 'es' ? 'Automatización de Procesos' : 'Process Automation',
      description: language === 'es'
        ? 'Optimiza tareas repetitivas y flujos de trabajo para ahorrar tiempo y reducir errores.'
        : 'Streamline repetitive tasks and workflows to save time and reduce errors.',
      examples: language === 'es'
        ? ['Automatización de entrada de datos', 'Generación de reportes', 'Flujos de correo electrónico', 'Procesamiento de archivos']
        : ['Data entry automation', 'Report generation', 'Email workflows', 'File processing']
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: language === 'es' ? 'Soluciones con IA' : 'AI-Powered Solutions',
      description: language === 'es'
        ? 'Aprovecha la inteligencia artificial para mejorar la toma de decisiones e interacciones con clientes.'
        : 'Leverage artificial intelligence to enhance decision-making and customer interactions.',
      examples: language === 'es'
        ? ['Chatbots', 'Análisis de documentos', 'Análisis predictivo', 'Generación de contenido']
        : ['Chatbots', 'Document analysis', 'Predictive analytics', 'Content generation']
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: language === 'es' ? 'Integración de Sistemas' : 'System Integration',
      description: language === 'es'
        ? 'Conecta diferentes sistemas empresariales para crear un flujo de datos y operaciones sin interrupciones.'
        : 'Connect different business systems to create seamless data flow and operations.',
      examples: language === 'es'
        ? ['Integraciones de API', 'Sincronización de bases de datos', 'Automatización de CRM', 'Herramientas de e-commerce']
        : ['API integrations', 'Database synchronization', 'CRM automation', 'E-commerce tools']
    }
  ];

  const getText = () => {
    if (language === 'es') {
      return {
        title: 'Servicios de Automatización Empresarial',
        subtitle: 'Transforma las operaciones de tu negocio con soluciones de automatización personalizadas que ahorran tiempo, reducen costos y eliminan errores humanos.',
        featuredProject: 'Proyecto Destacado',
        featuredTutorial: 'Tutorial Destacado',
        watchTutorial: 'Ver Tutorial',
        code: 'Código',
        demo: 'Demo',
        services: 'Servicios de Automatización',
        ctaTitle: '¿Listo para Automatizar tu Negocio?',
        ctaDescription: 'Hablemos sobre cómo la automatización puede transformar tus operaciones. Desde tareas pequeñas hasta flujos de trabajo complejos, puedo ayudarte a construir soluciones que escalen con tu negocio.',
        consultation: 'Consulta Gratuita',
        moreExamples: 'Ver Más Ejemplos'
      };
    }
    return {
      title: 'Business Automation Services',
      subtitle: 'Transform your business operations with custom automation solutions that save time, reduce costs, and eliminate human error.',
      featuredProject: 'Featured Project',
      featuredTutorial: 'Featured Tutorial',
      watchTutorial: 'Watch Tutorial',
      code: 'Code',
      demo: 'Demo',
      services: 'Automation Services',
      ctaTitle: 'Ready to Automate Your Business?',
      ctaDescription: 'Let\'s discuss how automation can transform your operations. From small tasks to complex workflows, I can help you build solutions that scale with your business.',
      consultation: 'Get Free Consultation',
      moreExamples: 'View More Examples'
    };
  };

  const text = getText();

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">
            <span className="gradient-text">{text.title}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </motion.div>

        {/* Featured Project and Video */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary text-primary-foreground">{text.featuredProject}</Badge>
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
                      {text.code}
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      {text.demo}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  {text.featuredTutorial}
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
                    {text.watchTutorial}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-center mb-8">{text.services}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
        >
          <h2 className="mb-4">{text.ctaTitle}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {text.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
              <Zap className="w-4 h-4 mr-2" />
              {text.consultation}
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              {text.moreExamples}
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}