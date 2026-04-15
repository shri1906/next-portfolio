export type Theme = 'light' | 'dark';

export interface Skill {
  name: string;
  icon: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
}

export interface SkillGroup {
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
  skills: Skill[];
  color: string;
  bgGradient: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  type: 'Individual' | 'Group' | 'Collaborative';
  metrics: string[];
  liveLink: string;
  githubLink: string;
  color: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

export interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}
