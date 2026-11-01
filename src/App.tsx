import { lazy, Suspense, useMemo } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { ProofStrip } from './components/sections/ProofStrip';

// Code-split below-the-fold sections to minimize initial main-thread JS execution
const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Expertise = lazy(() => import('./components/sections/Expertise'));
const Impact = lazy(() => import('./components/sections/Impact'));
const Journey = lazy(() => import('./components/sections/Journey'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/sections/Footer'));

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
        <Suspense fallback={<div className="min-h-[200px] bg-[#030303]" />}>
          <About />
          <Projects />
          <Expertise />
          <Impact />
          <Journey />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
