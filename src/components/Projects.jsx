import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

// Project images
import mccollegeImg from "../assets/mccollege.png";
import msschoolImg from "../assets/msschool.png";
import fixonicImg from "../assets/fixonic.png";
import zarqImg from "../assets/zarq.png";
import livestockImg from "../assets/livestock.png";

import meemImg from "../assets/meem.png";

const projects = [
  {
    title: "Meem Jewel Style",
    url: "https://meem-jewel-style.vercel.app",
    tags: ["E-commerce", "Jewellery", "Luxury UI"],
    desc: "A premium e-commerce platform for high-end jewellery, featuring a minimal aesthetic, product showcases, and seamless user experience.",
    image: meemImg,
  },
  {
    title: "Livestock Management App",
    url: "#",
    tags: ["Mobile App", "React Native", "Expo"],
    desc: "A mission-critical mobile application for farm owners to manage animal health, breeding cycles, and digital ledgers with offline-first synchronization.",
    image: livestockImg,
    isApp: true,
  },
  {
    title: "Zarq Properties",
    url: "https://zarq1.vercel.app",
    tags: ["Real Estate", "React", "Tailwind"],
    desc: "A premium real estate platform featuring advanced search filters, property listings, and responsive design for high-end property management.",
    image: zarqImg,
  },
  {
    title: "MCC College Portal",
    url: "https://mccollege.vercel.app",
    tags: ["Education", "MERN Stack", "Auth"],
    desc: "Comprehensive college management portal handling admissions, result tracking, and student fee management with a smooth UI.",
    image: mccollegeImg,
  },
  {
    title: "Mohammadan School",
    url: "https://mohammadan-school.vercel.app",
    tags: ["React", "Management", "UI/UX"],
    desc: "A modern school portal designed for seamless communication between staff and parents, focusing on usability and accessibility.",
    image: msschoolImg,
  },
  {
    title: "Fixonic Web Application",
    url: "https://fixonic.vercel.app",
    tags: ["SaaS", "Dashboard", "React"],
    desc: "Enterprise-grade web application for resource management and business process optimization.",
    image: fixonicImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black text-white">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-slate-400 max-w-xl">
            High-end digital solutions built with precision and a focus on professional excellence.
          </p>
        </div>
        <motion.a
          href="https://github.com"
          target="_blank"
          className="flex items-center gap-2 text-primary-400 font-bold hover:text-primary-300 transition-colors group"
        >
          View All on GitHub <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-slate-900/50 rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-white/10 transition-all flex flex-col lg:flex-row shadow-2xl"
          >
            {/* Wide Screenshot Area */}
            <div className="lg:w-3/5 aspect-video overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-300" />
              
              {project.isApp && (
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                  Mobile Enterprise App
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="lg:w-2/5 p-8 lg:p-12 space-y-6 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary-400 bg-primary-400/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black text-white group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                {project.desc}
              </p>

              <div className="flex gap-4 pt-4">
                {project.isApp ? (
                  <div className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 text-slate-400 font-bold border border-white/5 cursor-default">
                    App Store (Coming Soon)
                  </div>
                ) : (
                  <motion.a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white font-bold transition-all shadow-lg shadow-primary-500/10 hover:shadow-primary-500/25"
                  >
                    Live Preview <ExternalLink size={18} />
                  </motion.a>
                )}
                
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5"
                >
                  <Github size={22} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
