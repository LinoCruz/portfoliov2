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

export function ContactSection({ language: _language }: ContactSectionProps) {
  // TODO: Implement language support for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
          <span className="gradient-text">Get in Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to start your next project? Download my resume and send me a message to discuss how we can work together.
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
              <CardTitle className="text-2xl mb-2">My Resume</CardTitle>
              <CardDescription className="text-base">
                Complete overview of my experience, skills, and achievements in software development and automation.
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
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-lg text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-lg text-primary">15+</div>
                  <div className="text-xs text-muted-foreground">Technologies</div>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-lg text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
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
                  Download Resume (PDF)
                </a>
              </Button>

              {/* Additional Info */}
              <div className="text-center text-sm text-muted-foreground space-y-1">
                <p>📧 hello@yourname.dev</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>🕒 Available Mon-Fri, 9AM-6PM PST</p>
                <p>📍 San Francisco, CA</p>
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
                Send a Message
              </CardTitle>
              <CardDescription>
                Have a project in mind? Let's discuss how we can work together. I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
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
                  Send Message
                </Button>
              </form>

              {/* Quick Response Promise */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                <h4 className="text-primary mb-2">⚡ Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  feel free to call or email directly.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}