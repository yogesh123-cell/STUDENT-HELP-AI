"""
ProjectPilot AI — Project Generation & Recommendation Engine
Handles prompt engineering, Gemini API calls, and domain-specific academic synthesis.
"""
import os
import json
import uuid
from typing import List, Dict, Any, Optional

# Structured System Prompts
IDEA_GENERATION_SYSTEM_PROMPT = """You are ProjectPilot AI, an elite academic project supervisor and technical architect for undergraduate engineering and computer science students.
Your role is to guide students from "I don't know what project to make" to a crystal-clear, innovative, resume-grade project blueprint.

When given a student profile (Branch, Skills, Known Tech, Interests, Difficulty, Team Size, Duration in Months):
Generate 3 to 5 realistic, innovative, and practical project ideas that:
1. Directly leverage the student's existing skills while introducing 1-2 modern high-value tools.
2. Are genuinely feasible within the student's timeline and team size.
3. Solve a tangible, real-world problem (not generic toy apps like basic todo lists or calculators).
4. Provide high resume value for campus placements and software engineering interviews.
5. Include multi-dimensional scoring (Skill Match, Innovation, Real-world use, Resume value, Feasibility).

Return ONLY valid, raw JSON with no Markdown wrapping or conversational filler, conforming strictly to the requested schema.
"""

DOCUMENTATION_SYSTEM_PROMPT = """You are an academic project report evaluator and technical writer for university final-year engineering projects.
Generate a comprehensive, formal, IEEE-standard academic project documentation draft based on the provided project blueprint.
Ensure professional academic tone suitable for submission to university project review committees.
"""

MENTOR_SYSTEM_PROMPT = """You are ProjectPilot AI Mentor, an encouraging, deeply knowledgeable senior software architect and professor.
You help final-year engineering students execute their projects, troubleshoot architecture bottlenecks, explain complex algorithms, suggest datasets, and prepare for external viva exams.
Provide structured, actionable, and encouraging answers.
"""

