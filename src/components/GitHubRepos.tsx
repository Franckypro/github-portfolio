import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { profile, repoGroups } from "../data/profile.ts";
import { Reveal, SectionTitle } from "./ui.tsx";

const repoCount = repoGroups.reduce((sum, group) => sum + group.repos.length, 0);

export default function GitHubRepos() {
  // Data engineering and BI side by side with the longer machine-learning list
  const [dataGroup, mlGroup, biGroup] = repoGroups;
  const columns = [[dataGroup, biGroup], [mlGroup]];

  return (
    <section id="github" className="border-t border-line bg-base px-6 py-24 md:px-12 lg:px-16 lg:py-28 xl:px-20">
      <Reveal className="max-w-3xl">
        <SectionTitle>Le code est sur GitHub</SectionTitle>
        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
          {repoCount} dépôts publics : projets de Mastère, de formation et projets personnels, chacun avec son code
          source.
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 border border-fg/25 px-5 py-3 text-[15px] font-medium whitespace-nowrap text-fg transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          <GithubLogoIcon size={18} />
          Voir mon profil GitHub
        </a>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
        {columns.map((groups, columnIndex) => (
          <div key={columnIndex} className="space-y-14">
            {groups.map((group) => (
              <Reveal key={group.title}>
                <h3 className="text-[13px] font-semibold tracking-[0.14em] text-fg/85 uppercase">{group.title}</h3>
                <ul className="mt-5 border-t border-line">
                  {group.repos.map((repo) => (
                    <li key={repo.name}>
                      <a
                        href={`${profile.github}/${repo.name}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${repo.title} : voir le dépôt GitHub`}
                        className="group flex items-start justify-between gap-5 border-b border-line py-4 transition-colors duration-300 hover:border-gold/60"
                      >
                        <span>
                          <span className="block text-[16px] font-medium text-fg transition-colors duration-300 group-hover:text-gold">
                            {repo.title}
                          </span>
                          <span className="mt-1 block text-[14px] leading-relaxed text-muted">{repo.text}</span>
                          <span className="mt-1.5 block font-mono text-[12px] text-fg/60">{repo.tech}</span>
                        </span>
                        <ArrowUpRightIcon
                          size={18}
                          className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
