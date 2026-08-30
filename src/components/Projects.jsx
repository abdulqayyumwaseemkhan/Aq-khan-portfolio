import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Globe, Clock, CheckCircle2 } from "lucide-react";

import cvbuilderImg from "../assets/cvbuilder.png";
import wellgrowImg from "../assets/wellgrow.png";
import mustaqeemfarmsImg from "../assets/mustaqeemfarms.png";
import styleendImg from "../assets/styleend.png";
import livestockImg from "../assets/livestock.png";
import mccollegeImg from "../assets/mccollege.png";
import msschoolImg from "../assets/msschool.png";
import fixonicImg from "../assets/fixonic.png";
import zarqImg from "../assets/zarq.png";
import meemImg from "../assets/meem.png";
import kissanpartsImg from "../assets/kissanparts.png";

const categories = ["All", "Live Domains", "E-Commerce", "MERN Stack", "Mobile Apps", "Portals"];

const projects = [
  {
    title: "CreateXcore.com — ATS CV & Resume Builder",
    category: "MERN Stack",
    url: "https://createxcore.com",
    isLiveDomain: true,
    featured: true,
    tags: ["Live Domain", "CV & Resume Builder", "ATS Friendly", "React JS"],
    desc: "A professional, ATS-compliant online CV & Resume Builder platform deployed on CreateXcore.com. Features interactive templates, real-time editing, section customization, and instant career-ready exports.",
    image: cvbuilderImg,
  },
  {
    title: "WellGrow.pk",
    category: "E-Commerce",
    url: "https://wellgrow.pk",
    isLiveDomain: true,
    featured: true,
    tags: ["Live Domain", "Health & Supplements", "Dietitian Appointments", "MERN Stack"],
    desc: "A full-scale health & wellness e-commerce platform for nutritional supplements integrated with an online dietitian appointment booking and consultation management system.",
    image: wellgrowImg,
  },
  {
    title: "MustaqeemFarms.com",
    category: "E-Commerce",
    url: "https://mustaqeemfarms.com",
    isLiveDomain: true,
    featured: true,
    tags: ["Live Domain", "AgriTech", "Dairy & Livestock", "Organic Store"],
    desc: "Official digital platform and e-commerce portal for Mustaqeem Farms, featuring pure organic dairy products, cattle livestock breeding records, and direct farm-to-table delivery management.",
    image: mustaqeemfarmsImg,
  },
  {
    title: "Style End — Purses & Handbags",
    category: "E-Commerce",
    url: "#",
    inDevelopment: true,
    tags: ["In Development", "Fashion E-Commerce", "Purses & Handbags", "React JS"],
    desc: "A luxury e-commerce web boutique for designer women's purses, handbags, and accessories. Currently in active development featuring interactive product showcases, wishlist, and cart checkout.",
    image: styleendImg,
  },
  {
    title: "Livestock Management Mobile App",
    category: "Mobile Apps",
    url: "#",
    isApp: true,
    inDevelopment: true,
    tags: ["In Development", "React Native", "AgriTech", "Mobile App"],
    desc: "A specialized cross-platform mobile application for livestock farmers to manage cattle health records, breeding cycles, milk yields, and farm operations with offline-first capabilities. Currently in active development.",
    image: livestockImg,
  },
  {
    title: "Zarq Online",
    category: "E-Commerce",
    url: "https://zarq1.vercel.app",
    tags: ["Product Brand", "React JS", "E-Commerce"],
    desc: "A premium online product brand offering optimized digital solutions and goods. Built with high-speed performance and interactive UI.",
    image: zarqImg,
  },
  {
    title: "Meem Jewel Style",
    category: "E-Commerce",
    url: "https://meem-jewel-style.vercel.app",
    tags: ["E-Commerce", "Jewellery Store", "Luxury UI"],
    desc: "A premium e-commerce platform for high-end jewellery, featuring a minimal aesthetic, product showcases, and seamless user experience.",
    image: meemImg,
  },
  {
    title: "Fixonic",
    category: "MERN Stack",
    url: "https://fixonic.vercel.app",
    tags: ["React JS", "Modern UI", "Service Platform"],
    desc: "A clean and modern professional service website showcasing premium design standards and high-performance React implementation.",
    image: fixonicImg,
  },
  {
    title: "MCC College Website",
    category: "Portals",
    url: "https://mccollege.vercel.app",
    tags: ["Education", "MERN Stack", "Portal"],
    desc: "A full-scale educational management platform handling student results, admissions, and course management with a seamless user experience.",
    image: mccollegeImg,
  },
  {
    title: "Mohammadan School System",
    category: "Portals",
    url: "https://mohammadan-school.vercel.app",
    tags: ["React", "School Portal", "Management"],
    desc: "A comprehensive web portal for the Mohammadan School System, focusing on efficient administration and user-friendly communication interfaces.",
    image: msschoolImg,
  },
  {
    title: "KissanParts.pk",
    category: "E-Commerce",
    url: "#",
    inDevelopment: true,
    tags: ["In Development", "Agri E-Commerce", "React JS", "Spare Parts"],
    desc: "A robust e-commerce platform for agricultural machinery, tractors, and spare parts with catalog search and order placement. Currently in active development.",
    image: kissanpartsImg,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : activeFilter === "Live Domains"
      ? projects.filter(p => p.isLiveDomain)
      : projects.filter(p => p.category === activeFilter || p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section id="projects" className="py-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles size={14} /> Proven Track Record & Live Deployments
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 max-w-xl text-lg">
            Production-grade platforms, live client domains, e-commerce stores, and active developments built with precision.
          </p>
        </div>
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors group"
        >
          View All on GitHub <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-emerald-600" />
        </motion.a>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2.5 pt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeFilter === cat
                ? "bg-emerald-600 text-white shadow-soft-lg shadow-emerald-600/20"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-soft"
            }`}
          >
            {cat === "Live Domains" && <Globe size={13} className={activeFilter === cat ? "text-white" : "text-emerald-600"} />}
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative bg-white rounded-[2.5rem] overflow-hidden transition-all flex flex-col lg:flex-row shadow-soft-lg hover:shadow-soft-2xl ${
                project.isLiveDomain 
                  ? "border-2 border-emerald-500/40 hover:border-emerald-500" 
                  : "border border-slate-200/90 hover:border-emerald-400/80"
              }`}
            >
              {/* Wide Screenshot Area */}
              <div className="lg:w-3/5 aspect-video overflow-hidden relative bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/5 transition-colors duration-300" />
                
                {/* Live Domain Badge */}
                {project.isLiveDomain && (
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    <Globe size={13} /> Live Custom Domain
                  </div>
                )}

                {/* In Development Badge */}
                {project.inDevelopment && (
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-amber-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 backdrop-blur-md">
                    <Clock size={13} /> Currently In Development
                  </div>
                )}

                {project.isApp && (
                  <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-cyan-300 text-[10px] font-black uppercase tracking-wider">
                    Mobile App
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="lg:w-2/5 p-8 lg:p-10 space-y-6 flex flex-col justify-center bg-white">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => {
                    const isLive = tag === "Live Domain";
                    const isDev = tag === "In Development";
                    return (
                      <span 
                        key={tag} 
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                          isLive 
                            ? "bg-emerald-500/10 text-emerald-700 border-emerald-300" 
                            : isDev 
                              ? "bg-amber-50 text-amber-700 border-amber-200" 
                              : "text-emerald-700 bg-emerald-50 border-emerald-200/70"
                        }`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                  {project.title}
                  {project.isLiveDomain && <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />}
                </h3>
                
                <p className="text-slate-600 text-base leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex gap-3 pt-2">
                  {project.inDevelopment ? (
                    <div className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-amber-50 text-amber-800 font-bold text-sm border border-amber-200 cursor-default">
                      <Clock size={16} /> Currently Working / Coming Soon
                    </div>
                  ) : project.isApp ? (
                    <div className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-100 text-slate-500 font-bold text-sm border border-slate-200 cursor-default">
                      Mobile App (Coming Soon)
                    </div>
                  ) : (
                    <motion.a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-soft ${
                        project.isLiveDomain
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30 hover:shadow-emerald-600/40"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20"
                      }`}
                    >
                      {project.isLiveDomain ? `Visit ${project.title}` : "Live Preview"} <ExternalLink size={16} />
                    </motion.a>
                  )}
                  
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all border border-slate-200"
                    aria-label="View Code"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
