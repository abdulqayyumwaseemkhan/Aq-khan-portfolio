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
    <section id="experience" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
            <Briefcase size={24} />
          </div>
          Experience
        </h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </div>

      <div className="space-y-6">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white p-6 lg:p-8 rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all border-l-4 border-l-emerald-500"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-slate-600 font-medium">
                    {item.company}
                  </p>
                </div>
                <div className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  {item.type}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Calendar size={14} className="text-emerald-600" /> {item.period}
              </div>
              
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {item.description}
              </p>
              
              {item.role.includes("Mentor") && (
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold bg-emerald-50/80 px-3 py-2 rounded-xl border border-emerald-100 w-fit">
                  <Users size={15} /> Impacting the next generation of developers
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
