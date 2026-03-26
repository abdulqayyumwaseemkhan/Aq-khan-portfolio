import { motion } from "framer-motion";
import { User, Code2, Palette, Users2 } from "lucide-react";
import profilePic from "../assets/profile.png";

export default function About() {
  const highlights = [
    { icon: <Code2 className="text-blue-400" />, title: "MERN & React Native", desc: "Building scalable web and mobile solutions." },
    { icon: <Palette className="text-purple-400" />, title: "IT Infrastructure", desc: "Managing complete IT systems and operations." },
    { icon: <Users2 className="text-orange-400" />, title: "Technical Mentor", desc: "Empowering students with industry-ready skills." },
  ];

  return (
    <section id="about" className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
            <p>
              I am <span className="text-white font-medium">Abdul Qayyum Waseem Khan</span>, a dedicated professional specialized in Frontend Development, MERN Stack, and React Native. With a vision for technical excellence, I architect digital solutions that drive innovation and solve real-world problems.
            </p>
            <p>
              My expertise spans across <span className="text-white font-medium">full-stack web development and cross-platform mobile apps</span>. Beyond coding, I serve as an IT Manager, handling complete technology infrastructures and maintaining robust systems for educational and corporate environments.
            </p>
            <p>
              As a mentor at <span className="text-white font-medium">Banoqabil Lahore</span>, I am passionate about bridging the gap between education and industry. I train students in modern web technologies, helping them build professional portfolios and succeed in the freelancing world.
            </p>
            <p className="text-white font-bold text-xl pt-4 italic border-l-4 border-primary-500 pl-6">
              "Focused on building real-world solutions and helping students become industry-ready developers."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-6 rounded-3xl border-white/5 hover:border-white/10 transition-all"
              >
                <div className="p-3 bg-white/5 rounded-2xl w-fit mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden glass p-4 rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              src={profilePic} 
              alt="Professional Portrait"
              className="w-full h-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-primary-500/10 blur-3xl rounded-full" />
          <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