class ProjectPilotEngine:
    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or os.environ.get("GEMINI_API_KEY")

    def build_generation_prompt(self, profile: Dict[str, Any]) -> str:
        return f"""
Student Profile:
- Branch / Specialization: {profile.get('branch', 'CSE')}
- Year / Level: {profile.get('year', 'Final Year')}
- Current Skills & Languages: {', '.join(profile.get('skills', ['Python', 'JavaScript']))}
- Frameworks & Technologies: {', '.join(profile.get('technologies', ['React', 'FastAPI']))}
- Domain Interests: {', '.join(profile.get('interests', ['AI', 'Education']))}
- Project Difficulty: {profile.get('difficulty', 'Intermediate')}
- Team Setup: {profile.get('team_type', 'Team')} ({profile.get('team_size', 3)} students)
- Available Duration: {profile.get('available_time_months', 4)} Months

Generate 3 diverse, high-impact final-year project ideas tailored precisely to this profile.

Format requirements: Return a JSON array of objects with the following keys:
[
  {{
    "id": "proj-uuid",
    "title": "Clear Project Title",
    "tagline": "One punchy sentence describing the core value",
    "domain": "Domain category",
    "problem": "Clear problem statement explaining why current approaches fall short",
    "solution": "Proposed technical solution with architecture highlights",
    "target_users": "Who uses this system",
    "difficulty": "Intermediate",
    "estimated_time": "{profile.get('available_time_months', 4)} Months",
    "scores": {{
      "skill_match": 92,
      "innovation": 85,
      "difficulty": "Medium",
      "real_world_use": 94,
      "resume_value": 90,
      "completion_feasibility": 88
    }},
    "features": {{
      "basic": ["Basic feature 1", "Basic feature 2", "Basic feature 3", "Basic feature 4"],
      "advanced": ["Advanced feature 1", "Advanced feature 2", "Advanced feature 3"],
      "future": ["Future feature 1", "Future feature 2"]
    }},
    "tech_stack": {{
      "frontend": {{"name": "React / Next.js", "rationale": "Why chosen for this project"}},
      "backend": {{"name": "Python FastAPI", "rationale": "Why chosen for this project"}},
      "database": {{"name": "PostgreSQL", "rationale": "Why chosen for this project"}},
      "ai": {{"name": "Gemini API / LangChain", "rationale": "Why chosen for this project"}},
      "deployment": {{"name": "Vercel / Render", "rationale": "Why chosen for this project"}}
    }},
    "roadmap": [
      {{
        "phase": "Phase 1: Planning & Research",
        "weeks": "Week 1",
        "tasks": [{{"task": "Requirement analysis", "completed": false}}]
      }}
    ],
    "improvements": [
      {{"category": "Missing Features", "suggestion": "Suggested enhancement"}},
      {{"category": "Performance", "suggestion": "Suggested performance tweak"}},
      {{"category": "Security", "suggestion": "Security safeguard"}},
      {{"category": "UI / UX", "suggestion": "Interface improvement"}},
      {{"category": "AI Improvements", "suggestion": "AI/ML capability boost"}},
      {{"category": "Scalability & Future Scope", "suggestion": "Scalability plan"}}
    ]
  }}
]
"""

    def generate_ideas_with_gemini(self, profile: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Invokes Gemini API via Google GenAI SDK if API key is present."""
        if not self.api_key:
            return self.synthesize_ideas(profile)

        try:
            from google import genai
            client = genai.Client(api_key=self.api_key)
            prompt = self.build_generation_prompt(profile)
            
            response = client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt,
                config={
                    'system_instruction': IDEA_GENERATION_SYSTEM_PROMPT,
                    'response_mime_type': 'application/json',
                    'temperature': 0.7,
                }
            )
            raw_text = response.text.strip()
            data = json.loads(raw_text)
            if isinstance(data, list):
                return data
            elif isinstance(data, dict) and "ideas" in data:
                return data["ideas"]
            return self.synthesize_ideas(profile)
        except Exception as e:
            print(f"Gemini API call failed, falling back to synthesizer: {e}")
            return self.synthesize_ideas(profile)

    def synthesize_ideas(self, profile: Dict[str, Any]) -> List[Dict[str, Any]]:
        """
        High-fidelity heuristic generator that dynamically adapts to student branch,
        skills, interests, and duration to produce tailored project blueprints.
        """
        branch = profile.get("branch", "CSE").upper()
        skills = [s.strip().lower() for s in profile.get("skills", [])]
        interests = [i.strip().lower() for i in profile.get("interests", [])]
        duration_months = int(profile.get("available_time_months", 4))
        difficulty = profile.get("difficulty", "Intermediate")
        team_size = profile.get("team_size", 3)

        # Domain matching
        is_ai = any("ai" in s or "ml" in s or "data" in s or "python" in s for s in skills + interests)
        is_iot = any("iot" in s or "hardware" in s or "embedded" in s or "ece" in branch or "eee" in branch for s in skills + interests)
        is_security = any("security" in s or "cyber" in s or "auth" in s for s in skills + interests)
        is_web = any("web" in s or "js" in s or "javascript" in s or "react" in s or "node" in s for s in skills + interests)

        duration_weeks = max(4, duration_months * 4)

        ideas = []

        # Idea 1: Primary Interest or AI/Education Assistant
        if "education" in interests or "ai" in interests or is_ai:
            ideas.append(self._create_blueprint(
                title="AI Campus Assistant & Smart Circulars RAG",
                tagline="Conversational academic intelligence agent resolving queries across college notices, syllabi, and administrative regulations.",
                domain="Education & AI",
                problem="University students struggle with scattered PDF circulars, missed deadlines for exam fees, and bureaucratic delays for basic academic FAQs.",
                solution="A RAG-powered student assistant with semantic vector search over official documents, personalized deadline alerts, and verified citations.",
                target_users="University students, faculty mentors, department heads, and campus administration.",
                skills=skills,
                duration_weeks=duration_weeks,
                difficulty=difficulty,
                base_score=93
            ))

        # Idea 2: Healthcare / Diagnostic or Computer Vision
        if "health" in interests or "medical" in interests or is_ai:
            ideas.append(self._create_blueprint(
                title="MediScan: Smart Clinical Report & Diagnostic Explainer",
                tagline="Patient-first lab report interpreter converting complex pathology blood markers into plain English insights and physician briefs.",
                domain="Healthcare & AI",
                problem="Patients experience high anxiety and confusion deciphering dense clinical lab panels before physician consultations.",
                solution="Multimodal OCR parsing of uploaded lab reports, abnormal marker flagging, trend visualization, and red-flag emergency detection.",
                target_users="Outpatient clinic visitors, chronic condition patients, telemedicine triage teams.",
                skills=skills,
                duration_weeks=duration_weeks,
                difficulty="Hard" if difficulty == "Advanced" else "Medium",
                base_score=91
            ))

        # Idea 3: IoT / Smart Systems (especially ECE, EEE or IoT interest)
        if is_iot or "iot" in interests or "agriculture" in interests:
            ideas.append(self._create_blueprint(
                title="AgroSense: IoT Micro-Station & Crop Disease Classifier",
                tagline="Precision agriculture system combining environmental telemetry with deep learning leaf pathology detection.",
                domain="IoT & Agriculture",
                problem="Farmers lose up to 30% of crop yields due to late disease detection and miscalibrated water irrigation schedules.",
                solution="ESP32 telemetry for soil moisture and temperature linked with a mobile vision classifier providing localized organic treatment plans.",
                target_users="Smallholder farmers, greenhouse operators, and agricultural extension officers.",
                skills=skills,
                duration_weeks=duration_weeks,
                difficulty=difficulty,
                base_score=89
            ))

        # Idea 4: Developer Tools / Cybersecurity / Automated Review
        if is_security or is_web or len(ideas) < 3:
            ideas.append(self._create_blueprint(
                title="DevSentinel: Automated Security & Code Quality Sentinel",
                tagline="GitHub bot scanning pull requests for secret leaks, OWASP Top 10 vulnerabilities, and performance anti-patterns.",
                domain="Developer Tools & Cybersecurity",
                problem="Student and junior developer repositories frequently leak hardcoded API tokens and introduce security vulnerabilities into production.",
                solution="CI/CD webhook bot integrating AST parsing with LLM code diff auditing to provide auto-generated patch pull requests.",
                target_users="Software engineering teams, open-source maintainers, and computer science students.",
                skills=skills,
                duration_weeks=duration_weeks,
                difficulty=difficulty,
                base_score=92
            ))

        # Idea 5: FinTech / Expense & Budget Planner with Smart Receipt Parsing
        if len(ideas) < 4:
            ideas.append(self._create_blueprint(
                title="PennyWise: AI Personal Finance & Bill Split Auditor",
                tagline="Smart expense tracker using receipt OCR, predictive budget forecasts, and automated shared-house ledger reconciliations.",
                domain="FinTech & Automation",
                problem="College roommates and young professionals struggle to track shared utility bills and maintain savings discipline.",
                solution="A zero-friction PWA that digitizes receipts with vision models, predicts upcoming month expenses, and settles debts via UPI/Stripe deep links.",
                target_users="College hostelers, flatmates, and early-career software developers.",
                skills=skills,
                duration_weeks=duration_weeks,
                difficulty="Medium",
                base_score=88
            ))

        return ideas[:4]

    def _create_blueprint(self, title: str, tagline: str, domain: str, problem: str,
                          solution: str, target_users: str, skills: List[str],
                          duration_weeks: int, difficulty: str, base_score: int) -> Dict[str, Any]:
        """Creates a fully elaborated project blueprint with roadmap, features, and rationale."""
        proj_id = f"proj-{uuid.uuid4().hex[:8]}"
        w_phase = max(1, duration_weeks // 6)

        return {
            "id": proj_id,
            "title": title,
            "tagline": tagline,
            "domain": domain,
            "problem": problem,
            "solution": solution,
            "target_users": target_users,
            "difficulty": difficulty,
            "estimated_time": f"{duration_weeks // 4} Months ({duration_weeks} Weeks)",
            "scores": {
                "skill_match": min(98, base_score + 3),
                "innovation": min(96, base_score + 1),
                "difficulty": difficulty,
                "real_world_use": min(97, base_score + 4),
                "resume_value": min(96, base_score + 2),
                "completion_feasibility": 90 if difficulty != "Advanced" else 84
            },
            "features": {
                "basic": [
                    "User Authentication & Secure Session Management",
                    "Intuitive Responsive Web & Mobile Dashboard",
                    "Data Ingestion & Validation Pipeline",
                    "Persistent Relational Database CRUD Operations",
                    "User Profile & Preference Management"
                ],
                "advanced": [
                    "Intelligent Machine Learning / AI Reasoning Pipeline",
                    "Real-time Analytics & Interactive Visual Charts",
                    "Exportable PDF / Word Summary Generator",
                    "Automated Email / SMS Event Notification Trigger"
                ],
                "future": [
                    "Native Mobile Application (iOS & Android via React Native)",
                    "Multilingual Vernacular Localization Support",
                    "Third-party API Webhook Integrations",
                    "Enterprise Single Sign-On (SSO) & Multi-tenancy"
                ]
            },
            "tech_stack": {
                "frontend": {
                    "name": "React / Next.js + Tailwind CSS",
                    "rationale": "Delivers a fast, modern component-based UI with rich interactive visualizations and minimal bundle overhead."
                },
                "backend": {
                    "name": "FastAPI (Python) or Node.js Express",
                    "rationale": "High throughput async performance, native OpenAPI documentation, and effortless AI/ML library integration."
                },
                "database": {
                    "name": "PostgreSQL (or SQLite for development)",
                    "rationale": "ACID compliance, relational data integrity, and support for vector extensions (pgvector)."
                },
                "ai": {
                    "name": "Google Gemini API + LangChain / Scikit-Learn",
                    "rationale": "State-of-the-art multimodal reasoning, massive context windows, and cost-effective academic tier."
                },
                "deployment": {
                    "name": "Vercel (Frontend) + Render / Railway (Backend)",
                    "rationale": "Free cloud tier, zero configuration continuous deployment directly from GitHub."
                }
            },
            "roadmap": [
                {
                    "phase": "Phase 1: Requirements & System Architecture",
                    "weeks": f"Weeks 1-{w_phase}",
                    "tasks": [
                        {"task": "Conduct literature survey and problem statement validation", "completed": True},
                        {"task": "Formulate System Requirements Specification (SRS)", "completed": True},
                        {"task": "Design Entity-Relationship (ER) and Data Flow Diagrams (DFD)", "completed": False}
                    ]
                },
                {
                    "phase": "Phase 2: UI Wireframing & Frontend Foundation",
                    "weeks": f"Weeks {w_phase+1}-{w_phase*2}",
                    "tasks": [
                        {"task": "Design responsive UX layouts in Figma", "completed": False},
                        {"task": "Build core dashboard components and routing structure", "completed": False},
                        {"task": "Implement client-side state management and form validation", "completed": False}
                    ]
                },
                {
                    "phase": "Phase 3: Backend REST APIs & Database Schema",
                    "weeks": f"Weeks {w_phase*2+1}-{w_phase*3}",
                    "tasks": [
                        {"task": "Set up database migrations and relational models", "completed": False},
                        {"task": "Implement JWT authentication and security headers", "completed": False},
                        {"task": "Create core CRUD RESTful endpoints with unit test coverage", "completed": False}
                    ]
                },
                {
                    "phase": "Phase 4: AI Engine & Core Algorithmic Integration",
                    "weeks": f"Weeks {w_phase*3+1}-{w_phase*4}",
                    "tasks": [
                        {"task": "Integrate AI API / Machine Learning inference pipeline", "completed": False},
                        {"task": "Implement prompt sanitization and fallback error handling", "completed": False},
                        {"task": "Connect frontend UI to AI endpoints with streaming indicators", "completed": False}
                    ]
                },
                {
                    "phase": "Phase 5: Testing, Validation & Performance Optimization",
                    "weeks": f"Weeks {w_phase*4+1}-{w_phase*5}",
                    "tasks": [
                        {"task": "Perform end-to-end integration and load testing", "completed": False},
                        {"task": "Run vulnerability audit and input sanitization checks", "completed": False},
                        {"task": "Conduct user evaluation session with peer engineering students", "completed": False}
                    ]
                },
                {
                    "phase": "Phase 6: Cloud Deployment & Academic Project Report",
                    "weeks": f"Weeks {w_phase*5+1}-{duration_weeks}",
                    "tasks": [
                        {"task": "Deploy production frontend to Vercel and backend to Render", "completed": False},
                        {"task": "Generate comprehensive academic synopsis and project report", "completed": False},
                        {"task": "Record 3-minute working video demo and prepare viva presentation slides", "completed": False}
                    ]
                }
            ],
            "improvements": [
                {
                    "category": "Missing Features",
                    "suggestion": "Introduce an automated notification system via WebSockets or email triggers for critical user events."
                },
                {
                    "category": "Performance",
                    "suggestion": "Implement server-side response caching with Redis to achieve sub-50ms latency for repeated read queries."
                },
                {
                    "category": "Security",
                    "suggestion": "Add strict rate limiting (SlowAPI), CORS origin lockdown, and parameterized SQL queries to block injection attacks."
                },
                {
                    "category": "UI / UX",
                    "suggestion": "Add accessible dark mode, micro-interactions, skeleton loading states, and keyboard shortcut navigation."
                },
                {
                    "category": "AI Improvements",
                    "suggestion": "Implement few-shot prompt chaining with structured JSON validation and automated fallback models."
                },
                {
                    "category": "Scalability & Future Scope",
                    "suggestion": "Decompose monolithic background jobs into Celery task workers with Docker containerization for auto-scaling."
                }
            ]
        }

    def generate_documentation(self, project: Dict[str, Any], student_name: str = "Engineering Student") -> Dict[str, Any]:
        """Generates a complete, formal academic project synopsis and report."""
        title = project.get("title", "Final Year Engineering Project")
        domain = project.get("domain", "Computer Science")
        problem = project.get("problem", "")
        solution = project.get("solution", "")
        tech_stack = project.get("tech_stack", {})

        frontend_name = tech_stack.get("frontend", {}).get("name", "React")
        backend_name = tech_stack.get("backend", {}).get("name", "FastAPI")
        db_name = tech_stack.get("database", {}).get("name", "PostgreSQL")
        ai_name = tech_stack.get("ai", {}).get("name", "Google Gemini API")

        return {
            "title": title,
            "student_name": student_name,
            "abstract": (
                f"In the contemporary technological landscape, addressing inefficiencies in {domain.lower()} "
                f"remains an imperative challenge. This project presents '{title}', an innovative software solution "
                f"developed to resolve existing limitations where {problem.lower()} By integrating modern web frameworks "
                f"({frontend_name}), robust asynchronous backend microservices ({backend_name}), and cutting-edge artificial intelligence "
                f"({ai_name}), the proposed system delivers a responsive, scalable, and intelligent platform. "
                f"Comprehensive empirical evaluations indicate significant improvements in response time, user task efficiency, and operational accuracy."
            ),
            "introduction": (
                f"1.1 Background\n"
                f"With rapid digitization, engineering solutions must balance usability, scalability, and domain precision. "
                f"Project '{title}' investigates systemic bottlenecks within {domain} and establishes an automated computational framework.\n\n"
                f"1.2 Motivation\n"
                f"Traditional manual and legacy computational systems frequently fail due to high latency, poor accessibility, "
                f"and absence of adaptive machine intelligence. This project bridges this gap by providing an end-to-end intelligent architecture."
            ),
            "problem_statement": (
                f"Existing architectures suffer from fundamental operational drawbacks: {problem} "
                f"There is an acute lack of an integrated, accessible, and intelligent tool that can reliably "
                f"streamline these operations for target stakeholders while maintaining security and high throughput."
            ),
            "objectives": [
                f"To design and implement a high-performance, responsive user portal using {frontend_name}.",
                f"To build secure, modular RESTful APIs and database schemas utilizing {backend_name} and {db_name}.",
                f"To integrate intelligent machine learning and reasoning pipelines via {ai_name}.",
                "To conduct rigorous functional, stress, and security evaluations ensuring production deployment readiness.",
                "To deliver open, verifiable academic documentation and an intuitive user experience."
            ],
            "existing_system": (
                "The existing workflow relies predominantly on manual coordination, disjointed legacy software, or unindexed static repositories. "
                "Drawbacks of the Existing System include:\n"
                "• High operational latency and delayed query resolution.\n"
                "• Absence of automated context-aware intelligence or machine learning assistance.\n"
                "• Vulnerability to manual entry errors and lack of centralized telemetry.\n"
                "• Sub-optimal mobile responsiveness and poor accessibility for end users."
            ),
            "proposed_system": (
                f"The proposed system, '{title}', overcomes these deficiencies through an integrated full-stack architecture:\n"
                f"• High-Speed Client Interface: Built with {frontend_name} ensuring sub-second screen loads and intuitive interactions.\n"
                f"• Robust Backend Engine: Engineered with {backend_name} featuring asynchronous request processing and JWT authentication.\n"
                f"• AI/ML Intelligence Layer: Powered by {ai_name} for predictive analytics, natural language comprehension, and automated summaries.\n"
                f"• Secure Persistence: Structured relational and vector indexing in {db_name} ensuring ACID consistency and data durability."
            ),
            "methodology": (
                "The project adopts an Agile-Scrum software engineering methodology divided into iterative sprints:\n"
                "1. Requirement Elicitation & Domain Modeling (Sprint 1)\n"
                "2. Wireframing, Schema Formulation & API Contracts (Sprint 2)\n"
                "3. Core Engine Development & AI Model Integration (Sprint 3-4)\n"
                "4. Comprehensive Integration, Unit, and Black-Box Testing (Sprint 5)\n"
                "5. Cloud Continuous Integration / Continuous Deployment (CI/CD) and Academic Defense (Sprint 6)."
            ),
            "functional_requirements": [
                "User Registration, Role-Based Access Control (RBAC), and Secure Token Authentication.",
                "Data Ingestion, Verification, and Sanitization Modules.",
                "Core Algorithmic Inference Engine with Streaming Output Support.",
                "Dynamic Reporting, Filtering, and Interactive Data Visualization.",
                "Audit Logging, System Health Monitoring, and Automated Error Alerts."
            ],
            "non_functional_requirements": [
                "Performance: API latency maintained under 300ms for 95th percentile requests.",
                "Security: End-to-end HTTPS encryption, bcrypt password hashing, and CORS origin restriction.",
                "Reliability: 99.5% service uptime with automated container recovery.",
                "Scalability: Stateless microservice design supporting concurrent horizontal scaling.",
                "Usability: Adherence to WCAG 2.1 AA accessibility standards across mobile and desktop devices."
            ],
            "technology_stack_description": (
                f"• Frontend Tier: {frontend_name} — Chosen for component modularity, fast rendering, and Tailwind CSS utility styling.\n"
                f"• Backend Tier: {backend_name} — Selected for asynchronous concurrency, auto-generated OpenAPI documentation, and Python ecosystem synergy.\n"
                f"• Database Tier: {db_name} — High performance ACID compliant storage supporting complex relational schemas.\n"
                f"• Artificial Intelligence Layer: {ai_name} — Provides enterprise-grade natural language parsing and high-accuracy inferences.\n"
                f"• DevOps & Cloud Hosting: Docker, GitHub Actions CI/CD, and Vercel/Render cloud infrastructure."
            ),
            "system_architecture_overview": (
                "The system employs a 3-tier decoupled architecture:\n"
                "1. Presentation Layer (SPA/Client Browser)\n"
                "2. Application Logic & AI Broker Layer (FastAPI REST Server)\n"
                "3. Data Persistence Layer (Relational DB & Vector Store)\n\n"
                "Communication between the Presentation and Application tiers occurs via secure RESTful JSON over HTTPS, "
                "with asynchronous background worker dispatch for heavy machine learning and PDF parsing workloads."
            ),
            "testing_plan": (
                "A multi-stage testing regimen was formulated:\n"
                "• Unit Testing: PyTest test suite verifying schema validation and CRUD handlers (>85% code coverage).\n"
                "• Integration Testing: Automated API integration testing verifying token handshakes and database transactions.\n"
                "• Performance & Load Testing: Locust / Artillery simulation testing with 100 concurrent virtual users.\n"
                "• User Acceptance Testing (UAT): Qualitative feedback survey conducted with 15 target users evaluating interface clarity."
            ),
            "future_scope": (
                f"Future extensions for '{title}' include:\n"
                "• Development of cross-platform native mobile applications (React Native / Flutter).\n"
                "• Vernacular localization and voice-assisted natural language interfaces.\n"
                "• Edge AI deployment on IoT microcontrollers for offline edge inference.\n"
                "• Direct enterprise ERP integrations via standardized webhooks."
            ),
            "conclusion": (
                f"The implementation of '{title}' demonstrates the effective synthesis of modern software engineering principles "
                f"and applied artificial intelligence to solve critical challenges in {domain.lower()}. By achieving all primary functional "
                f"and non-functional milestones, the project delivers a production-ready, academically rigorous system that provides "
                f"immediate practical utility and substantial foundational value for future engineering research."
            )
        }
