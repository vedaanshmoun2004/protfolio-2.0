import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">Vedaansh Moun</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear}</span>
            <span>•</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent animate-pulse" />
            <span>using React & Tailwind</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}