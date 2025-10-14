import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    desc: "Built with React and Tailwind",
    tech: ["React", "Tailwind"],
    url: "#",
  },
  {
    id: 2,
    title: "Project Two",
    desc: "A full-stack app",
    tech: ["Node", "MongoDB"],
    url: "#",
  },
  {
    id: 3,
    title: "Project Three",
    desc: "UI/UX demo",
    tech: ["HTML", "CSS"],
    url: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h3 className="text-2xl font-semibold">Selected Projects</h3>
      <p className="mt-2 text-sm text-slate-600">Some of my recent works.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-white p-4 rounded-xl border hover:shadow-md transition-shadow"
          >
            <div className="h-36 rounded-md bg-slate-100 flex items-center justify-center">
              <span className="text-slate-400">Preview</span>
            </div>
            <h4 className="mt-4 font-semibold">{p.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 border rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
