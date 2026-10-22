import { motion } from "motion/react";
import { ArrowDownIcon } from "@phosphor-icons/react";
import portrait from "../assets/img/portrait.webp";
import { profile } from "../data/profile.ts";

const ease = [0.16, 1, 0.3, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  return (
    <section id="accueil" className="grid min-h-[100dvh] pt-16 lg:grid-cols-[1.12fr_1fr] lg:pt-0">
      <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-14 xl:px-16">
        <motion.p {...rise(0.1)} className="font-mono text-[12px] tracking-[0.2em] text-gold uppercase">
          {profile.availability} · partout en France
        </motion.p>

        <motion.h1
          {...rise(0.2)}
          className="mt-6 font-display text-[3.4rem] leading-[0.95] text-fg sm:text-7xl xl:text-[5.6rem]"
        >
          {profile.firstName}
          <br />
          {profile.lastName}
        </motion.h1>

        <motion.p {...rise(0.32)} className="mt-8 max-w-[36ch] text-lg leading-relaxed text-muted md:text-xl">
          <span className="font-medium text-fg">{profile.role}.</span> {profile.tagline}
        </motion.p>

        <motion.div {...rise(0.44)} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projets"
            className="group inline-flex items-center gap-3 bg-gold px-6 py-3.5 text-[15px] font-semibold whitespace-nowrap text-ink transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Voir mes projets
            <ArrowDownIcon size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Portrait panel: studio-style charcoal backdrop with a soft light behind the head */}
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.2, delay: 0.15, ease }}
        className="relative min-h-[70dvh] overflow-hidden bg-[radial-gradient(ellipse_75%_75%_at_50%_38%,#3a3a3f_0%,#242427_50%,#161617_100%)] lg:min-h-0"
      >
        <motion.img
          src={portrait}
          alt={`Portrait de ${profile.firstName} ${profile.lastName}`}
          width={1054}
          height={1100}
          fetchPriority="high"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
          className="absolute bottom-0 left-1/2 h-[88%] w-auto max-w-none -translate-x-1/2 object-contain"
        />
      </motion.div>
    </section>
  );
}
