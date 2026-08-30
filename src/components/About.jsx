import { motion } from "framer-motion";
import { User, Code2, Palette, Users2 } from "lucide-react";
import profilePic from "../assets/profile.png";

export default function About() {
  const highlights = [
    { icon: <Code2 className="text-blue-600" />, title: "MERN & React Native", desc: "Building scalable web & cross-platform mobile solutions." },
    { icon: <Palette className="text-purple-600" />, title: "IT Infrastructure", desc: "Managing comprehensive IT systems and network operations." },
    { icon: <Users2 className="text-emerald-600" />, title: "Technical Mentor", desc: "Empowering developers with real-world industry skills." },
  ];

  return (
    <section id="about" className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              I am <span className="text-slate-900 font-semibold">Abdul Qayyum Waseem Khan</span>, a dedicated professional specialized in Frontend Development, MERN Stack, and React Native. With a relentless focus on clean code and user experience, I architect digital solutions that drive innovation and solve real-world problems.
            </p>
            <p>
              My expertise spans across <span className="text-slate-900 font-semibold">full-stack web applications, e-commerce platforms, and cross-platform mobile apps</span>. Beyond coding, I serve as an IT Manager, overseeing entire technology infrastructures and maintaining robust digital systems for institutions and enterprises.
            </p>
            <p>
              As a mentor at <span className="text-slate-900 font-semibold">Banoqabil Lahore</span>, I am passionate about bridging the gap between academia and industry, training aspiring developers in modern web technologies and freelance career readiness.
            </p>
            <p className="text-slate-800 font-semibold text-lg italic border-l-4 border-emerald-500 pl-6 py-2 bg-emerald-50/60 rounded-r-2xl">
              "Focused on engineering practical, high-impact digital solutions and empowering the next generation of software engineers."
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
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-soft-xl hover:border-emerald-300 transition-all group"
              >
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-slate-900 font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-white border-8 border-white shadow-soft-2xl p-2 rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src={profilePic} 
              alt="Professional Portrait"
              className="w-full h-full object-cover rounded-[2.5rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-emerald-200/40 blur-3xl rounded-full" />
          <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-teal-200/40 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
