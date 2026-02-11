import { motion } from "framer-motion";
import { Github, Mail, Linkedin, ArrowRight, Download } from "lucide-react";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  const linkedinUrl = "https://www.linkedin.com/in/abdul-qayyum-waseem-khan-027663335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <section className="relative pt-32 lg:pt-48 pb-12 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left space-y-8"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-semibold tracking-wide"
            >
              Available for new projects
            </motion.span>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight">
              Abdul Qayyum <br />
              <span className="text-gradient">Waseem Khan</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
              Full Stack Developer <span className="text-slate-600">|</span> MERN Stack Specialist <br /> 
              UI/UX Designer <span className="text-slate-600">|</span> IT Instructor
            </p>
            <p className="text-lg text-slate-500 max-w-xl">
              Building Scalable Digital Solutions with Design Intelligence & Technical Excellence.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <motion.a
              href="https://wa.me/923213994490"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white font-bold flex items-center gap-2 group transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            >
              Let's Connect
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1wrZ2HpqKJKs4zQFJzeg5bXomzuek0Ecc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold flex items-center gap-2 transition-all"
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
            {[
              { icon: <Github size={24} />, href: "https://github.com", label: "GitHub" },
              { icon: <Mail size={24} />, href: "mailto:abdulqayyumwaseemkhan@gmail.com", label: "Email" },
              { icon: <Linkedin size={24} />, href: linkedinUrl, label: "LinkedIn" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, color: "#22c55e" }}
                className="text-slate-500 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-64 h-64 lg:w-[450px] lg:h-[450px]"
        >
          {/* Animated Background Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/20 animate-spin-slow" />
          
          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 80 }}
            className="absolute -right-2 bottom-4 lg:-right-6 lg:bottom-10 z-20 glass rounded-full w-28 h-28 lg:w-36 lg:h-36 flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 hover:border-primary-500/50 hover:scale-105 transition-all duration-500 group/badge"
          >
            <span className="text-3xl lg:text-4xl font-black text-white leading-none group-hover/badge:text-primary-400 transition-colors">4+</span>
            <span className="text-[10px] lg:text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Years</span>
            <span className="text-[10px] lg:text-xs text-primary-500 font-black uppercase tracking-widest">Exp.</span>
          </motion.div>

          <div className="w-full h-full rounded-full bg-slate-900 border-4 border-white/10 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 z-10" />
            <img 
              src={profilePic} 
              alt="Abdul Qayyum Waseem Khan"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
