import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { toggleSound, isSoundEnabled } from './utils/soundEffects';
import './App.css';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [theme, setTheme] = useState('cyan');
  const [soundActive, setSoundActive] = useState(false);

  // Apply theme data attribute to root HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Global keyboard shortcut: Ctrl+K / Cmd+K or Backquote
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundActive(newState);
  };

  return (
    <div className="portfolio-app-root">
      {/* Top IDE Navbar */}
      <Navbar
        profile={portfolioData.profile}
        onOpenTerminal={() => setTerminalOpen(true)}
        currentTheme={theme}
        onChangeTheme={(newTheme) => setTheme(newTheme)}
        soundEnabled={soundActive}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          profile={portfolioData.profile}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* Skills Radar & Matrix */}
        <SkillsSection skills={portfolioData.skills} />

        {/* Projects & Deployments */}
        <ProjectsSection projects={portfolioData.projects} />

        {/* Work Experience & Community Leadership */}
        <ExperienceSection
          experience={portfolioData.experience}
          communityLeadership={portfolioData.communityLeadership}
        />

        {/* Awards, Recognitions & Education */}
        <AchievementsSection
          achievements={portfolioData.achievements}
          education={portfolioData.education}
        />

        {/* Direct Contact Dispatch Terminal */}
        <ContactSection profile={portfolioData.profile} />
      </main>

      {/* VSCode Bottom Status Bar Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive Command Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        portfolioData={portfolioData}
        onChangeTheme={(newTheme) => setTheme(newTheme)}
      />
    </div>
  );
}
