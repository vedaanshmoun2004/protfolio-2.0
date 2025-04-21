import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Download, Rocket } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: Code, label: 'Web Development', description: 'React, TypeScript, Node.js' },
    { icon: Rocket, label: 'iOS Development', description: 'Swift, SwiftUI, UIKit' },
    { icon: Brain, label: 'Problem Solving', description: 'Algorithms, Architecture, Data Structures' },
  ];

  const paragraphs = [
    "I am a passionate and detail-oriented iOS and Web Developer with a strong foundation in both mobile and full-stack web development. As a fresher, I've dedicated my time to building hands-on projects that demonstrate my skills in Swift, SwiftUI, and the MERN stack (MongoDB, Express.js, React, Node.js).",
    "In addition to my core tech stack, I'm proficient in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and version control using Git and GitHub. I'm familiar with RESTful APIs, responsive design principles, and deploying applications using platforms like Vercel and Netlify.",
    "I enjoy turning ideas into seamless, user-friendly digital experiences and take pride in writing clean, maintainable code. I'm excited to begin my professional journey, contribute to innovative projects, and grow as a developer in a collaborative and fast-paced environment."
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/30 to-dark/50 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-12 gradient-text text-center font-display"
          >
            About Me
          </motion.h2>
          
          <div className="space-y-6 mb-16">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.3,
                  ease: "easeOut"
                }}
                className="text-xl text-gray-300 leading-relaxed font-light"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + index * 0.2,
                  ease: "easeOut"
                }}
                className="glass p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group hover:scale-105"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-secondary/30"
                >
                  <skill.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">{skill.label}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="/resume.pdf"
              download="Vedaansh_Moun_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-accent transition-all duration-300 flex items-center gap-3 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}