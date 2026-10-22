import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { experiences } from "../data/profile.ts";
import { Reveal, SectionTitle } from "./ui.tsx";

export default function Experience() {
  return (
    <section id="parcours" className="border-t border-line bg-ink px-6 py-24 md:px-12 lg:px-16 lg:py-28 xl:px-20">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-20">
        {/* Title column stays pinned while the timeline scrolls */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <SectionTitle>Parcours</SectionTitle>
            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-muted">
              Cinq ans entre développement back‑end, data engineering et pilotage de projets data et IA.
            </p>
          </Reveal>
        </div>

        <ol className="relative border-l border-line">
          {experiences.map((item, index) => (
            <li key={item.company} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
              <span className="absolute top-2 -left-px h-px w-5 bg-gold md:w-8" aria-hidden="true" />
              <Reveal delay={index * 0.05}>
                <p className="font-mono text-[12px] text-muted">
                  {item.period}
                  <span className="mx-2 text-line">/</span>
                  {item.meta}
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-fg">{item.company}</h3>
                <p className="mt-1 text-[17px] font-medium text-fg/90">{item.role}</p>
                <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-muted">{item.text}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <p className="inline-block bg-gold/10 px-3 py-1.5 text-[14px] font-medium text-gold">{item.highlight}</p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border-b border-gold/60 pb-0.5 text-[14px] font-medium text-fg/90 transition-colors duration-300 hover:text-gold"
                    >
                      <GithubLogoIcon size={15} />
                      {item.link.label}
                      <ArrowUpRightIcon size={14} />
                    </a>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
