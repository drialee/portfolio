import {
  MessageSquare,
  Image as ImageIcon,
  Sparkles,
  Zap,
  ShoppingCart,
  Calendar,
  PhoneCall,
  User,
} from "lucide-react";

import widget2 from "../../utils/projects/Firework/widget/widget 2.png";
import widget3 from "../../utils/projects/Firework/widget/widget 3.png";
import widget4 from "../../utils/projects/Firework/widget/widget 4.png";
import igImporter1 from "../../utils/projects/Firework/ig_importer/ig importer 1.png";
import igImporter2 from "../../utils/projects/Firework/ig_importer/ig importer 2.png";
import igImporter3 from "../../utils/projects/Firework/ig_importer/ig importer 3.png";
import igImporter4 from "../../utils/projects/Firework/ig_importer/ig importer 4.png";
import instagramImporter from "../../utils/projects/Firework/ig_importer/instagramImporter.png";
import igImporter5 from "../../utils/projects/Firework/ig_importer/ig importer 5.png";
import poster1 from "../../utils/projects/Firework/poster/poster 1.png";
import poster2 from "../../utils/projects/Firework/poster/poster 2.png";
import poster3 from "../../utils/projects/Firework/poster/poster 3.png";
import poster4 from "../../utils/projects/Firework/poster/poster 4.png";
import w2v1 from "../../utils/projects/Firework/w2v/step1.png";
import w2v2 from "../../utils/projects/Firework/w2v/step2.png";
import w2v3 from "../../utils/projects/Firework/w2v/step3.png";
import fomo1 from "../../utils/projects/Firework/fomo/fomo 1.png";
import fomo2 from "../../utils/projects/Firework/fomo/fomo 2.png";
import fomo3 from "../../utils/projects/Firework/fomo/fomo 3.png";
import type { CaseStudyProject } from "./types";

export const fireworkSections = [
  "Overview",
  "About",
  "Product Design",
  "Engineering",
  "Impact",
];
const posterProject = [poster1, poster2, poster3, poster4];
const w2vProject = [w2v1, w2v2, w2v3];
const fomoProject = [fomo1, fomo2, fomo3];

