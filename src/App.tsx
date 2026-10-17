import { useMemo } from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Process } from './components/sections/Process';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  const sectionIds = useMemo(
    () => ['about', 'expertise', 'projects', 'experience', 'contact'],
    []
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Process />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
