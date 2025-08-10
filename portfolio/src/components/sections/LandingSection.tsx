import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowDown, Code, Video, FileText } from 'lucide-react';

interface LandingSectionProps {
  onSectionChange: (section: string) => void;
  language: string;
}

export function LandingSection({ onSectionChange, language }: LandingSectionProps) {
  const getText = () => {
    if (language === 'es') {
      return {
        greeting: '¡Saludos!',
        title: 'Soy Lino',
        description: 'Soy ingeniero de IA. Diseño soluciones innovadoras y sistemas automatizados que ayudan a las empresas a escalar. Creo que la IA, bien aplicada, mejora la eficiencia, amplía oportunidades de crecimiento y acelera el logro de objetivos.',
        viewProjects: 'Ver Proyectos',
        getResume: 'Obtener mi CV',
        development: 'Desarrollo',
        developmentDesc: 'Soluciones full-stack con tecnologías modernas',
        education: 'Tutoriales',
        educationDesc: 'Videos y contenido para ayudar a otros desarrolladores a aprender',
        professional: 'Profesional',
        professionalDesc: 'CV detallado y portafolio de proyectos'
      };
    }
    return {
      greeting: "Hi there!",
      title: "I'm Lino",
      description: 'I’m an AI engineer. I design innovative solutions and automated systems that help companies scale. I believe that, when applied well, AI improves efficiency, expands opportunities for growth, and accelerates goal achievement.',
      viewProjects: 'View Projects',
      getResume: 'Get My Resume',
      development: 'Development',
      developmentDesc: 'Full-stack solutions with modern technologies',
      education: 'Tutorials',
      educationDesc: 'Videos and content to help other developers learn',
      professional: 'Professional',
      professionalDesc: 'Detailed resume and portfolio showcase'
    };
  };

  const text = getText();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6">
            <span className="block mb-2">{text.greeting}</span>
            <span className="gradient-text block text-8xl pb-4">{text.title}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          {text.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            onClick={() => onSectionChange('projects')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-3"
          >
            <Code className="w-4 h-4 mr-2" />
            {text.viewProjects}
          </Button>
          <Button
            variant="outline"
            onClick={() => onSectionChange('contact')}
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
          >
            <FileText className="w-4 h-4 mr-2" />
            {text.getResume}
          </Button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div 
            onClick={() => onSectionChange('projects')}
            className="glass-effect rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300 cursor-pointer group hover:scale-105 transform transition-transform"
          >
            <Code className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="mb-2">{text.development}</h3>
            <p className="text-muted-foreground">{text.developmentDesc}</p>
          </div>
          <div 
            onClick={() => onSectionChange('videos')}
            className="glass-effect rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300 cursor-pointer group hover:scale-105 transform transition-transform"
          >
            <Video className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="mb-2">{text.education}</h3>
            <p className="text-muted-foreground">{text.educationDesc}</p>
          </div>
          <div 
            onClick={() => onSectionChange('contact')}
            className="glass-effect rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300 cursor-pointer group hover:scale-105 transform transition-transform"
          >
            <FileText className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="mb-2">{text.professional}</h3>
            <p className="text-muted-foreground">{text.professionalDesc}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <Button
            variant="ghost"
            onClick={() => onSectionChange('projects')}
            className="text-muted-foreground hover:text-primary animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}