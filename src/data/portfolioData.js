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
      title: "TaskFlow — Smart Task Management",
      tagline: "AI-enhanced Kanban productivity workspace with automated task decomposition",
      category: "Full-Stack",
      featured: false,
      badge: "Productivity",
      description: "A sleek, Trello-inspired project and task management workspace built for developers and teams. Features smooth drag-and-drop board mechanics and Google Generative AI integration to automatically decompose complex objectives into actionable sprint subtasks.",
      tech: ["React.js", "Tailwind CSS", "Shadcn/UI", "Lucide-react", "Google Generative AI", "Vercel"],
      links: {
        github: "https://github.com/Avartii/taskify-colab",
        live: null
      },
      highlights: [
        "Fluid drag-and-drop column and card interactions with accessible keyboard controls",
        "Generative AI subtask assistant breaking down high-level project goals into step-by-step checklists",
        "Polished developer-grade dark aesthetic using Shadcn/UI primitives and custom Tailwind tokens"
      ],
      architecture: "State-driven React architecture with optimistic UI updates and structured Gemini prompt templates for rapid subtask breakdown.",
      metrics: "Instant task breakdown generation in under 1.2s powered by Google Generative AI."
    },
    {
      id: "triviaedge",
      title: "TriviaEdge — Real-Time Multiplayer Quiz",
      tagline: "Dynamic multiplayer trivia platform with WebSocket real-time synchronization",
      category: "Full-Stack",
      featured: false,
      badge: "Real-Time WebSockets",
      description: "An engaging real-time multiplayer quiz arena where players compete simultaneously across trivia categories. Features sub-50ms synchronized question countdown timers, dynamic multiplier scoring, and real-time live leaderboards.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Axios", "CSS3"],
      links: {
        github: "https://github.com/Avartii/TriviaEdge",
        live: null
      },
      highlights: [
        "Bi-directional WebSocket event channels for instant room creation and live game synchronization",
        "Dynamic question timers with client-server timestamp validation to deter timing exploits",
        "Live dynamic leaderboard updating positions after every question round"
      ],
      architecture: "Node/Express backend maintaining in-memory game room state machines with Socket.io broadcasts, while MongoDB handles question repositories and historical statistics.",
      metrics: "Maintains concurrent multiplayer lobby synchronization with low-latency broadcasts."
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

  // Hierarchical order starting from 2026 down to 2022
  communityLeadership: [
    {
      id: "indic-wikimedia",
      role: "Active Member",
      organization: "Indic MediaWiki Developers User Group",
      period: "2026 — Present",
      year: 2026,
      location: "Remote",
      summary: "Contributing to community governance and technical initiatives within the Indic MediaWiki ecosystem.",
      impact: "Supported development of open-source tooling and participated in technical review discussions.",
      icon: "BookOpen"
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
      period: "Aug 2024 — Oct 2025",
      year: 2024,
      location: "Prayagraj, India",
      summary: "Selected as 1 of only 188 nationwide facilitators across India to guide developers through hands-on cloud labs and architectures.",
      impact: "Empowered hundreds of students and developers with hands-on proficiency in Google Cloud computing, serverless architectures, and IAM security.",
      icon: "Cloud"
    },
    {
      id: "gdg",
      role: "Member",
      organization: "Google Developer Group (GDG) Prayagraj",
      period: "2023 — 2025",
      year: 2023,
      location: "Prayagraj, India",
      summary: "Active member of the GDG Prayagraj chapter, supporting community events and developer meetups.",
      impact: "Assisted in community organizing, technical sessions, and developer outreach.",
      icon: "Sparkles"
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
      id: "nss",
      role: "Community Member",
      organization: "NSS (National Service Scheme)",
      period: "May 2023 — Oct 2023",
      year: 2023,
      location: "Prayagraj, India",
      summary: "Led and participated in social community service initiatives, demonstrating collaborative leadership and social responsibility.",
      impact: "Organized local community programs and volunteer drives.",
      icon: "Heart"
    },
    {
      id: "gdsc",
      role: "Co-Lead",
      organization: "Google Developer Student Club (GDSC) — UIT",
      period: "2022 — 2023",
      year: 2022,
      location: "Prayagraj, India",
      summary: "Leading the student developer chapter at United Institute of Technology, orchestrating hackathons, study jams, and peer-to-peer code reviews.",
      impact: "Mentored hundreds of campus developers in web development, Git best practices, and collaborative open-source workflows.",
      icon: "Terminal"
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
      id: "wts-2024",
      title: "Invitation to Wikimedia Technology Summit (WTS 2024)",
      organization: "Wikimedia Foundation / IIIT-Hyderabad",
      date: "Oct 2024",
      year: 2024,
      badge: "WTS Summit",
      description: "Invited to participate in the prestigious Wikimedia Technology Summit at IIIT-Hyderabad for demonstrable expertise in open-source Wikimedia tooling and technical contributions.",
      icon: "Compass"
    },
    {
      id: "gcp-188",
      title: "Selected as 1 of 188 Nationwide Google Cloud Arcade Facilitators",
      organization: "Google Cloud",
      date: "Aug 2024 — Oct 2025",
      year: 2024,
      badge: "1 of 188 in India",
      description: "Earned a competitive appointment as one of 188 facilitators nationwide to mentor university students and professionals in Google Cloud technologies.",
      icon: "CloudLightning"
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
