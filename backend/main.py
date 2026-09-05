"""
ProjectPilot AI — FastAPI Backend Application
Provides RESTful APIs for student profiling, project idea generation, scoring,
feature breakdown, tech stack rationale, development roadmap, AI improvements,
documentation generation, and mentor chat.
"""
import os
from typing import List, Dict, Any, Optional
from fastapi import FastAPI, Depends, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .models import (
    StudentProfile, ProjectIdea, ProjectGenerationResponse,
    DocumentationSections, ChatMessage, DBUser, DBProject,
    DBProjectFeature, DBRoadmapTask
)
from .database import init_db, get_db
from .engine import ProjectPilotEngine

app = FastAPI(
    title="ProjectPilot AI API",
    description="AI-powered Project Idea Generator & Implementation Assistant for Final-Year Students",
    version="1.0.0"
)

# CORS Configuration for local frontend and cloud deployments
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = ProjectPilotEngine()

@app.on_event("startup")
def on_startup():
    init_db()

@app.get("/")
def read_root():
    return {
        "app": "ProjectPilot AI",
        "tagline": "From Idea to Implementation",
        "status": "online",
        "docs_url": "/docs"
    }

@app.post("/api/generate-ideas", response_model=List[ProjectIdea])
def generate_ideas(profile: StudentProfile, api_key: Optional[str] = Query(None)):
    """
    Generates personalized final-year project ideas tailored to the student's
    skills, branch, interests, difficulty level, and available duration.
    """
    active_engine = ProjectPilotEngine(api_key=api_key) if api_key else engine
    try:
        ideas_raw = active_engine.generate_ideas_with_gemini(profile.dict())
        return ideas_raw
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/generate-documentation", response_model=DocumentationSections)
def generate_documentation(project: Dict[str, Any], student_name: str = "Student"):
    """
    Generates IEEE-format academic final-year project report sections.
    """
    try:
        doc = engine.generate_documentation(project, student_name=student_name)
        return doc
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/mentor-chat")
def mentor_chat(chat_request: ChatMessage, api_key: Optional[str] = Query(None)):
    """
    Interactive AI Project Mentor for architectural advice, viva questions, and debugging.
    """
    user_query = chat_request.content
    proj_context = chat_request.project_context or "General Engineering Project"
    
    # Check if Gemini key is available for dynamic response
    key = api_key or os.environ.get("GEMINI_API_KEY")
    if key:
        try:
            from google import genai
            client = genai.Client(api_key=key)
            prompt = f"Project Context: {proj_context}\nStudent Question: {user_query}"
            response = client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt,
                config={'system_instruction': "You are an elite academic project supervisor and architect. Give crisp, encouraging, highly technical and actionable advice."}
            )
            return {"reply": response.text.strip()}
        except Exception as e:
            pass

    # Heuristic mentor response
    query_lower = user_query.lower()
    if "viva" in query_lower or "interview" in query_lower:
        reply = (
            f"Here are 3 critical viva questions examiners frequently ask for '{proj_context}':\n"
            f"1. **Architectural Tradeoffs**: Why did you choose this tech stack over standard alternatives?\n"
            f"2. **Data & Scaling**: How does your database schema handle concurrent write spikes?\n"
            f"3. **Security & Edge Cases**: What safeguards prevent injection attacks or invalid inputs?\n\n"
            f"💡 **Tip**: When answering, always describe the problem you observed first before explaining your technical choice."
        )
    elif "dataset" in query_lower or "data" in query_lower:
        reply = (
            f"For '{proj_context}', I recommend sourcing clean datasets from:\n"
            f"• **Kaggle Datasets & Hugging Face Hub** for pre-labeled domain data.\n"
            f"• **Google Dataset Search & PapersWithCode** for benchmark evaluation sets.\n"
            f"• Synthetic data generation using Python `faker` or Gemini structured generation for edge test cases."
        )
    elif "api" in query_lower or "backend" in query_lower:
        reply = (
            f"For your backend architecture in '{proj_context}':\n"
            f"• Ensure strict Pydantic request validation on all inputs.\n"
            f"• Implement JWT tokens with 24-hour expiration for stateless session security.\n"
            f"• Use connection pooling in SQLAlchemy to keep database latency under 15ms."
        )
    else:
        reply = (
            f"Great question regarding '{proj_context}'! To implement this effectively:\n"
            f"1. **Break it down**: Start with a minimal proof-of-concept script before integrating into your main repo.\n"
            f"2. **Error Boundaries**: Wrap network calls with automated retries and clear UI toast notifications.\n"
            f"3. **Documentation**: Keep your README updated with curl examples for all API endpoints."
        )
    return {"reply": reply}

@app.get("/api/projects")
def list_projects(db: Session = Depends(get_db)):
    """Returns saved student projects from database."""
    projects = db.query(DBProject).all()
    return [{"id": p.id, "title": p.title, "domain": p.domain, "difficulty": p.difficulty, "status": p.status} for p in projects]

@app.post("/api/projects")
def save_project(project_data: Dict[str, Any], db: Session = Depends(get_db)):
    """Saves or updates a project blueprint in the database."""
    proj_id = project_data.get("id", "proj-1")
    existing = db.query(DBProject).filter(DBProject.id == proj_id).first()
    if not existing:
        new_proj = DBProject(
            id=proj_id,
            title=project_data.get("title", "Untitled Project"),
            tagline=project_data.get("tagline", ""),
            domain=project_data.get("domain", "General"),
            difficulty=project_data.get("difficulty", "Intermediate"),
            duration=project_data.get("estimated_time", "3 Months"),
            problem=project_data.get("problem", ""),
            solution=project_data.get("solution", ""),
            status="In Progress"
        )
        db.add(new_proj)
        db.commit()
        return {"status": "saved", "id": proj_id}
    else:
        existing.title = project_data.get("title", existing.title)
        existing.problem = project_data.get("problem", existing.problem)
        existing.solution = project_data.get("solution", existing.solution)
        db.commit()
        return {"status": "updated", "id": proj_id}
