export interface ExperienceSubsection {
  title: string;
  bullets: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  hasWetLab: boolean; // Explicit company lab classification requested
  wetLabClassificationTitle?: string;
  wetLabClassificationDesc: string;
  description: string[];
  subsections?: ExperienceSubsection[];
  instrumentation: string[];
  methodologies: string[];
  instrumentationTitle?: string;
  methodologiesTitle?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
  thesisTitle?: string;
  thesisUrl?: string;
  advisor?: string;
  supervisor?: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  citation: string;
  doi: string;
  url: string;
  type: 'paper' | 'patent';
}
