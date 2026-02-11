import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TailwindSection from "./components/TailwindSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main className="relative">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary-900/20 blur-[120px] rounded-full" />
          <div className="absolute top-[30%] -right-[10%] w-[35%] h-[35%] bg-emerald-900/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          <Hero />
          <About />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <Experience />
            <Education />
          </div>
          <Skills />
          <TailwindSection />
          <Projects />
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
