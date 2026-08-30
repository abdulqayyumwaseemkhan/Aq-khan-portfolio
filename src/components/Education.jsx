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
    <section id="education" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
            <GraduationCap size={24} />
          </div>
          Education
        </h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </div>

      <div className="space-y-6">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white p-6 lg:p-8 rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all border-l-4 border-l-teal-500"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full w-fit border border-emerald-200">
                <Calendar size={13} className="text-emerald-600" /> {item.period}
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 font-medium">
                {item.institution}
              </p>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
