import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, 
  SiGit, SiGithub, SiTailwindcss, SiAdobephotoshop, 
  SiAdobeillustrator, SiFigma, SiCanva, SiAdobepremierepro, 
  SiAdobeaftereffects, SiAdobe, SiBlender 
} from "react-icons/si";
import { Code2, Smartphone, FileText, Table, Presentation } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <SiTailwindcss className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", icon: <Smartphone className="text-cyan-500" /> },
    ],
  },
  {
    title: "Design & Editing",
    skills: [
      { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-600" /> },
      { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-700" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
      { name: "Canva", icon: <SiCanva className="text-cyan-400" /> },
      { name: "Premiere Pro", icon: <SiAdobepremierepro className="text-purple-800" /> },
      { name: "After Effects", icon: <SiAdobeaftereffects className="text-purple-900" /> },
      { name: "Blender", icon: <SiBlender className="text-orange-500" /> },
      { name: "InPage", icon: <FileText className="text-blue-500" /> },
    ],
  },
  {
    title: "Productivity & Tools",
    skills: [
      { name: "MS Word", icon: <FileText className="text-blue-700" /> },
      { name: "MS Excel", icon: <Table className="text-green-700" /> },
      { name: "MS PowerPoint", icon: <Presentation className="text-orange-600" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "REST APIs", icon: <Code2 className="text-blue-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          A comprehensive suite of modern frameworks, programming languages, and industry-standard tools.
        </p>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 ml-2 border-l-4 border-emerald-500 pl-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, translateY: -4 }}
                  className="bg-white p-6 rounded-3xl flex flex-col items-center justify-center gap-3 border border-slate-200/80 shadow-soft hover:shadow-soft-xl hover:border-emerald-400/80 transition-all duration-300 group"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 uppercase tracking-wider text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
