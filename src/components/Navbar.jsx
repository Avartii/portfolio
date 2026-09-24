import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Download, 
  Menu, 
  X, 
  GitBranch, 
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';
import { playKeyClick, playSuccessSound } from '../utils/soundEffects';

export const Navbar = ({ 
  onOpenTerminal, 
  currentTheme, 
  onChangeTheme, 
  soundEnabled, 
  onToggleSound,
  profile 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Community', href: '#community' },
    { name: 'Awards', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    playKeyClick();
    setMobileMenuOpen(false);
  };

  const themes = [
    { id: 'cyan', label: 'Neon Cyan', color: '#00f2fe' },
    { id: 'violet', label: 'Electric Violet', color: '#b366ff' },
    { id: 'matrix', label: 'Matrix Emerald', color: '#05f187' },
    { id: 'amber', label: 'Radiant Amber', color: '#fbbf24' }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Left: IDE Breadcrumbs & Git Branch */}
        <div className="navbar-brand">
          <a href="#" className="brand-link" onClick={() => playKeyClick()}>
            <span className="brand-icon"><Code2 size={18} /></span>
            <span className="brand-text font-mono">
              <span className="brand-tilde">~/</span>avarti<span className="brand-ext">.dev</span>
            </span>
          </a>

          <div className="git-branch-badge font-mono" title="Active Branch">
            <GitBranch size={13} />
            <span>main*</span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link font-mono"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Controls & Interactive Buttons */}
        <div className="navbar-actions">
          {/* Terminal Trigger Button */}
          <button 
            className="terminal-trigger-btn font-mono"
            onClick={() => {
              playSuccessSound();
              onOpenTerminal();
            }}
            title="Open Developer Command Terminal (Ctrl + K)"
            aria-label="Open Terminal"
          >
            <Terminal size={15} />
            <span className="terminal-btn-text">Terminal</span>
            <span className="kbd">Ctrl+K</span>
          </button>

          {/* Theme Switcher Dropdown / Pills */}
          <div className="theme-selector-group">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`theme-dot ${currentTheme === t.id ? 'active' : ''}`}
                style={{ backgroundColor: t.color }}
                onClick={() => {
                  playKeyClick();
                  onChangeTheme(t.id);
                }}
                title={`Switch theme: ${t.label}`}
                aria-label={`Theme ${t.label}`}
              />
            ))}
          </div>

          {/* Sound Toggle Button */}
          <button 
            className={`sound-btn ${soundEnabled ? 'active' : ''}`}
            onClick={onToggleSound}
            title={soundEnabled ? "Mute interactive audio feedback" : "Enable tactile sound feedback"}
            aria-label="Sound Toggle"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Resume Quick Trigger */}
          <button 
            className="btn btn-secondary resume-header-btn font-mono"
            onClick={() => {
              playKeyClick();
              window.print();
            }}
            title="Print or Save Resume"
          >
            <Download size={14} />
            <span>CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => {
              playKeyClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="mobile-nav-link font-mono"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <button 
              className="btn btn-primary font-mono mobile-terminal-action"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
            >
              <Terminal size={16} />
              <span>Launch Terminal CLI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
