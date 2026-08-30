import { motion } from "framer-motion";
import { Github, Mail, Linkedin, ArrowRight, Download } from "lucide-react";
import profilePic from "../assets/profile.png";

export default function Hero() {
  const linkedinUrl = "https://www.linkedin.com/in/abdul-qayyum-waseem-khan-027663335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <section className="relative pt-32 lg:pt-44 pb-12 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wide shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </motion.div>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Abdul Qayyum <br />
              <span className="text-gradient">Waseem Khan</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 max-w-2xl font-medium leading-relaxed">
              Frontend Developer <span className="text-emerald-500 font-bold">|</span> MERN Stack Developer <br className="hidden sm:inline" /> 
              React Native Developer
            </p>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Professional developer, mentor, and IT manager dedicated to building high-performance web applications, scalable e-commerce systems, and cross-platform mobile solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <motion.a
              href="https://wa.me/923213994490"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-2 group transition-all shadow-soft-lg hover:shadow-emerald-600/30"
            >
              Let's Connect
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1JcA7lDjbSwiEMts55zYQa7Rt-PMRwI3k/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold flex items-center gap-2 transition-all shadow-soft"
            >
              Download CV
              <Download size={20} className="text-emerald-600" />
            </motion.a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
            {[
              { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
              { icon: <Mail size={20} />, href: "mailto:abdulqayyumwaseemkhan@gmail.com", label: "Email" },
              { icon: <Linkedin size={20} />, href: linkedinUrl, label: "LinkedIn" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                className="w-12 h-12 rounded-2xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-600 hover:text-emerald-600 flex items-center justify-center transition-all shadow-soft"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-72 h-72 lg:w-[450px] lg:h-[450px]"
        >
          {/* Animated Background Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/30 animate-spin-slow" />
          
          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 90 }}
            className="absolute -right-2 bottom-4 lg:-right-4 lg:bottom-8 z-20 bg-white/95 backdrop-blur-xl rounded-3xl w-28 h-28 lg:w-36 lg:h-36 flex flex-col items-center justify-center shadow-soft-2xl border border-slate-200 hover:border-emerald-400 hover:scale-105 transition-all duration-300 group/badge"
          >
            <span className="text-3xl lg:text-4xl font-black text-slate-900 leading-none group-hover/badge:text-emerald-600 transition-colors">4+</span>
            <span className="text-[10px] lg:text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Years</span>
            <span className="text-[10px] lg:text-xs text-emerald-600 font-black uppercase tracking-widest">Exp.</span>
          </motion.div>

          <div className="w-full h-full rounded-full bg-gradient-to-b from-white to-slate-100 border-8 border-white shadow-soft-2xl overflow-hidden relative group">
            <img 
              src={profilePic} 
              alt="Abdul Qayyum Waseem Khan"
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
