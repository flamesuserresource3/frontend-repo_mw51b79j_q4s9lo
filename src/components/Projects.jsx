import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Mobile App',
    tag: 'Product Design',
    description:
      'End-to-end design for a mobile savings app with onboarding, budgeting, and analytics.',
    image:
      'https://images.unsplash.com/photo-1551281044-8b89e6f6f3df?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    tag: 'Design System',
    description:
      'Scalable component library and charts for a data-heavy analytics platform.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'E‑commerce Experience',
    tag: 'UX Research',
    description:
      'Checkout optimization through usability testing and iterative prototyping.',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected Work</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:scale-[1.01] hover:bg-white/10"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1 p-5">
                <span className="text-xs uppercase tracking-wider text-white/70">{p.tag}</span>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-white/70">{p.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-white/90">
                  View case study <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
