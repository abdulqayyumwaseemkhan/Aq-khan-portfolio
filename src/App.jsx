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
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-500/20 selection:text-emerald-900 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main className="relative">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-emerald-100/60 blur-[130px] rounded-full" />
          <div className="absolute top-[25%] -right-[10%] w-[40%] h-[40%] bg-teal-100/50 blur-[140px] rounded-full" />
          <div className="absolute top-[60%] -left-[5%] w-[40%] h-[40%] bg-sky-100/50 blur-[140px] rounded-full" />
          <div className="absolute -bottom-[10%] right-[15%] w-[50%] h-[50%] bg-emerald-100/50 blur-[160px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          <Hero />
          <About />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
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
