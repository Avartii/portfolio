# 🚀 Avarti Rastogi — Developer Studio & Terminal Hybrid Portfolio

A developer-grade, state-of-the-art developer portfolio engineered with **React 19, Vite 5, Vanilla CSS Design System, and Web Audio API**, built for **Avarti Rastogi** (Full-Stack Developer, Graduate Engineer Trainee at Polycab India Ltd., Wikimedia Contributor, and FlutterFlow Tech Lead).

---

## ✨ Signature Features

- **Interactive Developer HUD / Command Terminal (`Ctrl+K` / `⌘K`)**:
  - Fully functional CLI terminal with commands: `help`, `bio`, `skills`, `projects`, `open <id>`, `exp`, `community`, `awards`, `contact`, `theme <name>`, `sudo hire`, `clear`, `exit`.
  - Command history navigation (Up / Down arrow keys) and quick execution chips.
- **IDE Top Bar & Breadcrumb**:
  - Live breadcrumb `~/avarti.dev`, active Git branch pill `git:(main*)`, and live status badge `Available for Roles`.
- **Dynamic Role Typist & Code Spec Card**:
  - Live cycling specialties, responsive bio, quick copy email with visual toast notification, and an interactive TypeScript interface preview.
- **Interactive Tech Arsenal**:
  - Categorized filters (Languages, Frontend, Backend, Databases & Cloud, Tools & DevOps).
  - Real-time search filter for instantly finding libraries and frameworks.
  - Core architectural competencies and leadership strengths ribbon.
- **Projects Showcase with IDE Inspection Tabs**:
  - Multi-tab inspection on each project card:
    - `// 01. Overview` (Problem statement, features, highlights)
    - `// 02. Architecture` (System design flow, dependencies)
    - `// 03. Impact` (Metrics, institutional adoption, user benefits)
  - Direct Live App launch and GitHub repository links.
- **Git-Commit Style Experience Timeline**:
  - Visual git branch nodes representing corporate engineering roles (Polycab India Ltd., Netcamp Solutions).
  - Expandable drawer for key achievements and tech tags.
  - Dedicated cards for Community Leadership (FlutterFlow, Wikimedia, Google Cloud, Women in Tech, TFUG, GDSC).
- **The Trophy Room (Honors & Recognition)**:
  - Big Tech headquarters recognitions (Meta Gurugram Office, Google Gurugram Office, WTS IIIT-Hyderabad, Top 188 GCP Facilitators, 2x Hacktoberfest).
  - Academic foundation (United Institute of Technology B.Tech CSE, Vidya Vahini School).
- **Direct Dispatch Terminal & Coordinates**:
  - Quick subject templates for hiring managers, event organizers, and collaborators.
  - 1-click clipboard copy for email and phone.
- **Theme Color Engine**:
  - 4 tailored developer palettes: **Neon Cyan**, **Electric Violet**, **Matrix Emerald**, and **Radiant Amber**.
- **Tactile Sound Synthesis**:
  - Zero-dependency Web Audio API mechanical switch feedback on clicks and command execution (with master mute toggle).

---

## 🛠️ Project Structure

```
developer-portfolio/
├── public/
│   ├── avatar.jpg              # High-tech cyber developer portrait
│   └── favicon.svg             # Terminal code glyph favicon
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BrandIcons.jsx      # GitHub, LinkedIn, LeetCode SVGs
│   │   ├── Navbar.jsx          # IDE navigation, branch & theme controls
│   │   ├── Hero.jsx            # Dynamic typist, avatar & spec card
│   │   ├── SkillsSection.jsx   # Searchable tech matrix & competencies
│   │   ├── ProjectsSection.jsx # Shipped projects with 3-tab inspection
│   │   ├── ExperienceSection.jsx # Git-commit career & community timeline
│   │   ├── AchievementsSection.jsx # Big Tech honors & education credentials
│   │   ├── ContactSection.jsx  # Dispatch terminal & quick copies
│   │   ├── Footer.jsx          # VSCode status bar & quick back-to-top
│   │   └── TerminalModal.jsx   # Interactive CLI terminal modal
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth (from Master CV)
│   ├── utils/
│   │   └── soundEffects.js     # Web Audio API click & chime synthesis
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚡ Quick Start

```bash
# 1. Navigate to the project directory
cd C:\Users\hp\.gemini\antigravity-ide\scratch\developer-portfolio

# 2. Install dependencies (already installed)
npm install

# 3. Start local development server
npm run dev

# 4. Build optimized production bundle
npm run build

# 5. Preview production build
npm run preview
```

---

## 🌐 Deploy to Vercel or GitHub Pages

### Deploying to Vercel (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of developer portfolio"
   git branch -M main
   git remote add origin https://github.com/Avartii/portfolio.git
   git push -u origin main
   ```
2. Import repository in [Vercel](https://vercel.com) and click **Deploy**. Build command is `npm run build` and output directory is `dist`.
