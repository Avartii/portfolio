import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Copy, 
  Check, 
  Sparkles,
  Users,
  Award,
  Cloud,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { playKeyClick, playSuccessSound } from '../utils/soundEffects';

export const Hero = ({ profile, onOpenTerminal }) => {
  const [copied, setCopied] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "Full-Stack Web Developer",
    "Graduate Engineer Trainee @ Polycab",
    "Wikimedia Open-Source Contributor",
    "FlutterFlow Dev Group Tech Lead",
    "Google Cloud Arcade Facilitator"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [titles.length]);

  const handleCopyEmail = () => {
    playSuccessSound();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Greeting, Typist, Bio & CTAs */}
        <div className="hero-content">
          {/* Terminal Command Banner */}
          <div className="hero-cmd-pill font-mono">
            <span className="cmd-prompt">&gt;</span>
            <span className="cmd-keyword">const</span>
            <span className="cmd-var">engineer</span>
            <span className="cmd-op">=</span>
            <span className="cmd-string">"{profile.name}"</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>

          <div className="hero-dynamic-role font-mono">
            <span className="role-prefix">// Specializing in:</span>
            <div className="role-slider">
              <span className="active-role text-gradient-alt">{titles[titleIndex]}</span>
              <span className="cursor-blink"></span>
            </div>
          </div>

          <p className="hero-bio">
            {profile.bio}
          </p>

          {/* Social Icons & Email Quick Copy */}
          <div className="hero-social-row">
            <a 
              href={profile.links.github} 
              target="_blank" 
              rel="noreferrer" 
              className="social-pill-btn" 
              onClick={() => playKeyClick()}
              title="GitHub Profile"
            >
              <Github size={17} />
              <span className="font-mono">GitHub</span>
            </a>

            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="social-pill-btn" 
              onClick={() => playKeyClick()}
              title="LinkedIn Profile"
            >
              <Linkedin size={17} />
              <span className="font-mono">LinkedIn</span>
            </a>

            <button 
              className="copy-email-btn font-mono"
              onClick={handleCopyEmail}
              title="Click to copy email address"
            >
              {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
              <span>{copied ? "Copied to clipboard!" : profile.email}</span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a 
              href="#projects" 
              className="btn btn-primary hero-btn font-mono"
              onClick={() => playKeyClick()}
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>

            <button 
              className="btn btn-secondary hero-btn font-mono"
              onClick={() => {
                playSuccessSound();
                onOpenTerminal();
              }}
            >
              <Terminal size={16} />
              <span>Launch Terminal CLI</span>
              <span className="kbd">Ctrl+K</span>
            </button>
          </div>
        </div>

        {/* Right Column: High-Tech Avatar & IDE Code Card */}
        <div className="hero-visual">
          <div className="avatar-wrapper glass-panel">
            <div className="avatar-frame">
              <img 
                src="/avatar.jpg" 
                alt="Avarti Rastogi - Full-Stack Developer" 
                className="avatar-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="avatar-fallback" style={{ display: 'none' }}>
                <span className="font-mono font-bold text-2xl">&lt;AR /&gt;</span>
              </div>
              <div className="avatar-glow-ring"></div>
            </div>

            {/* Floating Live Spec Card */}
            <div className="code-spec-card font-mono">
              <div className="spec-card-header">
                <span className="spec-dot red"></span>
                <span className="spec-dot yellow"></span>
                <span className="spec-dot green"></span>
                <span className="spec-filename">EngineerSpec.ts</span>
              </div>
              <div className="spec-card-code">
                <div><span className="syntax-kw">interface</span> <span className="syntax-type">DeveloperProfile</span> {'{'}</div>
                <div className="code-indent"><span className="syntax-prop">name</span>: <span className="syntax-val">"{profile.name}"</span>;</div>
                <div className="code-indent"><span className="syntax-prop">currentOrg</span>: <span className="syntax-val">"Polycab India Ltd."</span>;</div>
                <div className="code-indent"><span className="syntax-prop">openSource</span>: <span className="syntax-val">"Wikimedia Contributor"</span>;</div>
                <div className="code-indent"><span className="syntax-prop">community</span>: <span className="syntax-val">"FlutterFlow Tech Lead"</span>;</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* High-Impact Stat Badges Bar */}
      <div className="container hero-stats-container">
        <div className="hero-stats-grid">
          {profile.stats.map((stat) => (
            <div key={stat.id} className="stat-card glass-panel">
              <div className="stat-value font-mono text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-subtext font-mono">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
