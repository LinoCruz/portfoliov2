import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Project } from '../../data/projects';
import { Language } from '../../utils/i18n';

interface ProjectCardProps {
  project: Project;
  language: Language;
  featured?: boolean;
  className?: string;
}

export const ProjectCard = React.memo(({ project, language, featured = false, className }: ProjectCardProps) => {
  const text = {
    code: language === 'es' ? 'Código' : 'Code',
    live: language === 'es' ? 'En Vivo' : 'Live',
    featured: language === 'es' ? 'Destacado' : 'Featured'
  };

  return (
    <Card className={`h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow ${className || ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className={featured ? "mb-2" : "text-lg"}>{project.title}</CardTitle>
            <CardDescription className={featured ? "text-base" : undefined}>
              {language === 'es' ? project.descriptionEs : project.description}
            </CardDescription>
          </div>
          {featured && <Badge variant="secondary" className="ml-2">{text.featured}</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <div className={`flex flex-wrap gap-${featured ? '2' : '1'} mb-${featured ? '6' : '4'}`}>
          {(featured ? project.technologies : project.technologies.slice(0, 3)).map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className={`border-primary/20 text-primary ${featured ? '' : 'text-xs'}`}
            >
              {tech}
            </Badge>
          ))}
          {!featured && project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-${featured ? '4' : '3'} text-${featured ? 'sm' : 'sm'} text-muted-foreground`}>
            <div className="flex items-center">
              <Star className={`w-${featured ? '4' : '3'} h-${featured ? '4' : '3'} mr-1`} />
              {project.stars}
            </div>
            <div className="flex items-center">
              <GitFork className={`w-${featured ? '4' : '3'} h-${featured ? '4' : '3'} mr-1`} />
              {project.forks}
            </div>
          </div>
          
          <div className={`flex space-x-${featured ? '2' : '1'}`}>
            <Button variant={featured ? "outline" : "ghost"} size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" />
                {featured && text.code}
              </a>
            </Button>
            {project.liveUrl && (
              <Button 
                size="sm" 
                variant={featured ? "default" : "ghost"}
                asChild 
                className={featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  {featured && text.live}
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
