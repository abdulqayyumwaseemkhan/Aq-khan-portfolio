import { motion } from "framer-motion";
import { SiTailwindcss } from "react-icons/si";
import { Layout, Smartphone, Palette, Code, Boxes, Layers } from "lucide-react";

const features = [
  { icon: <Layout size={24} />, title: "Full Stack Applications", desc: "Developing complete web applications using MERN stack with frontend and backend integration." },
  { icon: <Layers size={24} />, title: "API Development", desc: "Building and integrating REST APIs for dynamic and scalable applications." },
  { icon: <Code size={24} />, title: "React Applications", desc: "Creating modern, responsive user interfaces using React JS." },
  { icon: <Boxes size={24} />, title: "Admin Dashboards", desc: "Developing dynamic admin panels with data management and control systems." },
  { icon: <Smartphone size={24} />, title: "Mobile App Development", desc: "Building cross-platform mobile apps using React Native." },
  { icon: <Palette size={24} />, title: "Real-World Projects", desc: "Focused on solving real problems through practical and production-level applications." },
];

export default function TailwindSection() {
  return (
    <section className="py-24 space-y-16">
      <div className="glass-dark rounded-[3.5rem] p-12 lg:p-20 border-white/5 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] -mr-48 -mt-48" />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cyan-400 font-bold tracking-widest uppercase text-xs">
                <Code size={24} /> Development Focus
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                MERN Stack <span className="text-cyan-400">Development</span> & Modern Applications
              </h2>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              I build real-world web and mobile applications using MERN stack and React Native, focusing on performance, scalability, and practical solutions.
            </p>

            <div className="space-y-4 pt-4">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Expertise</p>
              <ul className="space-y-3">
                {[
                  "Full-stack development using MongoDB, Express, React, Node.js",
                  "Building scalable and responsive web applications",
                  "REST API development and integration",
                  "Cross-platform mobile app development (React Native)",
                  "Real-world project-based development approach",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="p-3 bg-cyan-500/10 rounded-xl w-fit mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
