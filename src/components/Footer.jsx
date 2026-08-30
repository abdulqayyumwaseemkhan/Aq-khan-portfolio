import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-display font-black text-slate-900">
              AQ<span className="text-emerald-600">.</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-sm">
              Architecting high-performance digital solutions, web applications, and mobile products with clean engineering.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-emerald-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-sm font-medium text-slate-600">
              © {currentYear} Abdul Qayyum Waseem Khan.
            </p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
