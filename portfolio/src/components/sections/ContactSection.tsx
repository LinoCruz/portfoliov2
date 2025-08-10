import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { 
  Download, 
  Send,
  FileText,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface ContactSectionProps {
  language: string;
}

export function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const getText = () => {
    if (language === 'es') {
      return {
        title: '¡Pongámonos en Contacto!',
        subtitle: '¿Listo para comenzar tu próximo proyecto? Descarga mi CV y envíame un mensaje para discutir cómo podemos trabajar juntos.',
        resumeTitle: 'Mi CV',
        resumeDescription: 'Descripción completa de mi experiencia, habilidades y logros en desarrollo de software y automatización.',
        downloadResume: 'Descargar CV (PDF)',
        sendMessage: 'Enviar un Mensaje',
        sendMessageDesc: '¿Tienes un proyecto en mente? Hablemos sobre cómo podemos trabajar juntos. Te responderé en menos de 24 horas.',
        yourName: 'Tu Nombre',
        emailAddress: 'Dirección de Email',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto, cronograma y cualquier requisito específico...',
        sendBtn: 'Enviar Mensaje',
        responseGuarantee: '⚡ Garantía de Respuesta Rápida',
        responseDesc: 'Normalmente respondo a todas las consultas en menos de 24 horas. Para proyectos urgentes, siéntete libre de llamar o enviar un email directamente.',
        stats: {
          projects: 'Proyectos Completados',
          experience: 'Años de Experiencia',
          technologies: 'Tecnologías',
          satisfaction: 'Satisfacción del Cliente'
        }
      };
    }
    return {
      title: 'Let’s get in Touch!',
      subtitle: 'Ready to start your next project? Download my resume and send me a message to discuss how we can work together.',
      resumeTitle: 'My Resume',
      resumeDescription: 'Complete overview of my experience, skills, and achievements in software development and automation.',
      downloadResume: 'Download Resume (PDF)',
      sendMessage: 'Send a Message',
      sendMessageDesc: 'Have a project in mind? Let\'s discuss how we can work together. I\'ll get back to you within 24 hours.',
      yourName: 'Your Name',
      emailAddress: 'Email Address',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project, timeline, and any specific requirements...',
      sendBtn: 'Send Message',
      responseGuarantee: '⚡ Quick Response Guarantee',
      responseDesc: 'I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call or email directly.',
      stats: {
        projects: 'Projects Completed',
        experience: 'Years Experience',
        technologies: 'Technologies',
        satisfaction: 'Client Satisfaction'
      }
    };
  };

  const text = getText();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Resume Section - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Resume Preview Card */}
          <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-primary" />
                <Sparkles className="w-5 h-5 text-primary ml-2" />
              </div>
              <CardTitle className="text-2xl mb-2">{text.resumeTitle}</CardTitle>
              <CardDescription className="text-base">
                {text.resumeDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Resume Preview Image */}
              <div className="relative group cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-card to-muted rounded-lg overflow-hidden border border-border/50">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=600&fit=crop"
                    alt="Resume Preview"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="mb-1">Senior Full-Stack Developer</h3>
                    <p className="text-sm opacity-90">3+ Years Experience • 50+ Projects</p>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Resume Highlights */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-lg text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">{text.stats.projects}</div>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-lg text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">{text.stats.experience}</div>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-lg text-primary">15+</div>
                  <div className="text-xs text-muted-foreground">{text.stats.technologies}</div>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-lg text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">{text.stats.satisfaction}</div>
                </div>
              </div>

              {/* Download Button */}
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
              >
                <a href="/resume.pdf" download="YourName_Resume.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  {text.downloadResume}
                </a>
              </Button>

              {/* Additional Info */}
              <div className="text-center text-sm text-muted-foreground space-y-1">
                <p>📧 linoeduardocd@gmail.com</p>
                <p>📱 +51 943476578</p>
                <p>🕒 Available Mon-Sat, 9AM-8PM CST</p>
                <p>📍 cix, PE</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="w-5 h-5 mr-2 text-primary" />
                {text.sendMessage}
              </CardTitle>
              <CardDescription>
                {text.sendMessageDesc}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{text.yourName}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Lino Cruz"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">{text.emailAddress}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="linoeduardocd@gmail.com"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">{text.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={text.messagePlaceholder}
                    required
                    rows={8}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {text.sendBtn}
                </Button>
              </form>

              {/* Quick Response Promise */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                <h4 className="text-primary mb-2">{text.responseGuarantee}</h4>
                <p className="text-sm text-muted-foreground">
                  {text.responseDesc}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}