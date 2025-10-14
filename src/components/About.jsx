import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mt-16 bg-white p-6 rounded-2xl shadow-sm border"
    >
      <h3 className="text-2xl font-semibold">About me</h3>
      <p className="mt-3 text-slate-600">
        I am a frontend developer passionate about building modern and fast web
        apps.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium">Education</h4>
          <p className="text-sm text-slate-600 mt-2">
            Bachelor's in Computer Science — Lahore Leads University
          </p>
          <p className="text-sm text-slate-600 mt-2">
            I.C.S — Govt. Khawaja Raffique Shaheed College Walton Road Lahore
          </p>
          <p className="text-sm text-slate-600 mt-2">
            Matric — Govt. Model High School Kahna Nau Lahore
          </p>
          <p className="text-sm text-slate-600 mt-2">
            Diploma in Computer Science — Mohammadan Computer College
          </p>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="text-sm text-slate-600 mt-2">
            Email:{" "}
            <a
              href="mailto:abdulqayyumwaseemkhan@gmail.com"
              className="text-sky-600"
            >
              abdulqayyumwaseemkhan@gmail.com
            </a>
          </p>
          <p className="text-sm text-slate-600 mt-2">
            WhatsApp:{" "}
            <a href="+923213994490" className="text-sky-600">
              +92 321 3994490
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
