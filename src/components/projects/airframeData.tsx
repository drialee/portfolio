import { Search, Newspaper, Users } from "lucide-react";
import type { CaseStudyProject } from "./types";

import selecting from "../../utils/projects/Airframe/expert connect/selecting.png";
import callHistory from "../../utils/projects/Airframe/expert connect/call history.png";
import flow from "../../utils/projects/Airframe/expert connect/flow.png";
import singleSelect from "../../utils/projects/Airframe/expert connect/single select.png";
import unavailable from "../../utils/projects/Airframe/expert connect/unavailable.png";
import search from "../../utils/projects/Airframe/search/search.png";
import searhVideo from "../../utils/projects/Airframe/search/search.mov";
import lowfi_news from "../../utils/projects/Airframe/news/news_2.png";
import lowfi_news2 from "../../utils/projects/Airframe/news/news_3.png";
import lowfi_news3 from "../../utils/projects/Airframe/news/news_4.png";
import lowfi_news4 from "../../utils/projects/Airframe/news/news_5.png";
import hifi_news1 from "../../utils/projects/Airframe/news/news_7.png";
import hifi_news2 from "../../utils/projects/Airframe/news/news_8.png";
import hifi_news3 from "../../utils/projects/Airframe/news/news_9.png";
import newsletter from "../../utils/projects/Airframe/news/newsletter.png";
import ipp from "../../utils/projects/Airframe/expert connect/Profile.png";
import funnel from "../../utils/projects/Airframe/search/funnel.png";
import bar from "../../utils/projects/Airframe/search/filter bar.png";

