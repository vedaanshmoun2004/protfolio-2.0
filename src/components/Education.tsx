import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-accent to-dark" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-primary">Education</h2>
          <p className="text-xl text-gray-400">My academic journey and qualifications.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary space-y-12">
            {/* University */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] bg-dark p-2 rounded-full border-2 border-primary">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-dark-accent p-6 rounded-lg group relative">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-secondary/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="absolute inset-0 bg-dark-accent rounded-lg" />
                <div className="relative">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Education</span>
                  </div>
                  <p className="text-xl text-gray-300 mt-2">B.Tech in Computer Science Engineering (CSE-AIML)</p>
                  <p className="text-gray-400 mt-1">Oct 2022 - June 2026</p>
                </div>
              </div>
            </motion.div>

            {/* School */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] bg-dark p-2 rounded-full border-2 border-primary">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-dark-accent p-6 rounded-lg group relative">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-secondary/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="absolute inset-0 bg-dark-accent rounded-lg" />
                <div className="relative">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
<<<<<<< HEAD
                        S. S. Mota Singh Model Sr. Sec. School, India
=======
                      S. S. Mota Singh Model Sr. Sec. School, India
>>>>>>> 9dba3eb (Add react-icons dependency, update project details, and enhance UI components)
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Education</span>
                  </div>
                  <p className="text-xl text-gray-300 mt-2">12th CBSE Board - Science (Non-Medical)</p>
                  <p className="text-gray-400 mt-1">April 2021 - July 2022</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
