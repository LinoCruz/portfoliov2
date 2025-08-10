import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp, Github } from 'lucide-react';
import { ProjectCard } from '../common/ProjectCard';
import { getFeaturedProjects, getOtherProjects } from '../../data/projects';
import { Language, projectsTranslations, t } from '../../utils/i18n';
import { viewAnimation } from '../../utils/animations';

interface ProjectsSectionProps {
  language: Language;
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        {...viewAnimation()}
        className="text-center mb-16"
      >
        <h1 className="mb-4 text-primary text-5xl">
          {t(projectsTranslations, 'title', language)}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t(projectsTranslations, 'subtitle', language)}
        </p>
      </motion.div>

      {/* Featured Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            {...viewAnimation(index * 0.1)}
          >
            <ProjectCard project={project} language={language} featured />
          </motion.div>
        ))}
      </div>

      {/* Show More Projects Button */}
      <motion.div
        {...viewAnimation()}
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
          {showAllProjects 
            ? t(projectsTranslations, 'showLess', language)
            : t(projectsTranslations, 'showMoreProjects', language)
          }
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
              <ProjectCard project={project} language={language} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View All Projects on GitHub Button */}
      <motion.div
        {...viewAnimation()}
        className="text-center"
      >
        <Button variant="outline" asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            {t(projectsTranslations, 'viewAllGithub', language)}
          </a>
        </Button>
      </motion.div>
    </section>
  );
}