import React from "react";
import profilePic from "../assets/profile.jpg"; // ✅ put your image in /src/assets/

export default function Hero() {
  return (
    <section id="hero" className="grid md:grid-cols-2 gap-8 items-center mt-7">
      {/* Left Side - Text */}
      <div>
        <p className="text-sm text-sky-600 font-medium">Hello, I am</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-2">
          Abdul Qayyum — Frontend Developer
        </h2>
        <p className="mt-4 text-slate-600 max-w-xl">
          I build responsive web applications and beautiful interfaces using
          modern tools like React, Vite, and Tailwind. I love crafting clean UI
          and improving user experiences.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="#projects"
            className="inline-block px-5 py-2 rounded-md bg-sky-600 text-white"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="inline-block px-5 py-2 rounded-md border"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-8 flex gap-4 text-slate-600">
          <div className="text-xs">Available for hire</div>
          <div className="border-l pl-4 text-xs">Based in Pakistan</div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="order-first md:order-last flex items-center justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-tr from-sky-200 to-indigo-200 flex items-center justify-center shadow-lg overflow-hidden">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
