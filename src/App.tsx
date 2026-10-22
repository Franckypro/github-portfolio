import { MotionConfig } from "motion/react";
import Sidebar from "./components/Sidebar.tsx";
import Hero from "./components/Hero.tsx";
import Impact from "./components/Impact.tsx";
import Pipeline from "./components/Pipeline.tsx";
import Projects from "./components/Projects.tsx";
import GitHubRepos from "./components/GitHubRepos.tsx";
import Experience from "./components/Experience.tsx";
import Skills from "./components/Skills.tsx";
import Education from "./components/Education.tsx";
import Contact from "./components/Contact.tsx";

export default function App() {
  return (
    // reducedMotion="user" turns transform animations off for visitors who ask for less motion
    <MotionConfig reducedMotion="user">
      <a
        href="#accueil"
        className="sr-only z-50 bg-gold px-4 py-2 font-medium text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Aller au contenu
      </a>
      <Sidebar />
      <main className="lg:pl-[300px]">
        <Hero />
        <Impact />
        <Pipeline />
        <Projects />
        <GitHubRepos />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </MotionConfig>
  );
}
