import { ArrowUpRightIcon, EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import laptopGlow from "../assets/img/laptop-glow.webp";
import { profile } from "../data/profile.ts";
import { Reveal } from "./ui.tsx";

const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Poste Data Engineer ou Chef de projet Data & IA")}`;

export default function Contact() {
  const links = [
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinLogoIcon, external: true },
    { href: profile.github, label: "GitHub", Icon: GithubLogoIcon, external: true },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <img src={laptopGlow} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 size-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-base via-base/85 to-base/30" aria-hidden="true" />

      <div className="relative flex min-h-[80dvh] flex-col justify-center px-6 py-24 md:px-12 lg:px-16 xl:px-20">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[12px] tracking-[0.2em] text-gold uppercase">Contact</p>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] text-fg md:text-7xl">Vous recrutez en data ou en IA ?</h2>
          <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-fg/85">
            Data Engineer ou Chef de projet Data & IA : je cherche un CDI partout en France, à partir de novembre
            2026. Écrivez‑moi pour en parler.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href={mailto}
              className="inline-flex items-center gap-3 bg-gold px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-ink transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <EnvelopeSimpleIcon size={18} weight="bold" />
              Me contacter
            </a>
            <a href={mailto} className="font-mono text-[15px] text-fg/85 underline decoration-line underline-offset-4 hover:text-gold">
              {profile.email}
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-3">
            {links.map(({ href, label, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-2.5 border border-fg/20 bg-ink/40 px-4 py-2.5 text-[14px] text-fg backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon size={18} />
                  {label}
                  {external && <ArrowUpRightIcon size={14} className="opacity-60" />}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="relative mt-20 text-[12px] text-muted lg:hidden">
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
        </p>
      </div>
    </section>
  );
}
