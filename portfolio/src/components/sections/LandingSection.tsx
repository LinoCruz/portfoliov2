import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowDown, Code, Video, FileText, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface LandingSectionProps {
  onSectionChange: (section: string) => void;
  language: string;
}

export function LandingSection({ onSectionChange, language }: LandingSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
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
      modestbranding: '1',
      rel: '0',
      showinfo: '0',
      iv_load_policy: '3',
      fs: '0',
      cc_load_policy: '0',
      playsinline: '1',
      enablejsapi: '1',
      origin: window.location.origin
    });

    return `${baseUrl}?${params.toString()}`;
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const command = isMuted ? 'unMute' : 'mute';
      videoRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args: ''
        }),
        '*'
      );
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      const command = isPlaying ? 'pauseVideo' : 'playVideo';
      videoRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args: ''
        }),
        '*'
      );
      setIsPlaying(!isPlaying);
    }
  };

  const getText = () => {
    if (language === 'es') {
      return {
        greeting: '¡Saludos!',
        title: 'Soy Lino',
        description: 'Soy ingeniero de IA. Diseño soluciones innovadoras y sistemas automatizados que ayudan a las empresas a escalar.\n\nCreo que la IA, bien aplicada, mejora la eficiencia, amplía oportunidades de crecimiento y acelera el logro de objetivos.',
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
      description: 'I\'m an AI engineer. I design innovative solutions and automated systems that help companies scale.\n\nI believe that, when applied well, AI improves efficiency, expands opportunities for growth, and accelerates goal achievement.',
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
  
  // Typewriter effect for description
  useEffect(() => {
    let timeoutId: number;
    let currentIndex = 0;
    const fullText = text.description;
    
    const typeWriter = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 30); // Typing speed
      } else {
        // Typing is complete
        setIsTypingComplete(true);
      }
    };

    // Reset and start typing effect
    setDisplayedText('');
    setIsTypingComplete(false);
    currentIndex = 0;
    
    timeoutId = setTimeout(typeWriter, 1000); // Initial delay

    // Cleanup timeout on component unmount or language change
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text.description]); // Re-run when description changes (language change)

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

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        {/* Main Content Grid - 3 Columns */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Greeting and Title */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6">
                <span className="block mb-3 text-3xl md:text-4xl lg:text-5xl">{text.greeting}</span>
                <span className="gradient-text block text-6xl md:text-7xl lg:text-8xl pb-4">{text.title}</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <Button
                onClick={() => onSectionChange('projects')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-3"
              >
                <Code className="w-4 h-4 mr-2" />
                {text.viewProjects}
              </Button>
            </motion.div>
          </div>

          {/* Center Column - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Video Container */}
              <div className="relative w-68 h-96 md:w-80 md:h-[28rem] lg:w-70 lg:h-[26rem] xl:w-78 xl:h-[28rem] overflow-hidden shadow-2xl border border-border/50">
                <iframe
                  ref={videoRef}
                  src={getVideoUrl()}
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={false}
                  title={language === 'es' ? 'Video de presentación en español' : 'English presentation video'}
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={togglePlayPause}
                    className="bg-black/50 text-white hover:bg-black/70 p-2 rounded-full"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="bg-black/50 text-white hover:bg-black/70 p-2 rounded-full"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Decorative Frame */}
                <div className="absolute inset-0 ring-1 ring-primary/20 pointer-events-none" />
              </div>

              {/* Enhanced Green Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-primary/40 blur-2xl scale-125 opacity-80" />
              <div className="absolute inset-0 -z-20 bg-primary/30 blur-3xl scale-150 opacity-60" />
              <div className="absolute inset-0 -z-30 bg-primary/20 blur-[60px] scale-[2] opacity-40" />
            </div>
          </motion.div>

          {/* Right Column - Description and Resume Button */}
          <div className="text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              {/* Console/Terminal Style Description */}
              <div className="glass-effect rounded-lg p-6 border border-border/50">
                {/* Terminal Content */}
                <div className="font-mono text-sm lg:text-base text-primary/90 leading-relaxed text-justify lg:text-right">
                  <span className="text-green-400">$</span> <span className="text-blue-400">cat</span> <span className="text-yellow-400">about_lino.txt</span>
                  <div className="mt-3 text-foreground whitespace-pre-wrap">
                    {displayedText}
                    {!isTypingComplete && <span className="animate-pulse text-primary">█</span>}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center lg:justify-end"
            >
              <Button
                variant="outline"
                onClick={() => onSectionChange('contact')}
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
              >
                <FileText className="w-4 h-4 mr-2" />
                {text.getResume}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards - Below the main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div 
            onClick={() => onSectionChange('projects')}
            className="glass-effect rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300 cursor-pointer group hover:scale-105 transform transition-transform"
          >
            <Code className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="mb-2 text-center">{text.development}</h3>
            <p className="text-muted-foreground text-center">{text.developmentDesc}</p>
          </div>
          <div 
            onClick={() => onSectionChange('videos')}
            className="glass-effect rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300 cursor-pointer group hover:scale-105 transform transition-transform"
          >
            <Video className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="mb-2 text-center">{text.education}</h3>
            <p className="text-muted-foreground text-center">{text.educationDesc}</p>
          </div>
          <div 
            onClick={() => onSectionChange('contact')}
            className="glass-effect rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300 cursor-pointer group hover:scale-105 transform transition-transform"
          >
            <FileText className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="mb-2 text-center">{text.professional}</h3>
            <p className="text-muted-foreground text-center">{text.professionalDesc}</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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