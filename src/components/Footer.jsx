import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white">
              AQ<span className="text-primary-500">.</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-xs">
              Architecting the future of digital solutions with design intelligence and technical mastery.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-slate-400">
              © {currentYear} Abdul Qayyum Waseem Khan.
            </p>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
