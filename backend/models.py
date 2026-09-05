"""
ProjectPilot AI — Data Models
Pydantic Schemas for API requests/responses & SQLAlchemy ORM for persistence.
"""
from typing import List, Dict, Optional, Any
from pydantic import BaseModel, Field
from sqlalchemy import Column, Integer, String, Text, Boolean, ForeignKey, create_engine
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()

# ==========================================
# Pydantic Request & Response Schemas
# ==========================================

class StudentProfile(BaseModel):
    name: str = Field(default="Student", description="Student's name")
    branch: str = Field(..., description="Academic Branch (e.g. CSE, IT, ECE, AI/ML, Data Science)")
    year: str = Field(default="Final Year", description="Year / Semester")
    skills: List[str] = Field(default_factory=list, description="List of programming languages and skills")
    technologies: List[str] = Field(default_factory=list, description="Frameworks and tools known")
    interests: List[str] = Field(default_factory=list, description="Domains of interest (e.g. AI, Healthcare, IoT)")
    difficulty: str = Field(default="Intermediate", description="Beginner, Intermediate, Advanced")
    team_type: str = Field(default="Team", description="Individual or Team project")
    team_size: int = Field(default=3, description="Number of students in team")
    available_time_months: int = Field(default=4, description="Available development duration in months")

class ProjectScore(BaseModel):
    skill_match: int = Field(..., description="Percentage match with student skills (0-100)")
    innovation: int = Field(..., description="Innovation rating (0-100)")
    difficulty: str = Field(..., description="Difficulty category (Beginner, Medium, Hard)")
    real_world_use: int = Field(..., description="Real-world practical utility score (0-100)")
    resume_value: int = Field(..., description="Impact on student resume for campus placements (0-100)")
    completion_feasibility: int = Field(..., description="Feasibility within student's timeframe (0-100)")

class FeatureSet(BaseModel):
    basic: List[str] = Field(..., description="MVP and foundational features")
    advanced: List[str] = Field(..., description="Differentiating and AI-powered features")
    future: List[str] = Field(..., description="Post-submission or v2 scope")

class TechItem(BaseModel):
    name: str
    rationale: str

class TechStack(BaseModel):
    frontend: TechItem
    backend: TechItem
    database: TechItem
    ai: Optional[TechItem] = None
    deployment: TechItem

class RoadmapTask(BaseModel):
    task: str
    completed: bool = False

class RoadmapPhase(BaseModel):
    phase: str
    weeks: str
    tasks: List[RoadmapTask]

class ImprovementItem(BaseModel):
    category: str  # Missing Features, Performance, Security, UI/UX, AI Improvements, Scalability
    suggestion: str

class ProjectIdea(BaseModel):
    id: str
    title: str
    tagline: str
    domain: str
    problem: str
    solution: str
    target_users: str
    difficulty: str
    estimated_time: str
    scores: ProjectScore
    features: Optional[FeatureSet] = None
    tech_stack: Optional[TechStack] = None
    roadmap: Optional[List[RoadmapPhase]] = None
    improvements: Optional[List[ImprovementItem]] = None

class ProjectGenerationResponse(BaseModel):
    student_profile: StudentProfile
    ideas: List[ProjectIdea]

class DocumentationSections(BaseModel):
    title: str
    abstract: str
    introduction: str
    problem_statement: str
    objectives: List[str]
    existing_system: str
    proposed_system: str
    methodology: str
    functional_requirements: List[str]
    non_functional_requirements: List[str]
    technology_stack_description: str
    system_architecture_overview: str
    testing_plan: str
    future_scope: str
    conclusion: str

class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str
    project_context: Optional[str] = None

# ==========================================
# SQLAlchemy ORM Models (Database Schema)
# ==========================================

class DBUser(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    branch = Column(String(80), nullable=False)
    year = Column(String(50), default="Final Year")
    email = Column(String(120), unique=True, index=True, nullable=True)

    projects = relationship("DBProject", back_populates="user", cascade="all, delete-orphan")

class DBProject(Base):
    __tablename__ = "projects"
    id = Column(String(80), primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    title = Column(String(200), nullable=False)
    tagline = Column(String(300), nullable=True)
    domain = Column(String(100), nullable=False)
    difficulty = Column(String(50), nullable=False)
    duration = Column(String(80), nullable=False)
    problem = Column(Text, nullable=False)
    solution = Column(Text, nullable=False)
    status = Column(String(50), default="In Progress")  # In Progress, Completed, Bookmarked
    
    user = relationship("DBUser", back_populates="projects")
    features = relationship("DBProjectFeature", back_populates="project", cascade="all, delete-orphan")
    roadmap_tasks = relationship("DBRoadmapTask", back_populates="project", cascade="all, delete-orphan")

class DBProjectFeature(Base):
    __tablename__ = "project_features"
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(String(80), ForeignKey("projects.id"), nullable=False)
    feature_text = Column(String(300), nullable=False)
    tier = Column(String(50), default="basic")  # basic, advanced, future
    priority = Column(String(50), default="Medium")

    project = relationship("DBProject", back_populates="features")

class DBRoadmapTask(Base):
    __tablename__ = "roadmap_tasks"
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(String(80), ForeignKey("projects.id"), nullable=False)
    phase = Column(String(100), nullable=False)
    weeks = Column(String(50), nullable=False)
    task = Column(String(300), nullable=False)
    is_completed = Column(Boolean, default=False)

    project = relationship("DBProject", back_populates="roadmap_tasks")
