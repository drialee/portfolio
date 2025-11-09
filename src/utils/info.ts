import { Linkedin, Mail, Newspaper } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import airframe from "../utils/projects/Airframe/homepage.png";
import firework from "../utils/projects/Firework/fireworkCover.png";
import bono from "../utils/projects/Bono/BonoCover.png";
import traingone from "../utils/projects/TrainGone/TrainGonePage.png";
import chill from "../utils/projects/Chill/ChillCover.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  color: string;
  textColor: string;
  timeline: string;
  hasDetailPage?: boolean;
  comingSoon?: boolean;
  role: string[];
  product?: string[];
  engineering?: string[];
  image?: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  color: string;
  label: string;
  target?: "_blank" | "_self";
}

export const socials: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dria-lee/",
    color: "from-blue-400 to-blue-600",
    label: "LinkedIn",
    target: "_blank",
  },
  {
    icon: Mail,
    href: "mailto:drialee@alumni.stanford.edu",
    color: "from-purple-400 to-pink-500",
    label: "Email",
    target: "_blank",
  },
  {
    icon: Newspaper,
    href: "/Dria_Lee_Resume.pdf",
    color: "from-pink-400 to-pink-400",
    label: "Resume",
    target: "_blank",
  },
];

export const projects: Project[] = [
  {
    id: "airframe",
    title: "Airframe",
    description:
      "Joined as second full-time hire to build an AI tool intelligence platform from the ground up. Shipped the product experience that helps teams navigate 10,000+ AI tools and adopt the right ones.",
    technologies: ["TypeScript", "React", "Figma"],
    color: "bg-gradient-to-br from-blue-200 to-cyan-200",
    textColor: "text-blue-900",
    timeline: "February 2024 - Present",
    hasDetailPage: true,
    role: [
      "UX/UI Designer",
      "UX Researcher",
      "Frontend Engineer",
      "Product Manager",
    ],
    image: airframe,
  },
  {
    id: "firework",
    title: "Firework",
    description:
      "Led design and development of video shopping features at a global e-commerce platform. Built discovery tools that increased product engagement across shoppable livestreams and videos.",
    technologies: ["TypeScript", "React", "Python", "Figma"],
    image: firework,
    product: [
      "Product Design",
      "Product Management",
      "User Research",
      "Prototyping",
      "Figma",
      "User Testing",
    ],
    engineering: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Data Pipeline",
      "Machine Learning",
      "Sales Automation",
    ],

    role: [
      "UX/UI Designer",
      "UX Researcher",
      "Frontend Engineer",
      "Product Manager",
    ],
    color: "bg-gradient-to-br from-pink-200 to-orange-200",
    textColor: "text-orange-900",
    timeline: "June 2023 - February 2025",
    hasDetailPage: true,
  },
  {
    id: "bono",
    title: "Bono",
    image: bono,
    description:
      "Donating online feels transactional. Created Bono, a platform that makes giving meaningful by connecting donors directly to causes aligned with their values and personal stories.",
    technologies: ["React", "Figma"],
    color: "bg-gradient-to-br from-pink-200 to-red-200",
    textColor: "text-red-900",
    timeline: "January - June 2024",
    hasDetailPage: true,
    role: ["UX/UI Designer", "UX Researcher", "Frontend Engineer"],
  },
  {
    id: "traingone",
    title: "TrainGone",
    image: traingone,
    description:
      "Learning ASL is hard when you can only search by word, not gesture. TrainGone lets users search signs by showing what they mean—a reverse dictionary for sign language.",
    technologies: ["ReactNative", "UX/UI", "User Research"],
    color: "bg-gradient-to-br from-pink-300 to-purple-300",
    textColor: "text-purple-900",
    timeline: "January - June 2024",
    hasDetailPage: true,
    role: ["UX/UI Designer", "UX Researcher"],
  },
  {
    id: "chill",
    title: "&Chill",
    image: chill,
    description:
      "Distance doesn't have to mean watching alone. &Chill creates shared TV experiences in real-time, bringing friends together through synchronized streaming.",
    technologies: ["React", "Figma"],
    color: "bg-gradient-to-br from-blue-200 to-cyan-200",
    textColor: "text-blue-900",
    timeline: "January - June 2023",
    hasDetailPage: true,
    role: ["UX/UI Designer", "UX Researcher"],
  },
];

export type ProjectId = Project["id"];

export const projectsById: Record<ProjectId, Project> = projects.reduce(
  (acc, project) => {
    acc[project.id] = project;
    return acc;
  },
  {} as Record<ProjectId, Project>
);
