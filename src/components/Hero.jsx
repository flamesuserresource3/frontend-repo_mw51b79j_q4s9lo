import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail, Linkedin, Dribbble } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient tint that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 md:pt-36">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          Available for freelance projects
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          UI/UX Designer crafting
          <br />
          delightful, accessible products
        </h1>
        <p className="max-w-xl text-base text-white/80 md:text-lg">
          I design interfaces that balance aesthetics and usability. From early research and wireframes to high-fidelity prototypes and design systems.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-white/10 transition hover:shadow-xl hover:shadow-white/20"
          >
            View selected work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/90 transition hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/90 transition hover:bg-white/20"
              aria-label="Dribbble"
            >
              <Dribbble className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
