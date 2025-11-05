import React from 'react';
import { Mail, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24 text-white">
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Let’s build something delightful</h2>
        <p className="mx-auto mb-8 max-w-2xl text-white/75">
          Have a project in mind or just want to say hi? I’d love to hear from you. I’m available for freelance and contract opportunities.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-white/10 transition hover:shadow-xl hover:shadow-white/20"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <Download className="h-4 w-4" /> Download resume
          </a>
        </div>
        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Your Name — UI/UX Designer</p>
      </div>
    </section>
  );
}
