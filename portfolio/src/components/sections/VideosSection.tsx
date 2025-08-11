import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Play, Eye, Clock, Youtube, ChevronRight } from 'lucide-react';

// Real video data from LinoDataNerd YouTube channel
const videos = [
  {
    id: 1,
    title: 'Clase 1 - Instalar Python, Anaconda y Visual Studio Code - VSC (2021)',
    description: 'Tutorial completo para instalar Python, Anaconda y Visual Studio Code. Perfecto para principiantes que quieren empezar con Python.',
    thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=280&fit=crop',
    duration: '7:06',
    views: '20K',
    category: 'Python',
    youtubeUrl: 'https://www.youtube.com/watch?v=bEoWzqs6IaY',
    featured: true
  },
  {
    id: 2,
    title: 'Presentaciones en R Markdown [FÁCIL, 2021]: Con código R, formato .HTML, y publicación en RPUB',
    description: 'Aprende a crear presentaciones profesionales usando R Markdown con código R integrado y publicación web.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=280&fit=crop',
    duration: '12:11',
    views: '9.6K',
    category: 'R',
    youtubeUrl: 'https://www.youtube.com/watch?v=KIZI2U2UNog',
    featured: true
  },
  {
    id: 3,
    title: 'Taller Ggplot2 en RStudio - PARTE 1',
    description: 'Workshop completo sobre ggplot2, la librería más poderosa para visualización de datos en R. Primera parte de la serie.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=280&fit=crop',
    duration: '1:18:00',
    views: '246',
    category: 'R',
    youtubeUrl: 'https://www.youtube.com/watch?v=5SgSe9CtKjw',
    featured: true
  },
  {
    id: 4,
    title: 'UN MAPA CON PYTHON [FÁCIL]: El Mapa del Perú con Datos del Covid-19 (2021)',
    description: 'Tutorial paso a paso para crear mapas interactivos con Python usando datos del Covid-19 en Perú.',
    thumbnail: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=500&h=280&fit=crop',
    duration: '12:23',
    views: '991',
    category: 'Python',
    youtubeUrl: 'https://www.youtube.com/watch?v=EUyyEsVQcfQ',
    featured: false
  },
  {
    id: 5,
    title: 'Usar R [Parte 01]: Variables, Operaciones Matemáticas Básicas, Comentarios, Paquetes y Librerías',
    description: 'Fundamentos de R: aprende sobre variables, operaciones matemáticas, comentarios y manejo de paquetes.',
    thumbnail: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&h=280&fit=crop',
    duration: '9:14',
    views: '639',
    category: 'R',
    youtubeUrl: 'https://www.youtube.com/watch?v=LG0SScfocq8',
    featured: false
  },
  {
    id: 6,
    title: 'Clase 02 - Conociendo el Entorno de R y RStudio (2021)[Personalizar, Scripts y Proyectos]',
    description: 'Guía completa del entorno de RStudio: personalización, manejo de scripts y creación de proyectos.',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=280&fit=crop',
    duration: '6:16',
    views: '411',
    category: 'R',
    youtubeUrl: 'https://www.youtube.com/watch?v=d9Q5Et_4ZhI',
    featured: false
  }
];

interface VideosSectionProps {
  language: string;
}

export function VideosSection({ language }: VideosSectionProps) {
  const getText = () => {
    if (language === 'es') {
      return {
        title: 'Video Tutoriales',
        subtitle: 'Tutoriales de programación y videos para ayudar a los desarrolladores a aprender nuevas tecnologías y mejores prácticas.',
        watchOnYoutube: 'Ver en YouTube',
        moreVideos: 'Más Videos',
        browseAll: 'Explorar Todos los Videos',
        seeMore: 'Ver todos los videos',
        watch: 'Ver'
      };
    }
    return {
      title: 'Video Tutorials',
      subtitle: 'Programming tutorials and videos to help developers learn new technologies and best practices.',
      watchOnYoutube: 'Watch on YouTube',
      moreVideos: 'More Videos',
      browseAll: 'Browse All Videos',
      seeMore: 'See all videos',
      watch: 'Watch'
    };
  };

  const text = getText();
  
  // Create chunks of 3 videos per slide
  const createVideoChunks = (videoArray: typeof videos) => {
    const chunks = [];
    for (let i = 0; i < videoArray.length; i += 3) {
      chunks.push(videoArray.slice(i, i + 3));
    }
    return chunks;
  };

  const videoChunks = createVideoChunks(videos);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="mb-4 text-5xl">
          <span className="gradient-text">{text.title}</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {text.subtitle}
        </p>
      </motion.div>

      {/* Video Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {videoChunks.map((chunk, chunkIndex) => (
              <CarouselItem key={chunkIndex}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chunk.map((video, videoIndex) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: videoIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 group">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
                              <Play className="w-6 h-6" />
                            </Button>
                          </div>
                          {video.featured && (
                            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                              Featured
                            </Badge>
                          )}
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <Badge variant="outline" className="border-primary/20 text-primary mb-2">
                              {video.category}
                            </Badge>
                          </div>
                          <CardTitle className="line-clamp-2">{video.title}</CardTitle>
                          <CardDescription className="line-clamp-3">
                            {video.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {video.views} views
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {video.duration}
                            </div>
                          </div>
                          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                              <Youtube className="w-4 h-4 mr-2" />
                              {text.watch}
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-16 w-12 h-12" />
          <CarouselNext className="hidden md:flex -right-16 w-12 h-12" />
        </Carousel>
      </motion.div>

      {/* See More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button 
          asChild
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <a href="https://www.youtube.com/@LinoDataNerd" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5 mr-2" />
            {text.seeMore}
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}