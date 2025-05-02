import { motion } from 'framer-motion';
import { FaApple, FaAndroid, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiJavascript } from 'react-icons/si';
import { Globe } from 'lucide-react';

const skills = [
  {
    icon: <SiFlutter className="w-10 h-10 text-blue-400" />, 
    title: 'Flutter',
    desc: 'Cross-platform mobile app development with Flutter, creating beautiful and performant applications for both iOS and Android platforms.'
  },
  {
    icon: <FaApple className="w-10 h-10 text-gray-200" />, 
    title: 'Swift',
    desc: 'Native iOS development using Swift and SwiftUI, building high-performance applications following Apple\'s design guidelines.'
  },
  {
    icon: <FaAndroid className="w-10 h-10 text-green-400" />, 
    title: 'Android Development',
    desc: 'Native Android app development using Kotlin and Jetpack Compose, creating responsive and user-friendly mobile applications.'
  },
  {
    icon: <FaReact className="w-10 h-10 text-cyan-400" />, 
    title: 'React',
    desc: 'Modern web development with React, creating responsive and interactive user interfaces with component-based architecture.'
  },
  {
    icon: <SiJavascript className="w-10 h-10 text-yellow-300" />, 
    title: 'JavaScript',
    desc: 'Dynamic web development with JavaScript, building interactive and responsive applications with modern ES6+ features.'
  },
  {
    icon: <SiFirebase className="w-10 h-10 text-yellow-400" />, 
    title: 'Firebase',
    desc: 'Backend development and real-time data management using Firebase, implementing authentication, cloud storage, and real-time databases.'
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />, 
    title: 'Git',
    desc: 'Version control and collaboration using Git, enabling efficient code management and teamwork.'
  },
];

export default function TechSkills() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-center gradient-text"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 text-center mb-12"
        >
          A comprehensive overview of my technical skills and expertise in various technologies.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="bg-dark-accent rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-primary/30 border border-transparent hover:border-primary transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 