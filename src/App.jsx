import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
