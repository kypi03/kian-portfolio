export interface ResearchPillar {
  id: string;
  number: string;
  title: string;
  techniques: string[];
  description: string;
  domain: string;
}

export interface ProjectWorkflowStep {
  step: number;
  label: string;
  detail: string;
}

export interface ResearchProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  affiliation: string;
  supervisor?: string;
  period: string;
  status: 'Ongoing' | 'Published';
  summary: string;
  workflow: ProjectWorkflowStep[];
  highlights: string[];
  scientificContext: {
    systemType: string;
    keyMethods: string[];
    objectives: string;
    variables?: string[];
  };
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  volumeInfo: string;
  year: number;
  authors: string[];
  doiLink?: string;
  doiLabel?: string;
  type: 'Review Article' | 'Research Article';
  summary: string;
  bibtex: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    fullName?: string;
    level?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: 'Academic' | 'Industry';
  bullets: string[];
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  highlight: string;
}

export interface ReferenceItem {
  name: string;
  title: string;
  affiliation: string;
  email: string;
  scholar?: string;
}
