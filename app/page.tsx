'use client';

import { ContactFooter } from "@/components/ContactFooter";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Hero } from "@/components/Hero";
import { ProjectTabs } from "@/components/ProjectTabs";
import { ResearchCredentials } from "@/components/ResearchCredentials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectTabs />
      <ExperienceTimeline />
      <ExpertiseSection />
      <ResearchCredentials />
      <ContactFooter />
    </main>
  );
}
