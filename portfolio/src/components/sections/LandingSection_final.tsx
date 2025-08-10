import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowDown, Code, Video, FileText, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface LandingSectionProps {
  onSectionChange: (section: string) => void;
  language: string;
}

export function LandingSection({ onSectionChange, language }: LandingSectionProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Enable YouTube API when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('load', () => {
        // Enable API after iframe loads
        setTimeout(() => {
          videoRef.current?.contentWindow?.postMessage(
            '{"event":"listening","id":"ytplayer"}',
            '*'
          );
        }, 1000);
      });
    }
  }, [language]);

  const getVideoUrl = () => {
    const baseUrl = language === 'es' 
      ? 'https://www.youtube.com/embed/GOLlW847Ixk' 
      : 'https://www.youtube.com/embed/Pc-Nx79lrPU';
    
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: language === 'es' ? 'GOLlW847Ixk' : 'Pc-Nx79lrPU',
      controls: '0',
      showinfo: '0',
      rel: '0',
      enablejsapi: '1',
      origin: window.location.origin
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      const command = isPlaying ? 'pauseVideo' : 'playVideo';
      videoRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const command = isMuted ? 'unMute' : 'mute';
      videoRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      setIsMuted(!isMuted);
    }
  };

  const text = language === 'es' ? {
    greeting: '¡Hola, Soy Lino!',
    title: 'Ingeniero de IA',
    subtitle: 'Backend Developer y Especialista en Automatización',
    description: 'Soy ingeniero de IA. Diseño soluciones innovadoras y sistemas automatizados que ayudan a las empresas a escalar. Creo que la IA, bien aplicada, mejora la eficiencia, amplía oportunidades de crecimiento y acelera el logro de objetivos.',
    cta: 'Ver Proyectos',
    features: [
      { icon: 'automation', title: 'Sistemas de IA', description: 'Desarrollo soluciones inteligentes que automatizan procesos complejos y mejoran la toma de decisiones.' },
      { icon: 'backend', title: 'Desarrollo Backend', description: 'Creo APIs robustas y arquitecturas escalables que soportan aplicaciones de alto rendimiento.' },
      { icon: 'integration', title: 'Integración de Sistemas', description: 'Conecto diferentes plataformas y servicios para crear ecosistemas tecnológicos cohesivos.' }
    ]
  } : {
    greeting: 'Hello, I\'m Lino!',
    title: 'AI Engineer',
    subtitle: 'Backend Developer & Automation Specialist',
    description: 'I am an AI engineer. I design innovative solutions and automated systems that help companies scale. I believe that, when applied well, AI improves efficiency, expands opportunities for growth, and accelerates goal achievement.',
    cta: 'View Projects',
    features: [
      { icon: 'automation', title: 'AI Systems', description: 'I develop intelligent solutions that automate complex processes and improve decision-making.' },
      { icon: 'backend', title: 'Backend Development', description: 'I create robust APIs and scalable architectures that support high-performance applications.' },
      { icon: 'integration', title: 'Systems Integration', description: 'I connect different platforms and services to create cohesive technological ecosystems.' }
    ]
  };

  const getFeatureIcon = (iconType: string) => {
    switch (iconType) {
      case 'automation':
        return <Video className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />;
      case 'backend':
        return <Code className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />;
      case 'integration':
        return <FileText className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />;
      default:
        return <Code className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />;
    }
  };

  return (
    <section className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-4 lg:p-8 max-w-7xl mx-auto w-full">
        {/* Left Column - Content */}
        <motion.div 
          className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {text.greeting}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              {text.title}
            </h2>
            <h3 className="text-lg md:text-xl text-muted-foreground mt-2">
              {text.subtitle}
            </h3>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {text.description}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => onSectionChange('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              <Code className="w-4 h-4 mr-2" />
              {text.cta}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Video */}
        <motion.div 
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative max-w-xs w-full">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg shadow-primary/20 border-2 border-primary/10">
              <iframe
                ref={videoRef}
                src={getVideoUrl()}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                <button
                  onClick={togglePlayPause}
                  className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            {/* Green glow effect */}
            <div className="absolute inset-0 rounded-lg shadow-xl shadow-primary/30 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Feature Cards Section */}
      <motion.div 
        className="py-16 px-4 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {text.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
            >
              {getFeatureIcon(feature.icon)}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="flex justify-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => onSectionChange('projects')}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
