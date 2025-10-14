import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Abdul Qayyum — Built with React + Tailwind
    </footer>
  );
}
