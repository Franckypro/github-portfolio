import type { Icon } from "@phosphor-icons/react";
import {
  CalendarCheckIcon,
  DatabaseIcon,
  FunnelSimpleIcon,
  PaperPlaneTiltIcon,
  PlugsConnectedIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import circuitBoard from "../assets/img/circuit-board.webp";
import { pipeline } from "../data/profile.ts";
import { Reveal, SectionTitle, ToolChip } from "./ui.tsx";

const stageIcons: Record<string, Icon> = {
  sources: DatabaseIcon,
  ingestion: PlugsConnectedIcon,
  transformation: FunnelSimpleIcon,
  orchestration: CalendarCheckIcon,
  exposition: PaperPlaneTiltIcon,
};

export default function Pipeline() {
  return (
    <section id="methode" className="relative overflow-hidden px-6 pt-24 pb-20 md:px-12 lg:px-16 lg:pt-28 lg:pb-24 xl:px-20">
      <img
        src={circuitBoard}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-[0.07] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
      />

      <div className="relative">
        <Reveal className="max-w-3xl">
          <SectionTitle>Du système source à l'application cible</SectionTitle>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
            Mon travail tient en une chaîne. Chaque maillon est testé, tracé et documenté, pour que la donnée arrive
            au bon endroit, au bon format.
          </p>
        </Reveal>

        {/* The chain: a rail with travelling pulses, horizontal on large screens, vertical on small ones */}
        <ol className="relative mt-16 grid gap-10 pl-10 lg:grid-cols-5 lg:gap-6 lg:pt-16 lg:pl-0">
          <div className="absolute top-0 bottom-0 left-[15px] w-px overflow-hidden bg-line lg:top-[23px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full" aria-hidden="true">
            <span className="animate-pulse-y absolute top-0 left-0 h-[10%] w-px bg-gradient-to-b from-transparent via-gold to-transparent lg:hidden" />
            <span className="animate-pulse-x absolute top-0 left-0 hidden h-px w-[10%] bg-gradient-to-r from-transparent via-gold to-transparent lg:block" />
            <span className="animate-pulse-x absolute top-0 left-0 hidden h-px w-[10%] bg-gradient-to-r from-transparent via-gold to-transparent [animation-delay:1.8s] lg:block" />
          </div>

          {pipeline.map((stage, index) => {
            const StageIcon = stageIcons[stage.key];
            return (
              <li key={stage.key} className="relative">
                <Reveal delay={index * 0.08}>
                  <span className="absolute top-0 -left-10 grid size-8 place-items-center border border-gold bg-base text-gold lg:static lg:size-12">
                    <StageIcon size={20} />
                  </span>
                  <h3 className="text-xl font-semibold text-fg lg:mt-6">{stage.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{stage.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {stage.tools.map((tool) => (
                      <ToolChip key={tool} name={tool} />
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-16 flex items-start gap-4 border border-line bg-raised/60 p-6 md:items-center">
          <ShieldCheckIcon size={28} className="shrink-0 text-gold" />
          <p className="text-[15px] leading-relaxed text-fg/90">
            Chaque échange est sécurisé : OAuth2 pour les API, secrets récupérés dans Vault, connexions TLS et
            certificats vérifiés dans les truststores Java.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
