import { useMemo } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { ProofStrip } from './components/sections/ProofStrip';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Expertise } from './components/sections/Expertise';
import { Impact } from './components/sections/Impact';
import { Journey } from './components/sections/Journey';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  const sectionIds = useMemo(
    () => ['about', 'work', 'expertise', 'impact', 'journey', 'contact'],
    []
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-[#030303] text-[#f1eee8] flex flex-col font-sans selection:bg-[#ff8c59] selection:text-[#030303]">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <About />
        <Projects />
        <Expertise />
        <Impact />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
