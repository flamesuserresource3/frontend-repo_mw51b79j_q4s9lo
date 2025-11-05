import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-white/80">
            I’m a UI/UX designer focused on creating intuitive experiences for web and mobile. I enjoy solving complex problems with simple, human-centered solutions. My process blends research, rapid prototyping, and a keen eye for visual systems.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="grid grid-cols-2 gap-4 text-sm text-white/80">
              <li className="rounded-xl bg-white/5 p-4">
                <p className="font-medium text-white">Expertise</p>
                <p>User Research, Wireframing, Prototyping</p>
              </li>
              <li className="rounded-xl bg-white/5 p-4">
                <p className="font-medium text-white">Tools</p>
                <p>Figma, Framer, Notion, Spline</p>
              </li>
              <li className="rounded-xl bg-white/5 p-4">
                <p className="font-medium text-white">Focus</p>
                <p>Design Systems, Accessibility</p>
              </li>
              <li className="rounded-xl bg-white/5 p-4">
                <p className="font-medium text-white">Approach</p>
                <p>Lean, Collaborative, Iterative</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
