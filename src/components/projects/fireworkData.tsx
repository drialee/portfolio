import {
  MessageSquare,
  Image as ImageIcon,
  Sparkles,
  Zap,
  ShoppingCart,
  Calendar,
  Brain,
  PhoneCall,
  User,
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

export const caseStudyProjects: CaseStudyProject[] = [
  {
    title: "1:1 Video Chat Identity Feature",
    icon: MessageSquare,
    iconClassName: "w-5 h-5",
    problem:
      "The 1:1 video chat player lacked personalization, leading users to feel disconnected to the store associate. There was no visual indicator of who they were chatting with or their online status.",
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
      "Found that 80% of Firework users already had established Instagram presence",
      "Discovered manual upload process took average 45 minutes per creator",
      "Analyzed competing platforms for import patterns",
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
      "Found 90% of Firework users used external tools (Canva, After Effects) for poster creation",
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
    title: "Webpage-to-Video Generator",
    icon: Zap,
    iconClassName: "w-5 h-5",
    problem:
      "Creating video marketing campaigns from product pages was time-intensive, requiring creative expertise and expensive production. Brands needed a scalable way to transform web content into engaging video ads.",
    research: [
      "Analyzed 50+ brand websites to understand common content structures",
      "Researched current AI video generation capabilities and limitations",
      "Conducted competitive analysis of 10+ AI video generation tools (Synthesia, Runway, etc.)",
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
      "Developed the complete flow for the Webpage to Video feature, analyzing webpage content using AI to automatically generate branded video marketing campaigns with customizable templates and voiceover options.",
    process: [
      {
        step: "User Journey Mapping",
        description:
          "Mapped end-to-end flow from URL input through AI generation to final video export",
      },
      {
        step: "Information Architecture",
        description:
          "Mapped out user flow from URL input through AI generation to final video export.",
      },
      {
        step: "Wireframing & Prototyping",
        description:
          "Created low-fidelity wireframes for the 4-step process (URL → Extract → Customize → Generate), focusing on progressive disclosure to reduce cognitive load. Iterated through 3 rounds of wireframes based on team feedback.",
      },
      {
        step: "High-Fidelity Design & UI Polish",
        description:
          "Designed high-fidelity mockups with loading animations, progress indicators, and microinteractions that explain the AI process. Created a component library for consistent implementation across the product.",
      },
      {
        step: "Usability Testing & Iteration",
        description:
          "Ran moderated usability tests with 8 participants, then launched closed beta with 150 internal users. Identified and resolved 3 major usability issues, including confusing avatar selection and unclear generation progress.",
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
      "Studied psychological principles of FOMO and social proof in e-commerce",
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
          "Brainstormed 8+ FOMO approaches: countdowns, emoji reactions, share buttons, viewer counts",
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
    ],

    images: [...fomoProject],
    colorClass: "border-l-orange-500",
  },
];

export const engineeringProjects: CaseStudyProject[] = [
  {
    title: "Fusion Project - Digital Showroom x Livestreams",
    icon: Calendar,
    iconClassName: "w-5 h-5",
    colorClass: "border-l-purple-500",
    problem:
      "Firework had two separate products—Livestreams and Digital Showroom—that served complementary use cases but created significant user friction. Livestream adoption was low because users had to manually configure restreaming settings and re-input event details for each session, taking 15+ minutes per setup. Meanwhile, Digital Showroom offered superior scheduling and restreaming capabilities but existed as a completely siloed product, forcing users to manage two separate systems.",
    process: [
      {
        step: "Component Integration",
        description:
          "Built responsive React components that integrated calendar scheduling and livestream management into a single cohesive experience, implementing state management for real-time event synchronization",
      },
      {
        step: "Schedule for later feature",
        description:
          "Developed ability to schedule livestreams for later directly from the Digital Showroom calendar, eliminating need to recreate events and preserving all original settings and configurations",
      },
      {
        step: "Batch Upload System",
        description:
          "Implemented batch uploader feature enabling users to upload multiple videos simultaneously, reducing upload time from 5+ minutes per video to bulk processing of entire campaigns",
      },
      {
        step: "Unified Architecture",
        description:
          "Designed reusable component architecture that merged both product experiences while maintaining flexibility for future feature expansion",
      },
    ],

    solution:
      "Created a unified interface that enables users to schedule events via calendar, automatically configure restreaming, and manage all live events from a centralized view—eliminating the need to switch between products or manually re-enter information.",
  },

  {
    title: "Onboarding Experience for PLG Customers",
    icon: User,
    iconClassName: "w-5 h-5",
    colorClass: "border-l-pink-500",
    problem:
      "Firework's Product-Led Growth (PLG) customers were signing up but struggling to navigate the business portal without guidance. Support data revealed that over 60% of self-serve users abandoned setup within their first session due to confusion about next steps, resulting in low activation rates and increased support tickets.",

    research: [
      "Analyzed user behavior data and support tickets to identify specific drop-off points in onboarding flow",
      "Discovered users weren't sure which features to configure first or how different portal sections connected",
      "Found that users needed progressive guidance rather than overwhelming all-at-once information",
    ],

    process: [
      {
        step: "User Flow Mapping",
        description:
          "Mapped the ideal onboarding sequence based on feature dependencies and user behavior patterns, prioritizing essential configurations that unblocked downstream features",
      },
      {
        step: "Context-Aware Modal System",
        description:
          "Created dynamic React modal with context-aware step progression that adapts based on which portal sections users have already completed versus which remain outstanding",
      },
      {
        step: "Real-Time Progress Tracking",
        description:
          "Implemented progress tracking system that monitors user actions across entire portal, automatically advancing tutorial steps and celebrating milestones to maintain momentum",
      },
      {
        step: "Dynamic Highlighting & Navigation",
        description:
          "Built modal to dynamically highlight relevant UI sections and provide contextual tooltips based on user's current setup stage, reducing cognitive load by focusing attention on one task at a time",
      },
    ],

    solution:
      "An interactive tutorial that progressively reveals complexity while maintaining user confidence through step-by-step guidance that responds in real-time to user actions throughout the portal.",
  },

  {
    title: "SLG 100x - Automated Lead Qualification System",
    icon: PhoneCall,
    iconClassName: "w-5 h-5",
    colorClass: "border-l-green-500",
    problem:
      "Firework's sales team was manually researching and qualifying hundreds of potential customers weekly, spending 60% of their time on research rather than selling. This manual process was time-intensive, limited their ability to focus on high-value prospects, and led to inconsistent qualification criteria that resulted in misaligned lead routing and wasted outreach efforts.",

    research: [
      "Mapped entire data flow and decision logic in Miro to visualize the qualification process",
      "Prototyped individual APIs (Apollo, BuiltWith, OpenAI, Gemini, Claude) to understand rate limits, response structures, and capabilities",
      "Researched batch processing strategies to optimize for both cost and performance",
      "Investigated embedding models and vectorization techniques for similarity scoring",
      "Tested different prompt engineering approaches for LLM qualification accuracy",
      "Iteratively refined approach based on testing results and performance benchmarks",
    ],

    process: [
      {
        step: "Data Retrieval & Enrichment",
        description:
          "Built multi-source data aggregation pipeline pulling from Apollo API (organization data, keywords, industries, descriptions), Snowflake (historical traffic data and percentile rankings), and BuiltWith API (tech stack identification)",
      },
      {
        step: "ML-Based Scoring System",
        description:
          "Implemented three-dimensional similarity analysis: (1) Business similarity using OpenAI's text-embedding-3-large to embed and compare keywords, industries, and descriptions; (2) Tech stack similarity through vectorized comparison against existing customers; (3) Traffic analysis with percentile-based scoring relative to customer base. Built intelligent caching system for embeddings and implemented vectorization techniques improving processing speed by 10x",
      },
      {
        step: "Multi-Model Qualification Engine",
        description:
          "Designed and built parallel qualification system using three AI models (GPT-4o, Google Gemini 1.5 Flash, Claude 3.5 Sonnet). Each model independently evaluates similarity scores and company data to determine qualification status, recommended sales rep type, and confidence score. Implemented concurrent API requests with batch processing reducing qualification time from 5 minutes to 30 seconds per batch",
      },
      {
        step: "Aggregation & Routing",
        description:
          "Created consensus-based decision logic aggregating results using majority-vote across all three models. Built automated routing system based on company profile and model recommendations. Implemented Pandas DataFrame output syncing with Snowflake for CRM integration",
      },
    ],

    solution:
      "An automated AI-powered system that qualifies over 1,000 leads per week using multi-model consensus to ensure consistent, data-driven qualification criteria. The system aggregates data from multiple sources, calculates similarity scores across three dimensions, runs parallel qualification through three AI models, and automatically routes qualified leads to appropriate sales representatives.",
  },
];
