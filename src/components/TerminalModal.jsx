import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { playKeyClick, playCommandSound, playSuccessSound } from '../utils/soundEffects';

export const TerminalModal = ({ 
  isOpen, 
  onClose, 
  portfolioData, 
  onChangeTheme 
}) => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "⚡ Welcome to Avarti Rastogi's Interactive Developer Terminal (v2.4.0)\nType 'help' to view available commands, or click the quick chips below."
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    playCommandSound();
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const parts = cmd.toLowerCase().split(' ');
    const mainCmd = parts[0];
    const arg = parts.slice(1).join(' ');

    let response = '';

    switch (mainCmd) {
      case 'help':
        response = `Available Commands:
  • bio           - Read summary and background
  • skills        - View full technical stack by category
  • projects      - List featured projects and live links
  • open <id>     - Open a specific project link (e.g. 'open wikicontest')
  • exp           - View professional engineering experience
  • community     - View developer community leadership & mentorship
  • awards        - View awards & corporate recognitions (Meta, Google)
  • contact       - Show direct contact information & links
  • theme <name>  - Switch theme (cyan, violet, matrix, amber)
  • sudo hire     - Instant candidate evaluation trigger 😉
  • clear         - Clear terminal history
  • exit          - Close terminal`;
        break;

      case 'bio':
      case 'about':
        response = `👤 ${portfolioData.profile.name}
Role: ${portfolioData.profile.title}
Current: ${portfolioData.profile.currentRole}
Location: ${portfolioData.profile.location}

${portfolioData.profile.bio}`;
        break;

      case 'skills':
      case 'stack':
        response = `🛠️ Technical Stack Matrix:
Languages : JavaScript (ES6+), Python, Java, SQL, HTML5, CSS3
Frontend  : React.js, React 19, Vue.js, React Native, Tailwind CSS, Shadcn/UI, Redux
Backend   : Node.js, Express.js, Python Flask, RESTful APIs, Socket.io, JWT
Cloud & DB: PostgreSQL (Neon), MongoDB, MySQL, Google Cloud Platform, AWS, Vercel
Tools     : Git/GitHub, Postman, Vite, Leaflet.js, Web Speech API, MediaWiki API`;
        break;

      case 'projects':
        response = `🚀 Shipped Projects:
1. wikicontest  - Official Wikimedia contest management & jury review platform
2. resolvex     - AI-powered civic complaint intelligence & routing platform
3. taskflow     - Smart Kanban management with Generative AI subtask decomposition
4. triviaedge   - Real-time multiplayer trivia platform with WebSockets
5. uitmap       - College-adopted institutional project tracking platform

Type 'open <project_id>' to launch (e.g., 'open resolvex')`;
        break;

      case 'open':
        if (!arg) {
          response = "Error: Please specify project id (e.g., 'open wikicontest' or 'open resolvex')";
        } else {
          const p = portfolioData.projects.find(
            (proj) => proj.id.toLowerCase() === arg.toLowerCase()
          );
          if (p) {
            const url = p.links.live || p.links.github;
            window.open(url, '_blank');
            response = `Opening ${p.title} in new tab: ${url}`;
          } else {
            response = `Project '${arg}' not found. Available: wikicontest, resolvex, taskflow, triviaedge, uitmap`;
          }
        }
        break;

      case 'exp':
      case 'experience':
        response = `💼 Professional Experience:
• Polycab India Ltd. — Graduate Engineer Trainee (Jul 2025 — Present)
  - Developing and maintaining high-availability web applications.
  - Active troubleshooting, functional enhancements, and system monitoring.

• Netcamp Solutions Pvt. Ltd. — Web Development Intern (May 2024 — Jul 2024)
  - Responsive web design, JavaScript feature implementation, frontend optimization.`;
        break;

      case 'community':
        response = `🌐 Community Leadership & DevRel (Chronological):
• Indic MediaWiki Developers User Group — Active Member (2026 — Present)
• Road to Wiki Cohort 1 — Mentor (Feb 2025, Recognized at Meta Gurugram HQ)
• FlutterFlow Developer Group Prayagraj — Co-organizer & Tech Lead (Nov 2024 — Present)
• Women in Tech Prayagraj — Organizer (Nov 2024 — Present)
• Google Cloud Arcade — Nationwide Facilitator (Aug 2024 — Oct 2025)
• GDG Prayagraj — Member (2023 — 2025)
• TFUG Prayagraj — Technical Lead (Dec 2023 — Present)
• NSS — Community Member (May 2023 — Oct 2023)
• GDSC UIT — Co-Lead (2022 — 2023)`;
        break;

      case 'awards':
      case 'achievements':
        response = `🏆 Key Honors & Recognitions (Chronological):
• Felicitated at Meta Gurugram HQ for Road to Wiki Cohort 1 Mentorship (Feb 2025)
• Selected Participant — Developer Skill Development Program 2025 (IIITH-OKI)
• Selected Google Cloud Arcade Facilitator (1 of 188 in India, Aug 2024 — Oct 2025)
• Invited to Wikimedia Technology Summit 2024 at IIIT-Hyderabad (Oct 2024)
• Top 5 Nationwide in Google Notes Championship — Honored at Google Gurugram Office (Apr 2024)
• 2x Hacktoberfest Contributor (MLH, 2024 & 2023)`;
        break;

      case 'contact':
        response = `📬 Contact Info:
• Email    : ${portfolioData.profile.email}
• GitHub   : ${portfolioData.profile.links.github}
• LinkedIn : ${portfolioData.profile.links.linkedin}`;
        break;

      case 'theme':
        const validThemes = ['cyan', 'violet', 'matrix', 'amber'];
        if (validThemes.includes(arg)) {
          onChangeTheme(arg);
          playSuccessSound();
          response = `Theme switched to '${arg}'.`;
        } else {
          response = `Invalid theme '${arg}'. Options: cyan, violet, matrix, amber`;
        }
        break;

      case 'sudo':
        if (arg === 'hire') {
          playSuccessSound();
          response = `🎉 ACCESS GRANTED: Offer extended to Avarti Rastogi!
Decision: Exceptional cultural add with full-stack skills, open-source pedigree, and community leadership.
Next Step: Send an email to ${portfolioData.profile.email} or connect on LinkedIn!`;
        } else {
          response = `sudo: permission denied for command '${arg}' (try 'sudo hire')`;
        }
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        response = `Command not recognized: '${mainCmd}'. Type 'help' for supported commands.`;
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: cmd },
      { type: 'output', text: response }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    } else {
      playKeyClick();
    }
  };

  const quickCommands = ['help', 'bio', 'skills', 'projects', 'exp', 'awards', 'sudo hire', 'clear'];

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div 
        className={`terminal-modal glass-panel ${isMaximized ? 'maximized' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-close" onClick={onClose} title="Close (Esc)"></span>
            <span className="dot dot-min" onClick={() => setIsMaximized(false)} title="Minimize"></span>
            <span className="dot dot-max" onClick={() => setIsMaximized(!isMaximized)} title="Maximize"></span>
          </div>

          <div className="terminal-title font-mono">
            <TerminalIcon size={14} className="terminal-icon-title" />
            <span>avarti@workstation:~ (bash)</span>
          </div>

          <div className="terminal-actions">
            <button 
              className="terminal-ctrl-btn" 
              onClick={() => setIsMaximized(!isMaximized)}
              title={isMaximized ? "Restore window" : "Maximize window"}
            >
              {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
            <button 
              className="terminal-ctrl-btn" 
              onClick={onClose}
              title="Close terminal"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Quick action chips */}
        <div className="terminal-chips font-mono">
          <span className="chip-label">Quick Run:</span>
          {quickCommands.map((c) => (
            <button
              key={c}
              className={`term-chip ${c === 'sudo hire' ? 'chip-hire' : ''}`}
              onClick={() => handleCommand(c)}
            >
              {c === 'sudo hire' && <Sparkles size={11} />}
              {c}
            </button>
          ))}
        </div>

        {/* Terminal Screen Body */}
        <div className="terminal-body font-mono" onClick={() => inputRef.current?.focus()}>
          {history.map((item, idx) => (
            <div key={idx} className={`term-line term-line-${item.type}`}>
              {item.type === 'user' && (
                <span className="term-prompt">
                  <span className="prompt-user">avarti@portfolio</span>
                  <span className="prompt-colon">:</span>
                  <span className="prompt-path">~$</span>
                  <span className="prompt-cmd">{item.text}</span>
                </span>
              )}
              {item.type !== 'user' && (
                <pre className="term-output">{item.text}</pre>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="term-input-line">
            <span className="term-prompt">
              <span className="prompt-user">avarti@portfolio</span>
              <span className="prompt-colon">:</span>
              <span className="prompt-path">~$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              className="term-input font-mono"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck="false"
              autoComplete="off"
              placeholder="type a command (e.g. 'help', 'projects', 'sudo hire')..."
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};
