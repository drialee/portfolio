import type { LucideIcon } from "lucide-react";

export interface CaseStudyPersona {
  name: string;
  goal: string;
  pain: string;
}

export interface CaseStudyProcessStep {
  step?: string;
  description: string;
}

export interface CaseStudyProject {
  title: string;
  icon: LucideIcon;
  iconClassName?: string;
  problem: string;
  research?: string[];
  personas?: CaseStudyPersona[];
  solution: string;
  before?: string;
  after?: string;
  process?: CaseStudyProcessStep[];
  images?: string[];
  colorClass?: string;
}
