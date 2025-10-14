import React from "react";

const skills = ["JavaScript", "React", "Tailwind", "Node.js", "Git", "CSS"];

export default function Skills() {
  return (
    <section id="skills" className="mt-12 bg-white p-6 rounded-2xl border">
      <h3 className="text-2xl font-semibold">Skills</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="px-3 py-1 rounded-md border text-sm">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
