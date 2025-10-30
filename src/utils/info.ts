import { Linkedin, Mail } from "lucide-react";

export const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dria-lee/",
    color: "from-blue-400 to-blue-600",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:drialee@alumni.stanford.edu",
    color: "from-purple-400 to-pink-500",
    label: "Email",
  },
];

export const projects = [
  {
    id: "airframe",
    title: "Airframe",
    description: "Designing and Developing.",
    technologies: ["TypeScript", "React", "Figma"],
    color: "bg-gradient-to-br from-blue-200 to-cyan-200",
    textColor: "text-blue-900",
    hasDetailPage: true,
  },
  {
    id: "firework",
    title: "Firework",
    description:
      "Built and designed growth-driving features at a global leader in video e-commerce.",
    technologies: ["TypeScript", "React", "Python", "Figma"],
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

    color: "bg-gradient-to-br from-pink-200 to-orange-200",
    textColor: "text-orange-900",
    hasDetailPage: true,
  },
  {
    id: "bono",
    title: "Bono",
    description:
      "Created a donation app that makes giving personal, seamless, and impactful.",
    technologies: ["React", "Figma"],
    color: "bg-gradient-to-br from-pink-200 to-red-200",
    textColor: "text-red-900",
    hasDetailPage: true,
  },
  {
    id: "traingone",
    title: "TrainGone",
    description:
      "Led product and design for a reverse-ASL dictionary app bridging deaf and hearing communities.",
    technologies: ["ReactNative", "UX/UI", "User Research"],
    color: "bg-gradient-to-br from-pink-300 to-purple-300",
    textColor: "text-purple-900",
    hasDetailPage: true,
  },
  {
    id: "chill",
    title: "Chill",
    description:
      "Designed a social streaming platform where users watch TV together in real time.",
    technologies: ["React", "Figma"],
    color: "bg-gradient-to-br from-blue-200 to-cyan-200",
    textColor: "text-blue-900",
    hasDetailPage: true,
  },
  {
    id: "bolivia",
    title: "Bolivia",
    description:
      "Documented a visual journey across Bolivia and Chile, experimenting with night photography.",
    technologies: ["Photography"],
    color: "bg-gradient-to-br from-purple-200 to-pink-200",
    textColor: "text-purple-900",
    hasDetailPage: true,
  },
];
