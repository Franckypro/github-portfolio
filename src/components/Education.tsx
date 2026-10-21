import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { certifications, degrees, languages } from "../data/profile.ts";
import { Reveal, SectionTitle } from "./ui.tsx";

export default function Education() {
  return (
    <section id="formation" className="border-t border-line bg-ink px-6 py-24 md:px-12 lg:px-16 lg:py-28 xl:px-20">
      <Reveal>
        <SectionTitle>Formation</SectionTitle>
      </Reveal>

      <div className="mt-14 grid gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20">
        <ol className="space-y-10">
          {degrees.map((degree, index) => (
            <li key={degree.title}>
              <Reveal delay={index * 0.06} className="grid gap-2 md:grid-cols-[140px_1fr] md:gap-8">
                <p className="font-mono text-[13px] text-gold md:pt-2">{degree.period}</p>
                <div>
                  <h3 className="font-display text-2xl leading-snug text-fg md:text-[1.75rem]">{degree.title}</h3>
                  <p className="mt-1 text-[15px] text-muted">{degree.school}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1} className="space-y-12">
          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.14em] text-fg/85 uppercase">Certifications</h3>
            <ul className="mt-5 border-t border-line">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${cert.name}, ${cert.issuer} : voir le certificat`}
                    className="group flex items-center justify-between gap-4 border-b border-line py-3.5 transition-colors duration-300 hover:border-gold/60"
                  >
                    <span>
                      <span className="block text-[15px] text-fg transition-colors duration-300 group-hover:text-gold">
                        {cert.name}
                      </span>
                      <span className="mt-0.5 block font-mono text-[12px] text-muted">
                        {cert.issuer}, {cert.date}
                      </span>
                    </span>
                    <ArrowUpRightIcon
                      size={18}
                      className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.14em] text-fg/85 uppercase">Langues</h3>
            <dl className="mt-5 grid grid-cols-2 gap-6">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <dt className="font-display text-2xl text-fg">{lang.name}</dt>
                  <dd className="mt-1 text-[14px] text-muted">{lang.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
