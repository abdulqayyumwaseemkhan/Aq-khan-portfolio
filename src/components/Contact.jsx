import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Contact() {
  const linkedinUrl = "https://www.linkedin.com/in/abdul-qayyum-waseem-khan-027663335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <section id="contact" className="py-24">
      <div className="glass-dark rounded-[3.5rem] overflow-hidden border-white/5 relative">
        {/* Background Blob */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
        
        <div className="p-12 lg:p-24 text-center space-y-16">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
              Let's Build Something <br />
              <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className="text-slate-400 text-xl lg:text-2xl font-light">
              Ready to bring your vision to life? Let's connect and discuss how we can create something impactful together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: <Mail className="text-blue-400" />, 
                label: "Email Me", 
                info: "abdulqayyumwaseemkhan@gmail.com", 
                href: "mailto:abdulqayyumwaseemkhan@gmail.com",
                btnText: "Send Email"
              },
              { 
                icon: <MessageCircle className="text-emerald-400" />, 
                label: "WhatsApp", 
                info: "+92 321 3994490", 
                href: "https://wa.me/923213994490",
                btnText: "Start Chat"
              },
              { 
                icon: <Linkedin className="text-blue-600" />, 
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
                whileHover={{ y: -10 }}
                className="glass-dark p-10 rounded-[2.5rem] border-white/5 hover:border-primary-500/30 transition-all flex flex-col items-center gap-6 group"
              >
                <div className="p-5 bg-white/5 rounded-3xl group-hover:bg-primary-500/10 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                  <p className="text-white font-medium text-sm break-all">{item.info}</p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-primary-400 font-bold text-sm">
                  {item.btnText} <ArrowRight size={16} />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="pt-12 border-t border-white/5 max-w-2xl mx-auto">
            <p className="text-slate-500 text-sm mb-8 font-medium">MY CURRENT LOCATION</p>
            <div className="flex items-center justify-center gap-3 text-white text-lg">
              <MapPin className="text-orange-500" /> 
              <span>Mustaqeem House, Kahna Nau Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
