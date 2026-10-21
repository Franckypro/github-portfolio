import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Icon } from "@phosphor-icons/react";
import {
  ArrowsClockwiseIcon,
  CalendarCheckIcon,
  ChartLineUpIcon,
  DatabaseIcon,
  FunnelSimpleIcon,
  ListChecksIcon,
  NotebookIcon,
  PaperPlaneTiltIcon,
  PlugsConnectedIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  TargetIcon,
} from "@phosphor-icons/react";
import circuitBoard from "../assets/img/circuit-board.webp";
import { tracks, type Track } from "../data/profile.ts";
import { Reveal, SectionTitle, ToolChip } from "./ui.tsx";

const stageIcons: Record<string, Icon> = {
  sources: DatabaseIcon,
  ingestion: PlugsConnectedIcon,
  transformation: FunnelSimpleIcon,
  orchestration: CalendarCheckIcon,
  exposition: PaperPlaneTiltIcon,
  cadrage: TargetIcon,
  specifications: NotebookIcon,
  sprints: ArrowsClockwiseIcon,
  recette: ListChecksIcon,
  production: RocketLaunchIcon,
};

const noteIcons: Record<Track["key"], Icon> = { data: ShieldCheckIcon, projet: ChartLineUpIcon };

const ease = [0.16, 1, 0.3, 1] as const;

/** One role as a chain of five steps, with a rail and travelling pulses. */
function Chain({ track }: { track: Track }) {
  const NoteIcon = noteIcons[track.key];
  return (
    <motion.div
      key={track.key}
      id={`track-${track.key}`}
      role="tabpanel"
      aria-labelledby={`tab-${track.key}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease }}
    >
      <ol className="relative mt-14 grid gap-10 pl-10 lg:grid-cols-5 lg:gap-6 lg:pt-16 lg:pl-0">
        <div
          className="absolute top-0 bottom-0 left-[15px] w-px overflow-hidden bg-line lg:top-[23px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full"
          aria-hidden="true"
        >
          <span className="animate-pulse-y absolute top-0 left-0 h-[10%] w-px bg-gradient-to-b from-transparent via-gold to-transparent lg:hidden" />
          <span className="animate-pulse-x absolute top-0 left-0 hidden h-px w-[10%] bg-gradient-to-r from-transparent via-gold to-transparent lg:block" />
          <span className="animate-pulse-x absolute top-0 left-0 hidden h-px w-[10%] bg-gradient-to-r from-transparent via-gold to-transparent [animation-delay:1.8s] lg:block" />
        </div>

        {track.stages.map((stage) => {
          const StageIcon = stageIcons[stage.key];
          return (
            <li key={stage.key} className="relative">
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
            </li>
          );
        })}
      </ol>

      <div className="mt-14 flex items-start gap-4 border border-line bg-raised/60 p-6 md:items-center">
        <NoteIcon size={28} className="shrink-0 text-gold" />
        <p className="text-[15px] leading-relaxed text-fg/90">{track.note}</p>
      </div>
    </motion.div>
  );
}

export default function Pipeline() {
  const [activeKey, setActiveKey] = useState<Track["key"]>("data");
  const active = tracks.find((track) => track.key === activeKey) ?? tracks[0];

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
          <SectionTitle>Construire et piloter</SectionTitle>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
            Je travaille des deux côtés : je construis les flux de données et je pilote les projets data et IA, du
            besoin jusqu'à la mise en production.
          </p>
        </Reveal>

        {/* Role switch: the active pill slides between the two tabs */}
        <Reveal delay={0.1}>
          <div role="tablist" aria-label="Mes deux métiers" className="mt-10 inline-flex border border-line bg-ink p-1">
            {tracks.map((track) => {
              const selected = track.key === activeKey;
              return (
                <button
                  key={track.key}
                  id={`tab-${track.key}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`track-${track.key}`}
                  onClick={() => setActiveKey(track.key)}
                  className={`relative px-5 py-2.5 text-[14px] font-semibold whitespace-nowrap transition-colors duration-300 md:px-6 ${
                    selected ? "text-ink" : "text-fg/80 hover:text-gold"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="track-pill"
                      className="absolute inset-0 bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="relative">{track.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait" initial={false}>
          <Chain key={active.key} track={active} />
        </AnimatePresence>
      </div>
    </section>
  );
}
