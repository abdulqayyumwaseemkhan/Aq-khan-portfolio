import { motion } from "framer-motion";
import { Briefcase, Calendar, Users } from "lucide-react";

const experience = [
  {
    role: "Frontend Development Mentor",
    company: "Banoqabil Lahore",
    period: "2024 - Present",
    description: "Teaching HTML, CSS, JavaScript, and React JS. Training students on real-world projects while helping them build professional portfolios and freelancing skills.",
    type: "Mentorship",
  },
  {
    role: "Web & IT Manager",
    company: "Mohammadan Group of Institutes",
    period: "2023 - Present",
    description: "Managing complete web and IT infrastructure. Developing and maintaining websites and systems while handling IT operations and technical management.",
    type: "Management",
  },
  {
    role: "Independent MERN Stack & React Native Developer",
    company: "Self-Employed",
    period: "2022 - Present",
    description: "Building full-stack web applications using MongoDB, Express, React, and Node.js. Developing cross-platform mobile apps using React Native for real-world and personal projects.",
    type: "Development",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-white flex items-center gap-3">
          <Briefcase className="text-emerald-500" /> Experience
        </h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </div>

      <div className="space-y-8">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass p-6 rounded-2xl hover:bg-white/10 transition-all border-l-4 border-l-emerald-500"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-slate-400 font-medium">
                    {item.company}
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  {item.type}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Calendar size={14} /> {item.period}
              </div>
              
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
              
              {item.role.includes("Mentor") && (
                <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold">
                  <Users size={16} /> Impacting the next generation of developers
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
