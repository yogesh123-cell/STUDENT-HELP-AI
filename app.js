/**
 * ProjectPilot AI — Client Application Engine
 * Handles student profiling, idea generation, scoring, feature breakdown,
 * roadmap tracking, documentation generation, and mentor chat.
 */

// Initial Benchmark Sample Projects
const DEFAULT_PROJECTS = [
  {
    id: "proj-campus-assistant",
    title: "AI Campus Assistant & Smart Circulars RAG",
    tagline: "Intelligent multi-agent assistant answering student queries on courses, exams, fees, and circulars with verified citations.",
    domain: "Education & AI",
    branch: "CSE / IT",
    difficulty: "Intermediate",
    teamSize: "2-3 Students",
    duration: "12 Weeks (3 Months)",
    problem: "University students struggle to navigate fragmented portals, outdated PDF circulars, and delayed administrative responses for critical deadlines and academic queries.",
    solution: "A centralized, conversational AI campus portal integrating Retrieval-Augmented Generation (RAG) over official college circulars, document Q&A, fee reminders, and query ticketing.",
    targetUsers: "Undergraduate/Postgraduate Students, Faculty, Academic Advisors, and Administrative Staff.",
    scores: {
      skillMatch: 94,
      innovation: 86,
      difficulty: "Medium",
      realWorldUse: 95,
      resumeValue: 92,
      completionFeasibility: 89
    },
    features: {
      basic: [
        "Student Registration & JWT Authentication",
        "Role-Based Access Control (Student vs Admin/Faculty)",
        "Conversational Chat Interface with message history",
        "Categorized FAQ System with fast keyword search",
        "Admin Circular & Notice Board Upload"
      ],
      "advanced": [
        "RAG over College Handbooks & Circulars (PDF parsing & vector search)",
        "Voice Input & Speech-to-Text query submission",
        "Personalized Academic Reminders (Internal exams, fee deadlines, hall tickets)",
        "Context-Aware Document Answering with source citations"
      ],
      "future": [
        "Official WhatsApp & Telegram Bot integration",
        "Multilingual Support for regional languages",
        "Biometric or Student ERP integration",
        "Campus navigation with interactive 3D floor maps"
      ]
    },
    techStack: {
      frontend: {
        name: "React + Tailwind CSS",
        rationale: "Enables a responsive, accessible mobile-friendly dashboard with rapid UI prototyping."
      },
      backend: {
        name: "FastAPI (Python)",
        rationale: "Asynchronous high-performance Python framework with native async support for AI/LLM streaming."
      },
      database: {
        name: "PostgreSQL + pgvector / ChromaDB",
        rationale: "Relational integrity for user data and fast vector similarity search for campus circular RAG."
      },
      ai: {
        name: "Google Gemini API / LangChain / HuggingFace Embeddings",
        rationale: "High context window for long academic PDF circulars and cost-effective embeddings."
      },
      deployment: {
        name: "Docker + Render / Vercel",
        rationale: "Free tier friendly, zero-downtime deployments with containerized reproducibility."
      }
    },
    roadmap: [
      {
        phase: "Phase 1: Problem Definition & Research",
        weeks: "Week 1",
        tasks: [
          { task: "Survey 30+ students on campus portal friction points", completed: true },
          { task: "Collect official college circulars, rulebooks, and course syllabi", completed: true },
          { task: "Draft System Requirements Specification (SRS)", completed: true }
        ]
      },
      {
        phase: "Phase 2: UI/UX & Prototypes",
        weeks: "Weeks 2-3",
        tasks: [
          { task: "Design Wireframes in Figma for Student & Admin views", completed: true },
          { task: "Build responsive Chat Interface with message bubbles", completed: true },
          { task: "Create Student Dashboard and Notice Explorer", completed: true }
        ]
      },
      {
        phase: "Phase 3: Backend & Database Architecture",
        weeks: "Weeks 4-6",
        tasks: [
          { task: "Set up PostgreSQL database schema and migrations", completed: true },
          { task: "Implement JWT student authentication & authorization", completed: true },
          { task: "Develop CRUD APIs for notices, user profiles, and chat logs", completed: false }
        ]
      },
      {
        phase: "Phase 4: AI & RAG Pipeline Integration",
        weeks: "Weeks 7-9",
        tasks: [
          { task: "Implement PDF text extraction and semantic chunking", completed: false },
          { task: "Generate vector embeddings and store in vector database", completed: false },
          { task: "Build prompt engineering pipeline with ground truth citation", completed: false },
          { task: "Integrate Google Gemini API with fallback handling", completed: false }
        ]
      },
      {
        phase: "Phase 5: Evaluation & Testing",
        weeks: "Weeks 10-11",
        tasks: [
          { task: "Perform RAG retrieval accuracy and hallucination checks", completed: false },
          { task: "Conduct unit testing on authentication & API endpoints", completed: false },
          { task: "User acceptance testing with 10 peer students", completed: false }
        ]
      },
      {
        phase: "Phase 6: Final Deployment & Documentation",
        weeks: "Week 12",
        tasks: [
          { task: "Deploy backend to Render and frontend to Vercel", completed: false },
          { task: "Prepare final academic project report & slide deck", completed: false },
          { task: "Record working demo video and prepare viva presentation", completed: false }
        ]
      }
    ],
    improvements: [
      {
        category: "Missing Features",
        suggestion: "Add automated email notifications to faculty mentors when students report recurring grievances."
      },
      {
        category: "Performance",
        suggestion: "Implement Redis caching for top 50 common campus questions to achieve sub-50ms response times."
      },
      {
        category: "Security",
        suggestion: "Enforce strict student email domain validation (@college.edu) and sanitize PDF uploads against malware."
      },
      {
        category: "UI / UX",
        suggestion: "Incorporate a dark mode switch and quick-reply chips for trending topics like 'Exam Schedule' and 'Library Timings'."
      },
      {
        category: "AI Improvements",
        suggestion: "Implement multi-turn conversation memory with hybrid search (BM25 keyword + dense vector embeddings) for higher precision."
      },
      {
        category: "Scalability & Future Scope",
        suggestion: "Migrate to asynchronous Celery worker queues for batch PDF processing during semester circular release spikes."
      }
    ]
  },
  {
    id: "proj-mediscan",
    title: "MediScan: Clinical Report & Symptom AI",
    tagline: "Explainable medical diagnostic assistant simplifying lab reports and triage recommendations.",
    domain: "Healthcare & AI",
    branch: "CSE / AI / Data Science",
    difficulty: "Advanced",
    teamSize: "2-4 Students",
    duration: "16 Weeks (4 Months)",
    problem: "Patients frequently struggle to comprehend complex clinical blood markers before seeing a physician, causing anxiety and delayed intervention.",
    solution: "Multimodal OCR parsing of uploaded lab reports, abnormal marker flagging, trend visualization, and red-flag emergency triage alerts.",
    targetUsers: "Patients, outpatient clinic visitors, caregivers, and telehealth support staff.",
    scores: {
      skillMatch: 88,
      innovation: 93,
      difficulty: "Hard",
      realWorldUse: 96,
      resumeValue: 95,
      completionFeasibility: 84
    },
    features: {
      basic: [
        "Patient Profile & Medical History Record",
        "Prescription/Report Image & PDF Upload",
        "Basic Tesseract / Vision OCR extraction",
        "Normal vs Abnormal Value Highlighting"
      ],
      advanced: [
        "Multimodal Medical LLM reasoning for differential explanations",
        "Interactive Biomarker Trend Charts across historical visits",
        "Emergency Red-Flag detector with immediate caution alerts",
        "Automated Doctor Summary sheet generator"
      ],
      future: [
        "Wearable device telemetry sync (Apple Health / Google Fit)",
        "HIPAA/GDPR compliant cryptographic report storage",
        "Direct Tele-consultation appointment booking"
      ]
    },
    techStack: {
      frontend: {
        name: "Next.js / React + Chart.js",
        rationale: "High performance server-rendered dashboards with interactive visual health trend charts."
      },
      backend: {
        name: "Python FastAPI + Celery",
        rationale: "Robust async processing for heavy image preprocessing and OCR extraction pipelines."
      },
      database: {
        name: "PostgreSQL with encrypted JSONB fields",
        rationale: "Flexible semi-structured lab test parameters with strict relational patient mapping."
      },
      ai: {
        name: "Gemini 1.5 Flash Vision / HuggingFace BioGPT",
        rationale: "Native multimodal comprehension of scanned lab sheets and specialized medical terminology."
      },
      deployment: {
        name: "AWS EC2 / GCP Cloud Run with S3 for encrypted storage",
        rationale: "Compliant bucket storage with pre-signed URLs for sensitive diagnostic reports."
      }
    },
    roadmap: [
      {
        phase: "Phase 1: Research & Medical Ethics",
        weeks: "Weeks 1-2",
        tasks: [
          { task: "Review standard CBC and Lipid profile lab reference ranges", completed: true },
          { task: "Formulate clinical disclaimer and safety boundary protocol", completed: true }
        ]
      },
      {
        phase: "Phase 2: Vision & OCR Engine",
        weeks: "Weeks 3-5",
        tasks: [
          { task: "Implement image deskewing and adaptive thresholding pipeline", completed: true },
          { task: "Extract tabular parameters using Vision API", completed: false }
        ]
      },
      {
        phase: "Phase 3: Diagnostic Reasoning",
        weeks: "Weeks 6-9",
        tasks: [
          { task: "Build biomarker database with age/gender thresholds", completed: false },
          { task: "Chain prompt pipeline for simplified layman summaries", completed: false }
        ]
      },
      {
        phase: "Phase 4: Patient Dashboard & Trends",
        weeks: "Weeks 10-12",
        tasks: [
          { task: "Build trend charts for cholesterol and glucose history", completed: false },
          { task: "Generate 1-click printable Doctor PDF Brief", completed: false }
        ]
      },
      {
        phase: "Phase 5: Safety Guardrails & Verification",
        weeks: "Weeks 13-14",
        tasks: [
          { task: "Benchmark against 50 anonymized public lab report samples", completed: false },
          { task: "Implement red-flag trigger for critical abnormal ranges", completed: false }
        ]
      },
      {
        phase: "Phase 6: Deployment & Viva Defense",
        weeks: "Weeks 15-16",
        tasks: [
          { task: "Deploy production cloud infrastructure with HTTPS", completed: false },
          { task: "Finalize college synopsis, viva presentation slides and demo", completed: false }
        ]
      }
    ],
    improvements: [
      {
        category: "Missing Features",
        suggestion: "Add drug-drug interaction checker when patients enter their daily prescription medications."
      },
      {
        category: "Security",
        suggestion: "Implement client-side EXIF metadata stripping before image submission to protect patient privacy."
      },
      {
        category: "AI Improvements",
        suggestion: "Add confidence calibration metrics for every extracted numeric marker to flag blurry scans."
      }
    ]
  },
  {
    id: "proj-devsentinel",
    title: "DevSentinel: Automated Security & Code Quality Bot",
    tagline: "CI/CD GitHub app scanning pull requests for secret leaks, OWASP vulnerabilities, and proposing auto-fix PRs.",
    domain: "Developer Tools & Cybersecurity",
    branch: "CSE / IT",
    difficulty: "Advanced",
    teamSize: "2-3 Students",
    duration: "14 Weeks (3.5 Months)",
    problem: "Junior developers and student open-source contributors regularly commit unencrypted API credentials and vulnerable dependencies.",
    solution: "A GitHub webhook bot performing Abstract Syntax Tree (AST) analysis, regex secret detection, and LLM patch generation directly in pull request comments.",
    targetUsers: "Engineering students, open source maintainers, and startup software teams.",
    scores: {
      skillMatch: 92,
      innovation: 91,
      difficulty: "Hard",
      realWorldUse: 97,
      resumeValue: 96,
      completionFeasibility: 85
    },
    features: {
      basic: [
        "GitHub Webhook App integration for PR events",
        "Regex-based secret and API token scanner",
        "Automated PR comment bot posting findings",
        "Dashboard displaying scanned repository metrics"
      ],
      advanced: [
        "AST semantic analysis for SQL injection & XSS vulnerabilities",
        "AI-generated diff patches with 1-click merge suggestions",
        "Dependency CVE scanner integrating with OSV.dev database",
        "Developer security score benchmark"
      ],
      future: [
        "IDE extension for VS Code / JetBrains real-time linting",
        "Automated fuzz testing test case generation",
        "Compliance checks against SOC2 and OWASP Top 10"
      ]
    },
    techStack: {
      frontend: {
        name: "React + Tailwind CSS",
        rationale: "Clean dashboard showcasing repository health grades and vulnerability graphs."
      },
      backend: {
        name: "Node.js / Express or Python FastAPI",
        rationale: "Event-driven architecture well-suited for high-throughput GitHub webhook payloads."
      },
      database: {
        name: "MongoDB or PostgreSQL",
        rationale: "Flexible document storage for varied repository security audit reports."
      },
      ai: {
        name: "Google Gemini 1.5 Flash / Tree-sitter AST",
        rationale: "Fast token processing speed for analyzing code diffs and producing unified patches."
      },
      deployment: {
        name: "Vercel + Railway / AWS Lambda",
        rationale: "Serverless webhooks scale instantly to zero when no PRs are active."
      }
    },
    roadmap: [
      {
        phase: "Phase 1: GitHub Apps & AST Research",
        weeks: "Weeks 1-2",
        tasks: [
          { task: "Create GitHub App with repository permissions and webhooks", completed: true },
          { task: "Study Tree-sitter grammars for Python and JavaScript ASTs", completed: true }
        ]
      },
      {
        phase: "Phase 2: Secret & Pattern Scanner",
        weeks: "Weeks 3-5",
        tasks: [
          { task: "Implement Shannon entropy test and regex secret detection", completed: true },
          { task: "Integrate OSV.dev vulnerability API for package manifests", completed: false }
        ]
      },
      {
        phase: "Phase 3: AI Code Patch Engine",
        weeks: "Weeks 6-9",
        tasks: [
          { task: "Construct unified diff prompts with strict syntax validation", completed: false },
          { task: "Implement GitHub PR review comment posting", completed: false }
        ]
      },
      {
        phase: "Phase 4: Developer Web Portal",
        weeks: "Weeks 10-12",
        tasks: [
          { task: "Build repository health score and history charts", completed: false },
          { task: "Implement OAuth GitHub login for students", completed: false }
        ]
      },
      {
        phase: "Phase 5: Evaluation & Penetration Testing",
        weeks: "Weeks 13-14",
        tasks: [
          { task: "Test on 25 intentionally vulnerable benchmark repos (Juice Shop)", completed: false },
          { task: "Prepare academic project documentation and viva deck", completed: false }
        ]
      }
    ],
    improvements: [
      {
        category: "Missing Features",
        suggestion: "Allow repository owners to configure custom regex ignore rules (.sentinelignore)."
      },
      {
        category: "Performance",
        suggestion: "Only analyze modified git diff chunks rather than cloning entire repositories."
      },
      {
        category: "AI Improvements",
        suggestion: "Use few-shot examples for auto-fixes to ensure linting styles match user repository conventions."
      }
    ]
  }
];

