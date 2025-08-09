import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Zap, Play, Github, ExternalLink, ArrowRight, Building, Workflow, Bot } from 'lucide-react';

export function AutomationSection() {
  const featuredProject = {
    title: 'E-commerce Inventory Management System',
    description: 'Automated inventory tracking and reordering system that reduced manual work by 85% and prevented stockouts for a mid-size retailer.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Docker'],
    githubUrl: 'https://github.com/yourusername/inventory-automation',
    liveUrl: 'https://your-inventory-demo.com',
    metrics: [
      { label: 'Time Saved', value: '40 hours/week' },
      { label: 'Error Reduction', value: '95%' },
      { label: 'ROI', value: '300%' }
    ]
  };

  const featuredVideo = {
    title: 'Automating Business Processes with Python',
    description: 'Complete walkthrough of building business automation tools, from data processing to workflow orchestration.',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=280&fit=crop',
    duration: '1:25:45',
    youtubeUrl: 'https://youtube.com/watch?v=automation-example'
  };

  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Streamline repetitive tasks and workflows to save time and reduce errors.',
      examples: ['Data entry automation', 'Report generation', 'Email workflows', 'File processing']
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI-Powered Solutions',
      description: 'Leverage artificial intelligence to enhance decision-making and customer interactions.',
      examples: ['Chatbots', 'Document analysis', 'Predictive analytics', 'Content generation']
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'System Integration',
      description: 'Connect different business systems to create seamless data flow and operations.',
      examples: ['API integrations', 'Database synchronization', 'CRM automation', 'E-commerce tools']
    }
  ];

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
          <span className="gradient-text">Business Automation</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transform your business operations with custom automation solutions that save time, reduce costs, and eliminate human error.
        </p>
      </motion.div>

      {/* Featured Project and Video */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-primary text-primary-foreground">Featured Project</Badge>
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
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
                Featured Tutorial
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
                  Watch Tutorial
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-center mb-8">Automation Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
      >
        <h3 className="mb-4">Ready to Automate Your Business?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let's discuss how automation can transform your operations. From small tasks to complex workflows, 
          I can help you build solutions that scale with your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
            <Zap className="w-4 h-4 mr-2" />
            Get Free Consultation
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            View More Examples
          </Button>
        </div>
      </motion.div>
    </section>
  );
}