import {
  MessageSquare,
  Image as ImageIcon,
  Sparkles,
  Zap,
  ShoppingCart,
} from "lucide-react";

import widget2 from "../../utils/projects/Firework/widget 2.png";
import widget3 from "../../utils/projects/Firework/widget 3.png";
import widget4 from "../../utils/projects/Firework/widget 4.png";
import igImporter1 from "../../utils/projects/Firework/ig importer 1.png";
import igImporter2 from "../../utils/projects/Firework/ig importer 2.png";
import igImporter3 from "../../utils/projects/Firework/ig importer 3.png";
import igImporter4 from "../../utils/projects/Firework/ig importer 4.png";
import igImporter5 from "../../utils/projects/Firework/ig importer 5.png";
import poster1 from "../../utils/projects/Firework/poster 1.png";
import poster2 from "../../utils/projects/Firework/poster 2.png";
import poster3 from "../../utils/projects/Firework/poster 3.png";
import poster4 from "../../utils/projects/Firework/poster 4.png";
import w2v from "../../utils/projects/Firework/w2v.png";
import w2v1 from "../../utils/projects/Firework/w2v 1.png";
import w2v2 from "../../utils/projects/Firework/w2v 2.png";
import w2v3 from "../../utils/projects/Firework/w2v 3.png";
import fomo1 from "../../utils/projects/Firework/fomo 1.png";
import fomo2 from "../../utils/projects/Firework/fomo 2.png";
import fomo3 from "../../utils/projects/Firework/fomo 3.png";
import FOMO_competitors from "../../utils/projects/Firework/FOMO_competitor.png";
import type { CaseStudyProject } from "./types";

export const fireworkSections = [
  "Overview",
  "About",
  "Product Design",
  "Engineering",
  "Impact",
];

const widgetProject = [widget2, widget3, widget4];
const igImporterProject = [
  igImporter1,
  igImporter2,
  igImporter3,
  igImporter4,
  igImporter5,
];
const posterProject = [poster1, poster2, poster3, poster4];
const w2vProject = [w2v, w2v1, w2v2, w2v3];
const fomoProject = [fomo1, fomo2, fomo3];
const FOMO_competitorsProject = [FOMO_competitors];