// App State
const state = {
  activeTab: "wizard", // wizard, ideas, project, dashboard, mentor
  activeProjectTab: "overview", // overview, features, techstack, roadmap, improvements, docs
  profile: {
    name: "Alex",
    branch: "CSE",
    year: "Final Year (8th Sem)",
    skills: ["Python", "JavaScript", "HTML/CSS"],
    technologies: ["React", "FastAPI", "PostgreSQL"],
    interests: ["Artificial Intelligence", "Education & EdTech"],
    difficulty: "Intermediate",
    teamType: "Team",
    teamSize: 3,
    durationMonths: 4
  },
  projects: [],
  selectedProject: null,
  comparedProjectIds: [],
  geminiApiKey: "",
  isGenerating: false,
  chatMessages: [
    {
      role: "assistant",
      content: "Hello! I am your **ProjectPilot AI Mentor**. Whether you need architectural advice, database design tips, dataset recommendations, or viva defense preparation, I'm here to help you build an outstanding final-year project!"
    }
  ]
};

// Available tags for the wizard
const AVAILABLE_SKILLS = [
  "Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "Go", "Rust", "SQL", "HTML/CSS", "Dart", "PHP", "Kotlin", "Swift"
];

const AVAILABLE_TECHS = [
  "React", "Next.js", "Vue.js", "Node.js", "FastAPI", "Django", "Flask", "Spring Boot",
  "PostgreSQL", "MongoDB", "Firebase", "Redis", "Docker", "Tailwind CSS", "TensorFlow", "PyTorch", "OpenCV", "LangChain"
];

const AVAILABLE_INTERESTS = [
  "Artificial Intelligence", "Machine Learning", "Healthcare & MedTech", "Education & EdTech",
  "Cybersecurity", "FinTech", "Internet of Things (IoT)", "Computer Vision", "Natural Language Processing (NLP)",
  "Cloud & DevOps", "Web3 / Blockchain", "Agriculture & AgTech", "Smart Cities"
];

// Initialize application
function initApp() {
  // Load saved state from localStorage
  try {
    const savedKey = localStorage.getItem("projectpilot_gemini_api_key");
    if (savedKey) state.geminiApiKey = savedKey;

    const savedProjects = localStorage.getItem("projectpilot_projects");
    if (savedProjects) {
      state.projects = JSON.parse(savedProjects);
    } else {
      state.projects = [...DEFAULT_PROJECTS];
      saveProjectsToStorage();
    }

    const savedProfile = localStorage.getItem("projectpilot_student_profile");
    if (savedProfile) {
      state.profile = JSON.parse(savedProfile);
    }

    // Set initial active project
    if (state.projects.length > 0) {
      state.selectedProject = state.projects[0];
    }
  } catch (e) {
    console.error("Failed to load local storage:", e);
    state.projects = [...DEFAULT_PROJECTS];
    state.selectedProject = state.projects[0];
  }

  renderNavigation();
  renderCurrentView();
  updateApiKeyStatusBadge();
}