export const caseStudyProjects: CaseStudyProject[] = [
  {
    title: "Instagram Importer",
    timeline: "2 weeks",
    tldr: (
      <>
        Eliminated <strong>3-5 hours of manual re-uploading</strong> by letting
        creators import Instagram content via OAuth. Reduced onboarding friction
        and enabled creators to launch with full storefronts instantly.
      </>
    ),
    problem: (
      <>
        Content creators and brands had invested months building content
        libraries on Instagram—hundreds of product videos, tutorials, and
        testimonials. But when joining Firework, they faced a painful choice:{" "}
        <strong>spend hours manually re-uploading every video</strong>, or
        launch with an empty storefront that looked unprofessional. This
        onboarding friction was a major barrier to adoption, particularly for
        influencers and brands who needed immediate visual presence. The manual
        re-upload process took <strong>3-5 hours for typical creators</strong>,
        causing many to abandon setup entirely.
      </>
    ),

    vision: (
      <>
        Enable creators to{" "}
        <strong>
          instantly populate their Firework presence with existing Instagram
          content
        </strong>
        , eliminating onboarding friction and accelerating
        time-to-first-live-stream.
      </>
    ),

    personas: [
      {
        name: "Jessica - Lifestyle Influencer",
        goal: "Quickly set up professional-looking Firework profile using existing Instagram content library to start monetizing immediately",
        pain: "Doesn't want to spend hours re-uploading 200+ videos she already has on Instagram—it's redundant and delays her launch",
        description:
          "Influencer with 50K Instagram followers looking to monetize through Firework",
      },
      {
        name: "Brand Marketing Manager - Retail Team",
        goal: "Efficiently migrate product showcase videos from Instagram to Firework to maintain consistent brand presence across platforms",
        pain: "Managing content across multiple platforms is time-consuming and risks inconsistency—needs seamless multi-platform workflow",
        description:
          "E-commerce brand managing content across Instagram, TikTok, and Firework",
      },
    ],

    process: [
      {
        step: "Information Architecture & Flow Design",
        description: (
          <>
            Mapped complete user journey from authentication through final
            import: (1) Discover feature → (2){" "}
            <strong>Connect Instagram via OAuth</strong> → (3) Preview content
            in grid → (4) Select specific posts → (5) Confirm import → (6) Track
            progress → (7) Review imported content. Designed for both mobile and
            desktop, accounting for different use cases—mobile for quick setup,
            desktop for bulk management. Key decision: make selection step
            optional with <strong>'import all' shortcut</strong> for creators
            who trust their entire library.
          </>
        ),
      },
      {
        step: "Wireframing & Interaction Patterns",
        description: (
          <>
            Created lo-fi wireframes for OAuth authentication flow (minimizing
            steps), grid selection interface (checkbox vs. tap-to-select), and
            import progress states (real-time vs. background processing).
            Explored different grid layouts—landed on{" "}
            <strong>3-column mobile, 5-column desktop</strong> to balance
            preview size with scanning efficiency. Designed clear visual
            distinction between selected and unselected posts using border
            highlight and checkmark badge.
          </>
        ),
        images: [
          { image: igImporter2, description: "Mobile Select" },
          { image: instagramImporter, description: "Desktop Select" },
        ],
      },
      {
        step: "Visual Design & Responsive Design",
        description: (
          <>
            Designed high-fidelity interfaces matching Firework's design system
            while respecting Instagram's brand guidelines (proper logo usage,
            color requirements for OAuth screens). Created responsive
            breakpoints ensuring the grid remained scannable across devices.
            Designed loading states showing{" "}
            <strong>individual post import progress</strong>—important because
            imports could take 2-3 minutes for large selections. Added success
            confirmation screen with 'View Imported Content' CTA to immediate
            gratification.
          </>
        ),
        images: [
          { image: igImporter3, description: "Content Overview" },
          { image: igImporter4, description: "Edit Caption" },
          { image: igImporter5, description: "Hashtag autocomplete" },
        ],
      },
      {
        step: "Edge Case & Error State Design",
        description: (
          <>
            Defined comprehensive error handling: (1) Failed
            authentication—clear re-connect CTA, (2) API rate limits—explain
            limits and suggest importing in batches, (3) Permission
            issues—explain required Instagram permissions upfront, (4){" "}
            <strong>Individual post import failures</strong>—show which posts
            failed with option to retry. Created empty state for creators with
            no Instagram content, encouraging manual upload instead.
          </>
        ),
      },
    ],

    solution: (
      <>
        A seamless Instagram import experience available on both mobile and
        desktop. Creators <strong>authenticate via secure OAuth</strong>,
        preview their Instagram content in a scrollable grid, select specific
        posts (or import all), and{" "}
        <strong>track import progress in real-time</strong>. The feature
        intelligently handles errors, respects rate limits, and provides clear
        feedback throughout. Imported videos automatically populate the
        creator's Firework profile, ready for use in storefronts and live
        streams.
      </>
    ),

    designDecisions: [
      {
        decision: "Selective Import vs. Bulk Import Only",
        rationale: (
          <>
            While bulk import would be simpler to build, user research showed
            creators wanted control—not all Instagram content fits Firework's
            use case.
          </>
        ),
      },
      {
        decision: "Real-Time Progress vs. Background Processing",
        rationale: (
          <>
            Import could take 2-3 minutes for large selections.{" "}
            <strong>Showing real-time progress kept users engaged</strong> and
            built anticipation rather than making them wonder if it worked.
            Added option to navigate away and check back later for very large
            imports.
          </>
        ),
      },
    ],

    reflections: (
      <>
        This project reinforced that{" "}
        <strong>
          the best features solve real pain points with elegant simplicity
        </strong>
        . The Instagram import wasn't flashy, but it removed a massive barrier
        to adoption. The key design challenge was handling complexity
        gracefully—OAuth, rate limits, selective import, error states—while
        keeping the experience feeling simple and fast. I learned that sometimes{" "}
        <strong>
          the most important design work happens in edge cases and error states
        </strong>{" "}
        that most users never see, but that prevent frustration for the few who
        do. Most importantly, this feature taught me to design for migration,
        not just creation—users have existing workflows and content, and
        respecting that investment builds loyalty.
      </>
    ),
  },

  {
    title: "Animated Short Video Poster Creator",
    timeline: "2 weeks",
    tldr: (
      <>
        Democratized professional video marketing with a{" "}
        <strong>drag-to-trim poster creator</strong> that takes{" "}
        <strong>under 5 minutes</strong>. Non-designers can now create
        eye-catching animated posters without After Effects or Canva.
      </>
    ),

    problem: (
      <>
        Video thumbnails were static images that{" "}
        <strong>failed to capture attention in crowded social feeds</strong> and
        storefronts. Creators knew animated posters performed better but{" "}
        <strong>lacked design expertise or time</strong> to create them using
        complex tools like After Effects or Canva. This put non-designers at a
        disadvantage—their content was invisible in feeds dominated by
        professionally designed thumbnails. The result:{" "}
        <strong>lower click-through rates and wasted content quality</strong>{" "}
        buried beneath poor packaging.
      </>
    ),

    vision: (
      <>
        Democratize professional video marketing by giving every creator the
        power to design{" "}
        <strong>eye-catching animated posters in minutes, not hours</strong>—no
        design skills required.
      </>
    ),

    personas: [
      {
        name: "Alex - Small Business Owner",
        goal: "Create professional-looking video posters that stand out in feeds without hiring a designer or learning complex tools",
        pain: "Lacks design expertise and time to learn After Effects or Canva—needs something that works out-of-the-box",
        description:
          "Runs online boutique, creates product videos but struggles with visual marketing",
      },
      {
        name: "Taylor - Marketing Manager",
        goal: "Produce consistent, on-brand animated posters at scale for 50+ product videos per month",
        pain: "Current tools like After Effects require per-designer licenses ($30/month each) and technical training—doesn't scale",
        description:
          "Manages content team creating hundreds of videos needing professional thumbnails",
      },
    ],

    process: [
      {
        step: "Research & Competitive Analysis",
        description: (
          <>
            Evaluated 6 existing poster and thumbnail tools (Canva, Adobe Spark,
            Creatopy, Placeit, Snappa, Visme) to identify gaps in ease-of-use
            and animation capabilities. Key findings:{" "}
            <strong>
              professional tools were too complex for non-designers
            </strong>{" "}
            (steep learning curve), while simple tools lacked animation
            features. Opportunity:{" "}
            <strong>
              combine Canva's simplicity with professional animation presets
            </strong>
            . Also analyzed high-performing video posters across Instagram and
            TikTok to identify design patterns—text overlays, gradient effects,
            motion emphasis.
          </>
        ),
      },
      {
        step: "User Flow Mapping & Simplification",
        description: (
          <>
            Designed streamlined <strong>3-step creation flow</strong>{" "}
            prioritizing speed: (1) Upload video or select from library → (2)
            Customize using drag-to-trim elements → (3) Preview the animation,
            add hashtags, and publish.
          </>
        ),
      },
      {
        step: "Interface Design & Interaction Patterns",
        description: (
          <>
            Created <strong>drag-to-crop interface</strong> for video selection
            so creators can see exactly what they are getting. I designed a
            simple interface for the text editing toolbar and the preview panel.
          </>
        ),
        images: [
          { image: poster1, description: "Video Selection" },
          { image: poster2, description: "Add Posters" },
          { image: poster3, description: "Poster editing" },
          { image: poster4, description: "Preview Video" },
        ],
      },
      {
        step: "Design System Integration & Polish",
        description: (
          <>
            Ensured visual consistency with Firework's existing component
            library—buttons, input fields, color schemes all matched platform
            standards. Created <strong>reusable components</strong> (animation
            preset card, text editing toolbar, preview panel) that could be used
            in future video editing features. Designed loading states for
            template rendering and export progress.
          </>
        ),
      },
    ],

    solution: (
      <>
        An intuitive drag-to-trim poster creator that turns anyone into a
        designer in minutes. Users upload videos and can choose to add both a
        static and animated poster. <strong>Real-time preview panel</strong>{" "}
        shows exactly how the animated poster will look in motion. The entire
        creation flow takes <strong>under 5 minutes</strong>, producing
        professional animated posters that increase click-through rates.
      </>
    ),

    designDecisions: [
      {
        decision: "Drag-to-trim interface for video selection",
        rationale: (
          <>
            User research showed non-designers were intimidated by custom
            animation controls.{" "}
            <strong>
              Drag-to-trim interface delivered professional results instantly
            </strong>{" "}
            while keeping complexity low.
          </>
        ),
      },
      {
        decision: "Real-Time Preview vs. Render Button",
        rationale: (
          <>
            <strong>Instant preview eliminated guesswork</strong> and fear of
            'committing' to changes. Users experimented more freely, leading to
            better creative outcomes. Required more frontend optimization but
            dramatically improved experience.
          </>
        ),
      },
    ],

    reflections: (
      <>
        This project taught me that{" "}
        <strong>the best tools hide their complexity</strong>. Non-designers
        don't want to learn design principles—they want results. By providing an
        intuitive drag-to-trim interface, we made everyone feel like a designer
        without actually teaching design. The real-time preview was crucial—it
        transformed experimentation from scary to fun. Users clicked around
        freely because they could instantly see results without commitment. Most
        importantly, I learned that{" "}
        <strong>
          democratization doesn't mean dumbing down—it means making professional
          output accessible
        </strong>{" "}
        through smart defaults and guided constraints.
      </>
    ),

    solutionImages: posterProject,
  },

  {
    title: "Webpage-to-Video Generator",
    timeline: "2 weeks",
    tldr: (
      <>
        AI-powered tool that transforms product pages into professional video
        ads in <strong>under 2 minutes</strong>. Eliminated{" "}
        <strong>2-3 weeks and $2K-$5K</strong> production costs, enabling brands
        to scale video creation from 2-3 per quarter to 20+ per month.
      </>
    ),

    problem: (
      <>
        Creating video marketing campaigns from product pages was painfully
        time-intensive, requiring creative expertise, scriptwriting skills,
        voiceover talent, and video editing software. A single product video
        could take <strong>2-3 weeks and cost $2,000-$5,000</strong> in
        production expenses. E-commerce brands wanted to create videos for every
        product launch, sale event, and seasonal campaign, but the economics
        didn't work—they could only afford 2-3 videos per quarter. This massive
        gap between video demand (which{" "}
        <strong>drives 80% higher conversions</strong>) and production capacity
        left brands choosing between expensive agencies or no video content at
        all.
      </>
    ),

    vision: (
      <>
        Transform any product webpage into a{" "}
        <strong>professional video ad in under 2 minutes using AI</strong>
        —democratizing video marketing for brands of all sizes.
      </>
    ),

    personas: [
      {
        name: "Emily Chen - E-commerce Marketing Manager",
        goal: "Generate video ads quickly for seasonal product launches, flash sales, and new inventory—needs 20+ videos per month",
        pain: "Video production is expensive ($2K+ per video) and slow (2-3 week turnaround), limiting campaign frequency and missing time-sensitive opportunities",
        description:
          "Mid-size DTC brand managing 200+ SKUs with constant inventory turnover",
      },
      {
        name: "David Rodriguez - Digital Agency Owner",
        goal: "Scale video creation for multiple client campaigns simultaneously without hiring expensive video production staff",
        pain: "Manual video creation doesn't scale—each video requires scriptwriting, voiceover, editing, limiting how many clients he can serve profitably",
        description:
          "Boutique agency with 15 clients needing consistent video content production",
      },
    ],

    process: [
      {
        step: "Competitive Analysis",
        description: (
          <>
            I studied the best in class tools for webpage-to-video generation
            (Synthesia, Renderforest, Luma, etc.) to understand the{" "}
            <strong>best practices and features</strong> to include in our
            product. I wanted to understand how others were handling the
            complexity of webpage-to-video generation.
          </>
        ),
      },
      {
        step: "User Journey Mapping & Flow Design",
        description: (
          <>
            Mapped end-to-end journey from URL input through AI generation to
            final video export, identifying key decision points and potential
            failure modes. Designed{" "}
            <strong>3-step progressive disclosure flow</strong> to manage
            complexity: (1) URL Input with validation and selecting the avatar
            to represent the brand, (2) Content Extraction preview showing what
            AI found, (3) Template selection and previewing the video. Key
            insight:{" "}
            <strong>
              users needed to see extracted content before committing to
              generation
            </strong>
            —preview step built trust in AI accuracy.
          </>
        ),
      },
      {
        step: "Wireframing & Prototyping",
        description: (
          <>
            Created low-fidelity wireframes for 3-step process, focusing on
            progressive disclosure to reduce cognitive load. Explored different
            layouts for choosing the avatar: landed on a{" "}
            <strong>grid of avatars</strong> that users can scroll through to
            select the one that best represents the brand. Iterated through 3
            rounds based on team feedback, simplifying navigation with a
            progress bar and making 'back' functionality intuitive.
          </>
        ),
        images: [
          { image: w2v1, description: "Step 1: URL Input & Avatar Selection" },
          { image: w2v2, description: "Step 2: Content Extraction Preview" },
          { image: w2v3, description: "Step 3: Template Selection" },
        ],
      },
      {
        step: "High-Fidelity Design & Microinteractions",
        description: (
          <>
            Designed polished UI with{" "}
            <strong>loading animations and progress indicators</strong> that
            explain the AI process ('Analyzing webpage...', 'Generating
            script...', 'Creating voiceover...', 'Assembling video...'). These
            transparent process indicators transformed waiting from frustrating
            to fascinating—users wanted to watch AI work. I also designed a
            template selection interface that allows users to select the
            template that best matches the brand and the video content.
          </>
        ),
      },
    ],

    solution: (
      <>
        An AI-powered webpage-to-video generator that creates professional
        marketing videos in <strong>under 2 minutes</strong>. Users simply paste
        a product page URL—AI analyzes the page, extracts product information,
        and generates a branded video with script, voiceover led by a Firework
        avatar. Users can{" "}
        <strong>preview extracted content before generation</strong>, customize
        video style and branding, and then export high-quality video. The
        feature handles complex webpage structures, provides clear error
        recovery, and delivers professional results without requiring video
        production expertise.
      </>
    ),

    designDecisions: [
      {
        decision: "3-Step Progressive Disclosure vs. Single-Page Wizard",
        rationale: (
          <>
            Testing showed users were overwhelmed when all options (URL, avatar,
            extraction, template selection, generation) appeared at once.{" "}
            <strong>
              Breaking into distinct steps with clear progression reduced
              cognitive load
            </strong>
            .
          </>
        ),
      },
      {
        decision: "Grid vs Carousel for avatar previews",
        rationale: (
          <>
            I designed a <strong>grid of avatars</strong> that users can scroll
            through to select the one that best represents the brand. I
            originally designed a carousel, but it proved difficult for users to
            have to navigate through the entire carousel to select the right
            avatar.
          </>
        ),
      },
      {
        decision: "Preview Extraction Before Generation vs. Direct Generation",
        rationale: (
          <>
            Users wanted confidence that AI correctly understood their webpage
            before committing to generation.{" "}
            <strong>
              Preview step showing extracted content built trust in AI accuracy
            </strong>
            .
          </>
        ),
      },
    ],

    reflections: (
      <>
        This project taught me how to <strong>design for AI uncertainty</strong>
        . Unlike traditional features with deterministic outcomes, AI extraction
        could fail in unpredictable ways. The key was building user confidence
        through transparency—showing exactly what AI extracted, explaining what
        it was doing during generation, and providing clear error recovery. The
        preview step was crucial—it{" "}
        <strong>
          transformed AI from a black box into a collaborative tool
        </strong>{" "}
        users could verify. I also learned the importance of designing for speed
        expectations—users expected instant results from 'AI', so the loading
        states needed to show progress and build anticipation rather than feel
        like waiting.
      </>
    ),

    solutionImages: w2vProject,
  },
  {
    title: "1:1 Video Chat Identity Feature",
    timeline: "2 weeks",
    tldr: (
      <>
        Added <strong>custom avatars and real-time status indicators</strong> to
        video chat, humanizing the experience and building trust..
      </>
    ),

    problem: (
      <>
        The 1:1 video chat player{" "}
        <strong>lacked personalization and human connection</strong>, making
        users feel like they were chatting with a faceless system rather than a
        real store associate. There was{" "}
        <strong>no visual indicator of who they were chatting with</strong>,
        whether the associate was actually online and available, or what
        happened when the associate stepped away. This impersonal experience
        undermined Firework's value proposition of recreating the authentic
        in-store shopping experience through video.
      </>
    ),

    vision: (
      <>
        Transform the video chat from a transactional tool into a{" "}
        <strong>
          personal connection that mirrors the warmth and authenticity of
          in-store interactions
        </strong>
        .
      </>
    ),

    personas: [
      {
        name: "Sarah - Fashion Retail Associate",
        goal: "Build authentic connections with potential customers during live shopping sessions to drive conversions",
        pain: "Feels disconnected from customers through the screen—can't convey personality or build trust without visual identity",
        description:
          "Store associate using video chat to guide customers through product selection",
      },
      {
        name: "Mike - E-commerce Customer",
        goal: "Get confident, personalized guidance before spending $300+ on products he can't touch in person",
        pain: "Chat feels robotic—can't tell if he's talking to a real person or if they're multitasking and ignoring him",
        description:
          "Online shopper seeking guidance before making purchase decision",
      },
    ],

    process: [
      {
        step: "Research & Competitive Analysis",
        description: (
          <>
            I analyzed competitor chat interfaces (Zoom, WhatsApp, Intercom) to
            understand best practices for identity indicators and online status.
            Reviewed user feedback from support tickets revealing customers
            often asked <strong>'who am I talking to?'</strong> and complained
            about not knowing if associates were still there during pauses. Key
            insight:{" "}
            <strong>
              personalization drives trust, and trust drives conversion
            </strong>{" "}
            in video shopping.
          </>
        ),
      },
      {
        step: "User Personas & Journey Mapping",
        description: (
          <>
            Created detailed personas for both sides of the conversation—retail
            associates and e-commerce customers—to understand competing needs.
            Associates needed to{" "}
            <strong>project professionalism and personality</strong>, while
            customers needed{" "}
            <strong>reassurance they were getting real human attention</strong>.
            Mapped the full chat journey identifying key moments where identity
            and status mattered most: initial connection, mid-conversation
            pauses, and associate leaving.
          </>
        ),
      },
      {
        step: "Wireframing & Concept Exploration",
        description: (
          <>
            Sketched 5+ variations exploring different approaches: avatar
            placement (corner overlay vs. sidebar), online indicator styles
            (dot, badge, glow effect), and upload flows (profile settings vs.
            in-chat). Explored tradeoffs between prominent identity display and
            preserving video real estate. Landed on{" "}
            <strong>corner avatar with green dot indicator</strong> for optimal
            balance.
          </>
        ),
      },
      {
        step: "Prototyping & Interaction Design",
        description: (
          <>
            Built high-fidelity interactive prototype in Figma showing the
            complete flow: avatar upload process,{" "}
            <strong>real-time status changes</strong> (online → away → offline),
            and loading states during transitions. Designed subtle
            animations—green dot pulse for online, fade-out for offline—to draw
            attention without distraction. Created three key states: active chat
            (green dot + avatar), connecting to associate message, and associate
            left message.
          </>
        ),
        images: [
          { image: widget3, description: "Connecting to associate" },
          { image: widget2, description: "Associate online" },
          { image: widget4, description: "Associate offline" },
        ],
      },
      {
        step: "Implementation & Developer Collaboration",
        description: (
          <>
            Worked closely with engineering to ensure pixel-perfect
            implementation within <strong>2-week sprint timeline</strong>.
            Created detailed specs for status logic (WebSocket connection
            monitoring), avatar fallback states (initials if no upload), and
            animation timing (300ms transitions). Balanced personalization
            ambitions with technical constraints—decided custom status messages
            were out-of-scope for v1.
          </>
        ),
      },
    ],

    designDecisions: [
      {
        decision: "60px Avatar Size with Semi-Transparent Background",
        rationale: (
          <>
            Testing revealed tension between customer desire to see associates
            clearly and concern about obscuring products.{" "}
            <strong>60px with transparency achieved both</strong>—recognizable
            faces without visual competition.
          </>
        ),
      },
      {
        decision: "Green Dot Only (No Custom Status Messages)",
        rationale: (
          <>
            Wanted to ship v1 quickly within sprint timeline.{" "}
            <strong>
              Green dot indicator provided essential status information
            </strong>{" "}
            without engineering complexity of custom messaging system.
          </>
        ),
      },
      {
        decision: "Profile Upload vs. In-Chat Upload",
        rationale: (
          <>
            Placed upload in profile settings rather than during chat to
            encourage <strong>thoughtful photo selection</strong> and prevent
            mid-conversation disruption. Associates set up once, customers
            benefit every time.
          </>
        ),
      },
    ],

    reflections: (
      <>
        This project taught me the power of{" "}
        <strong>small humanizing touches</strong>. Adding faces and status
        indicators seems simple, but the impact on trust and engagement was
        significant. The key was balancing personalization with practicality—I
        wanted rich custom status messages, but{" "}
        <strong>
          the green dot delivered 80% of the value in 20% of the implementation
          time
        </strong>
        . Sometimes the minimal viable solution is actually the right long-term
        solution. Most importantly, I learned to design for both sides of an
        interaction—associates needed professional identity projection,
        customers needed trust signals.
      </>
    ),

    solution: (
      <>
        A humanizing identity system that brings personality to video chat
        through <strong>custom avatars and real-time status indicators</strong>.
        Associates upload professional photos visible to customers throughout
        the chat, while a green dot indicator shows online availability. When
        finding the right associate, customers see a loading spinner and
        'connecting to agent' message. When the associate steps away, a clear
        offline message appears. This creates transparency and trust while
        maintaining focus on the video shopping experience.
      </>
    ),
  },

  {
    title: "FOMO Elements for Livestreams",
    timeline: "4 weeks",
    tldr: (
      <>
        Designed <strong>real-time purchase notifications</strong> to increase
        livestream conversions. Addressed{" "}
        <strong>2.3% conversion rate vs. 4-6% benchmark</strong> by adding
        urgency and social proof without cluttering the viewing experience.
      </>
    ),

    problem: (
      <>
        Livestream purchasing rates were declining. Viewers weren't compelled to
        act quickly, missing the <strong>urgency and social proof</strong> that
        drives conversions in physical shopping experiences.
      </>
    ),

    vision: (
      <>
        Recreate the urgency and social proof of in-store shopping within
        livestreams, driving <strong>immediate purchase decisions</strong>{" "}
        without disrupting the viewing experience.
      </>
    ),

    personas: [
      {
        name: "Lisa - Impulse Shopper",
        goal: "Feel confident in purchase decisions during livestreams",
        pain: "Uncertain if products are actually popular or if it's a good deal",
        description:
          "Regular livestream viewer who enjoys spontaneous purchases but needs reassurance before buying",
      },
      {
        name: "Mark - Deal Hunter",
        goal: "Catch limited-time offers before they sell out",
        pain: "No sense of urgency or indication of product scarcity",
        description:
          "Strategic shopper who values exclusive deals but needs clear signals about scarcity and time limits",
      },
    ],

    process: [
      {
        step: "Problem Validation",
        description: (
          <>
            Analyzed conversion data showing high engagement (average watch time
            8 minutes) but{" "}
            <strong>
              low conversion rate (2.3% vs. industry benchmark 4-6%)
            </strong>
            . User feedback consistently mentioned 'not sure if I should buy now
            or wait' and 'couldn't tell if product was popular.' This validated
            that{" "}
            <strong>
              urgency and social proof were missing psychological triggers
            </strong>{" "}
            preventing conversions.
          </>
        ),
      },
      {
        step: "Competitive Research & FOMO Patterns",
        description: (
          <>
            Studied 10+ livestream and e-commerce platforms documenting FOMO
            tactics (scarcity, social proof, countdown timers). Identified
            patterns that drove urgency without being intrusive or annoying. Key
            insight:{" "}
            <strong>
              subtle, authentic social proof (real purchases) outperformed
              aggressive tactics
            </strong>
            .
          </>
        ),
      },
      {
        step: "Concept Ideation & Prioritization",
        description: (
          <>
            Brainstormed 8+ FOMO approaches and prioritized based on impact vs.
            implementation complexity: (1) Real-time purchase count [High
            impact, Low complexity], (2) Limited stock indicators [High impact,
            Medium complexity], (3) Countdown timers for deals [Medium impact,
            Medium complexity], (4) Share discount code to friends [Low impact,
            Low complexity], (5) Emoji reactions [Low impact, Low complexity].
            Selected top 3 for MVP based on this analysis: (1) Emoji reactions,
            (2) Limited stock indicators, (3) Real-time purchase count.
          </>
        ),
      },
      {
        step: "Design Iteration",
        description: (
          <>
            Created 4 design variations exploring different visual approaches
            and placements. Key challenge:{" "}
            <strong>
              adding urgency cues without cluttering the video or feeling pushy
            </strong>
            . Tested placement options: corner overlays, bottom banners,
            floating cards, inline product cards. Selected{" "}
            <strong>
              subtle bottom-right notifications with gradient fade animations
            </strong>
            —visible enough to create urgency but non-intrusive to viewing
            experience. Figuring out the most impactful placement was crucial.
          </>
        ),
        images: [
          { image: fomo1, description: "Product count while checking out" },
          { image: fomo2, description: "Emoji hype mid-stream" },
          { image: fomo3, description: "Push on product page" },
        ],
      },
      {
        step: "Technical Feasibility",
        description: (
          <>
            Worked closely with engineering to identify real-time data available
            (purchase events, inventory levels, viewer counts) and performance
            constraints. Since we could not track user actions on external
            systems, we could not get the data on whether they actually
            completed the purchase. Therefore, we decided to show{" "}
            <strong>purchase momentum on click</strong>, which achieved urgency
            without accuracy risks of live inventory counts. This collaboration
            early on prevented scope creep and ensured designs were technically
            feasible.
          </>
        ),
      },
    ],

    designDecisions: [
      {
        decision: "Bottom-Right Placement with Fade Animation",
        rationale: (
          <>
            This position was visible without blocking video content or product
            cards. The{" "}
            <strong>
              3-second fade animation created urgency without becoming
              repetitive or annoying
            </strong>
            —users noticed new purchases without constant distraction.
          </>
        ),
      },
      {
        decision: "Purchase Momentum on Click (No Stock Levels)",
        rationale: (
          <>
            Inventory data was not available so we decided to show{" "}
            <strong>purchase momentum on click</strong>, which achieved urgency
            without accuracy risks of live inventory counts. This also prevented
            the need to track user actions on external systems.
          </>
        ),
      },
    ],

    solution: (
      <>
        A <strong>bottom-right animated notification</strong> that shows the
        hype (viewer clicks) around a product in real-time, without interrupting
        the viewing experience. This is a subtle way to show viewers that the
        product is popular and that they should buy it now.
      </>
    ),

    solutionImages: fomoProject,

    reflections: (
      <>
        This project taught me the importance of{" "}
        <strong>balancing psychological triggers with user experience</strong>.
        FOMO tactics can be effective but easily become manipulative or annoying
        if overdone. The key was using <strong>authentic social proof</strong>{" "}
        (real clicks) rather than fabricated scarcity. I also learned that
        sometimes technical limitations lead to better design—showing purchase
        momentum on click was actually more honest and effective than showing
        inventory counts that might be inaccurate. Most importantly, the{" "}
        <strong>3-second fade animation was crucial</strong>—it created just
        enough urgency without becoming background noise users would learn to
        ignore.
      </>
    ),
  },
];