export const AirframeCaseStudies: CaseStudyProject[] = [
  {
    title: "Expert Connect",
    timeline: "2 months",
    tldr: (
      <>
        Built an <strong>intelligent expert matching system</strong> that
        connects users to AI experts based on their specific use cases. Reduced
        expert discovery time from hours to minutes through{" "}
        <strong>batch requests and contextual integration</strong>.
      </>
    ),
    problem: (
      <>
        Airframe's expert network existed as a{" "}
        <strong>disconnected directory</strong>—users had to manually browse
        through hundreds of expert profiles across multiple catalog pages to
        find the right person for their needs. There was{" "}
        <strong>no way to connect experts to specific use cases or RFPs</strong>
        , forcing users to manage introductions outside our platform. This
        fragmented experience undermined our value proposition of streamlining
        the AI adoption process and created friction at the most critical
        moment: when users needed expert guidance to make confident decisions.
      </>
    ),

    vision: (
      <>
        Transform expert discovery from a manual search process into an{" "}
        <strong>intelligent matching system</strong>. Users arrive with a use
        case or RFP challenge, and we deliver the perfect expert—instantly
        connecting them to the right expertise at the right moment in their
        decision journey.
      </>
    ),

    personas: [
      {
        name: "Sarah - VP of Operations",
        goal: "Find a trusted AI expert who understands her industry to validate tool choices before committing budget",
        pain: "Overwhelmed by 1000+ experts—doesn't know who's credible or relevant to her retail automation needs",
        description:
          "Mid-market retail company evaluating AI tools for inventory management",
      },
      {
        name: "Marcus - IT Director",
        goal: "Connect with experts who've implemented similar AI solutions in healthcare to avoid costly mistakes",
        pain: "Manually browsing expert profiles is time-consuming and doesn't surface the most relevant matches for his specific use case",
        description:
          "Healthcare organization researching AI tools for patient data analysis",
      },
    ],

    process: [
      {
        step: "Research & Competitive Analysis",
        description: (
          <>
            I studied successful expert platforms (ex: GLG, Intro, etc.) to
            understand different approaches to expert discovery and connection
            flows. I was particularly drawn to{" "}
            <strong>Intro's social-first approach</strong>
            —making experts feel approachable through rich profiles and social
            proof. However, traditional platforms like GLG excelled at{" "}
            <strong>request-based workflows with white-glove service</strong>. I
            saw an opportunity to combine both: the discoverability of social
            platforms with the high-touch service model of enterprise solutions.
            I also researched the best video calendar tools (Calendly, Cal.com,
            Zoom) to understand how we could best deliver the video call within
            our platform in the most seamless way possible.
          </>
        ),
      },

      {
        step: "User Journey Mapping & Flow Definition",
        description: (
          <>
            I mapped the end-to-end journey from expert discovery through
            successful connection. Key insight: users needed{" "}
            <strong>two entry points</strong>—(1) starting from a product and
            finding relevant experts, or (2) starting from an expert profile. I
            designed the core flow: users select experts → submit connection
            request → Airframe's concierge team handles introduction → if
            unavailable, we suggest similar experts. The critical UX challenge
            was <strong>handling unavailability gracefully</strong>—I designed a
            fallback system that proactively suggests alternatives based on
            expertise, industry focus, and availability, keeping users in-flow
            rather than forcing them to restart their search.
          </>
        ),
        images: [{ image: flow }],
      },

      {
        step: "Wireframing & Flow Validation",
        description: (
          <>
            I created low-fidelity wireframes exploring two interaction
            patterns: (1) <strong>Individual select</strong>—users request one
            expert at a time with immediate confirmation, optimized for targeted
            introductions. (2) <strong>Batch select</strong>—users build a list
            of multiple experts before submitting, optimized for exploring
            options. I tested both flows with 14 internal users.{" "}
            <strong>Batch select won decisively</strong>—users valued seeing
            their full request before submitting and appreciated the ability to
            prioritize experts. This also reduced load on our concierge team by
            giving them multiple options per request.
          </>
        ),
        images: [
          { image: selecting, description: "Batch select" },
          { image: singleSelect, description: "Single select" },
        ],
      },

      {
        step: "High-Fidelity Design & UI System",
        description: (
          <>
            I designed the complete expert connect experience, establishing
            visual patterns that balanced approachability with professionalism.
            Key design decisions: (1){" "}
            <strong>Expert cards with rich profiles</strong> (photo, bio,
            expertise tags, past use cases) to build trust and credibility. (2){" "}
            <strong>Clear CTAs with request state management</strong> (pending,
            confirmed, declined). (3){" "}
            <strong>Smart suggestion algorithm visualization</strong> showing
            why alternative experts were recommended. (4) Integrated the
            experience directly into product pages and RFP workflows—making
            expert connection contextual rather than a separate destination. I
            created a cohesive design system for expert profiles, request flows,
            and confirmation states that could scale as our network grew.
          </>
        ),
        images: [
          { image: ipp, description: "Expert page" },
          { image: callHistory, description: "State management" },
          { image: unavailable, description: "Expert unavailable" },
        ],
      },

      {
        step: "Implementation & Launch",
        description: (
          <>
            I led the frontend development, working closely with our backend
            team to implement the matching algorithm and request management
            system. We launched with{" "}
            <strong>3000+ experts in our network</strong> and integrated Expert
            Connect directly into the RFP creation flow—making it a natural part
            of the research process rather than an afterthought.
          </>
        ),
      },
    ],

    solution: (
      <>
        A seamless expert connection platform embedded throughout Airframe's
        product experience. Users can{" "}
        <strong>discover experts contextually</strong> while researching
        products or building RFPs, <strong>submit batch requests</strong> with
        prioritized preferences, and receive{" "}
        <strong>white-glove introductions</strong> managed by our concierge
        team. If first-choice experts are unavailable, our intelligent matching
        system proactively suggests alternatives based on expertise and use case
        fit—keeping users moving forward without restarting their search.
      </>
    ),

    designDecisions: [
      {
        decision: "Batch Selection Over Individual Requests",
        rationale: (
          <>
            Testing showed users valued{" "}
            <strong>
              flexibility to request multiple experts and prioritize preferences
            </strong>
            . This also reduced concierge team workload by providing backup
            options upfront.
          </>
        ),
      },
      {
        decision: "Contextual Integration vs. Standalone Platform",
        rationale: (
          <>
            Rather than building a separate expert directory, we{" "}
            <strong>
              embedded expert discovery throughout product pages and RFP flows
            </strong>
            —meeting users where they already were in their research journey.
          </>
        ),
      },
      {
        decision: "White-Glove Concierge Model",
        rationale: (
          <>
            While self-service would scale better, we wanted to{" "}
            <strong>prioritize finding the right expert</strong> for the user's
            needs and not just the easiest solution.
          </>
        ),
      },
    ],

    reflections: (
      <>
        This project taught me the importance of studying both ends of the
        market spectrum—social-first consumer platforms and enterprise
        white-glove services—then finding the sweet spot for our users. The{" "}
        <strong>
          batch selection insight came from watching users hesitate
        </strong>{" "}
        before requesting single experts, worried about 'wasting' their one
        shot. By letting them build a prioritized list, we removed that
        psychological barrier and actually increased engagement. Most
        importantly, I learned that{" "}
        <strong>
          the best features aren't standalone—they're woven into existing
          workflows
        </strong>{" "}
        where users already have intent and context.
      </>
    ),
  },
  {
    title: "Universal Search Experience",
    timeline: "3 months",
    tldr: (
      <>
        Unified three separate search experiences into{" "}
        <strong>one intelligent discovery engine</strong>. Users now search once
        across RFPs, Products, and Experts—with{" "}
        <strong>semantic search and smart filtering</strong>.
      </>
    ),

    problem: (
      <>
        Airframe's product has three core pillars: RFP Management, Product
        Catalog, and Expert Network. Each pillar existed as a{" "}
        <strong>separate silo</strong>, forcing users to search three times to
        find what they needed. Discovery is fundamental to Airframe's value
        proposition—users come to us to find the right AI tools and experts for
        their needs. Without unified search, users{" "}
        <strong>
          couldn't efficiently discover relevant use cases, products, or experts
        </strong>{" "}
        across our platform.
      </>
    ),

    vision: (
      <>
        Transform search from three disconnected experiences into{" "}
        <strong>one intelligent discovery engine</strong>. Users search once and
        see everything relevant—RFPs, products, and experts—with the ability to
        filter down when needed.
      </>
    ),

    process: [
      {
        step: "Research & Competitive Analysis",
        description: (
          <>
            I conducted competitive analysis of multi-category platforms
            (Spotify, Netflix, LinkedIn) to understand how successful products
            handle search across different content types. Key insight: users
            expect{" "}
            <strong>unified results with clear category differentiation</strong>
            , not separate search experiences per category. I also analyzed our
            user behavior data, discovering that users wanted to{" "}
            <strong>
              search by category, industry, and other contextual filters
            </strong>
            —not just by exact name matches. This validated the need for
            semantic search and rich filtering capabilities.
          </>
        ),
      },
      {
        step: "Search Infrastructure",
        description: (
          <>
            Led frontend team in integrating{" "}
            <strong>Typesense search engine</strong>, enabling semantic queries
            beyond exact name matching. Navigated significant technical
            constraints—our backend data schema limitations required creative
            frontend solutions to normalize and structure search data. As PM,
            balanced speed-to-market pressure with quality, making strategic
            tradeoffs on filter capabilities based on Typesense's architecture.
          </>
        ),
      },
      {
        step: "Per-Page Filter Optimization",
        description: (
          <>
            Before tackling universal search, I focused on optimizing the search
            experience within each individual pillar. I prioritized filter
            taxonomy based on{" "}
            <strong>user mental models and search frequency data</strong>.
            Initially, I designed a complex filter system inspired by LinkedIn's
            funnel-style filter UX, but as the number of filters grew beyond our
            initial scope, I pivoted to a{" "}
            <strong>collapsible filter sidebar</strong> that could accommodate
            expanding options without overwhelming the interface. This modular
            approach also made filters portable when we eventually unified
            search.
          </>
        ),
        images: [
          { image: funnel, description: "Funnel-Type Filters" },
          { image: bar, description: "Filter Side Bar" },
        ],
      },
      {
        step: "Universal Search Design",
        description: (
          <>
            Initiated universal search campaign after recognizing fragmented
            experience was limiting user value. Created comprehensive
            competitive analysis documenting patterns for multi-category search
            results. Designed wireframes and high-fidelity mockups exploring
            various result layouts—opted for{" "}
            <strong>category-grouped results</strong> with ability to filter to
            specific pillars. Maintained 'scoped search' option for users who
            want targeted queries.
          </>
        ),
        images: [{ image: search, description: "News " }],
      },
      {
        step: "Implementation & Iteration",
        description: (
          <>
            Led engineers in building universal search as{" "}
            <strong>primary navigation pattern</strong>. Shipped to production
            with analytics tracking search patterns and category engagement.
          </>
        ),
        images: [{ image: searhVideo, description: "Search video" }],
      },
    ],

    designDecisions: [
      {
        decision: "Category-Grouped Results vs. Intertwined Results",
        rationale: (
          <>
            Testing showed users needed to understand what type of resource they
            were viewing (RFP vs Product vs Expert) before clicking.{" "}
            <strong>Grouped results provided clear mental model</strong> and
            better scannability.
          </>
        ),
      },
      {
        decision: "Maintained Scoped Search Option",
        rationale: (
          <>
            While universal search served exploratory needs,{" "}
            <strong>
              power users valued the ability to search within specific pillars
            </strong>{" "}
            for focused queries. We kept both options accessible.
          </>
        ),
      },
      {
        decision: "Collapsible Sidebar Filters vs. Top Filters",
        rationale: (
          <>
            As filter options grew, a collapsible sidebar allowed us to{" "}
            <strong>
              accommodate complexity without cluttering the main search
              interface
            </strong>
            . Users could expand when needed and collapse when focused on
            results.
          </>
        ),
      },
    ],

    solution: (
      <>
        A <strong>unified search experience</strong> that allows users to search
        across all three pillars of Airframe's product: RFPs, Products, and
        Experts.
      </>
    ),

    reflections: (
      <>
        This project taught me the importance of starting with research—studying
        how successful multi-category platforms handle search informed every
        design decision. The pivot from complex LinkedIn-style filters to a
        simpler collapsible sidebar showed me that{" "}
        <strong>
          sometimes the best design isn't the most sophisticated one, but the
          one that scales gracefully
        </strong>{" "}
        as complexity grows. Most importantly, I learned to balance multiple
        user mental models: some users want comprehensive discovery (universal
        search), while others want focused precision (scoped search). The best
        solution accommodates both.
      </>
    ),
  },
  {
    title: "Airframe News Desk",
    timeline: "In Progress",
    tldr: (
      <>
        Designed a <strong>daily news experience</strong> to solve Airframe's
        retention problem. Goal: transform users from{" "}
        <strong>2-3 visits per year to 3+ visits per week</strong> through
        personalized AI use case discovery.
      </>
    ),

    context: (
      <>
        Software buying happens only <strong>2-3 times per year</strong>. After
        purchase decisions, users had no reason to return to Airframe until
        their next buying cycle—creating a{" "}
        <strong>retention and engagement problem</strong> that threatened our
        growth.
      </>
    ),

    problem: (
      <>
        AI signal is buried in hype and vendor noise. Executives and functional
        leaders need <strong>credible, role-relevant examples</strong> they can
        reference in meetings and use to de-risk technology choices. But sifting
        through press releases, case studies, and LinkedIn posts is
        time-consuming and unreliable. Meanwhile, Airframe needs{" "}
        <strong>daily active users</strong> to build retention and become the
        default platform for AI decision-making.
      </>
    ),

    vision: (
      <>
        Transform Airframe into the go-to platform for AI use case discovery by
        delivering a <strong>daily news experience</strong> that answers: 'What
        is everyone else doing with AI?' Our BHAG: Users visit Airframe{" "}
        <strong>3+ times per week</strong>, with News as their landing page.
      </>
    ),

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
        step: "Research & Competitive Analysis",
        description: (
          <>
            I conducted external interviews with software buyers (CXOs, VPs) and
            recommenders (directors, managers) to understand their
            information-gathering habits and pain points with existing AI news
            sources. Key insight: they're{" "}
            <strong>
              drowning in content but starving for credible, quantified examples
            </strong>{" "}
            they can actually use. I also analyzed 25+ news platforms,
            newsletters, and discussion forums (Morning Brew, Lenny's
            Newsletter, Wall Street Journal, The Information) for design
            patterns and content structure—studying what makes content
            scannable, engaging, and actionable. To emphasize an expert-first
            review experience, I would combine the features of a typical news
            platform and a discussion forum.
          </>
        ),
      },
      {
        step: "News Page Exploration & Design",
        description: (
          <>
            I studied popular news sites and email newsletters to understand
            engagement mechanics—what makes people actually read vs. skim? Key
            focus:{" "}
            <strong>balancing information density with scannability</strong>. I
            wanted users to extract value in under 2 minutes. I created{" "}
            <strong>40+ low-fidelity prototypes</strong> for the news page,
            playing with different layouts (single-column vs. grid, card-based
            vs. list), content hierarchies (headline-first vs. image-first), and
            navigation patterns (chronological feed vs. categorized sections).
            Through internal feedback, I landed on a{" "}
            <strong>card-based layout with clear visual hierarchy</strong>:
            compelling headline, and category/product/customer tags to help
            users quickly understand the content and decide if it's relevant to
            them.
          </>
        ),
        images: [
          { image: lowfi_news, description: "Categorized sections" },
          {
            image: lowfi_news2,
            description: "By Category and By Product priority",
          },
          { image: lowfi_news3, description: "Space for descriptions" },
          { image: lowfi_news4, description: "Prioritize spacing" },
        ],
      },
      {
        step: "Internal Newsletter Prototype",
        description: (
          <>
            Before investing in a full in-app experience, I launched an internal
            newsletter prototype to{" "}
            <strong>
              validate the concept and refine our content curation workflow
            </strong>
            . Daily email featuring 5 hand-curated case studies from our
            database, sent to the team. This phase focused on format
            testing—learning what type of content resonated, how to structure
            summaries, and how much detail was too much. Key learning:{" "}
            <strong>brevity wins</strong>. Recipients engaged most with shorter
            summaries highlighting quantifiable outcomes (e.g., '40% improvement
            in revenue') rather than long narrative descriptions.
          </>
        ),
      },
      {
        step: "External Newsletter + A/B Testing",
        description: (
          <>
            Expanded to 20 external recipients (10 buyers + 10 recommenders)
            within our sales expert network. I wanted to leverage relevancy of
            the content to the recipients and an unbiased Airframe perspective
            was the best way to do that. I experimented with two A/B tests: (1){" "}
            <strong>Role-focused title vs Generic title</strong>—role-focused
            won. (2) <strong>Bullet point summary vs Paragraphs</strong>—bullets
            won.
          </>
        ),
      },
      {
        step: "Coming Soon: In-App Launch",
        description: (
          <>
            A fully integrated in-app news experience will launch in the coming
            months, building on the validated newsletter format. The news feed
            will be{" "}
            <strong>personalized to each user's role and department</strong>,
            showcasing the most relevant and impactful use cases in one
            centralized location. Features will include: 'For You' personalized
            feed, browse by department/industry filters, social interactions,
            and integration with our Expert Network—allowing users to
            immediately connect with featured experts. The goal: make News the{" "}
            <strong>default landing page</strong>, transforming Airframe from a
            transactional tool into a daily habit.
          </>
        ),
        images: [
          { image: hifi_news1, description: "News page" },
          { image: hifi_news2, description: "News page" },
          { image: hifi_news3, description: "News page" },
        ],
      },
    ],
    designDecisions: [
      {
        decision: "Newsletter-First Launch vs. In-App First",
        rationale: (
          <>
            Testing the concept through email allowed us to{" "}
            <strong>
              validate content-market fit and refine our curation workflow
            </strong>{" "}
            before investing in complex in-app infrastructure. Email also met
            users where they already were—in their inbox.
          </>
        ),
      },
      {
        decision: "Role-Based Personalization from Day One",
        rationale: (
          <>
            Rather than starting generic and personalizing later, we built
            personalization into the core concept.{" "}
            <strong>
              A/B testing validated this: role-focused titles increased
              engagement
            </strong>
            , proving users crave relevance over breadth.
          </>
        ),
      },
      {
        decision: "Quantifiable Outcomes as Core Content Requirement",
        rationale: (
          <>
            User research revealed buyers need{" "}
            <strong>concrete numbers to build business cases</strong>. Every
            story must include specific metrics (% improvement, $ saved, time
            reduced) to be publication-worthy.
          </>
        ),
      },
    ],
    solution: (
      <>
        A fully integrated in-app news experience that gives users a{" "}
        <strong>daily dose of AI use cases</strong> to reference in their
        meetings and use to de-risk technology choices.
      </>
    ),

    reflections: (
      <>
        This project exemplifies my product engineering approach:{" "}
        <strong>start lean, validate fast, iterate based on data</strong>. The
        newsletter-first strategy let us test the concept and refine our content
        strategy without building complex infrastructure upfront. The A/B tests
        taught me the power of personalization—even simple role-based targeting
        can dramatically improve engagement. Most importantly, I learned that{" "}
        <strong>
          solving retention requires changing user behavior, not just adding
          features
        </strong>
        . News Desk isn't just content—it's a behavior change mechanism designed
        to transform Airframe from a transactional tool into a daily habit.
      </>
    ),
  },
];
