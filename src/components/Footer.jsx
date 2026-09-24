import React from 'react';
import { 
  GitBranch, 
  Terminal, 
  ArrowUp, 
  Heart, 
  Code, 
  Cpu, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { playKeyClick, playSuccessSound } from '../utils/soundEffects';

export const Footer = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    playKeyClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      {/* Upper Footer: Quick Navigation & Callout */}
      <div className="container footer-upper">
        <div className="footer-brand-col">
          <div className="footer-brand font-mono">
            <span className="brand-tilde">~/</span>avarti<span className="brand-ext">.dev</span>
          </div>
          <p className="footer-bio">
            Engineered with high standards, responsive glassmorphic architecture, and open-source devotion.
          </p>
        </div>

        <div className="footer-links-col">
          <span className="col-title font-mono">// NAVIGATION</span>
          <div className="col-links font-mono">
            <a href="#about" onClick={() => playKeyClick()}>About</a>
            <a href="#skills" onClick={() => playKeyClick()}>Skills</a>
            <a href="#projects" onClick={() => playKeyClick()}>Projects</a>
            <a href="#experience" onClick={() => playKeyClick()}>Experience</a>
            <a href="#achievements" onClick={() => playKeyClick()}>Awards</a>
            <a href="#contact" onClick={() => playKeyClick()}>Contact</a>
          </div>
        </div>

        <div className="footer-terminal-col">
          <span className="col-title font-mono">// CLI QUICK ACCESS</span>
          <button 
            className="btn btn-secondary footer-term-btn font-mono"
            onClick={() => {
              playSuccessSound();
              onOpenTerminal();
            }}
          >
            <Terminal size={15} />
            <span>Launch CLI Terminal</span>
            <span className="kbd">Ctrl+K</span>
          </button>
          <span className="footer-hint font-mono text-muted">
            Tip: Type 'sudo hire' in terminal for an easter egg
          </span>
        </div>
      </div>

      {/* VSCode-style Bottom Status Bar */}
      <div className="vscode-status-bar font-mono">
        <div className="status-bar-left">
          <div className="status-item git-item" title="Git Branch">
            <GitBranch size={13} />
            <span>main*</span>
          </div>

          <div className="status-item" title="Build Status">
            <CheckCircle2 size={13} className="text-success" />
            <span>build: passing</span>
          </div>

          <div className="status-item" title="Port & Protocol">
            <span>localhost:5173 (HTTP/2)</span>
          </div>
        </div>

        <div className="status-bar-right">
          <div className="status-item">
            <span>UTF-8</span>
          </div>
          <div className="status-item">
            <span>React 19 + Vite</span>
          </div>
          <button 
            className="status-item back-top-btn" 
            onClick={scrollToTop}
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
