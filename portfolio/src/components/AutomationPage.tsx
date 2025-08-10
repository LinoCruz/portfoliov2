import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Zap, Play, Github, ExternalLink, ArrowRight, Building, Workflow, Bot } from 'lucide-react';
import { getAutomationProject, getAutomationVideo, getAutomationServices } from '../data/automation';
import { Language, automationTranslations, t } from '../utils/i18n';
import { viewAnimation, createFadeInUp } from '../utils/animations';

interface AutomationPageProps {
  language: Language;
}

export function AutomationPage({ language }: AutomationPageProps) {
  const featuredProject = getAutomationProject(language);
  const featuredVideo = getAutomationVideo(language);
  const services = getAutomationServices(language);

  const serviceIcons = [<Workflow className="w-8 h-8" />, <Bot className="w-8 h-8" />, <Building className="w-8 h-8" />];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          {...viewAnimation()}
          className="text-center mb-16"
        >
          <h1 className="mb-4">
            <span className="gradient-text">{t(automationTranslations, 'title', language)}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t(automationTranslations, 'subtitle', language)}
          </p>
        </motion.div>

        {/* Featured Project and Video */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Project */}
          <motion.div
            {...createFadeInUp(0.2)}
          >
            <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {t(automationTranslations, 'featuredProject', language)}
                  </Badge>
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
                      {t(automationTranslations, 'code', language)}
                    </a>
                  </Button>
                  {featuredProject.liveUrl && (
                    <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        {t(automationTranslations, 'demo', language)}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Featured Video */}
          <motion.div
            {...createFadeInUp(0.2)}
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
                  {t(automationTranslations, 'featuredTutorial', language)}
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
                    {t(automationTranslations, 'watchTutorial', language)}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          {...createFadeInUp(0.4)}
          className="mb-16"
        >
          <h2 className="text-center mb-8">{t(automationTranslations, 'services', language)}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                {...createFadeInUp(0.4 + index * 0.1)}
              >
                <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto text-primary mb-4">
                      {serviceIcons[index]}
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
          {...createFadeInUp(0.6)}
          className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
        >
          <h2 className="mb-4">{t(automationTranslations, 'ctaTitle', language)}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t(automationTranslations, 'ctaDescription', language)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
              <Zap className="w-4 h-4 mr-2" />
              {t(automationTranslations, 'consultation', language)}
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              {t(automationTranslations, 'moreExamples', language)}
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}