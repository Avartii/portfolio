export const portfolioData = {
  profile: {
    name: "Avarti Rastogi",
    handle: "@Avartii",
    title: "Full-Stack Developer · Open-Source Contributor · Community Organizer",
    currentRole: "Graduate Engineer Trainee at Polycab India Ltd.",
    status: "Open to Full-Stack & SDE Roles",
    statusAvailable: false,
    email: "av.rastogi0203@gmail.com",
    location: "Prayagraj, Uttar Pradesh, India",
    bio: "Computer Science graduate and full-stack software engineer with a track record of building production web applications, open-source Wikimedia tooling, and civic tech solutions. Graduate Engineer Trainee at Polycab India Ltd. and Technical Lead for FlutterFlow Developer Group Prayagraj (300+ developers). Recognized at Meta and Google offices for engineering mentorship and nationwide developer contributions.",
    terminalGreeting: "const engineer = new FullStackDeveloper({ name: 'Avarti Rastogi', passion: 'Building & Community' });",
    links: {
      github: "https://github.com/Avartii",
      linkedin: "https://www.linkedin.com/in/Avarti-Rastogi/",
      email: "mailto:av.rastogi0203@gmail.com",
      resumePdf: "#"
    },
    stats: [
      { id: "members", label: "Devs Mentored & Led", value: "300+", subtext: "FlutterFlow & Wikimedia" },
      { id: "gcp", label: "GCP Facilitator", value: "Top 188", subtext: "Selected Nationwide across India" },
      { id: "awards", label: "Corporate Recognitions", value: "Meta & Google", subtext: "Gurugram Headquarters" },
      { id: "hacktoberfest", label: "Open Source Contributor", value: "2x MLH", subtext: "Hacktoberfest Recognized" }
    ]
  },

  skills: {
    categories: [
      { id: "all", name: "All Technologies" },
      { id: "languages", name: "Programming Languages" },
      { id: "frontend", name: "Frontend & UI" },
      { id: "backend", name: "Backend & APIs" },
      { id: "database", name: "Databases & Cloud" },
      { id: "tools", name: "Tools & DevOps" }
    ],
    items: [
      { name: "JavaScript (ES6+)", category: "languages", icon: "Code", tags: ["Full-Stack", "Async/Await", "DOM"] },
      { name: "Python", category: "languages", icon: "Terminal", tags: ["Flask", "Automation", "MediaWiki API"] },
      { name: "Java", category: "languages", icon: "Cpu", tags: ["OOP", "Data Structures", "Algorithms"] },
      { name: "SQL", category: "languages", icon: "Database", tags: ["PostgreSQL", "MySQL", "Queries"] },
      { name: "HTML5 & CSS3", category: "languages", icon: "Layers", tags: ["Semantic Web", "Responsive", "Flex/Grid"] },

      { name: "React.js / React 19", category: "frontend", icon: "Atom", tags: ["Hooks", "Context", "Vite", "SPA"] },
      { name: "React Native", category: "frontend", icon: "Smartphone", tags: ["Mobile Apps", "Cross-Platform"] },
      { name: "Vue.js", category: "frontend", icon: "Boxes", tags: ["WikiContest Tool", "SFC", "State"] },
      { name: "Tailwind CSS", category: "frontend", icon: "Palette", tags: ["Utility-First", "Dark Mode", "Modern UI"] },
      { name: "Shadcn/UI", category: "frontend", icon: "Component", tags: ["Accessible UI", "Radix Primitives"] },
      { name: "Bootstrap 5", category: "frontend", icon: "Layout", tags: ["Rapid Prototyping", "Grid System"] },
      { name: "Redux & Redux Toolkit", category: "frontend", icon: "RefreshCw", tags: ["Global State", "Predictable Store"] },

      { name: "Node.js", category: "backend", icon: "Server", tags: ["Runtime", "Event Loop", "Streams"] },
      { name: "Express.js", category: "backend", icon: "Zap", tags: ["RESTful APIs", "Middleware", "Routing"] },
      { name: "Python Flask", category: "backend", icon: "ServerCrash", tags: ["Microservices", "Jury Workflows"] },
      { name: "RESTful APIs", category: "backend", icon: "Network", tags: ["API Design", "JSON", "HTTP Protocols"] },
      { name: "Socket.io", category: "backend", icon: "Radio", tags: ["WebSockets", "Real-Time Sync", "TriviaEdge"] },
      { name: "JWT & OAuth 2.0", category: "backend", icon: "Lock", tags: ["Authentication", "Wikimedia OAuth", "Security"] },

      { name: "PostgreSQL (Neon)", category: "database", icon: "Database", tags: ["Relational", "Serverless Neon", "ACID"] },
      { name: "MongoDB", category: "database", icon: "HardDrive", tags: ["NoSQL", "Document Store", "Mongoose"] },
      { name: "MySQL", category: "database", icon: "DatabaseZap", tags: ["Schema Design", "UIT-MAP Portal"] },
      { name: "Google Cloud Platform (GCP)", category: "database", icon: "Cloud", tags: ["Arcade Facilitator", "Cloud Storage"] },
      { name: "AWS Cloud Basics", category: "database", icon: "CloudRain", tags: ["EC2", "S3", "Hosting"] },
      { name: "Vercel & Netlify", category: "database", icon: "Globe", tags: ["CI/CD", "Edge Network", "Deployments"] },

      { name: "Git & GitHub", category: "tools", icon: "GitBranch", tags: ["Branching", "PR Reviews", "Collaboration"] },
      { name: "Postman", category: "tools", icon: "Send", tags: ["API Testing", "Automation", "Documentation"] },
      { name: "Vite", category: "tools", icon: "Flame", tags: ["Next-Gen Bundler", "HMR", "Build Optimization"] },
      { name: "Leaflet.js", category: "tools", icon: "MapPin", tags: ["Geospatial Mapping", "RESOLVEX"] },
      { name: "Web Speech API", category: "tools", icon: "Mic", tags: ["Voice Input", "Speech Recognition"] },
      { name: "MediaWiki API & Toolforge", category: "tools", icon: "BookOpen", tags: ["Wikimedia Ecosystem", "Bot/Tools"] }
    ],
    coreCompetencies: [
      "Object-Oriented Design (OOD)",
      "Software Development Lifecycle (SDLC)",
      "Version Control (Git & GitHub)",
      "System Architecture & Problem Solving"
    ],
    softSkills: [
      "Engineering Leadership",
      "Effective Cross-Team Communication",
      "Technical Public Speaking & Talks",
      "Developer Community Management",
      "Agile Collaboration & Time Management"
    ]
  },

  projects: [
    {
      id: "wikicontest",
      title: "WikiContest Tool",
      tagline: "Official Wikimedia contest management and jury review platform",
      category: "Open Source",
      featured: true,
      badge: "Wikimedia Open Source",
      description: "A comprehensive open-source web platform engineered for organizing and managing global Wikipedia editing competitions. Solves the complex challenge of contest creation, automated article submission tracking, template enforcement, jury evaluations, and real-time leaderboards.",
      tech: ["Python Flask", "VueJS", "PostgreSQL", "JWT", "Wikimedia OAuth", "Bootstrap", "Vite"],
      links: {
        github: "https://github.com/indictechcom/wikicontest",
        live: "https://wikicontest.toolforge.org/"
      },
      highlights: [
        "Architected with Python Flask backend and fast Vue.js frontend powered by Vite",
        "Integrated Wikimedia OAuth for secure, seamless multi-lingual contributor verification",
        "Automated jury scoring workflows with structured criteria checks and diff inspection",
        "Deployed on Wikimedia Toolforge high-availability infrastructure with PostgreSQL"
      ],
      architecture: "Flask microservice handling MediaWiki API interactions, rate-limiting, and contest business logic. Vue.js SPA interface with instant client-side filtering and jury evaluation dashboards.",
      metrics: "Used by the Indic Wikimedia developer and contributor network for regional and national writing edit-a-thons."
    },
    {
      id: "resolvex",
      title: "RESOLVEX — AI Complaint Intelligence",
      tagline: "Voice & text municipal civic-issue routing and tracking platform",
      category: "AI & Civic Tech",
      featured: true,
      badge: "AI Powered",
      description: "An intelligent civic reporting platform that empowers citizens to report local infrastructure defects (potholes, pipeline leaks, power outages) via voice commands or text. Uses intelligent categorization to eliminate duplicate complaints and routes tickets to appropriate municipal authorities on a live interactive map.",
      tech: ["React 19", "TypeScript", "Node.js", "Express.js", "PostgreSQL (Neon)", "Tailwind CSS", "Leaflet.js", "Recharts", "Web Speech API", "Vercel"],
      links: {
        github: "https://github.com/Avartii/complaint-intelligence-platform",
        live: "https://complaint-intelligence-platform.vercel.app"
      },
      highlights: [
        "Hands-free voice reporting via Web Speech API with real-time transcription and analysis",
        "Geospatial issue tracking with Leaflet.js interactive maps and cluster visualization",
        "Smart semantic duplicate detection algorithm to prevent municipal ticket bloat",
        "Executive analytics dashboard with Recharts tracking departmental SLA resolution times"
      ],
      architecture: "Full-stack decoupled architecture with React 19 + TypeScript frontend, Express REST API, and serverless PostgreSQL on Neon. Automated CI/CD pipeline on Vercel.",
      metrics: "Live interactive map rendering with sub-second queries across geo-tagged municipal issues."
    },
    {
      id: "taskflow",
      title: "TaskFlow — Smart AI-Powered Kanban Workspace",
      tagline: "Intelligent sprint management with Google Generative AI subtask decomposition and drag-and-drop workflow",
      category: "Full-Stack",
      featured: false,
      badge: "Gemini AI & TypeScript",
      description: "An engineering productivity workspace integrating Kanban boards with Google's Gemini 1.5 Flash model. Automatically decomposes complex engineering tickets into 3–5 actionable subtasks with time estimates, priorities, and celebration triggers.",
      tech: ["React 19", "TypeScript", "Google Generative AI (Gemini)", "Tailwind CSS v4", "Vite", "Canvas Confetti", "Lucide React"],
      links: {
        github: "https://github.com/Avartii/taskify-colab",
        live: null
      },
      highlights: [
        "Deep integration with Google Generative AI (@google/generative-ai) for automated, structured engineering subtask estimation",
        "Fluid drag-and-drop column and card organization built with modern TypeScript and responsive Tailwind CSS v4",
        "Optimistic client-side state updates and secure client-side API key management via browser local storage",
        "Interactive task completion milestones with canvas confetti feedback and micro-interactions"
      ],
      architecture: "Client-side TypeScript single-page application built on React 19 and Vite. Utilizes structured Gemini prompt schemas with fallback parsers to transform natural language objectives into typed JSON subtasks, rendered into a responsive Tailwind CSS interface.",
      metrics: "Instant AI subtask generation in under 1.2s with automated priority weighting and time estimation."
    },
    {
      id: "triviaedge",
      title: "TriviaEdge — Real-Time Multiplayer Quiz Arena",
      tagline: "Low-latency multiplayer trivia platform with WebSocket synchronization and Redux global state",
      category: "Full-Stack",
      featured: false,
      badge: "WebSockets & Redux",
      description: "A full-stack, real-time multiplayer trivia platform engineered for concurrent multiplayer competition. Features low-latency room matching, synchronized question timers with server-side validation, live leaderboards, and persistent user scoring.",
      tech: ["React 19", "Redux", "React Router", "Socket.io", "Node.js", "Express.js", "MongoDB (Mongoose)", "Axios", "CSS3"],
      links: {
        github: "https://github.com/Avartii/TriviaEdge",
        live: null
      },
      highlights: [
        "Bi-directional Socket.io client-server event streams enabling sub-50ms room synchronization and live answer broadcasts",
        "Centralized game and room state management powered by Redux and React-Redux for predictable client-side state transitions",
        "Robust Mongoose schemas with indexed question banks, category filtering, and user session audit logs",
        "Dynamic client countdown timers synchronized with server timestamps to prevent client-side timing manipulation"
      ],
      architecture: "Decoupled event-driven architecture: Node/Express backend coordinating in-memory WebSocket room state machines with Socket.io broadcasts, while MongoDB via Mongoose handles persistent schemas for questions and match records. The frontend leverages React 19 and Redux for deterministic game state updates.",
      metrics: "Sub-50ms synchronized question broadcast latency across multiple active player rooms."
    },
    {
      id: "uitmap",
      title: "UIT-MAP — Virtual Project Tracker",
      tagline: "Institutional digital project submission & faculty verification platform",
      category: "Institutional Tech",
      featured: true,
      badge: "College Adopted",
      description: "An institutional web platform designed and built to modernize the capstone project submission and evaluation pipeline for United Institute of Technology. Approved by college authorities and actively adopted by academic departments.",
      tech: ["JavaScript", "PHP", "MySQL", "RESTful APIs", "Webmail", "HTML5", "CSS3"],
      links: {
        github: "https://github.com/Avartii/UIT-MAP/",
        live: "https://uitmap.com/"
      },
      highlights: [
        "Designed and adopted institution-wide across pre-final and final year engineering batches",
        "Role-based multi-tier verification workflows for Students, Faculty Guides, and Department Heads (HODs)",
        "Automated institutional email notifications for review approvals, corrections, and deadlines",
        "Replaced manual paper tracking with secure, searchable digital repository of academic archives"
      ],
      architecture: "Relational database schema in MySQL optimized for academic audit trails, role-based access control, and automated report generators.",
      metrics: "Formally approved and adopted by United Institute of Technology for college-wide student use."
    }
  ],

  experience: [
    {
      id: "polycab",
      role: "Graduate Engineer Trainee",
      company: "Polycab India Ltd.",
      type: "Full-Time · On-site",
      period: "Jul 2025 — Present",
      location: "India",
      status: "Current Role",
      highlights: [
        "Contributed to the development, enhancement, and maintenance of high-availability enterprise web applications.",
        "Supported active website updates, structured issue identification, diagnostic troubleshooting, and user-facing functional improvements.",
        "Assisted in customer communication workflows, process troubleshooting, and technical support operations to optimize client interactions and process efficiency."
      ],
      tags: ["Web Applications", "Troubleshooting", "System Optimization", "Enterprise Maintenance", "Process Flow"]
    },
    {
      id: "netcamp",
      role: "Web Development Intern",
      company: "Netcamp Solutions Pvt. Ltd.",
      type: "Internship · On-site",
      period: "May 2024 — Jul 2024",
      location: "India",
      status: "Completed",
      highlights: [
        "Designed and engineered responsive, cross-browser web interfaces utilizing HTML5, CSS3, and modern JavaScript.",
        "Significantly enhanced user engagement and mobile accessibility through dynamic, responsive design principles.",
        "Collaborated closely with senior software engineers to build scalable web solutions, optimize frontend performance, and accelerate delivery schedules."
      ],
      tags: ["JavaScript", "Responsive Design", "UI Engineering", "Performance Optimization", "Team Collaboration"]
    }
  ],

  // Hierarchical order starting from 2025 down to 2024 and 2023
  communityLeadership: [
    {
      id: "gdsc",
      role: "Co-Lead",
      organization: "Google Developer Student Club (GDSC) — UIT",
      period: "2025 — Present",
      year: 2025,
      location: "Prayagraj, India",
      summary: "Leading the student developer chapter at United Institute of Technology, orchestrating hackathons, study jams, and peer-to-peer code reviews.",
      impact: "Mentored hundreds of campus developers in web development, Git best practices, and collaborative open-source workflows.",
      icon: "Terminal"
    },
    {
      id: "road-to-wiki",
      role: "Mentor — Road to Wiki Cohort 1",
      organization: "Wikimedia / WikiClub Tech India",
      period: "Feb 2025",
      year: 2025,
      location: "Remote / Meta Gurugram",
      summary: "Guided and mentored first-time open-source contributors through structured onboarding to the MediaWiki technical ecosystem.",
      impact: "Recognized and honored at Meta's Gurugram Headquarters for significant contributions in cultivating student open-source contributors for Wikimedia.",
      icon: "Award"
    },
    {
      id: "flutterflow",
      role: "Co-organizer & Technical Lead",
      organization: "FlutterFlow Developer Group, Prayagraj",
      period: "Nov 2024 — Present",
      year: 2024,
      location: "Prayagraj, India",
      summary: "Spearheading technical workshops and hands-on developer training for a thriving community of 300–400 members with an active core of 50+ developers.",
      impact: "Organized developer sessions, low-code/pro-code architecture talks, and expanded the local software development ecosystem through cross-functional initiatives.",
      icon: "Smartphone"
    },
    {
      id: "women-in-tech",
      role: "Organizer",
      organization: "Women in Tech, Prayagraj",
      period: "Nov 2024 — Present",
      year: 2024,
      location: "Prayagraj, India",
      summary: "Advocating for gender diversity in engineering by organizing empowerment initiatives such as '#IamRemarkable' workshops and technical panels.",
      impact: "Provided mentorship, career roadmaps, and a supportive network for women entering tech and open source.",
      icon: "Heart"
    },
    {
      id: "gcp-facilitator",
      role: "Google Cloud Arcade Facilitator",
      organization: "Google Cloud India",
      period: "Aug 2024 — Present",
      year: 2024,
      location: "Prayagraj, India",
      summary: "Selected as 1 of only 188 nationwide facilitators across India to guide developers through hands-on cloud labs and architectures.",
      impact: "Empowered hundreds of students and developers with hands-on proficiency in Google Cloud computing, serverless architectures, and IAM security.",
      icon: "Cloud"
    },
    {
      id: "indic-wikimedia",
      role: "Active Member",
      organization: "Indic MediaWiki Developers User Group",
      period: "2024 — Present",
      year: 2024,
      location: "Remote",
      summary: "Contributing to community governance and technical initiatives within the Indic MediaWiki ecosystem.",
      impact: "Supported development of open-source tooling and participated in technical review discussions.",
      icon: "BookOpen"
    },
    {
      id: "tfug",
      role: "Technical Lead",
      organization: "TensorFlow User Group (TFUG) Prayagraj",
      period: "Dec 2023 — Present",
      year: 2023,
      location: "Prayagraj, India",
      summary: "Directing the technical agenda for machine learning bootcamps, community code-alongs, and hands-on AI workshops.",
      impact: "Bridging the gap between theoretical machine learning concepts and practical web integration for community members.",
      icon: "Cpu"
    },
    {
      id: "gdg",
      role: "Member",
      organization: "Google Developer Group (GDG) Prayagraj",
      period: "2023 — Present",
      year: 2023,
      location: "Prayagraj, India",
      summary: "Active member of the GDG Prayagraj chapter, supporting community events and developer meetups.",
      impact: "Assisted in community organizing, technical sessions, and developer outreach.",
      icon: "Sparkles"
    },
    {
      id: "nss",
      role: "Community Member",
      organization: "NSS (National Service Scheme)",
      period: "May 2023 — Oct 2023",
      year: 2023,
      location: "Prayagraj, India",
      summary: "Led and participated in social community service initiatives, demonstrating collaborative leadership and social responsibility.",
      impact: "Organized local community programs and volunteer drives.",
      icon: "Heart"
    }
  ],

  // Hierarchical order starting from 2025 down to 2024
  achievements: [
    {
      id: "meta-gurugram",
      title: "Recognized at Meta Office, Gurugram",
      organization: "Meta India & WikiClub Tech",
      date: "Feb 2025",
      year: 2025,
      badge: "Honored at Meta",
      description: "Felicitated at Meta's Gurugram Headquarters for guiding and mentoring participants in Road to Wiki Cohort 1, recognized for developing student contributors and expanding the Wikimedia technical community.",
      icon: "Award"
    },
    {
      id: "dsdp-2025",
      title: "Selected Participant — Developer Skill Development Program 2025",
      organization: "Indic MediaWiki Developers User Group / IIITH-OKI",
      date: "2025",
      year: 2025,
      badge: "Fellowship",
      description: "Selected for intensive developer immersion focusing on open knowledge engineering, MediaWiki codebase internals, and scalable tools.",
      icon: "Sparkles"
    },
    {
      id: "gcp-188",
      title: "Selected as 1 of 188 Nationwide Google Cloud Arcade Facilitators",
      organization: "Google Cloud",
      date: "Aug 2024",
      year: 2024,
      badge: "1 of 188 in India",
      description: "Earned a competitive appointment as one of 188 facilitators nationwide to mentor university students and professionals in Google Cloud technologies.",
      icon: "CloudLightning"
    },
    {
      id: "wts-2024",
      title: "Invitation to Wikimedia Technology Summit (WTS 2024)",
      organization: "Wikimedia Foundation / IIIT-Hyderabad",
      date: "Jul 2024",
      year: 2024,
      badge: "WTS Summit",
      description: "Invited to participate in the prestigious Wikimedia Technology Summit at IIIT-Hyderabad for demonstrable expertise in open-source Wikimedia tooling and technical contributions.",
      icon: "Compass"
    },
    {
      id: "google-notes",
      title: "Top 5 Contributor Nationwide — Google Notes Championship",
      organization: "Google India",
      date: "Apr 2024",
      year: 2024,
      badge: "Honored at Google",
      description: "Selected as one of the top 5 contributors across the entire nation in the Google Notes Championship program; felicitated at Google's Gurugram Office.",
      icon: "Trophy"
    },
    {
      id: "hacktoberfest",
      title: "2x Hacktoberfest Recognized Contributor",
      organization: "Major League Hacking (MLH) & DigitalOcean",
      date: "2024 & 2023",
      year: 2024,
      badge: "2x Contributor",
      description: "Recognized for quality open-source contributions across two consecutive Hacktoberfest cycles with merged pull requests in production open-source repositories.",
      icon: "GitPullRequest"
    }
  ],

  // Grades/percentages removed as requested
  education: [
    {
      institution: "United Institute of Technology",
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      period: "2021 — 2025",
      location: "Prayagraj, Uttar Pradesh, India",
      description: "Comprehensive coursework in Data Structures, Algorithms, Database Management Systems, Object-Oriented Software Engineering, Computer Networks, and Cloud Computing. Built college-adopted UIT-MAP system during tenure.",
      highlights: [
        "Co-Lead of Google Developer Student Club (GDSC UIT)",
        "Engineered college-adopted UIT-MAP Capstone Management System",
        "Active student organizer for campus hackathons and tech bootcamps"
      ]
    },
    {
      institution: "Vidya Vahini School",
      degree: "Senior Secondary (Intermediate), CBSE Board",
      period: "2020 — 2021",
      location: "Prayagraj, Uttar Pradesh, India",
      description: "Science stream with Physics, Chemistry, Mathematics, and Computer Science foundation.",
      highlights: ["Strong foundation in analytical reasoning and computer programming fundamentals"]
    }
  ]
};