export const engineeringProjects: CaseStudyProject[] = [
  {
    title: "Fusion Project - Digital Showroom x Livestreams",
    timeline: "6 weeks",
    tldr: (
      <>
        Unified two siloed products into <strong>one cohesive interface</strong>{" "}
        for scheduling and restreaming. Reduced setup time from{" "}
        <strong>15+ minutes to seconds</strong> and added batch upload for power
        users.
      </>
    ),

    problem: (
      <>
        Firework had two separate products—Livestreams and Digital Showroom—that
        served complementary use cases but created significant user friction.
        Livestream adoption was low because users had to{" "}
        <strong>
          manually configure restreaming settings and re-input event details for
          each session
        </strong>
        , taking 15+ minutes per setup. Meanwhile, Digital Showroom offered
        superior scheduling and restreaming capabilities but existed as a
        completely siloed product, forcing users to manage two separate systems.
      </>
    ),

    vision: (
      <>
        Unify livestreaming and digital showroom management into a{" "}
        <strong>single cohesive experience</strong> where users can schedule,
        manage, and restream events from one centralized interface—eliminating
        duplicate work and context switching.
      </>
    ),

    process: [
      {
        step: "Component Integration",
        description: (
          <>
            Built responsive React components that integrated{" "}
            <strong>
              calendar scheduling and livestream management into a single
              cohesive experience
            </strong>
            , implementing state management for real-time event synchronization.
          </>
        ),
      },
      {
        step: "Schedule for later feature",
        description: (
          <>
            Developed ability to{" "}
            <strong>
              schedule livestreams for later directly from the Digital Showroom
              calendar
            </strong>
            , eliminating need to recreate events and preserving all original
            settings and configurations.
          </>
        ),
      },
      {
        step: "Batch Upload System",
        description: (
          <>
            Implemented <strong>batch uploader feature</strong> enabling users
            to upload multiple videos simultaneously, reducing upload time from
            5+ minutes per video to bulk processing of entire campaigns.
          </>
        ),
      },
      {
        step: "Unified Architecture",
        description: (
          <>
            Designed <strong>reusable component architecture</strong> that
            merged both product experiences while maintaining flexibility for
            future feature expansion.
          </>
        ),
      },
    ],

    solution: (
      <>
        Created a <strong>unified interface</strong> that enables users to
        schedule events via calendar, automatically configure restreaming, and
        manage all live events from a centralized view—eliminating the need to
        switch between products or manually re-enter information.
      </>
    ),

    reflections: (
      <>
        This project taught me the importance of{" "}
        <strong>
          understanding user workflows beyond just technical requirements
        </strong>
        . The batch upload feature wasn't in the original spec, but analyzing
        user pain points revealed it was critical for power users. I also
        learned to design systems thinking ahead—the{" "}
        <strong>
          modular architecture we built made future integrations much easier
        </strong>
        . Finally, merging two products required careful attention to not
        breaking existing functionality; comprehensive testing and incremental
        rollout were essential for maintaining user trust.
      </>
    ),
  },

  {
    title: "Onboarding Experience for PLG Customers",
    timeline: "3 weeks",
    tldr: (
      <>
        Built{" "}
        <strong>interactive tutorial with real-time progress tracking</strong>{" "}
        to reduce 60% abandonment rate. Context-aware modals guide users through
        setup, eliminating confusion and support tickets.
      </>
    ),

    problem: (
      <>
        Firework's Product-Led Growth (PLG) customers were signing up but{" "}
        <strong>
          struggling to navigate the business portal without guidance
        </strong>
        . Support data revealed that{" "}
        <strong>
          over 60% of self-serve users abandoned setup within their first
          session
        </strong>{" "}
        due to confusion about next steps, resulting in low activation rates and
        increased support tickets.
      </>
    ),

    vision: (
      <>
        Transform onboarding from a confusing maze into a{" "}
        <strong>guided journey where users feel confident</strong>, understand
        next steps, and successfully activate their accounts—without needing
        support intervention.
      </>
    ),

    process: [
      {
        step: "User Flow Mapping",
        description: (
          <>
            Mapped the <strong>ideal onboarding sequence</strong> based on
            feature dependencies and user behavior patterns, prioritizing
            essential configurations that unblocked downstream features.
          </>
        ),
      },
      {
        step: "Context-Aware Modal System",
        description: (
          <>
            Created{" "}
            <strong>
              dynamic React modal with context-aware step progression
            </strong>{" "}
            that adapts based on which portal sections users have already
            completed versus which remain outstanding.
          </>
        ),
      },
      {
        step: "Real-Time Progress Tracking",
        description: (
          <>
            Implemented <strong>progress tracking system</strong> that monitors
            user actions across entire portal, automatically advancing tutorial
            steps and celebrating milestones to maintain momentum.
          </>
        ),
      },
      {
        step: "Dynamic Highlighting & Navigation",
        description: (
          <>
            Built modal to{" "}
            <strong>dynamically highlight relevant UI sections</strong> and
            provide contextual tooltips based on user's current setup stage,
            reducing cognitive load by focusing attention on one task at a time.
          </>
        ),
      },
    ],

    solution: (
      <>
        An <strong>interactive tutorial</strong> that progressively reveals
        complexity while maintaining user confidence through step-by-step
        guidance that responds in real-time to user actions throughout the
        portal.
      </>
    ),

    reflections: (
      <>
        This project taught me that{" "}
        <strong>
          good onboarding isn't just about showing users features—it's about
          building confidence
        </strong>{" "}
        through progressive guidance and positive feedback. The real-time
        progress tracking was technically challenging but absolutely critical;
        users needed to see immediate validation that they were making progress.
        I also learned the value of{" "}
        <strong>building reusable frameworks</strong>; the effort to make the
        tutorial system configuration-driven paid dividends when other teams
        adopted it for their features. Finally, this reinforced that the best UX
        combines engineering and design thinking—understanding user psychology
        informed technical architecture decisions.
      </>
    ),
  },

  {
    title: "SLG 100x - Automated Lead Qualification System",
    timeline: "4 weeks",
    tldr: (
      <>
        Automated lead qualification using{" "}
        <strong>3 AI models and multi-source data</strong>. Processes{" "}
        <strong>1,000+ leads per week</strong>, freeing sales team from spending
        60% of time on research to focus on selling.
      </>
    ),

    problem: (
      <>
        Firework's sales team was manually researching and qualifying hundreds
        of potential customers weekly, spending{" "}
        <strong>60% of their time on research rather than selling</strong>. This
        manual process was time-intensive, limited their ability to focus on
        high-value prospects, and led to{" "}
        <strong>inconsistent qualification criteria</strong> that resulted in
        misaligned lead routing and wasted outreach efforts.
      </>
    ),

    vision: (
      <>
        Automate the qualification process for Firework's sales team, enabling
        them to focus on high-value prospects and{" "}
        <strong>increase sales productivity by 100x</strong>.
      </>
    ),

    process: [
      {
        step: "Data Retrieval & Enrichment",
        description: (
          <>
            Built <strong>multi-source data aggregation pipeline</strong>{" "}
            pulling from Apollo API (organization data, keywords, industries,
            descriptions), Snowflake (historical traffic data and percentile
            rankings), and BuiltWith API (tech stack identification).
          </>
        ),
      },
      {
        step: "ML-Based Scoring System",
        description: (
          <>
            Implemented <strong>three-dimensional similarity analysis</strong>:
            (1) Business similarity using OpenAI's text-embedding-3-large to
            embed and compare keywords, industries, and descriptions; (2) Tech
            stack similarity through vectorized comparison against existing
            customers; (3) Traffic analysis with percentile-based scoring
            relative to customer base. Built intelligent caching system for
            embeddings and implemented vectorization techniques improving{" "}
            <strong>processing speed by 10x</strong>.
          </>
        ),
      },
      {
        step: "Multi-Model Qualification Engine",
        description: (
          <>
            Designed and built parallel qualification system using{" "}
            <strong>
              three AI models (GPT-4o, Google Gemini 1.5 Flash, Claude 3.5
              Sonnet)
            </strong>
            . Each model independently evaluates similarity scores and company
            data to determine qualification status, recommended sales rep type,
            and confidence score. Implemented concurrent API requests with batch
            processing reducing qualification time from{" "}
            <strong>5 minutes to 30 seconds per batch</strong>.
          </>
        ),
      },
      {
        step: "Aggregation & Routing",
        description: (
          <>
            Created <strong>consensus-based decision logic</strong> aggregating
            results using majority-vote across all three models. Built automated
            routing system based on company profile and model recommendations.
            Implemented Pandas DataFrame output syncing with Snowflake for CRM
            integration.
          </>
        ),
      },
    ],

    solution: (
      <>
        An automated AI-powered system that qualifies{" "}
        <strong>over 1,000 leads per week</strong> using multi-model consensus
        to ensure consistent, data-driven qualification criteria. The system
        aggregates data from multiple sources, calculates similarity scores
        across three dimensions, runs parallel qualification through three AI
        models, and automatically routes qualified leads to appropriate sales
        representatives.
      </>
    ),

    reflections: (
      <>
        This project taught me the power of{" "}
        <strong>multi-model consensus for reliability</strong>. Rather than
        trusting a single AI model, using three models and voting on results
        dramatically improved accuracy and reduced false positives. The{" "}
        <strong>10x speedup from vectorization and caching</strong> was
        crucial—without optimization, the system wouldn't have been practical
        for weekly batch processing. I also learned the importance of building
        with data scientists—their expertise in embeddings and similarity
        metrics was essential, and I had to bridge the gap between ML concepts
        and practical engineering implementation. Most importantly, this project
        showed me that{" "}
        <strong>
          automation isn't about replacing humans—it's about freeing them to do
          higher-value work
        </strong>
        . The sales team could finally focus on selling rather than researching.
      </>
    ),
  },
];
