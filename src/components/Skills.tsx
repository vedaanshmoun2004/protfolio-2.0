import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    {
      category: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "CSS/Tailwind", level: 95 },
      ],
    },
    {
      category: "iOS Development",
      icon: Smartphone,
      skills: [
        { name: "Swift", level: 85 },
        { name: "SwiftUI", level: 80 },
        { name: "UIKit", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        { name: "MySql", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      category: "DevOps",
      icon: Terminal,
      skills: [
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "AWS", level: 75 },
      ],
    },
    {
      category: "Programming",
      icon: Code2,
      skills: [
        { name: "Algorithms", level: 90 },
        { name: "System Design", level: 85 },
        { name: "Clean Code", level: 90 },
      ],
    },
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass p-6 rounded-xl hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 pl-2 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-125 transition-transform duration-200" />
                    <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}