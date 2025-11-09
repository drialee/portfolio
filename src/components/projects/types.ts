import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface CaseStudyPersona {
  name: string;
  goal: string;
  pain: string;
  description?: string;
}

export interface CaseStudyProcessStep {
  step?: string;
  description: string | ReactNode;
  images?: { image: string; description?: string }[];
}

export interface CaseStudyDesignDecision {
  decision: string;
  rationale: string | ReactNode;
}

export interface CaseStudyProject {
  title: string;
  tldr: string | ReactNode;
  timeline: string;
  context?: string | ReactNode;
  problem: string | ReactNode;
  vision: string | ReactNode;
  personas?: Array<{
    name: string;
    goal: string;
    pain: string;
    description?: string;
  }>;
  uniqueValueProps?: string[];
  process: Array<{
    step: string;
    description: string | ReactNode;
    images?: Array<{
      image: string;
      description?: string;
    }>;
  }>;
  designDecisions?: Array<{
    decision: string;
    rationale: string | ReactNode;
  }>;
  solution: string | ReactNode;
  solutionImages?: string[];
  reflections: string | ReactNode;
}
