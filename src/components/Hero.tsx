import { motion } from 'framer-motion';
import { Code2, Smartphone } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-accent to-dark z-0" />
      
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <div className="w-[150%] h-[150%] absolute">
          <Spline scene="https://prod.spline.design/z9iDd0LifizcaPU6/scene.splinecode" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-color-change bg-clip-text mix-blend-overlay">
              Vedaansh Moun
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-xl text-gray-300">Web Developer</span>
            <span className="text-primary">•</span>
            <Smartphone className="w-6 h-6 text-secondary" />
            <span className="text-xl text-gray-300">iOS Developer</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-400 mb-12"
          >
            Crafting Web & iOS Experiences with Precision
          </motion.h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-accent transition-all duration-300 text-white"
          >
            Hire Me
          </motion.button>
        </motion.div>
      </div>
      
      <ParticlesBackground />
    </motion.section>
  );
}

function ParticlesBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            i % 3 === 0 ? 'bg-gradient-1' : i % 3 === 1 ? 'bg-gradient-3' : 'bg-gradient-4'
          } opacity-20`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}