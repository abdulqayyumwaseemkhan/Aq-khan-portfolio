import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Contact() {
  const linkedinUrl = "https://www.linkedin.com/in/abdul-qayyum-waseem-khan-027663335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <section id="contact" className="py-12">
      <div className="bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 rounded-[3.5rem] overflow-hidden border border-slate-200/90 shadow-soft-xl relative">
        {/* Background Blob */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/40 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-200/40 blur-[100px] rounded-full" />
        
        <div className="p-10 lg:p-20 text-center space-y-16 relative">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
              Let's Build Something <br />
              <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className="text-slate-600 text-lg lg:text-xl font-normal leading-relaxed">
              Have a project in mind or want to collaborate? Reach out today to start the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                icon: <Mail className="text-blue-600" size={26} />, 
                label: "Email Me", 
                info: "abdulqayyumwaseemkhan@gmail.com", 
                href: "mailto:abdulqayyumwaseemkhan@gmail.com",
                btnText: "Send Email"
              },
              { 
                icon: <MessageCircle className="text-emerald-600" size={26} />, 
                label: "WhatsApp", 
                info: "+92 321 3994490", 
                href: "https://wa.me/923213994490",
                btnText: "Start Chat"
              },
              { 
                icon: <Linkedin className="text-blue-600" size={26} />, 
                label: "LinkedIn", 
                info: "Abdul Qayyum Waseem Khan", 
                href: linkedinUrl,
                btnText: "View Profile"
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-200/90 shadow-soft hover:shadow-soft-2xl hover:border-emerald-300 transition-all flex flex-col items-center gap-5 group"
              >
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-3xl group-hover:bg-emerald-50 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.label}</p>
                  <p className="text-slate-800 font-semibold text-sm break-all">{item.info}</p>
                </div>
                <div className="pt-2 flex items-center gap-1.5 text-emerald-700 font-bold text-sm group-hover:translate-x-1 transition-transform">
                  {item.btnText} <ArrowRight size={15} />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-200 max-w-2xl mx-auto">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">CURRENT LOCATION</p>
            <div className="flex items-center justify-center gap-2 text-slate-800 font-semibold text-base">
              <MapPin className="text-emerald-600 shrink-0" size={18} /> 
              <span>Mustaqeem House, Kahna Nau Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
