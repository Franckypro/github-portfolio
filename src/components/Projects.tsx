import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { projectCategories, projects, type Project, type ProjectCategory } from "../data/profile.ts";
import { Reveal, SectionTitle } from "./ui.tsx";

/** One project panel: full-height image half, text half, sides alternating. */
function ProjectPanel({ project, flip }: { project: Project; flip: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // slow parallax gives the photo depth while the text stays put
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <article ref={ref} aria-labelledby={`${project.id}-title`} className="grid border-t border-line lg:min-h-[88dvh] lg:grid-cols-2">
      <div className={`group relative min-h-[52vh] overflow-hidden lg:min-h-0 ${flip ? "lg:order-last" : ""}`}>
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          style={{ y }}
          // slight dimming keeps bright photos (calendar, warehouse) in tune with the dark page
          className="absolute inset-0 h-[116%] w-full -translate-y-[8%] scale-100 object-cover brightness-[0.82] transition-transform duration-[1.6s] ease-out-expo group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-base/20" aria-hidden="true" />
      </div>

      <div className="flex flex-col justify-center px-6 py-14 md:px-12 lg:px-16 xl:px-20">
        <Reveal>
          <p className="font-mono text-[12px] text-gold">{project.context}</p>
          <p className="mt-2 text-[13px] text-muted">{project.categories.join(" et ")}</p>
          <h3 id={`${project.id}-title`} className="mt-4 font-display text-3xl leading-[1.08] text-fg md:text-[2.6rem]">
            {project.title}
          </h3>
          <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-fg/85">{project.summary}</p>

          <ul className="mt-6 max-w-[60ch] space-y-3">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span className="mt-[9px] size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          {project.result && (
            <p className="mt-6 max-w-[56ch] border-l-2 border-gold pl-4 text-[15px] leading-relaxed text-fg">
              {project.result}
            </p>
          )}

          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag} className="border border-line px-2.5 py-1 font-mono text-[12px] text-fg/80">
                {tag}
              </li>
            ))}
          </ul>

          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer"
              className="group/link mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-[15px] font-medium text-gold"
            >
              {project.link.label}
              <ArrowUpRightIcon size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </Reveal>
      </div>
    </article>
  );
}

type Filter = "Tous" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const visible = filter === "Tous" ? projects : projects.filter((project) => project.categories.includes(filter));
  const options: { value: Filter; count: number }[] = [
    { value: "Tous", count: projects.length },
    ...projectCategories.map((category) => ({
      value: category,
      count: projects.filter((project) => project.categories.includes(category)).length,
    })),
  ];

  return (
    <section id="projets" className="border-t border-line bg-base">
      <div className="px-6 pt-20 pb-14 md:px-12 lg:px-16 lg:pt-24 xl:px-20">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[12px] tracking-[0.2em] text-gold uppercase">Réalisations</p>
          <SectionTitle className="mt-5">Ce que j'ai livré</SectionTitle>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
            Missions en entreprise et projets de Mastère, en data engineering comme en pilotage, avec les chiffres
            réels.
          </p>
        </Reveal>

        {/* Lets a recruiter jump to the side of the profile that matters for the role */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrer les réalisations">
            {options.map(({ value, count }) => {
              const selected = value === filter;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(value)}
                  className={`inline-flex items-center gap-2 border px-4 py-2 text-[14px] font-medium whitespace-nowrap transition-colors duration-300 ${
                    selected ? "border-gold bg-gold text-ink" : "border-line text-fg/85 hover:border-gold hover:text-gold"
                  }`}
                >
                  {value}
                  <span className={`font-mono text-[12px] ${selected ? "text-ink/70" : "text-muted"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {visible.map((project, index) => (
            <ProjectPanel key={project.id} project={project} flip={index % 2 === 1} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
