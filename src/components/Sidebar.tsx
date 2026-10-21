import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import goldStrands from "../assets/img/gold-strands.webp";
import { navItems, profile } from "../data/profile.ts";
import { useActiveSection } from "../hooks/useActiveSection.ts";

const sectionIds = navItems.map((item) => item.id);

function Logo({ size = "lg" }: { size?: "lg" | "sm" }) {
  return (
    <a href="#accueil" className="block leading-none" aria-label={`${profile.firstName} ${profile.lastName}, retour en haut`}>
      <span
        className={`text-fill-image font-display ${size === "lg" ? "text-[3.6rem]" : "text-3xl"}`}
        // gold wash screened over the photo keeps the texture while staying readable
        style={{
          backgroundImage: `linear-gradient(rgb(243 198 35 / 0.6), rgb(243 198 35 / 0.6)), url(${goldStrands})`,
          backgroundBlendMode: "screen",
        }}
      >
        {profile.firstName}
      </span>
    </a>
  );
}

function SocialLinks() {
  const links = [
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinLogoIcon },
    { href: profile.github, label: "GitHub", Icon: GithubLogoIcon },
    { href: `mailto:${profile.email}`, label: "E-mail", Icon: EnvelopeSimpleIcon },
  ];
  return (
    <ul className="flex gap-2">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            className="grid size-10 place-items-center border border-line text-fg/80 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <Icon size={18} weight="regular" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  // clip instead of scale so the tick spacing never stretches
  const rulerClip = useTransform(progress, (value) => `inset(0 0 ${(1 - value) * 100}% 0)`);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-ink/90 px-5 backdrop-blur-md lg:hidden">
        <Logo size="sm" />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="sidebar"
          className="grid size-10 place-items-center border border-line text-fg"
        >
          <ListIcon size={20} />
        </button>
      </header>

      {/* Backdrop for the off-canvas menu */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-30 bg-ink/70 transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-40 flex w-[300px] flex-col bg-ink px-10 pt-12 pb-10 transition-transform duration-500 ease-out-expo lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
          className="absolute top-4 right-4 grid size-10 place-items-center text-fg lg:hidden"
        >
          <XIcon size={20} />
        </button>

        <Logo />
        <p className="mt-3 font-mono text-[12px] tracking-wide text-muted">
          {profile.lastName}, {profile.role}
        </p>

        <nav aria-label="Navigation principale" className="mt-14">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative inline-block pb-1 text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-fg/85 hover:text-gold"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gold transition-transform duration-500 ease-out-expo ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto space-y-6">
          <p className="text-[13px] leading-relaxed text-muted">
            {profile.availability}
            <br />
            {profile.mobility}
          </p>
          <SocialLinks />
          <p className="text-[11px] leading-relaxed text-muted/80">
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          </p>
        </div>

        {/* Gold ruler: faint ticks, filled as the visitor scrolls */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[5px] lg:block" aria-hidden="true">
          <div className="ruler-ticks absolute inset-0 opacity-25" />
          <motion.div className="ruler-ticks absolute inset-0" style={{ clipPath: rulerClip }} />
        </div>
      </aside>
    </>
  );
}