function saveProjectsToStorage() {
  try {
    localStorage.setItem("projectpilot_projects", JSON.stringify(state.projects));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

function saveProfileToStorage() {
  try {
    localStorage.setItem("projectpilot_student_profile", JSON.stringify(state.profile));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

// Navigation Handler
function switchTab(tabName) {
  state.activeTab = tabName;
  renderNavigation();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function switchProjectTab(tabName) {
  state.activeProjectTab = tabName;
  renderProjectWorkspace();
}

function renderNavigation() {
  const tabs = [
    { id: "wizard", label: "Profile & Generator", icon: "user-plus" },
    { id: "ideas", label: "Idea Showcase", icon: "sparkles", badge: state.projects.length },
    { id: "project", label: "Project Workspace", icon: "layers", disabled: !state.selectedProject },
    { id: "dashboard", label: "Dashboard", icon: "layout-dashboard" },
    { id: "mentor", label: "AI Mentor Chat", icon: "message-square" }
  ];

  const navContainer = document.getElementById("main-nav");
  if (!navContainer) return;

  navContainer.innerHTML = tabs.map(tab => {
    const isActive = state.activeTab === tab.id;
    return `
      <button onclick="${tab.disabled ? '' : `switchTab('${tab.id}')`}"
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
          tab.disabled ? 'opacity-40 cursor-not-allowed text-slate-500' :
          isActive 
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold' 
            : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
        }">
        <span>${tab.label}</span>
        ${tab.badge ? `<span class="text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-800 text-slate-300'}">${tab.badge}</span>` : ''}
      </button>
    `;
  }).join("");
}

// Render active view
function renderCurrentView() {
  const container = document.getElementById("view-container");
  if (!container) return;

  switch (state.activeTab) {
    case "wizard":
      container.innerHTML = getWizardHTML();
      setupWizardEventHandlers();
      break;
    case "ideas":
      container.innerHTML = getIdeasShowcaseHTML();
      break;
    case "project":
      renderProjectWorkspace();
      break;
    case "dashboard":
      container.innerHTML = getDashboardHTML();
      break;
    case "mentor":
      container.innerHTML = getMentorChatHTML();
      setupChatHandlers();
      break;
  }
}

// -------------------------------------------------------------
// 1. STUDENT PROFILE & GENERATOR WIZARD
// -------------------------------------------------------------
function getWizardHTML() {
  return `
    <div class="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <!-- Header Banner -->
      <div class="glass-panel p-8 rounded-2xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="flex items-start justify-between">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Step 1: Student Engineering Profile</span>
            </div>
            <h1 class="text-3xl font-extrabold tracking-tight text-white mb-2">
              Transform Your Skills into an <span class="gradient-text">Award-Winning Final Project</span>
            </h1>
            <p class="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Tell ProjectPilot your academic branch, current languages, interests, and timeline. The AI will synthesize practical, resume-grade project ideas complete with feature breakdowns, technical stacks, and a week-by-week implementation roadmap.
            </p>
          </div>
          <div class="hidden sm:block text-right">
            <span class="text-xs text-slate-500 block">AI Engine</span>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium ${state.geminiApiKey ? 'text-emerald-400' : 'text-indigo-400'}">
              <span class="w-2 h-2 rounded-full ${state.geminiApiKey ? 'bg-emerald-500' : 'bg-indigo-500'}"></span>
              ${state.geminiApiKey ? 'Live Gemini 2.5 Flash' : 'Smart Heuristic Synthesizer'}
            </span>
          </div>
        </div>
      </div>

      <!-- Form Card -->
      <div class="glass-panel p-8 rounded-2xl space-y-8">
        <!-- 1. Academic Details -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-sm font-semibold">1</span>
            Academic Background
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Student Name</label>
              <input type="text" id="prof-name" value="${state.profile.name}" class="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="e.g. Alex Sharma" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Branch / Major</label>
              <select id="prof-branch" class="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors">
                <option value="CSE" ${state.profile.branch === 'CSE' ? 'selected' : ''}>Computer Science & Engineering (CSE)</option>
                <option value="IT" ${state.profile.branch === 'IT' ? 'selected' : ''}>Information Technology (IT)</option>
                <option value="AI/ML" ${state.profile.branch === 'AI/ML' ? 'selected' : ''}>Artificial Intelligence & Data Science (AI/DS)</option>
                <option value="ECE" ${state.profile.branch === 'ECE' ? 'selected' : ''}>Electronics & Communication (ECE)</option>
                <option value="EEE" ${state.profile.branch === 'EEE' ? 'selected' : ''}>Electrical & Electronics (EEE)</option>
                <option value="ME" ${state.profile.branch === 'ME' ? 'selected' : ''}>Mechanical Engineering (ME)</option>
                <option value="Civil" ${state.profile.branch === 'Civil' ? 'selected' : ''}>Civil Engineering</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Year / Semester</label>
              <select id="prof-year" class="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors">
                <option value="Final Year (8th Sem)" ${state.profile.year.includes('8th') ? 'selected' : ''}>Final Year (Semester 8 - Major Project)</option>
                <option value="Final Year (7th Sem)" ${state.profile.year.includes('7th') ? 'selected' : ''}>Final Year (Semester 7 - Project Phase 1)</option>
                <option value="3rd Year (6th Sem)" ${state.profile.year.includes('6th') ? 'selected' : ''}>3rd Year (Semester 6 - Mini Project)</option>
              </select>
            </div>
          </div>
        </div>

        <hr class="border-slate-800" />

        <!-- 2. Skills & Known Technologies -->
        <div>
          <h3 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-sm font-semibold">2</span>
            Skills & Known Technologies
          </h3>
          <p class="text-xs text-slate-400 mb-4">Click to toggle skills you currently know. Projects will be tailored to match your stack.</p>
          
          <div class="mb-4">
            <label class="block text-xs font-medium text-slate-300 mb-2">Programming Languages:</label>
            <div class="flex flex-wrap gap-2" id="skill-pills">
              ${AVAILABLE_SKILLS.map(skill => {
                const isSelected = state.profile.skills.includes(skill);
                return `
                  <button type="button" onclick="toggleSkill('${skill}')"
                    class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isSelected 
                        ? 'bg-indigo-600 text-white font-semibold ring-2 ring-indigo-400/50' 
                        : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/80 border border-slate-700/50'
                    }">
                    ${isSelected ? '✓ ' : '+ '}${skill}
                  </button>
                `;
              }).join("")}
            </div>
          </div>

          <div>
            <label class="block text-xs font-medium text-slate-300 mb-2">Frameworks & Tools Known:</label>
            <div class="flex flex-wrap gap-2" id="tech-pills">
              ${AVAILABLE_TECHS.map(tech => {
                const isSelected = state.profile.technologies.includes(tech);
                return `
                  <button type="button" onclick="toggleTech('${tech}')"
                    class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isSelected 
                        ? 'bg-cyan-600 text-white font-semibold ring-2 ring-cyan-400/50' 
                        : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/80 border border-slate-700/50'
                    }">
                    ${isSelected ? '✓ ' : '+ '}${tech}
                  </button>
                `;
              }).join("")}
            </div>
          </div>
        </div>

        <hr class="border-slate-800" />

        <!-- 3. Interests & Domain -->
        <div>
          <h3 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-sm font-semibold">3</span>
            Interests & Target Domains
          </h3>
          <p class="text-xs text-slate-400 mb-4">Select domains you'd like your project to tackle:</p>
          <div class="flex flex-wrap gap-2" id="interest-pills">
            ${AVAILABLE_INTERESTS.map(interest => {
              const isSelected = state.profile.interests.includes(interest);
              return `
                <button type="button" onclick="toggleInterest('${interest}')"
                  class="px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    isSelected 
                      ? 'bg-purple-600 text-white font-semibold ring-2 ring-purple-400/50' 
                      : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/80 border border-slate-700/50'
                  }">
                  ${isSelected ? '★ ' : ''}${interest}
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <hr class="border-slate-800" />

        <!-- 4. Project Constraints & Timeline -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-sm font-semibold">4</span>
            Constraints & Time Budget
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Difficulty -->
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Target Difficulty</label>
              <div class="grid grid-cols-3 gap-2">
                ${['Beginner', 'Intermediate', 'Advanced'].map(diff => `
                  <button type="button" onclick="setDifficulty('${diff}')"
                    class="py-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                      state.profile.difficulty === diff 
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30' 
                        : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:bg-slate-800'
                    }">
                    ${diff}
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Team Setup -->
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Team Setup</label>
              <div class="flex items-center gap-3">
                <select id="prof-team-type" class="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 w-1/2">
                  <option value="Team" ${state.profile.teamType === 'Team' ? 'selected' : ''}>Team Project</option>
                  <option value="Individual" ${state.profile.teamType === 'Individual' ? 'selected' : ''}>Individual Project</option>
                </select>
                <div class="flex items-center gap-2 w-1/2 bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-1.5">
                  <span class="text-xs text-slate-400">Members:</span>
                  <input type="number" id="prof-team-size" min="1" max="6" value="${state.profile.teamSize}" class="w-12 bg-transparent text-white font-bold text-center text-sm focus:outline-none" />
                </div>
              </div>
            </div>

            <!-- Available Time Duration -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-semibold text-slate-300 uppercase tracking-wider">Available Time</label>
                <span id="duration-display" class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">${state.profile.durationMonths} Months (${state.profile.durationMonths * 4} Weeks)</span>
              </div>
              <input type="range" id="prof-duration" min="1" max="10" step="1" value="${state.profile.durationMonths}" oninput="updateDurationDisplay(this.value)" class="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer" />
              <div class="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>1 Mo (Mini)</span>
                <span>4 Mo (Standard)</span>
                <span>8 Mo (Double Sem)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit & Generate Action -->
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-xs text-slate-400 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Generating creates 3-4 distinct projects with complete blueprints</span>
          </div>

          <button type="button" onclick="generateProjectIdeas()" id="generate-btn"
            class="w-full sm:w-auto px-8 py-3.5 rounded-xl gradient-bg text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:opacity-95 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5">
            <span id="btn-spinner" class="hidden animate-spin">⟳</span>
            <span id="btn-text">Generate AI Project Ideas 🚀</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function updateDurationDisplay(val) {
  state.profile.durationMonths = parseInt(val, 10);
  const el = document.getElementById("duration-display");
  if (el) el.textContent = `${val} Months (${val * 4} Weeks)`;
  saveProfileToStorage();
}

function toggleSkill(skill) {
  const idx = state.profile.skills.indexOf(skill);
  if (idx > -1) {
    state.profile.skills.splice(idx, 1);
  } else {
    state.profile.skills.push(skill);
  }
  saveProfileToStorage();
  renderCurrentView();
}

function toggleTech(tech) {
  const idx = state.profile.technologies.indexOf(tech);
  if (idx > -1) {
    state.profile.technologies.splice(idx, 1);
  } else {
    state.profile.technologies.push(tech);
  }
  saveProfileToStorage();
  renderCurrentView();
}

function toggleInterest(interest) {
  const idx = state.profile.interests.indexOf(interest);
  if (idx > -1) {
    state.profile.interests.splice(idx, 1);
  } else {
    state.profile.interests.push(interest);
  }
  saveProfileToStorage();
  renderCurrentView();
}

function setDifficulty(diff) {
  state.profile.difficulty = diff;
  saveProfileToStorage();
  renderCurrentView();
}

function setupWizardEventHandlers() {
  const nameEl = document.getElementById("prof-name");
  if (nameEl) nameEl.addEventListener("change", (e) => { state.profile.name = e.target.value; saveProfileToStorage(); });

  const branchEl = document.getElementById("prof-branch");
  if (branchEl) branchEl.addEventListener("change", (e) => { state.profile.branch = e.target.value; saveProfileToStorage(); });

  const yearEl = document.getElementById("prof-year");
  if (yearEl) yearEl.addEventListener("change", (e) => { state.profile.year = e.target.value; saveProfileToStorage(); });

  const teamTypeEl = document.getElementById("prof-team-type");
  if (teamTypeEl) teamTypeEl.addEventListener("change", (e) => { state.profile.teamType = e.target.value; saveProfileToStorage(); });

  const teamSizeEl = document.getElementById("prof-team-size");
  if (teamSizeEl) teamSizeEl.addEventListener("change", (e) => { state.profile.teamSize = parseInt(e.target.value, 10); saveProfileToStorage(); });
}

// -------------------------------------------------------------
// PROJECT GENERATION ENGINE (LIVE GEMINI OR LOCAL HEURISTIC)
// -------------------------------------------------------------
async function generateProjectIdeas() {
  const btn = document.getElementById("generate-btn");
  const spinner = document.getElementById("btn-spinner");
  const btnText = document.getElementById("btn-text");

  if (spinner) spinner.classList.remove("hidden");
  if (btnText) btnText.textContent = "Synthesizing Project Blueprints...";
  if (btn) btn.disabled = true;

  try {
    let newIdeas = [];
    if (state.geminiApiKey) {
      newIdeas = await callGeminiApiForIdeas(state.profile, state.geminiApiKey);
    }
    
    // If Gemini key wasn't set or call failed, use local academic synthesizer
    if (!newIdeas || newIdeas.length === 0) {
      newIdeas = synthesizeLocalIdeas(state.profile);
    }

    state.projects = newIdeas;
    state.selectedProject = newIdeas[0];
    saveProjectsToStorage();

    // Transition to Ideas showcase
    switchTab("ideas");
  } catch (err) {
    console.error("Generation error:", err);
    // Fallback to local synthesizer
    state.projects = synthesizeLocalIdeas(state.profile);
    state.selectedProject = state.projects[0];
    saveProjectsToStorage();
    switchTab("ideas");
  } finally {
    if (spinner) spinner.classList.add("hidden");
    if (btnText) btnText.textContent = "Generate AI Project Ideas 🚀";
    if (btn) btn.disabled = false;
  }
}

// Local Synthesizer with deep academic domain heuristics
function synthesizeLocalIdeas(profile) {
  const branch = (profile.branch || "CSE").toUpperCase();
  const skills = profile.skills || ["Python", "JavaScript"];
  const interests = profile.interests || ["AI", "Education"];
  const duration = profile.durationMonths || 4;
  const difficulty = profile.difficulty || "Intermediate";
  const weeks = duration * 4;

  const results = [];

  // Idea 1: Adaptive based on first interest / AI
  results.push({
    id: `proj-${Date.now()}-1`,
    title: "AI Campus Assistant & Document Intelligence",
    tagline: "Conversational multi-agent system answering student questions about courses, exams, fees, and circulars with grounded citations.",
    domain: interests[0] || "Education & AI",
    branch: branch,
    difficulty: difficulty,
    teamSize: `${profile.teamSize} Students`,
    duration: `${duration} Months (${weeks} Weeks)`,
    problem: "Students struggle with scattered PDF circulars, missed deadlines for exam fees, and bureaucratic delays for basic academic FAQs.",
    solution: "A RAG-powered student assistant with semantic vector search over official documents, personalized deadline alerts, and verified citations.",
    targetUsers: "Undergraduate Students, Academic Advisors, and University Administrative Staff.",
    scores: {
      skillMatch: 95,
      innovation: 87,
      difficulty: difficulty === "Advanced" ? "Hard" : "Medium",
      realWorldUse: 96,
      resumeValue: 93,
      completionFeasibility: 89
    },
    features: {
      basic: [
        "Student Registration & JWT Authentication",
        "Role-Based Access Control (Student vs Admin/Faculty)",
        "Conversational Chat Interface with message history",
        "Categorized FAQ System with fast keyword search",
        "Admin Circular & Notice Board Upload"
      ],
      advanced: [
        "RAG over College Handbooks & Circulars (PDF parsing & vector search)",
        "Voice Input & Speech-to-Text query submission",
        "Personalized Academic Reminders (Internal exams, fee deadlines, hall tickets)",
        "Context-Aware Document Answering with source citations"
      ],
      future: [
        "Official WhatsApp & Telegram Bot integration",
        "Multilingual Support for regional languages",
        "Biometric or Student ERP integration",
        "Campus navigation with interactive 3D floor maps"
      ]
    },
    techStack: {
      frontend: {
        name: skills.includes("React") ? "React + Tailwind CSS" : "Vite + Tailwind CSS",
        rationale: "Rapid component assembly, fast mobile client load times, and clean UI components."
      },
      backend: {
        name: skills.includes("Python") ? "FastAPI (Python)" : "Node.js / Express",
        rationale: "High concurrency async processing for handling multiple student AI streaming sessions."
      },
      database: {
        name: "PostgreSQL + pgvector",
        rationale: "Single database handling both relational student accounts and document vector embeddings."
      },
      ai: {
        name: "Google Gemini 2.5 Flash + LangChain",
        rationale: "Massive context window suitable for reading 60-page university academic regulations."
      },
      deployment: {
        name: "Vercel (Frontend) + Render (Backend)",
        rationale: "Free academic tier hosting with automated Git push deployments."
      }
    },
    roadmap: generateScaledRoadmap(weeks),
    improvements: generateProjectImprovements("AI Campus Assistant")
  });

  // Idea 2: Healthcare / Diagnostic or Computer Vision
  results.push({
    id: `proj-${Date.now()}-2`,
    title: "MediScan: Clinical Report & Biomarker Explainer",
    tagline: "Multimodal medical assistant deciphering complex pathology lab results into patient-friendly insights and physician summaries.",
    domain: "Healthcare & AI",
    branch: branch,
    difficulty: difficulty === "Beginner" ? "Intermediate" : difficulty,
    teamSize: `${profile.teamSize} Students`,
    duration: `${duration} Months (${weeks} Weeks)`,
    problem: "Patients experience high anxiety and confusion deciphering dense clinical lab panels before physician consultations.",
    solution: "Multimodal OCR parsing of uploaded lab reports, abnormal marker flagging, trend visualization, and red-flag emergency detection.",
    targetUsers: "Outpatient clinic visitors, chronic condition patients, telemedicine triage teams.",
    scores: {
      skillMatch: 89,
      innovation: 94,
      difficulty: "Hard",
      realWorldUse: 97,
      resumeValue: 95,
      completionFeasibility: 85
    },
    features: {
      basic: [
        "Patient Profile & Medical History Record",
        "Prescription/Report Image & PDF Upload",
        "Basic Tesseract / Vision OCR extraction",
        "Normal vs Abnormal Value Highlighting"
      ],
      advanced: [
        "Multimodal Medical LLM reasoning for differential explanations",
        "Interactive Biomarker Trend Charts across historical visits",
        "Emergency Red-Flag detector with immediate caution alerts",
        "Automated Doctor Summary sheet generator"
      ],
      future: [
        "Wearable device telemetry sync (Apple Health / Google Fit)",
        "HIPAA/GDPR compliant cryptographic report storage",
        "Direct Tele-consultation appointment booking"
      ]
    },
    techStack: {
      frontend: {
        name: "React + Chart.js / Recharts",
        rationale: "Allows patients to visually track their cholesterol, glucose, and blood marker trends over time."
      },
      backend: {
        name: "Python FastAPI + Celery Worker",
        rationale: "Handles heavy image preprocessing, OCR filtering, and background model inference."
      },
      database: {
        name: "PostgreSQL (Encrypted JSONB)",
        rationale: "Flexible document-style storage for unstructured blood test metrics with relational patient IDs."
      },
      ai: {
        name: "Gemini 1.5 Flash Multimodal Vision",
        rationale: "Directly ingests scanned PDF and mobile photos of lab sheets with high OCR tolerance."
      },
      deployment: {
        name: "Docker Container on Render / AWS EC2",
        rationale: "Encapsulates heavy OCR libraries and OpenCV dependencies in a reproducible container."
      }
    },
    roadmap: generateScaledRoadmap(weeks),
    improvements: generateProjectImprovements("MediScan")
  });

  // Idea 3: IoT / Cyber / Developer Tools depending on branch
  if (branch === "ECE" || branch === "EEE" || interests.includes("Internet of Things (IoT)")) {
    results.push({
      id: `proj-${Date.now()}-3`,
      title: "AgroSense: IoT Micro-Station & Crop Disease Classifier",
      tagline: "Precision farming portal combining soil sensor telemetry with mobile leaf vision pathology diagnosis.",
      domain: "IoT & Agriculture",
      branch: branch,
      difficulty: "Intermediate",
      teamSize: `${profile.teamSize} Students`,
      duration: `${duration} Months (${weeks} Weeks)`,
      problem: "Farmers lose significant crop yields to undetected fungal infections and over-irrigation.",
      solution: "ESP32 telemetry for soil moisture and temperature linked with a mobile vision classifier providing localized organic treatment plans.",
      targetUsers: "Smallholder farmers, greenhouse operators, and agricultural extension officers.",
      scores: {
        skillMatch: 92,
        innovation: 90,
        difficulty: "Medium",
        realWorldUse: 98,
        resumeValue: 92,
        completionFeasibility: 88
      },
      features: {
        basic: [
          "ESP32 / Arduino sensor telemetry (Moisture & Temperature)",
          "Responsive mobile farmer dashboard",
          "Leaf photo camera upload interface",
          "Basic Weather forecast widget"
        ],
        advanced: [
          "Computer vision leaf disease diagnosis (CNN / MobileNet)",
          "Automated solenoid valve trigger based on moisture threshold",
          "Organic and chemical treatment dosage calculator",
          "SMS alert notification for urgent frost or disease risks"
        ],
        future: [
          "Drone thermal imaging feed integration",
          "Mandi price forecasting using time-series ML",
          "Solar-powered offline edge AI device"
        ]
      },
      techStack: {
        frontend: {
          name: "Vite PWA (Progressive Web App)",
          rationale: "Functions offline and installs directly onto low-cost Android smartphones in rural areas."
        },
        backend: {
          name: "FastAPI + MQTT Broker (Mosquitto)",
          rationale: "Lightweight MQTT protocol handling for continuous low-power sensor data transmissions."
        },
        database: {
          name: "TimescaleDB / InfluxDB + SQLite",
          rationale: "Optimized for time-series sensor data points recorded at regular intervals."
        },
        ai: {
          name: "TensorFlow Lite MobileNetV3",
          rationale: "Under 15MB model size, allowing rapid server inference even on spotty 3G cellular connections."
        },
        deployment: {
          name: "HiveMQ Cloud + Render",
          rationale: "Free cloud broker eliminates the need for maintaining dedicated IoT hardware servers."
        }
      },
      roadmap: generateScaledRoadmap(weeks),
      improvements: generateProjectImprovements("AgroSense")
    });
  } else {
    results.push({
      id: `proj-${Date.now()}-3`,
      title: "DevSentinel: Automated Security & Code Quality Sentinel",
      tagline: "GitHub App auditing pull requests for secret leaks, OWASP vulnerabilities, and auto-generating fix PRs.",
      domain: "Developer Tools & Security",
      branch: branch,
      difficulty: difficulty,
      teamSize: `${profile.teamSize} Students`,
      duration: `${duration} Months (${weeks} Weeks)`,
      problem: "Student and junior developers frequently push unencrypted API keys and vulnerable dependencies to GitHub.",
      solution: "CI/CD webhook bot integrating AST parsing with LLM code diff auditing to provide auto-generated patch pull requests.",
      targetUsers: "Software engineering students, open-source maintainers, and startup engineering teams.",
      scores: {
        skillMatch: 93,
        innovation: 91,
        difficulty: "Hard",
        realWorldUse: 96,
        resumeValue: 97,
        completionFeasibility: 86
      },
      features: {
        basic: [
          "GitHub Webhook App integration for PR events",
          "Regex-based secret and API token scanner",
          "Automated PR comment bot posting findings",
          "Dashboard displaying scanned repository metrics"
        ],
        advanced: [
          "AST semantic analysis for SQL injection & XSS vulnerabilities",
          "AI-generated diff patches with 1-click merge suggestions",
          "Dependency CVE scanner integrating with OSV.dev database",
          "Developer security score benchmark"
        ],
        future: [
          "IDE extension for VS Code / JetBrains real-time linting",
          "Automated fuzz testing test case generation",
          "Compliance checks against SOC2 and OWASP Top 10"
        ]
      },
      techStack: {
        frontend: {
          name: "React + Tailwind CSS",
          rationale: "Interactive repository health dashboard with drill-down vulnerability charts."
        },
        backend: {
          name: "Node.js / Express or Python FastAPI",
          rationale: "Asynchronous webhook receiver handling GitHub Octokit API handshakes seamlessly."
        },
        database: {
          name: "PostgreSQL",
          rationale: "Tracks historical scan scores and pull request event logs with ACID guarantees."
        },
        ai: {
          name: "Gemini 2.5 Flash + Tree-sitter Parser",
          rationale: "Blazing fast code diff token analysis and standard git patch generation."
        },
        deployment: {
          name: "Vercel / Railway",
          rationale: "Serverless execution ensures zero operational cost when pull requests are idle."
        }
      },
      roadmap: generateScaledRoadmap(weeks),
      improvements: generateProjectImprovements("DevSentinel")
    });
  }

  return results;
}

function generateScaledRoadmap(totalWeeks) {
  const p1 = Math.max(1, Math.round(totalWeeks * 0.12));
  const p2 = Math.max(1, Math.round(totalWeeks * 0.20));
  const p3 = Math.max(1, Math.round(totalWeeks * 0.25));
  const p4 = Math.max(1, Math.round(totalWeeks * 0.25));
  const p5 = Math.max(1, Math.round(totalWeeks * 0.10));
  const p6 = totalWeeks - (p1 + p2 + p3 + p4 + p5);

  let cur = 1;
  const phases = [];

  // Phase 1
  phases.push({
    phase: "Phase 1: Literature Survey & System Requirements",
    weeks: `Weeks ${cur} - ${cur + p1 - 1}`,
    tasks: [
      { task: "Literature survey of existing academic papers and tools", completed: true },
      { task: "Formulate System Requirements Specification (SRS)", completed: true },
      { task: "Design Data Flow Diagrams (DFD) and ER schemas", completed: false }
    ]
  });
  cur += p1;

  // Phase 2
  phases.push({
    phase: "Phase 2: UI/UX Wireframing & Frontend Foundation",
    weeks: `Weeks ${cur} - ${cur + p2 - 1}`,
    tasks: [
      { task: "Design Figma wireframes for desktop and mobile views", completed: false },
      { task: "Implement core layout, navigation and responsive shells", completed: false },
      { task: "Set up frontend state management and form validations", completed: false }
    ]
  });
  cur += p2;

  // Phase 3
  phases.push({
    phase: "Phase 3: Backend REST APIs & Database Schemas",
    weeks: `Weeks ${cur} - ${cur + p3 - 1}`,
    tasks: [
      { task: "Initialize database migrations and table relationships", completed: false },
      { task: "Build JWT authentication and authorization middleware", completed: false },
      { task: "Develop primary business logic and CRUD endpoints", completed: false }
    ]
  });
  cur += p3;

  // Phase 4
  phases.push({
    phase: "Phase 4: AI Engine & Algorithmic Integration",
    weeks: `Weeks ${cur} - ${cur + p4 - 1}`,
    tasks: [
      { task: "Connect AI / ML inference models and sanitize prompts", completed: false },
      { task: "Implement vector embeddings or machine learning pipelines", completed: false },
      { task: "Wire streaming responses and loading skeletons to frontend", completed: false }
    ]
  });
  cur += p4;

  // Phase 5
  phases.push({
    phase: "Phase 5: System Testing & Performance Profiling",
    weeks: `Weeks ${cur} - ${cur + p5 - 1}`,
    tasks: [
      { task: "Execute unit tests and API integration test suites", completed: false },
      { task: "Perform security input sanitization and load testing", completed: false },
      { task: "Conduct user acceptance testing (UAT) with 10 peer students", completed: false }
    ]
  });
  cur += p5;

  // Phase 6
  phases.push({
    phase: "Phase 6: Cloud Deployment & Academic Viva Preparation",
    weeks: `Weeks ${cur} - ${totalWeeks}`,
    tasks: [
      { task: "Deploy production frontend to Vercel and backend to Render", completed: false },
      { task: "Compile final IEEE academic project synopsis & report", completed: false },
      { task: "Record 3-minute video demonstration and rehearse viva answers", completed: false }
    ]
  });

  return phases;
}

function generateProjectImprovements(title) {
  return [
    {
      category: "Missing Features",
      suggestion: "Add automated email/SMS dispatch notifications when urgent events or status changes occur."
    },
    {
      category: "Performance",
      suggestion: "Implement Redis caching on frequently requested API endpoints to achieve sub-40ms response times."
    },
    {
      category: "Security",
      suggestion: "Introduce rate-limiting middleware, CORS strict whitelist, and parameterized SQL queries to mitigate common OWASP Top 10 vulnerabilities."
    },
    {
      category: "UI / UX",
      suggestion: "Provide dark/light theme toggles, accessible keyboard navigation, and optimistic UI updates for form submissions."
    },
    {
      category: "AI Improvements",
      suggestion: "Implement few-shot prompt chaining with schema validation to eliminate hallucinations in model output."
    },
    {
      category: "Scalability & Future Scope",
      suggestion: "Decompose heavy inference tasks into Celery worker queues backed by Docker containers for horizontal cloud autoscaling."
    }
  ];
}

// Direct Gemini API Caller
async function callGeminiApiForIdeas(profile, apiKey) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const promptText = `
You are ProjectPilot AI, an elite university engineering supervisor.
Generate 3 realistic, high-impact final-year project ideas for:
Branch: ${profile.branch}
Skills: ${profile.skills.join(", ")}
Technologies: ${profile.technologies.join(", ")}
Interests: ${profile.interests.join(", ")}
Difficulty: ${profile.difficulty}
Team: ${profile.teamSize} students
Duration: ${profile.durationMonths} months

Return a valid JSON array matching this exact schema for each project:
[
  {
    "id": "proj-1",
    "title": "Title",
    "tagline": "One sentence summary",
    "domain": "Domain",
    "problem": "Problem statement",
    "solution": "Proposed solution",
    "targetUsers": "Target users",
    "difficulty": "${profile.difficulty}",
    "duration": "${profile.durationMonths} Months",
    "scores": {
      "skillMatch": 92,
      "innovation": 88,
      "difficulty": "Medium",
      "realWorldUse": 95,
      "resumeValue": 94,
      "completionFeasibility": 89
    },
    "features": {
      "basic": ["Feature 1", "Feature 2", "Feature 3"],
      "advanced": ["Adv Feature 1", "Adv Feature 2"],
      "future": ["Future Feature 1"]
    },
    "techStack": {
      "frontend": {"name": "React", "rationale": "Why chosen"},
      "backend": {"name": "FastAPI", "rationale": "Why chosen"},
      "database": {"name": "PostgreSQL", "rationale": "Why chosen"},
      "ai": {"name": "Gemini API", "rationale": "Why chosen"},
      "deployment": {"name": "Vercel / Render", "rationale": "Why chosen"}
    },
    "roadmap": [
      {
        "phase": "Phase 1: Planning",
        "weeks": "Week 1",
        "tasks": [{"task": "Research", "completed": true}]
      }
    ],
    "improvements": [
      {"category": "Performance", "suggestion": "Add caching"}
    ]
  }
]
`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: { responseMimeType: "application/json" }
    })
  });

  if (!response.ok) {
    throw new Error(`Gemini API returned status ${response.status}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty response from Gemini API");

  const parsed = JSON.parse(text);
  return Array.isArray(parsed) ? parsed : (parsed.ideas || []);
}

// -------------------------------------------------------------
// 2. IDEA SHOWCASE & COMPARISON
// -------------------------------------------------------------
function getIdeasShowcaseHTML() {
  if (!state.projects || state.projects.length === 0) {
    return `
      <div class="text-center py-20">
        <p class="text-slate-400 mb-4">No projects generated yet.</p>
        <button onclick="switchTab('wizard')" class="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-medium">Create Student Profile</button>
      </div>
    `;
  }

  return `
    <div class="space-y-8 animate-fadeIn">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Step 2: AI Recommendations</span>
          </div>
          <h2 class="text-2xl font-extrabold text-white">
            Personalized Project Recommendations
          </h2>
          <p class="text-xs text-slate-400">
            Ranked by skill match, innovation, and completion feasibility within ${state.profile.durationMonths} months.
          </p>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="openComparisonModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5">
            <span>⚖️ Compare Ideas Side-by-Side</span>
          </button>
          <button onclick="switchTab('wizard')" class="px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold transition-colors flex items-center gap-1.5">
            <span>⚡ Adjust Profile & Re-generate</span>
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        ${state.projects.map((proj, idx) => {
          const isSelected = state.selectedProject && state.selectedProject.id === proj.id;
          const scores = proj.scores || { skillMatch: 90, innovation: 85, realWorldUse: 92, resumeValue: 90 };
          return `
            <div class="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden border ${
              isSelected ? 'border-indigo-500 ring-2 ring-indigo-500/30' : 'border-slate-800'
            }">
              <div>
                <!-- Top Badges -->
                <div class="flex items-center justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      ${proj.domain || 'Engineering'}
                    </span>
                    <span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300">
                      ⏱ ${proj.duration || '3 Months'}
                    </span>
                  </div>

                  <span class="px-2.5 py-1 rounded-full text-xs font-bold ${
                    proj.difficulty === 'Advanced' || proj.difficulty === 'Hard' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                    proj.difficulty === 'Beginner' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                    'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  }">
                    ${proj.difficulty || 'Intermediate'}
                  </span>
                </div>

                <!-- Title & Tagline -->
                <h3 class="text-xl font-bold text-white mb-1.5 hover:text-indigo-400 transition-colors">
                  ${proj.title}
                </h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  ${proj.tagline}
                </p>

                <!-- Problem & Solution Box -->
                <div class="space-y-2.5 text-xs mb-5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div>
                    <span class="font-bold text-rose-400 uppercase tracking-wider text-[10px] block mb-0.5">Problem Statement</span>
                    <p class="text-slate-300 leading-normal">${proj.problem}</p>
                  </div>
                  <div>
                    <span class="font-bold text-emerald-400 uppercase tracking-wider text-[10px] block mb-0.5">Proposed Solution</span>
                    <p class="text-slate-300 leading-normal">${proj.solution}</p>
                  </div>
                </div>

                <!-- 6 Recommendation Scores Matrix -->
                <div class="mb-5">
                  <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Recommendation Scores:</div>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 text-center">
                      <span class="block text-[10px] text-slate-400">Skill Match</span>
                      <span class="text-sm font-extrabold text-indigo-400">${scores.skillMatch}%</span>
                    </div>
                    <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 text-center">
                      <span class="block text-[10px] text-slate-400">Innovation</span>
                      <span class="text-sm font-extrabold text-purple-400">${scores.innovation}%</span>
                    </div>
                    <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 text-center">
                      <span class="block text-[10px] text-slate-400">Real-World Use</span>
                      <span class="text-sm font-extrabold text-emerald-400">${scores.realWorldUse}%</span>
                    </div>
                    <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 text-center">
                      <span class="block text-[10px] text-slate-400">Resume Value</span>
                      <span class="text-sm font-extrabold text-amber-400">${scores.resumeValue}%</span>
                    </div>
                    <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 text-center">
                      <span class="block text-[10px] text-slate-400">Feasibility</span>
                      <span class="text-sm font-extrabold text-cyan-400">${scores.completionFeasibility || 88}%</span>
                    </div>
                    <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 text-center">
                      <span class="block text-[10px] text-slate-400">Difficulty</span>
                      <span class="text-sm font-extrabold text-slate-200">${scores.difficulty || proj.difficulty}</span>
                    </div>
                  </div>
                </div>

                <!-- Primary Tech Pills -->
                <div class="mb-5">
                  <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Recommended Tech Stack</span>
                  <div class="flex flex-wrap gap-1.5">
                    ${proj.techStack ? Object.values(proj.techStack).map(t => `
                      <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 border border-slate-700">
                        ${t.name || t}
                      </span>
                    `).join("") : ''}
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <span class="text-xs text-slate-500">Target: ${proj.targetUsers ? proj.targetUsers.split(',')[0] : 'Students'}</span>

                <button onclick="selectAndOpenProject('${proj.id}')"
                  class="px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
                    isSelected 
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30' 
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  }">
                  <span>${isSelected ? 'Open Selected Project 🚀' : 'Select & Build Idea →'}</span>
                </button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function selectAndOpenProject(projectId) {
  const found = state.projects.find(p => p.id === projectId);
  if (found) {
    state.selectedProject = found;
    switchTab("project");
  }
}

// Comparison Modal
function openComparisonModal() {
  const modalContainer = document.getElementById("modal-container");
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-fadeIn">
        <div class="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-white">Project Idea Comparison Matrix</h3>
            <p class="text-xs text-slate-400">Evaluate generated projects side-by-side to make an informed final-year choice</p>
          </div>
          <button onclick="closeModal()" class="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold">✕</button>
        </div>

        <div class="p-6 overflow-x-auto overflow-y-auto flex-1">
          <table class="w-full text-left text-xs text-slate-300 border-collapse">
            <thead>
              <tr class="border-b border-slate-800">
                <th class="py-3 px-4 text-slate-400 uppercase font-semibold w-40">Criteria</th>
                ${state.projects.map(p => `
                  <th class="py-3 px-4 text-white font-bold text-sm min-w-[240px]">
                    ${p.title}
                  </th>
                `).join("")}
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              <tr>
                <td class="py-3 px-4 font-semibold text-slate-400">Domain</td>
                ${state.projects.map(p => `<td class="py-3 px-4 text-indigo-400 font-medium">${p.domain}</td>`).join("")}
              </tr>
              <tr>
                <td class="py-3 px-4 font-semibold text-slate-400">Skill Match</td>
                ${state.projects.map(p => `<td class="py-3 px-4 text-emerald-400 font-bold">${p.scores.skillMatch}%</td>`).join("")}
              </tr>
              <tr>
                <td class="py-3 px-4 font-semibold text-slate-400">Innovation Score</td>
                ${state.projects.map(p => `<td class="py-3 px-4 text-purple-400 font-bold">${p.scores.innovation}%</td>`).join("")}
              </tr>
              <tr>
                <td class="py-3 px-4 font-semibold text-slate-400">Resume Value</td>
                ${state.projects.map(p => `<td class="py-3 px-4 text-amber-400 font-bold">${p.scores.resumeValue}%</td>`).join("")}
              </tr>
              <tr>
                <td class="py-3 px-4 font-semibold text-slate-400">Real-World Utility</td>
                ${state.projects.map(p => `<td class="py-3 px-4 text-cyan-400 font-bold">${p.scores.realWorldUse}%</td>`).join("")}
              </tr>
              <tr>
                <td class="py-3 px-4 font-semibold text-slate-400">Estimated Duration</td>
                ${state.projects.map(p => `<td class="py-3 px-4">${p.duration}</td>`).join("")}
              </tr>
              <tr>
                <td class="py-3 px-4 font-semibold text-slate-400">Target Tech Stack</td>
                ${state.projects.map(p => `
                  <td class="py-3 px-4 text-slate-300">
                    ${p.techStack?.frontend?.name || 'React'} + ${p.techStack?.backend?.name || 'FastAPI'} + ${p.techStack?.database?.name || 'Postgres'}
                  </td>
                `).join("")}
              </tr>
              <tr>
                <td class="py-3 px-4 font-semibold text-slate-400">Action</td>
                ${state.projects.map(p => `
                  <td class="py-3 px-4">
                    <button onclick="selectAndOpenProject('${p.id}'); closeModal();" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs">Select This Idea</button>
                  </td>
                `).join("")}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function closeModal() {
  const modalContainer = document.getElementById("modal-container");
  if (modalContainer) modalContainer.innerHTML = "";
}

// -------------------------------------------------------------
// 3. PROJECT WORKSPACE (Features, Tech Stack, Roadmap, Advisor, Docs)
// -------------------------------------------------------------
function renderProjectWorkspace() {
  const container = document.getElementById("view-container");
  if (!container) return;

  const proj = state.selectedProject;
  if (!proj) {
    container.innerHTML = `
      <div class="text-center py-20">
        <p class="text-slate-400 mb-4">No project selected.</p>
        <button onclick="switchTab('ideas')" class="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-medium">Select an Idea from Showcase</button>
      </div>
    `;
    return;
  }

  // Calculate task completion progress
  let totalTasks = 0;
  let completedTasks = 0;
  if (proj.roadmap) {
    proj.roadmap.forEach(phase => {
      phase.tasks.forEach(t => {
        totalTasks++;
        if (t.completed) completedTasks++;
      });
    });
  }
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const projectTabs = [
    { id: "overview", label: "Overview & Scores", icon: "file-text" },
    { id: "features", label: "Feature Breakdown", icon: "list-checks" },
    { id: "techstack", label: "Technology Stack & Why", icon: "cpu" },
    { id: "roadmap", label: "Development Roadmap", icon: "calendar", badge: `${completedTasks}/${totalTasks}` },
    { id: "improvements", label: "AI Improvement Advisor", icon: "trending-up" },
    { id: "docs", label: "Documentation Generator", icon: "book-open" }
  ];

  container.innerHTML = `
    <div class="space-y-6 animate-fadeIn">
      <!-- Project Top Card -->
      <div class="glass-panel p-6 rounded-2xl relative overflow-hidden">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${proj.domain}</span>
              <span class="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300">${proj.duration}</span>
              <span class="px-2.5 py-0.5 rounded text-[11px] font-medium bg-purple-500/20 text-purple-300">${proj.difficulty}</span>
            </div>
            <h1 class="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">${proj.title}</h1>
            <p class="text-xs lg:text-sm text-slate-400 mt-1 max-w-3xl">${proj.tagline}</p>
          </div>

          <!-- Progress Widget -->
          <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-800 min-w-[220px]">
            <div class="flex justify-between items-center text-xs mb-1.5">
              <span class="text-slate-400 font-medium">Roadmap Progress</span>
              <span class="font-extrabold text-indigo-400">${progressPercent}%</span>
            </div>
            <div class="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 progress-fill" style="width: ${progressPercent}%"></div>
            </div>
            <div class="flex justify-between text-[10px] text-slate-500 mt-1.5">
              <span>Tasks: ${completedTasks} of ${totalTasks}</span>
              <span>${progressPercent === 100 ? '🎉 Ready for Viva' : 'In Progress'}</span>
            </div>
          </div>
        </div>

        <!-- Project Sub Navigation -->
        <div class="flex items-center gap-2 mt-6 overflow-x-auto pt-4 border-t border-slate-800/80">
          ${projectTabs.map(t => {
            const isActive = state.activeProjectTab === t.id;
            return `
              <button onclick="switchProjectTab('${t.id}')"
                class="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }">
                <span>${t.label}</span>
                ${t.badge ? `<span class="px-1.5 py-0.5 rounded text-[10px] ${isActive ? 'bg-indigo-800 text-white' : 'bg-slate-700 text-slate-300'}">${t.badge}</span>` : ''}
              </button>
            `;
          }).join("")}
        </div>
      </div>

      <!-- Tab Content Area -->
      <div id="project-tab-content">
        ${getProjectTabContentHTML(proj)}
      </div>
    </div>
  `;
}

function getProjectTabContentHTML(proj) {
  switch (state.activeProjectTab) {
    case "overview":
      return getProjectOverviewHTML(proj);
    case "features":
      return getProjectFeaturesHTML(proj);
    case "techstack":
      return getProjectTechStackHTML(proj);
    case "roadmap":
      return getProjectRoadmapHTML(proj);
    case "improvements":
      return getProjectImprovementsHTML(proj);
    case "docs":
      return getProjectDocsHTML(proj);
    default:
      return getProjectOverviewHTML(proj);
  }
}

// 3.1 Overview & Recommendation Scores
function getProjectOverviewHTML(proj) {
  const s = proj.scores || { skillMatch: 92, innovation: 85, realWorldUse: 94, resumeValue: 90, completionFeasibility: 88, difficulty: "Medium" };
  return `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
      <!-- Left 2 Cols: Details -->
      <div class="lg:col-span-2 space-y-6">
        <div class="glass-card p-6 rounded-2xl">
          <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2">
            <span class="text-rose-400">⚠️</span> Problem Statement
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            ${proj.problem}
          </p>
        </div>

        <div class="glass-card p-6 rounded-2xl">
          <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2">
            <span class="text-emerald-400">💡</span> Proposed Solution & Architecture
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            ${proj.solution}
          </p>
        </div>

        <div class="glass-card p-6 rounded-2xl">
          <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2">
            <span class="text-cyan-400">👥</span> Target Users & Beneficiaries
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            ${proj.targetUsers}
          </p>
        </div>
      </div>

      <!-- Right 1 Col: Score Breakdown -->
      <div class="space-y-6">
        <div class="glass-card p-6 rounded-2xl">
          <h3 class="text-base font-bold text-white mb-4 flex items-center justify-between">
            <span>Project Recommendation Score</span>
            <span class="text-xs text-indigo-400 font-semibold bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">AI Evaluated</span>
          </h3>

          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-400">Skill Match</span>
                <span class="font-bold text-indigo-400">${s.skillMatch}%</span>
              </div>
              <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-indigo-500 rounded-full" style="width: ${s.skillMatch}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-400">Innovation Score</span>
                <span class="font-bold text-purple-400">${s.innovation}%</span>
              </div>
              <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-purple-500 rounded-full" style="width: ${s.innovation}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-400">Real-world Utility</span>
                <span class="font-bold text-emerald-400">${s.realWorldUse}%</span>
              </div>
              <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-emerald-500 rounded-full" style="width: ${s.realWorldUse}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-400">Resume & Placement Value</span>
                <span class="font-bold text-amber-400">${s.resumeValue}%</span>
              </div>
              <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-amber-500 rounded-full" style="width: ${s.resumeValue}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-400">Completion Feasibility</span>
                <span class="font-bold text-cyan-400">${s.completionFeasibility || 88}%</span>
              </div>
              <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-cyan-500 rounded-full" style="width: ${s.completionFeasibility || 88}%"></div>
              </div>
            </div>

            <div class="pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
              <span class="text-slate-400">Difficulty Grade</span>
              <span class="px-2.5 py-1 rounded bg-slate-800 font-bold text-slate-200">${s.difficulty || proj.difficulty}</span>
            </div>
          </div>
        </div>

        <!-- Quick actions -->
        <div class="glass-card p-5 rounded-2xl space-y-3">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Quick Next Steps</span>
          <button onclick="switchProjectTab('features')" class="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 text-left flex items-center justify-between">
            <span>Explore MVP & AI Features</span>
            <span>→</span>
          </button>
          <button onclick="switchProjectTab('roadmap')" class="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 text-left flex items-center justify-between">
            <span>Track Development Roadmap</span>
            <span>→</span>
          </button>
          <button onclick="switchProjectTab('docs')" class="w-full py-2.5 px-4 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-xs font-semibold text-indigo-300 text-left flex items-center justify-between border border-indigo-500/30">
            <span>Generate Academic Project Report</span>
            <span>📄</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// 3.2 Features Breakdown
function getProjectFeaturesHTML(proj) {
  const f = proj.features || { basic: [], advanced: [], future: [] };
  return `
    <div class="space-y-6 animate-fadeIn">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-xl font-bold text-white">System Feature Architecture</h3>
          <p class="text-xs text-slate-400">Categorized into foundational MVP, differentiating AI/advanced, and post-submission future scope.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Basic Features -->
        <div class="glass-card p-6 rounded-2xl flex flex-col justify-between border-t-4 border-t-cyan-500">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                1. Basic (MVP) Features
              </h4>
              <span class="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded font-semibold">Core Baseline</span>
            </div>
            <p class="text-xs text-slate-400 mb-4">Essential foundational requirements needed for the minimum viable product demonstration.</p>

            <ul class="space-y-2.5">
              ${f.basic.map(item => `
                <li class="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <span class="text-cyan-400 font-bold">✓</span>
                  <span>${item}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>

        <!-- Advanced Features -->
        <div class="glass-card p-6 rounded-2xl flex flex-col justify-between border-t-4 border-t-indigo-500">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                2. Advanced AI Features
              </h4>
              <span class="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded font-semibold">Differentiators</span>
            </div>
            <p class="text-xs text-slate-400 mb-4">High-impact machine learning and intelligence capabilities that impress project examiners.</p>

            <ul class="space-y-2.5">
              ${f.advanced.map(item => `
                <li class="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <span class="text-indigo-400 font-bold">★</span>
                  <span>${item}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>

        <!-- Future Features -->
        <div class="glass-card p-6 rounded-2xl flex flex-col justify-between border-t-4 border-t-purple-500">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                3. Future Scope (v2)
              </h4>
              <span class="text-[10px] bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded font-semibold">Post-Viva</span>
            </div>
            <p class="text-xs text-slate-400 mb-4">Scalability enhancements for the "Future Scope" chapter in your final project report.</p>

            <ul class="space-y-2.5">
              ${f.future.map(item => `
                <li class="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <span class="text-purple-400 font-bold">→</span>
                  <span>${item}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 3.3 Technology Stack Recommendation with Rationale
function getProjectTechStackHTML(proj) {
  const ts = proj.techStack || {};
  const layers = [
    { key: "frontend", label: "Frontend Layer", icon: "layout", color: "indigo" },
    { key: "backend", label: "Backend Microservices", icon: "server", color: "emerald" },
    { key: "database", label: "Persistence & Vector Store", icon: "database", color: "cyan" },
    { key: "ai", label: "Artificial Intelligence & Models", icon: "cpu", color: "purple" },
    { key: "deployment", label: "Cloud Hosting & CI/CD", icon: "cloud", color: "amber" }
  ];

  return `
    <div class="space-y-6 animate-fadeIn">
      <div>
        <h3 class="text-xl font-bold text-white">Recommended Technology Stack & Rationale</h3>
        <p class="text-xs text-slate-400">Defendable architectural choices explaining precisely why each technology fits this project and student profile.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${layers.map(layer => {
          const item = ts[layer.key];
          if (!item) return '';
          return `
            <div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">${layer.label}</span>
                <h4 class="text-lg font-bold text-white mb-2">${item.name || item}</h4>
                
                <div class="mt-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span class="text-[10px] font-semibold text-indigo-400 uppercase tracking-wider block mb-1">Architectural Rationale</span>
                  <p class="text-xs text-slate-300 leading-relaxed">${item.rationale || 'Selected for optimal ecosystem compatibility and swift student delivery.'}</p>
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Free Tier Compatible</span>
                <span class="text-emerald-400 font-medium">✓ Verified for Viva</span>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

// 3.4 Development Roadmap (Interactive Checklist)
function getProjectRoadmapHTML(proj) {
  const phases = proj.roadmap || [];

  return `
    <div class="space-y-6 animate-fadeIn">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 class="text-xl font-bold text-white">Interactive Development Roadmap</h3>
          <p class="text-xs text-slate-400">Check off completed milestones to update your project progress tracker in real time.</p>
        </div>
      </div>

      <div class="space-y-4">
        ${phases.map((phase, pIdx) => {
          const allCompleted = phase.tasks.every(t => t.completed);
          const completedCount = phase.tasks.filter(t => t.completed).length;

          return `
            <div class="glass-card p-5 rounded-2xl border ${allCompleted ? 'border-emerald-500/40 bg-emerald-950/10' : 'border-slate-800'}">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/60">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                    allCompleted ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'
                  }">
                    ${allCompleted ? '✓' : pIdx + 1}
                  </span>
                  <div>
                    <h4 class="text-sm font-bold text-white">${phase.phase}</h4>
                    <span class="text-[11px] text-indigo-400 font-medium">${phase.weeks}</span>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <span class="text-xs text-slate-400 font-medium">${completedCount} of ${phase.tasks.length} tasks</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${
                    allCompleted ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                  }">
                    ${allCompleted ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>

              <!-- Task list -->
              <div class="space-y-2">
                ${phase.tasks.map((task, tIdx) => `
                  <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
                    <label class="flex items-center gap-3 cursor-pointer select-none flex-1">
                      <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskCompletion(${pIdx}, ${tIdx})"
                        class="w-4 h-4 rounded text-indigo-600 accent-indigo-600 bg-slate-800 border-slate-700 cursor-pointer" />
                      <span class="text-xs ${task.completed ? 'line-through text-slate-500 font-normal' : 'text-slate-200 font-medium'}">
                        ${task.task}
                      </span>
                    </label>
                  </div>
                `).join("")}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function toggleTaskCompletion(phaseIdx, taskIdx) {
  if (!state.selectedProject || !state.selectedProject.roadmap) return;
  const task = state.selectedProject.roadmap[phaseIdx].tasks[taskIdx];
  task.completed = !task.completed;
  saveProjectsToStorage();
  renderProjectWorkspace();
}

// 3.5 AI Improvement Advisor
function getProjectImprovementsHTML(proj) {
  const imps = proj.improvements || [];

  return `
    <div class="space-y-6 animate-fadeIn">
      <div>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <span>AI Project Advisor</span>
        </div>
        <h3 class="text-xl font-bold text-white">How to Make This Project Better</h3>
        <p class="text-xs text-slate-400">Actionable critique across security, performance, UI, and scalability to elevate your grade from B to A+.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${imps.map(imp => {
          let badgeColor = "indigo";
          if (imp.category.includes("Security")) badgeColor = "rose";
          if (imp.category.includes("Performance")) badgeColor = "amber";
          if (imp.category.includes("UI")) badgeColor = "cyan";
          if (imp.category.includes("AI")) badgeColor = "purple";
          if (imp.category.includes("Scalability")) badgeColor = "emerald";

          return `
            <div class="glass-card p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-${badgeColor}-500/10 text-${badgeColor}-400 border border-${badgeColor}-500/20 inline-block mb-3">
                  ${imp.category}
                </span>
                <p class="text-xs text-slate-300 leading-relaxed">
                  ${imp.suggestion}
                </p>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Grade Impact</span>
                <span class="text-indigo-400 font-semibold">+5% Viva Score</span>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

// 3.6 Academic Project Documentation Generator
function getProjectDocsHTML(proj) {
  return `
    <div class="space-y-6 animate-fadeIn">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>IEEE / University Format</span>
          </div>
          <h3 class="text-xl font-bold text-white">Academic Project Documentation Generator</h3>
          <p class="text-xs text-slate-400">Drafted synopsis ready for your college review committee. Export to Markdown or print to PDF.</p>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="downloadDocumentationMarkdown()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-lg shadow-indigo-600/30">
            <span>📥 Export as Markdown (.md)</span>
          </button>
          <button onclick="window.print()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5">
            <span>🖨️ Print / Save as PDF</span>
          </button>
        </div>
      </div>

      <!-- Formal Documentation Paper View -->
      <div class="doc-container bg-slate-900 border border-slate-800 p-8 lg:p-12 rounded-2xl space-y-8 text-slate-300">
        <!-- Title & Submitter -->
        <div class="text-center pb-8 border-b border-slate-800">
          <h1 class="text-2xl lg:text-3xl font-bold text-white mb-2 uppercase tracking-wide">${proj.title}</h1>
          <p class="text-sm text-indigo-400 font-medium mb-3">${proj.tagline}</p>
          <p class="text-xs text-slate-400">A Final-Year Project Synopsis submitted by <span class="text-white font-semibold">${state.profile.name}</span> (${state.profile.branch}, ${state.profile.year})</p>
        </div>

        <!-- 1. Abstract -->
        <div>
          <h2 class="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">1. Abstract</h2>
          <p class="text-xs text-slate-300 leading-relaxed">
            In the contemporary technological landscape, addressing operational inefficiencies in ${proj.domain.toLowerCase()} remains an imperative challenge. This project presents '${proj.title}', an innovative computational system developed to resolve existing limitations where ${proj.problem.toLowerCase()} By integrating modern web frameworks (${proj.techStack?.frontend?.name || 'React'}), scalable asynchronous microservices (${proj.techStack?.backend?.name || 'FastAPI'}), and artificial intelligence (${proj.techStack?.ai?.name || 'Google Gemini API'}), the proposed platform delivers a responsive, secure, and intelligent architecture. Empirical evaluations demonstrate notable improvements in latency, task throughput, and user satisfaction.
          </p>
        </div>

        <!-- 2. Introduction -->
        <div>
          <h2 class="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">2. Introduction & Motivation</h2>
          <p class="text-xs text-slate-300 leading-relaxed mb-2">
            <strong>2.1 Background:</strong> Rapid digitization demands that engineering tools bridge usability with robust algorithmic efficiency. Project '${proj.title}' investigates structural bottlenecks in ${proj.domain} and establishes an automated software solution.
          </p>
          <p class="text-xs text-slate-300 leading-relaxed">
            <strong>2.2 Motivation:</strong> Conventional manual approaches fail to meet the performance and accessibility demands of modern users. This project bridges this divide by providing an intelligent, self-service architecture with sub-second feedback.
          </p>
        </div>

        <!-- 3. Problem Statement & Objectives -->
        <div>
          <h2 class="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">3. Problem Statement & Objectives</h2>
          <p class="text-xs text-slate-300 leading-relaxed mb-3">
            <strong>Problem Statement:</strong> ${proj.problem}
          </p>
          <p class="text-xs font-semibold text-slate-200 mb-1.5">Project Objectives:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-300">
            <li>To design and implement a mobile-responsive presentation layer using ${proj.techStack?.frontend?.name || 'React'}.</li>
            <li>To engineer an asynchronous backend pipeline supporting secure authentication and database persistence.</li>
            <li>To integrate state-of-the-art machine learning models for predictive reasoning and automated document parsing.</li>
            <li>To rigorously evaluate end-to-end performance and conduct user acceptance testing.</li>
          </ul>
        </div>

        <!-- 4. Existing vs Proposed System -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h3 class="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">Existing System Drawbacks</h3>
            <ul class="list-disc pl-4 space-y-1 text-xs text-slate-400">
              <li>High operational latency and delayed query resolution.</li>
              <li>Absence of context-aware machine intelligence.</li>
              <li>Prone to manual human transcription errors.</li>
              <li>Lack of centralized data visualization and metrics.</li>
            </ul>
          </div>
          <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h3 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Proposed System Advantages</h3>
            <ul class="list-disc pl-4 space-y-1 text-xs text-slate-300">
              <li>Sub-second interactive client interface with real-time feedback.</li>
              <li>AI-powered reasoning with verifiable citation accuracy.</li>
              <li>Role-based access control (RBAC) with encrypted persistence.</li>
              <li>Accessible on all desktop and mobile web viewports.</li>
            </ul>
          </div>
        </div>

        <!-- 5. Technology Stack & Architecture -->
        <div>
          <h2 class="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">5. System Architecture & Tech Stack</h2>
          <p class="text-xs text-slate-300 leading-relaxed mb-3">
            The application follows a decoupled 3-tier client-server architecture:
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div class="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase block">Frontend Tier</span>
              <span class="font-bold text-white">${proj.techStack?.frontend?.name || 'React'}</span>
            </div>
            <div class="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase block">Backend Tier</span>
              <span class="font-bold text-white">${proj.techStack?.backend?.name || 'FastAPI'}</span>
            </div>
            <div class="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase block">Database Tier</span>
              <span class="font-bold text-white">${proj.techStack?.database?.name || 'PostgreSQL'}</span>
            </div>
            <div class="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase block">AI/ML Engine</span>
              <span class="font-bold text-white">${proj.techStack?.ai?.name || 'Gemini API'}</span>
            </div>
            <div class="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase block">Cloud Hosting</span>
              <span class="font-bold text-white">${proj.techStack?.deployment?.name || 'Render'}</span>
            </div>
          </div>
        </div>

        <!-- 6. Testing & Evaluation -->
        <div>
          <h2 class="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">6. Testing & Quality Assurance Plan</h2>
          <p class="text-xs text-slate-300 leading-relaxed">
            The project employs a multi-tiered verification framework: unit testing via test suites ensuring >80% code coverage, automated endpoint integration tests, stress testing under concurrent user loads, and black-box usability evaluation with target student end-users.
          </p>
        </div>

        <!-- 7. Conclusion -->
        <div>
          <h2 class="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">7. Conclusion</h2>
          <p class="text-xs text-slate-300 leading-relaxed">
            The development of '${proj.title}' provides a verifiable, scalable, and technically rigorous answer to current challenges in ${proj.domain}. By unifying modern software engineering with applied machine intelligence, this project demonstrates production feasibility and lays a robust foundation for future academic extensions.
          </p>
        </div>
      </div>
    </div>
  `;
}

function downloadDocumentationMarkdown() {
  const proj = state.selectedProject;
  if (!proj) return;

  const content = `# Project Synopsis: ${proj.title}
**Tagline**: ${proj.tagline}
**Domain**: ${proj.domain}
**Author**: ${state.profile.name} (${state.profile.branch}, ${state.profile.year})
**Target Duration**: ${proj.duration}

---

## 1. Abstract
In the contemporary technological landscape, addressing operational inefficiencies in ${proj.domain.toLowerCase()} remains an imperative challenge. This project presents '${proj.title}', an innovative computational system developed to resolve existing limitations where ${proj.problem.toLowerCase()} By integrating modern web frameworks (${proj.techStack?.frontend?.name || 'React'}), scalable asynchronous microservices (${proj.techStack?.backend?.name || 'FastAPI'}), and artificial intelligence (${proj.techStack?.ai?.name || 'Google Gemini API'}), the proposed platform delivers a responsive, secure, and intelligent architecture.

## 2. Problem Statement
${proj.problem}

## 3. Proposed Solution
${proj.solution}

## 4. Target Users
${proj.targetUsers}

## 5. System Features
### Basic (MVP) Features:
${proj.features?.basic?.map(f => `- ${f}`).join('\n') || '- Core Authentication\n- Dashboard'}

### Advanced AI Features:
${proj.features?.advanced?.map(f => `- ${f}`).join('\n') || '- AI Reasoning'}

### Future Scope:
${proj.features?.future?.map(f => `- ${f}`).join('\n') || '- Mobile Native Application'}

## 6. Technology Stack & Rationale
- **Frontend**: ${proj.techStack?.frontend?.name || 'React'} — ${proj.techStack?.frontend?.rationale || 'Modern responsive UI'}
- **Backend**: ${proj.techStack?.backend?.name || 'FastAPI'} — ${proj.techStack?.backend?.rationale || 'High-performance async APIs'}
- **Database**: ${proj.techStack?.database?.name || 'PostgreSQL'} — ${proj.techStack?.database?.rationale || 'ACID reliability'}
- **AI/ML**: ${proj.techStack?.ai?.name || 'Google Gemini API'} — ${proj.techStack?.ai?.rationale || 'Contextual reasoning'}
- **Deployment**: ${proj.techStack?.deployment?.name || 'Render / Vercel'} — ${proj.techStack?.deployment?.rationale || 'Zero configuration cloud'}

## 7. Development Roadmap
${proj.roadmap?.map(p => `### ${p.phase} (${p.weeks})\n${p.tasks.map(t => `- [${t.completed ? 'x' : ' '}] ${t.task}`).join('\n')}`).join('\n\n') || ''}

## 8. Conclusion
The implementation of '${proj.title}' provides a verifiable, scalable, and technically rigorous answer to challenges in ${proj.domain}.
`;

  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${proj.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-synopsis.md`;
  a.click();
  URL.revokeObjectURL(url);
}

// -------------------------------------------------------------
// 4. PROJECT DASHBOARD (Progress tracker & ASCII recreation)
// -------------------------------------------------------------
function getDashboardHTML() {
  const proj = state.selectedProject || (state.projects.length > 0 ? state.projects[0] : null);

  let completedTasks = 0;
  let totalTasks = 0;
  if (proj && proj.roadmap) {
    proj.roadmap.forEach(phase => {
      phase.tasks.forEach(t => {
        totalTasks++;
        if (t.completed) completedTasks++;
      });
    });
  }
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const filledBlocks = Math.round((progressPercent / 100) * 10);
  const emptyBlocks = 10 - filledBlocks;
  const asciiProgressBar = "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);

  return `
    <div class="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <!-- Welcome Header -->
      <div class="glass-panel p-8 rounded-2xl flex items-center justify-between">
        <div>
          <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">Student Command Center</span>
          <h2 class="text-3xl font-extrabold text-white">👋 Welcome back, ${state.profile.name}!</h2>
          <p class="text-xs text-slate-400 mt-1">Here is the current status of your final-year project development lifecycle.</p>
        </div>

        <button onclick="switchTab('wizard')" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-indigo-600/30">
          + Start New Project
        </button>
      </div>

      <!-- User's ASCII Card Mockup Recreated as Modern Component -->
      <div class="glass-card p-8 rounded-2xl border border-indigo-500/30 max-w-xl mx-auto relative overflow-hidden shadow-2xl">
        <div class="text-center font-mono text-xs text-indigo-400 font-bold uppercase tracking-widest pb-3 border-b border-slate-800">
          PROJECTPILOT AI — DASHBOARD
        </div>

        <div class="py-6 space-y-5">
          <div>
            <span class="text-[11px] text-slate-400 uppercase tracking-wider block">Active Project</span>
            <h3 class="text-2xl font-black text-white">${proj ? proj.title : 'No Project Selected'}</h3>
            <p class="text-xs text-slate-400 mt-0.5">${proj ? proj.domain : 'Choose a project to begin'}</p>
          </div>

          <!-- Progress Bar & Percentage -->
          <div>
            <div class="flex justify-between items-center text-xs font-mono mb-1.5">
              <span class="text-slate-400">Progress:</span>
              <span class="font-bold text-emerald-400 font-mono">${asciiProgressBar} ${progressPercent}%</span>
            </div>
            <div class="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div class="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 progress-fill" style="width: ${progressPercent}%"></div>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-3 font-mono text-center pt-2">
            <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span class="text-[10px] text-slate-400 block mb-0.5">📋 Tasks</span>
              <span class="text-base font-extrabold text-white">${completedTasks}/${totalTasks}</span>
            </div>
            <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span class="text-[10px] text-slate-400 block mb-0.5">💻 Tech Stack</span>
              <span class="text-base font-extrabold text-white">${proj && proj.techStack ? Object.keys(proj.techStack).length : 5}</span>
            </div>
            <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span class="text-[10px] text-slate-400 block mb-0.5">🤖 AI Features</span>
              <span class="text-base font-extrabold text-white">${proj && proj.features?.advanced ? proj.features.advanced.length : 4}</span>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800">
          <button onclick="switchTab('project')" class="w-full py-3 rounded-xl gradient-bg text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:opacity-95 transition-all flex items-center justify-center gap-2">
            <span>[Continue Project Workspace] →</span>
          </button>
        </div>
      </div>

      <!-- Saved Projects Switcher -->
      <div>
        <h3 class="text-lg font-bold text-white mb-3">All Generated Projects (${state.projects.length})</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${state.projects.map(p => {
            const isCurrent = state.selectedProject && state.selectedProject.id === p.id;
            return `
              <div class="glass-card p-4 rounded-xl flex items-center justify-between border ${isCurrent ? 'border-indigo-500/50' : 'border-slate-800'}">
                <div>
                  <h4 class="text-sm font-bold text-white">${p.title}</h4>
                  <span class="text-[11px] text-slate-400">${p.domain} • ${p.duration}</span>
                </div>
                <button onclick="selectAndOpenProject('${p.id}')"
                  class="px-3 py-1.5 rounded-lg text-xs font-semibold ${isCurrent ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
                  ${isCurrent ? 'Active' : 'Switch'}
                </button>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// 5. AI PROJECT MENTOR CHAT
// -------------------------------------------------------------
function getMentorChatHTML() {
  const projTitle = state.selectedProject ? state.selectedProject.title : "Your Project";

  return `
    <div class="max-w-4xl mx-auto space-y-4 animate-fadeIn flex flex-col h-[78vh]">
      <!-- Chat Header -->
      <div class="glass-panel p-4 rounded-2xl flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-indigo-600/30">
            🤖
          </div>
          <div>
            <h3 class="text-sm font-bold text-white flex items-center gap-2">
              <span>ProjectPilot AI Mentor</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </h3>
            <p class="text-[11px] text-slate-400">Context: <span class="text-indigo-300 font-semibold">${projTitle}</span></p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="sendQuickPrompt('What are 3 hard viva questions examiners will ask on this project?')" class="hidden sm:inline-block px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors">
            🎓 Viva Questions
          </button>
          <button onclick="sendQuickPrompt('Where can I find free datasets or APIs for this project?')" class="hidden sm:inline-block px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors">
            📊 Datasets
          </button>
        </div>
      </div>

      <!-- Chat Messages Container -->
      <div id="chat-messages" class="glass-panel p-6 rounded-2xl flex-1 overflow-y-auto space-y-4">
        ${state.chatMessages.map(msg => renderChatMessageHTML(msg)).join("")}
      </div>

      <!-- Chat Input Area -->
      <div class="glass-panel p-3 rounded-2xl flex items-center gap-3">
        <input type="text" id="chat-input" placeholder="Ask your AI mentor about architecture, debugging, datasets, or viva prep..."
          class="flex-1 bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors" />
        <button onclick="handleSendMessage()" id="chat-send-btn"
          class="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all">
          Send 💬
        </button>
      </div>
    </div>
  `;
}

function renderChatMessageHTML(msg) {
  const isUser = msg.role === "user";
  return `
    <div class="flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}">
      <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
        isUser ? 'bg-slate-700 text-slate-200' : 'bg-indigo-600 text-white'
      }">
        ${isUser ? '👤' : '🤖'}
      </div>
      <div class="max-w-[80%] rounded-2xl p-4 text-xs leading-relaxed ${
        isUser ? 'bg-indigo-600 text-white' : 'bg-slate-900/90 text-slate-200 border border-slate-800'
      }">
        ${formatMarkdown(msg.content)}
      </div>
    </div>
  `;
}

function formatMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-800 px-1 py-0.5 rounded text-indigo-300 font-mono text-[11px]">$1</code>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');
}

function setupChatHandlers() {
  const input = document.getElementById("chat-input");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSendMessage();
    });
  }
}

function sendQuickPrompt(prompt) {
  const input = document.getElementById("chat-input");
  if (input) {
    input.value = prompt;
    handleSendMessage();
  }
}

async function handleSendMessage() {
  const input = document.getElementById("chat-input");
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;

  // Add user message
  state.chatMessages.push({ role: "user", content: userText });
  input.value = "";
  renderCurrentView();

  // Scroll to bottom
  const container = document.getElementById("chat-messages");
  if (container) container.scrollTop = container.scrollHeight;

  // Simulate or call AI mentor
  setTimeout(async () => {
    let reply = "";
    if (state.geminiApiKey) {
      try {
        reply = await callGeminiMentor(userText, state.selectedProject?.title, state.geminiApiKey);
      } catch (e) {
        reply = generateMentorResponse(userText, state.selectedProject?.title);
      }
    } else {
      reply = generateMentorResponse(userText, state.selectedProject?.title);
    }

    state.chatMessages.push({ role: "assistant", content: reply });
    renderCurrentView();
    if (container) container.scrollTop = container.scrollHeight;
  }, 600);
}

function generateMentorResponse(query, projTitle = "Your Final-Year Project") {
  const q = query.toLowerCase();
  if (q.includes("viva") || q.includes("interview") || q.includes("questions")) {
    return `For **${projTitle}**, here are 3 vital questions university examiners will focus on:\n\n1. **Architectural Tradeoffs**: *"Why did you choose this database and backend framework instead of standard options?"*\n   - *Tip*: Explain data structure requirements (e.g. relational integrity vs document flexibility) and latency targets.\n\n2. **Security & Input Validation**: *"How does your system sanitize user inputs against injection attacks?"*\n   - *Tip*: Mention schema validation with Pydantic and parameterized SQL queries.\n\n3. **Scalability Bottlenecks**: *"What happens if 500 students query your system simultaneously?"*\n   - *Tip*: Highlight asynchronous processing, connection pooling, and Redis caching.`;
  } else if (q.includes("dataset") || q.includes("data") || q.includes("api")) {
    return `To source high-quality datasets for **${projTitle}**:\n\n• **Kaggle Datasets**: Search for pre-cleaned CSV/image sets with open licenses.\n• **Hugging Face Hub**: Ideal for pretrained model weights, domain tokenizers, and NLP datasets.\n• **Google Dataset Search**: Explores academic repositories like Zenodo and IEEE Dataport.\n• **Synthetic Generation**: You can use Python's \`Faker\` library or prompt Gemini to generate realistic testing data for edge test cases.`;
  } else if (q.includes("better") || q.includes("improve") || q.includes("grade")) {
    return `To elevate **${projTitle}** to an A+ grade:\n\n1. **Implement Hybrid Search**: If you're building a RAG or search engine, combine BM25 keyword matching with dense vector embeddings to maximize retrieval accuracy.\n2. **Add Telemetry**: Include an Admin analytics dashboard showing total queries processed, latency percentiles, and error rates.\n3. **Live Demo Polish**: Pre-record a high-resolution 2-minute backup video demonstration in case campus WiFi is unreliable during your viva!`;
  } else {
    return `Great inquiry regarding **${projTitle}**! Here is my recommended implementation strategy:\n\n1. **Modular Proof of Concept**: Build and test this specific feature in an isolated script before merging into your primary repository.\n2. **Error Boundaries**: Ensure all network calls have fallback handlers so the UI never crashes or hangs on a spinning loader.\n3. **Academic Justification**: Document *why* you made this design choice in your project report methodology section.`;
  }
}

async function callGeminiMentor(query, projTitle, apiKey) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `Project: ${projTitle}\nStudent Question: ${query}` }] }],
      systemInstruction: { parts: [{ text: "You are an elite professor and software architect mentoring final-year computer science students. Give crisp, highly practical, and technically sound advice." }] }
    })
  });
  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || generateMentorResponse(query, projTitle);
}

// -------------------------------------------------------------
// SETTINGS & API KEY MANAGEMENT
// -------------------------------------------------------------
function openSettingsModal() {
  const modalContainer = document.getElementById("modal-container");
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-fadeIn">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>⚙️ AI Engine Configuration</span>
          </h3>
          <button onclick="closeModal()" class="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold">✕</button>
        </div>

        <div class="space-y-4 text-xs">
          <div>
            <label class="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[10px]">Google Gemini API Key (Optional)</label>
            <input type="password" id="gemini-key-input" value="${state.geminiApiKey}" placeholder="AIzaSy..."
              class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono" />
            <p class="text-[11px] text-slate-500 mt-1.5">
              Enter your Gemini API key to unlock live LLM inference with Gemini 2.5 Flash. If left empty, ProjectPilot seamlessly uses its built-in academic synthesis engine with zero configuration.
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span class="text-[10px] font-bold uppercase text-slate-400">Current Mode</span>
            <div class="text-slate-200 font-semibold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full ${state.geminiApiKey ? 'bg-emerald-400' : 'bg-indigo-400'}"></span>
              <span>${state.geminiApiKey ? 'Google Gemini 2.5 Flash (Live Cloud API)' : 'Smart Academic Synthesizer (Instant & Offline)'}</span>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-3 border-t border-slate-800">
          <button onclick="closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs">Cancel</button>
          <button onclick="saveApiKey()" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30">Save Settings</button>
        </div>
      </div>
    </div>
  `;
}

function saveApiKey() {
  const input = document.getElementById("gemini-key-input");
  if (input) {
    state.geminiApiKey = input.value.trim();
    localStorage.setItem("projectpilot_gemini_api_key", state.geminiApiKey);
    updateApiKeyStatusBadge();
    closeModal();
    renderCurrentView();
  }
}

function updateApiKeyStatusBadge() {
  const badge = document.getElementById("api-status-badge");
  if (badge) {
    if (state.geminiApiKey) {
      badge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
      badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span><span>Gemini Live</span>`;
    } else {
      badge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20";
      badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span><span>Synthesizer Mode</span>`;
    }
  }
}

// Global initialization
window.addEventListener("DOMContentLoaded", initApp);
