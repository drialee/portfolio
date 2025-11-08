import { Search, Newspaper } from "lucide-react";

export const universalSearchProject = {
  title: "Universal Search Experience",
  icon: Search,
  iconClassName: "w-5 h-5",
  role: "Product Designer & Frontend Lead",
  timeline: "3 months",

  problem:
    "Airframe's product has three core pillars: RFP Management, Product Catalog, and Expert Network. Each pillar existed as a separate silo, forcing users to search three times to find what they needed. Discovery is fundamental to Airframe's value proposition—users come to us to find the right AI tools and experts for their needs. Without unified search, users couldn't efficiently discover relevant use cases, products, or experts across our platform.",

  research: [
    "Conducted competitive analysis of multi-category platforms (Spotify, Netflix, LinkedIn) to understand search patterns",
    "Users wanted to search by category, industry, and other relevant filters to find the right resources.",
  ],

  process: [
    {
      step: "Phase 1: Search Infrastructure",
      description:
        "Led frontend team in integrating Typesense search engine, enabling semantic queries beyond exact name matching. Navigated significant technical constraints—our backend data schema limitations required creative frontend solutions to normalize and structure search data. As PM, balanced speed-to-market pressure with quality, making strategic tradeoffs on filter capabilities based on Typesense's architecture.",
    },
    {
      step: "Phase 2: Per-Page Filter Optimization",
      description:
        "Prioritized filter taxonomy based on user mental models and search frequency data. I first designed a complex filter system, drawing from a LinkedIn type funnel filter user experience. However, as filters grew beyond initial scope, designed collapsible filter sidebar to accommodate expanding options without overwhelming the interface.",
    },
    {
      step: "Phase 3: Universal Search Design",
      description:
        "Initiated universal search campaign after recognizing fragmented experience was limiting user value. Created comprehensive competitive analysis documenting patterns for multi-category search results. Designed wireframes and high-fidelity mockups exploring various result layouts—opted for category-grouped results with ability to filter to specific pillars. Maintained 'scoped search' option for users who want targeted queries.",
    },
    {
      step: "Phase 4: Implementation & Iteration",
      description:
        "Led engineers in building universal search as primary navigation pattern. Shipped to production with analytics tracking search patterns and category engagement.",
    },
  ],

  solution:
    "A unified search experience that queries across RFPs, products, and experts simultaneously, presenting results in category-grouped views. Users can search once and see all relevant resources, or scope searches to specific pillars when needed.",
};

export const newsDeskProject = {
  title: "Airframe News Desk",
  icon: Newspaper,
  iconClassName: "w-5 h-5",
  role: "Sole Designer, Product Manager, and Engineer",
  timeline: "In Progress",

  context:
    "Software buying happens only 2-3 times per year. After purchase decisions, users had no reason to return to Airframe until their next buying cycle—creating a retention and engagement problem that threatened our growth.",

  problem:
    "AI signal is buried in hype and vendor noise. Executives and functional leaders need credible, role-relevant examples they can reference in meetings and use to de-risk technology choices. But sifting through press releases, case studies, and LinkedIn posts is time-consuming and unreliable. Meanwhile, Airframe needs daily active users to build retention and become the default platform for AI decision-making.",

  vision:
    "Transform Airframe into the go-to platform for AI use case discovery by delivering a daily news experience that answers: 'What is everyone else doing with AI?' Our BHAG: Users visit Airframe 3+ times per week, with News as their landing page.",

  research: [
    "Conducted external interviews with software buyers (CXOs, VPs) and recommenders (directors, managers) to understand information-gathering habits",
    "Analyzed 25+ news platforms, newsletters and discussion forums(Morning Brew, Lenny's Newsletter, Wall Street Journal, etc) for design patterns and content structure",
    "Reviewed Airframe's existing case study database to assess content volume and quality",
  ],

  personas: [
    {
      name: "Economic Buyers",
      goal: "Credible AI use cases to reference in strategic meetings and de-risk technology choices",
      pain: "Overwhelmed by AI hype—struggle to separate signal from noise",
      description: "CXOs, board members, senior decision-makers",
    },
    {
      name: "Economic Recommenders",
      goal: "Role-relevant examples to influence AI vendor selection internally",
      pain: "Lack time to research—need curated, actionable insights delivered daily",
      description: "Directors, functional managers",
    },
  ],

  uniqueValueProps: [
    "Use case-first with clear, quantifiable impact",
    "Role-first relevancy",
    "Credibility through trusted sources and our vetted expert network",
  ],

  process: [
    {
      step: "Phase 1: News Exploration",
      description:
        "Studied popular news sites and email newsletters to understand engagement mechanics. Key focus: balancing information density with scannability.",
    },
    {
      step: "Phase 2: Wireframing & Prototyping",
      description:
        "Created 40+ low-fidelity prototypes for the news page. I played around with different layouts, content hierarchies, and navigation patterns. ",
    },
    {
      step: "Phase 3: Internal Newsletter Prototype",
      description:
        "Launched internal newsletter prototype to validate concept before external launch. Daily email featuring 5 curated case studies from our database, sent to team. Focused on format testing and content curation workflow. ",
    },
    {
      step: "Phase 4: External Newsletter + A/B Testing",
      description:
        "Expanded to 20 external recipients (10 buyers + 10 recommenders) within our sales expert network. I wanted to leverage relevancy of the content to the recipients and an unbiased Airframe perspective was the best way to do that. I experimented with two A/B tests: (1) Role-focused title vs Generic title—role-focused. (2) Bullet point summary vs Paragraphs—bullets.  ",
    },
    {
      step: "Coming Soon: In-App Launch",
      description:
        "A fully integrated in-app news experience will be launched in the coming months. The news feed will be personalized to the user's role and department, showcasing the most relevant and impactful use cases in one place",
    },
  ],

  solution:
    "Airframe News Desk: A daily digest of credible AI use cases, personalized by role and department. We deliver success stories (and failures) with quantifiable impact through both email newsletter and in-app experience. Users get signal without noise—actionable insights from trusted sources in under 2 minutes per day.",
};
