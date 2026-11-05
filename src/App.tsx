import { lazy, Suspense, useMemo } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { ProofStrip } from './components/sections/ProofStrip';

// Code-split below-the-fold sections to minimize initial main-thread JS execution
const About = lazy(() => import('./components/sections/About'));
const TechStack = lazy(() => import('./components/sections/TechStack').then(m => ({ default: m.TechStack })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Journey = lazy(() => import('./components/sections/Journey').then(m => ({ default: m.Journey })));
const Reviews = lazy(() => import('./components/sections/Reviews').then(m => ({ default: m.Reviews })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/sections/Footer').then(m => ({ default: m.Footer })));

function App() {
  const sectionIds = useMemo(
    () => ['about', 'stack', 'projects', 'journey', 'reviews', 'contact'],
    []
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <Suspense fallback={<div className="min-h-[200px] bg-[#09090b]" />}>
          <About />
          <TechStack />
          <Projects />
          <Journey />
          <Reviews />
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
