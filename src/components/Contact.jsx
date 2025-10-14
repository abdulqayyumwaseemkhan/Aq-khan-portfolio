import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-12 grid md:grid-cols-2 gap-6 items-start"
    >
      <div className="bg-white p-6 rounded-2xl border">
        <h3 className="text-2xl font-semibold">Get in touch</h3>
        <form className="mt-4 grid gap-3">
          <input
            className="border rounded-md px-3 py-2"
            placeholder="Your name"
          />
          <input className="border rounded-md px-3 py-2" placeholder="Email" />
          <textarea
            className="border rounded-md px-3 py-2"
            rows="4"
            placeholder="Your message"
          ></textarea>
          <button className="mt-2 inline-block px-4 py-2 bg-sky-600 text-white rounded-md">
            Send
          </button>
        </form>
      </div>

      <aside className="bg-white p-6 rounded-2xl border">
        <h4 className="font-medium">Quick info</h4>
        <ul className="mt-3 text-sm text-slate-600 space-y-2">
          <li>
            <strong>Location:</strong> Lahore, Pakistan
          </li>
          <li>
            <strong>Availability:</strong> Open to work
          </li>
          <li>
            <strong>Languages:</strong> English, Urdu
          </li>
        </ul>
      </aside>
    </section>
  );
}
