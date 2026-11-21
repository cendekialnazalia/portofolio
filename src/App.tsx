import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { JourneySection } from './components/JourneySection';
import { PartnersSection } from './components/PartnersSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialSection } from './components/TestimonialSection';
import { INQUIRY_TRACK_OPTIONS } from './data/portfolioData';

const TRACKED_SECTIONS = [
  'hello',
  'projects',
  'services',
  'skills',
  'achievements',
  'journey',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hello');
  const [selectedInquiryTrack, setSelectedInquiryTrack] = useState<string>(
    INQUIRY_TRACK_OPTIONS[0]
  );

  useEffect(() => {
    const elements = TRACKED_SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContactWithTrack = (track?: string) => {
    if (track) {
      setSelectedInquiryTrack(track);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
      <Header activeSection={activeSection} />

      <main className="w-full pt-20 relative flex-1">
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <ProjectsSection onEnquireTrack={(track) => scrollToContactWithTrack(track)} />
        <ServicesSection onEnquireTrack={(track) => scrollToContactWithTrack(track)} />
        <TestimonialSection />
        <SkillsSection />
        <AchievementsSection
          onCollaborateClick={() =>
            scrollToContactWithTrack('Keynote Speaking & MC Moderation')
          }
        />
        <JourneySection />
        <ContactSection
          selectedTrack={selectedInquiryTrack}
          onTrackChange={setSelectedInquiryTrack}
        />
      </main>

      <Footer />
    </div>
  );
}
