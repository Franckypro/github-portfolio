import patchCables from "../assets/img/patch-cables.webp";
import chessKnights from "../assets/img/chess-knights.webp";
import earthNetwork from "../assets/img/earth-network.webp";
import { skillGroups } from "../data/profile.ts";
import { marqueeTools } from "../lib/brands.ts";
import { BrandIcon, Reveal, SectionTitle, ToolChip } from "./ui.tsx";

// Bento placement on large screens: 9 groups, 9 cells, no gaps (2 big tiles, a row of 4, then 2 + 1 + 1)
const layout: Record<string, { cell: string; image?: string; tint?: boolean }> = {
  integration: { cell: "lg:col-span-2 lg:row-span-2", image: patchCables },
  pilotage: { cell: "lg:col-span-2 lg:row-span-2", image: chessKnights },
  langages: { cell: "" },
  bdd: { cell: "" },
  orchestration: { cell: "", tint: true },
  automatisation: { cell: "" },
  cloud: { cell: "lg:col-span-2", image: earthNetwork },
  securite: { cell: "" },
  ia: { cell: "" },
};

function Marquee() {
  const items = [...marqueeTools, ...marqueeTools];
  return (
    <div className="relative mt-14 overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul className="animate-marquee flex w-max items-center gap-14" aria-label="Outils utilisés">
        {items.map((tool, index) => (
          <li
            key={`${tool}-${index}`}
            aria-hidden={index >= marqueeTools.length}
            className="flex items-center gap-3 text-fg/55 transition-colors duration-300 hover:text-gold"
          >
            <BrandIcon name={tool} className="size-6" />
            <span className="font-mono text-[13px] whitespace-nowrap">{tool}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="competences" className="border-t border-line bg-base pt-24 lg:pt-28">
      <div className="px-6 md:px-12 lg:px-16 xl:px-20">
        <Reveal className="max-w-3xl">
          <SectionTitle>Compétences</SectionTitle>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
            Les outils et les méthodes que j'utilise, du message Kafka jusqu'à la mise en production d'un projet IA.
          </p>
        </Reveal>
      </div>

      <Marquee />

      <div className="mt-14 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(220px,auto)]">
        {skillGroups.map((group, index) => {
          const { cell, image, tint } = layout[group.key];
          return (
            <Reveal
              key={group.key}
              delay={(index % 4) * 0.05}
              className={`relative flex flex-col overflow-hidden p-8 md:p-10 ${cell} ${tint ? "bg-[#1c1a12]" : "bg-base"} ${
                image ? "min-h-[300px] justify-end" : ""
              }`}
            >
              {image && (
                <>
                  <img src={image} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 size-full object-cover opacity-45" />
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-base/80 to-base/10" aria-hidden="true" />
                </>
              )}
              <div className="relative">
                <h3 className={`font-display leading-tight text-fg ${image ? "text-3xl md:text-4xl" : "text-2xl"}`}>{group.title}</h3>
                {"text" in group && group.text && <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed text-muted">{group.text}</p>}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <ToolChip key={tool} name={tool} />
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
