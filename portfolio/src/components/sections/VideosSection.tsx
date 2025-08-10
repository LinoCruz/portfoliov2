import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Play, Eye, Clock, Youtube, ChevronRight } from 'lucide-react';

// Mock video data - replace with real data
const videos = [
  {
    id: 1,
    title: 'Building a Full-Stack React Application',
    description: 'Complete tutorial series covering React, Node.js, and MongoDB integration with authentication and deployment.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=280&fit=crop',
    duration: '2:45:30',
    views: '15.2K',
    category: 'React',
    youtubeUrl: 'https://youtube.com/watch?v=example1',
    featured: true
  },
  {
    id: 2,
    title: 'Advanced TypeScript Patterns',
    description: 'Deep dive into advanced TypeScript concepts including generics, utility types, and design patterns.',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=280&fit=crop',
    duration: '1:32:15',
    views: '8.7K',
    category: 'TypeScript',
    youtubeUrl: 'https://youtube.com/watch?v=example2',
    featured: true
  },
  {
    id: 3,
    title: 'Docker for Developers',
    description: 'Comprehensive guide to containerizing applications with Docker, including multi-stage builds and orchestration.',
    thumbnail: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=500&h=280&fit=crop',
    duration: '58:42',
    views: '12.1K',
    category: 'DevOps',
    youtubeUrl: 'https://youtube.com/watch?v=example3',
    featured: true
  },
  {
    id: 4,
    title: 'API Design Best Practices',
    description: 'Learn how to design scalable and maintainable REST APIs with proper documentation and testing.',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=280&fit=crop',
    duration: '45:20',
    views: '6.3K',
    category: 'Backend',
    youtubeUrl: 'https://youtube.com/watch?v=example4',
    featured: false
  },
  {
    id: 5,
    title: 'CSS Grid & Flexbox Mastery',
    description: 'Master modern CSS layout techniques with practical examples and responsive design patterns.',
    thumbnail: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=500&h=280&fit=crop',
    duration: '1:15:30',
    views: '9.8K',
    category: 'CSS',
    youtubeUrl: 'https://youtube.com/watch?v=example5',
    featured: false
  },
  {
    id: 6,
    title: 'JavaScript Performance Optimization',
    description: 'Techniques for optimizing JavaScript performance including memory management and code splitting.',
    thumbnail: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&h=280&fit=crop',
    duration: '52:15',
    views: '11.4K',
    category: 'JavaScript',
    youtubeUrl: 'https://youtube.com/watch?v=example6',
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
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {text.seeMore}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </section>
  );
}