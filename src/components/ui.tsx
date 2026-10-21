import type { ReactNode } from "react";
import { motion } from "motion/react";
import { brandIcons } from "../lib/brands.ts";

const ease = [0.16, 1, 0.3, 1] as const;

/** Fades content up once it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-4xl leading-[1.05] text-fg md:text-5xl ${className}`}>{children}</h2>
  );
}

/** Official brand glyph when one exists, nothing otherwise. */
export function BrandIcon({ name, className = "size-4" }: { name: string; className?: string }) {
  const icon = brandIcons[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d={icon.path} />
    </svg>
  );
}

export function ToolChip({ name }: { name: string }) {
  return (
    <li className="inline-flex items-center gap-2 border border-line px-2.5 py-1 font-mono text-[12px] text-fg/85">
      <BrandIcon name={name} className="size-3.5 text-gold" />
      {name}
    </li>
  );
}
