import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "EventSync",
      description: "A full-stack Event managment solution with RSVP and Analyltics",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "iOS app for tracking workouts and nutrition with ML-powered insights",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600",
      tags: ["Swift", "CoreML", "HealthKit"]
      
    },
    {
      title: "Task Management Dashboard",
      description: "Beautiful and intuitive project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      tags: ["TypeScript", "React", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl glass">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-sm rounded-full glass bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      className="glass px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/20 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="glass px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/20 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}