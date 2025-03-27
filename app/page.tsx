import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Service from '@/components/Service';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Service />
      <Contact />
      <Footer />

      <ScrollToTop />
    </div>
  );
}
