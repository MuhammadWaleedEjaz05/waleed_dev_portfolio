import { useState, useEffect, useCallback } from "react";
import type { Section } from "@/shared/types";
import { SECTION_IDS } from "@/shared/constants/sectionIds";
import { ScrollProgress } from "@/presentation/layout/ScrollProgress";
import { StickyNav } from "@/presentation/layout/StickyNav";
import { Footer } from "@/presentation/layout/Footer";
import { HeroSection } from "@/presentation/features/hero";
import { AboutSection } from "@/presentation/features/about";
import { SkillsSection } from "@/presentation/features/skills";
import { ExperienceSection } from "@/presentation/features/experience";
import { ProjectsSection } from "@/presentation/features/projects";
import { EducationSection } from "@/presentation/features/education";
import { ContactSection } from "@/presentation/features/contact";
import { InteractiveTerminal } from "@/presentation/features/terminal";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("hero");

  const navigate = useCallback((section: Section) => {
    setActiveSection(section);
    if (section === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = SECTION_IDS[section];
    if (id) {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as Section;
            if (id) setActiveSection(id as Section);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const ids = Object.values(SECTION_IDS).filter(Boolean);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-['JetBrains_Mono',monospace]"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace" }}
    >
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        * { scrollbar-width: thin; scrollbar-color: rgba(0,255,65,0.15) transparent; }
        *::-webkit-scrollbar { width: 4px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: rgba(0,255,65,0.2); border-radius: 2px; }
        section { animation: fadeIn 0.6s ease both; }
      `}</style>

      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-[0.02]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.3) 2px, rgba(0,255,65,0.3) 4px)",
        }}
      />

      <ScrollProgress />
      <StickyNav active={activeSection} onNavigate={navigate} />

      <main>
        <HeroSection onNavigate={navigate} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <InteractiveTerminal onNavigate={navigate} />
      </main>

      <Footer />
    </div>
  );
}
