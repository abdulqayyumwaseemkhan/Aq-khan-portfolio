import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    title: "BS Computer Science",
    institution: "Lahore Leads University",
    period: "2022 - 2026",
    description: "Specialized in Software Engineering and Web Technologies.",
  },
  {
    title: "Intermediate (ICS)",
    institution: "Govt Khawaja Raffique Shaheed College Walton Road Lahore",
    period: "2018 - 2020",
    description: "Focus on Computer Science and Mathematics.",
  },
  {
    title: "Matric (Computer Science)",
    institution: "Govt Model High School Kahna Nau Lahore",
    period: "2016 - 2018",
    description: "Foundational computer science education.",
  },
];

export default function Education() {
  return (
    <section id="education" className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-white flex items-center gap-3">
          <GraduationCap className="text-primary-500" /> Education
        </h2>
        <div className="h-1 w-20 bg-primary-500 rounded-full" />
      </div>

      <div className="space-y-8">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-8 border-l-2 border-slate-800 hover:border-primary-500/50 transition-colors"
          >
            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-slate-800 group-hover:bg-primary-500 transition-colors" />
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold uppercase tracking-wider">
                <Calendar size={14} /> {item.period}
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-400 font-medium">
                {item.institution}
              </p>
              <p className="text-sm text-slate-500 mt-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