export const caseStudyProjects: CaseStudyProject[] = [
  {
    title: "1:1 Video Chat Identity Feature",
    icon: MessageSquare,
    iconClassName: "w-5 h-5",
    problem:
      "The 1:1 video chat player lacked personalization, making users feel disconnected. There was no visual indicator of who they were chatting with or their online status, leading to a cold, impersonal experience.",
    research: [
      "Conducted competitive analysis of 8+ e-commerce chat platforms (Nordstrom, Tory Burch, Revolve)",
      "Analyzed user feedback indicating 65% wanted more personalized chat experiences",
      "Identified that personalization features can increase revenue by 10-15%",
      "Evaluated technical feasibility with engineering team for quick implementation",
    ],
    personas: [
      {
        name: "Sarah - Fashion Retailer",
        goal: "Build authentic connections with potential customers during live shopping sessions",
        pain: "Feels disconnected from customers, can't personalize interactions",
      },
      {
        name: "Mike - E-commerce Customer",
        goal: "He wants to get the same experience as in-store shopping but with online convenience.",
        pain: "Chat interface does not feel personal and engaging.",
      },
    ],
    solution:
      "Introduced an identity feature allowing users to upload custom avatars with real-time online status indicators (green dot). Balanced personalization with quick implementation timeline.",
    before:
      "There were no real time indicators of the agent's status or personalinformation.",
    after:
      "Users receive a green dot indicator when the agent is online and can see the agent's name and avatar. They can also see a loading indicator and a message when the agent leaves the chat.",
    process: [
      {
        step: "Discovery & Research",
        description:
          "Analyzed competitor chat interfaces, user feedback, and identified key pain points around lack of personalization",
      },
      {
        step: "User Personas",
        description:
          "Created 2 detailed personas representing the two sides of the conversation: e-commerce customers and retailers to guide design decisions ",
      },
      {
        step: "Wireframing",
        description:
          "Sketched 5+ variations of avatar placement, online indicators, and upload flows",
      },
      {
        step: "Prototyping",
        description:
          "Built high-fidelity prototypes in Figma with interactive avatar upload and status change animations",
      },
      {
        step: "Usability Testing",
        description:
          "Tested with 12 users, iterated based on feedback about avatar sizing and upload process",
      },
      {
        step: "Implementation",
        description:
          "Collaborated with engineering to ensure pixel-perfect implementation within sprint timeline",
      },
    ],

    images: widgetProject,
    colorClass: "border-l-purple-500",
  },
  {
    title: "Instagram Importer",
    icon: ImageIcon,
    iconClassName: "w-5 h-5",
    problem:
      "Content creators had to manually re-upload their Instagram content to Firework, creating friction in onboarding and preventing them from quickly populating their Firework storefronts with existing content.",
    research: [
      "Interviewed 15 content creators about their workflow and pain points",
      "Found that 80% of users already had established Instagram presence",
      "Discovered manual upload process took average 45 minutes per creator",
      "Researched Instagram API capabilities and OAuth implementation",
      "Analyzed competing platforms (Later, Hootsuite) for import patterns",
    ],
    personas: [
      {
        name: "Jessica - Lifestyle Influencer",
        goal: "Quickly set up Firework profile using existing Instagram content library",
        pain: "Doesn't want to spend hours re-uploading content she already has on Instagram",
      },
      {
        name: "Brand Manager - Retail Team",
        goal: "Efficiently migrate product showcase videos from Instagram to Firework",
        pain: "Managing content across multiple platforms is time-consuming",
      },
    ],
    solution:
      "Designed a seamless Instagram import feature for both mobile and desktop, allowing creators to authenticate via OAuth and selectively import posts with a preview interface.",

    process: [
      {
        step: "User Research",
        description:
          "Conducted interviews and surveys with 15 creators to understand content workflow and platform migration challenges",
      },
      {
        step: "Information Architecture",
        description:
          "Mapped out user flow from authentication → selection → import → confirmation across mobile and desktop",
      },
      {
        step: "Wireframing",
        description:
          "Created lo-fi wireframes for OAuth flow, grid selection interface, and import progress states",
      },
      {
        step: "Visual Design",
        description:
          "Designed responsive interfaces matching Firework's design system with Instagram brand guidelines",
      },
      {
        step: "Edge Case Planning",
        description:
          "Defined error states for failed imports, rate limits, and permission issues",
      },
      {
        step: "Developer Handoff",
        description:
          "Created detailed specs for API integration, state management, and responsive breakpoints",
      },
    ],
    images: igImporterProject,
    colorClass: "border-l-pink-500",
  },
  {
    title: "Animated Short Video Poster Creator",
    icon: Sparkles,
    iconClassName: "w-5 h-5",
    problem:
      "Video thumbnails were static and didn't capture attention in crowded feeds. Creators needed an easy way to create eye-catching animated posters without design expertise or external tools.",
    research: [
      "Analyzed engagement metrics showing animated thumbnails had 3x higher click-through rates",
      "Studied TikTok, YouTube Shorts, and Instagram Reels poster strategies",
      "Surveyed 20 creators about their current poster creation workflow",
      "Found 90% used external tools (Canva, After Effects) for poster creation",
      "Identified technical constraints around file size and browser animation support",
    ],
    personas: [
      {
        name: "Alex - Small Business Owner",
        goal: "Create professional-looking video posters without graphic design skills",
        pain: "Lacks design expertise and time to learn complex tools",
      },
      {
        name: "Taylor - Marketing Manager",
        goal: "Produce consistent, on-brand animated posters at scale",
        pain: "Current tools are expensive and require technical knowledge",
      },
    ],
    solution:
      "Built an intuitive drag-and-drop poster creator with preset animation templates, live preview, and brand customization options. Focused on simplicity and speed.",
    process: [
      {
        step: "Competitive Analysis",
        description:
          "Evaluated 6 existing poster/thumbnail tools to identify gaps and best practices",
      },
      {
        step: "Feature Prioritization",
        description:
          "Used MoSCoW method to define MVP features based on user needs vs. technical complexity",
      },
      {
        step: "User Flow Mapping",
        description:
          "Designed 3-step creation flow: Upload → Customize → Preview → Publish",
      },
      {
        step: "Interface Design",
        description:
          "Created drag-and-drop interface with animation presets and real-time preview panel",
      },
      {
        step: "Prototype Testing",
        description:
          "Tested with 8 non-designers to validate ease of use and identify friction points",
      },
      {
        step: "Design System Integration",
        description:
          "Ensured consistency with Firework's existing component library and patterns",
      },
    ],
    images: posterProject,
    colorClass: "border-l-blue-500",
  },
  {
    title: "Web-to-Video (W2V) AI Generator",
    icon: Zap,
    iconClassName: "w-5 h-5",
    problem:
      "Creating video marketing campaigns from product pages was time-intensive, requiring creative expertise and expensive production. Brands needed a scalable way to transform web content into engaging video ads.",
    research: [
      "Analyzed 50+ brand websites to understand common content structures",
      "Researched AI video generation capabilities and limitations",
      "Interviewed 10 marketing teams about video campaign workflows",
      "Benchmarked against emerging AI tools (Runway, Synthesia)",
      "Studied meta-data extraction techniques and web scraping best practices",
    ],
    personas: [
      {
        name: "Emily - E-commerce Manager",
        goal: "Generate video ads quickly for seasonal product launches",
        pain: "Video production is expensive and time-consuming, limiting campaign frequency",
      },
      {
        name: "David - Digital Agency Owner",
        goal: "Scale video creation for multiple client campaigns simultaneously",
        pain: "Manual video creation doesn't scale with client demand",
      },
    ],
    solution:
      "Developed W2V feature that analyzes webpage content using AI to automatically generate branded video marketing campaigns with customizable templates and voiceover options.",
    process: [
      {
        step: "Technical Research",
        description:
          "Investigated AI models for content extraction, image-to-video, and text-to-speech capabilities",
      },
      {
        step: "User Journey Mapping",
        description:
          "Mapped end-to-end flow from URL input through AI generation to final video export",
      },
      {
        step: "Progressive Disclosure Design",
        description:
          "Created multi-step interface revealing complexity gradually: URL → Extract → Customize → Generate",
      },
      {
        step: "Loading State Design",
        description:
          "Designed engaging loading experience with progress indicators and AI process explanations",
      },
      {
        step: "Error Handling",
        description:
          "Defined failure states for invalid URLs, extraction errors, and generation failures",
      },
      {
        step: "Beta Testing",
        description:
          "Ran closed beta with 25 brands, iterated on AI output quality and customization options",
      },
    ],

    images: w2vProject,
    colorClass: "border-l-green-500",
  },
  {
    title: "FOMO Elements for Livestreams",
    icon: ShoppingCart,
    iconClassName: "w-5 h-5",
    problem:
      "Livestream purchasing rates were declining. Viewers weren't compelled to act quickly, missing the urgency and social proof that drives conversions in physical shopping experiences.",
    research: [
      "Analyzed livestream analytics showing 12% conversion rate (industry avg: 18%)",
      "Conducted A/B tests on existing social proof elements",
      "Studied psychological principles of FOMO and social proof in e-commerce",
      "Benchmarked Chinese livestream platforms (Taobao Live, Douyin) known for high conversion",
      "Surveyed 50 livestream viewers about purchase decision factors",
      "Reviewed available data points from analytics system for real-time display",
    ],
    personas: [
      {
        name: "Lisa - Impulse Shopper",
        goal: "Feel confident in purchase decisions during livestreams",
        pain: "Uncertain if products are actually popular or if it's a good deal",
      },
      {
        name: "Mark - Deal Hunter",
        goal: "Catch limited-time offers before they sell out",
        pain: "No sense of urgency or indication of product scarcity",
      },
    ],
    solution:
      "Designed subtle FOMO indicators showing real-time purchase counts with gradient animations. Balanced psychological triggers with non-intrusive UI to maintain viewing experience.",
    process: [
      {
        step: "Problem Validation",
        description:
          "Analyzed conversion data and user feedback to confirm urgency gap in livestream experience",
      },
      {
        step: "Competitive Research",
        description:
          "Studied 10+ livestream platforms documenting FOMO tactics (scarcity, social proof, countdown timers)",
      },
      {
        step: "Concept Ideation",
        description:
          "Brainstormed 8+ FOMO approaches: countdowns, emoji reactions, purchase notifications, viewer counts",
      },
      {
        step: "Design Iteration",
        description:
          "Created 4 design variations balancing urgency with viewer experience, tested placement and animation",
      },
      {
        step: "Technical Feasibility",
        description:
          "Collaborated with engineering to identify real-time data available and performance constraints",
      },
      {
        step: "A/B Testing",
        description:
          "Launched controlled test with 1,000 viewers comparing designs vs. control group",
      },
    ],

    images: [...fomoProject, ...FOMO_competitorsProject],
    colorClass: "border-l-orange-500",
  },
];
