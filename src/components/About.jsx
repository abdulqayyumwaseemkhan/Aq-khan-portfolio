import { motion } from "framer-motion";
import { User, Code2, Palette, Users2 } from "lucide-react";
import profilePic from "../assets/profile.jpg";

export default function About() {
  const highlights = [
    { icon: <Code2 className="text-blue-400" />, title: "Full Stack Expert", desc: "Specializing in MERN stack for scalable solutions." },
    { icon: <Palette className="text-purple-400" />, title: "Design Intel", desc: "Crafting intuitive UI/UX with modern aesthetics." },
    { icon: <Users2 className="text-orange-400" />, title: "Lead Mentor", desc: "Guiding 500+ students in their tech journey." },
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
              I am <span className="text-white font-medium">Abdul Qayyum Waseem Khan</span>, a visionary Full Stack Developer and IT Instructor dedicated to bridging the gap between design intelligence and technical excellence. With a strong foundation in the MERN stack and a passion for UI/UX, I build digital ecosystems that are not just functional, but transformative.
            </p>
            <p>
              My journey is defined by a unique combination of <span className="text-white font-medium">technical leadership and educational impact</span>. As a mentor at BanoQabil Lahore, I've had the privilege of shaping the careers of aspiring developers, translating complex concepts into actionable skills.
            </p>
            <p>
              Whether it's architecting scalable web applications or designing pixel-perfect user interfaces, I approach every project with a commitment to <span className="text-white font-medium">quality, innovation, and strategic thinking</span>. My goal is to create digital solutions that drive value and resonate with users on an international level.
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
