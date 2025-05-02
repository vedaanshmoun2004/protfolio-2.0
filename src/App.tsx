import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <main className="bg-dark text-white">
      <Hero />
      <About />
      <TechSkills />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;