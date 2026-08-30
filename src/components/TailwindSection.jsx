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
    <section className="py-12 space-y-16">
      <div className="bg-gradient-to-br from-white via-slate-50 to-emerald-50/50 rounded-[3rem] p-10 lg:p-16 border border-slate-200/90 shadow-soft-xl relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/20 blur-[100px] -mr-48 -mt-48" />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold tracking-wider uppercase text-xs">
                <Code size={18} /> Core Development Focus
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                MERN Stack <span className="text-gradient">Engineering</span> & Modern Web Apps
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              I architect production-grade web applications and high-conversion e-commerce systems using modern MERN stack and React Native, prioritizing speed, clean architecture, and intuitive user experiences.
            </p>

            <div className="space-y-4 pt-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Key Competencies</p>
              <ul className="space-y-3">
                {[
                  "Full-stack web apps using MongoDB, Express, React & Node.js",
                  "E-Commerce stores & online booking / appointment platforms",
                  "Robust RESTful API design, database schemas & payment integration",
                  "Cross-platform mobile apps using React Native",
                  "Component-driven clean UI with Tailwind CSS and Framer Motion",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-soft hover:shadow-soft-xl hover:border-emerald-300 transition-all group"
              >
                <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl w-fit mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-slate-900 font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
