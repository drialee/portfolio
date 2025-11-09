import { motion } from "motion/react";
import {
  Heart,
  MessageCircle,
  Palette,
  Search,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

import { Badge } from "../ui/badge";
import {
  CalloutBox,
  EnhancedListItem,
  KeyInsights,
  ProcessStep,
  ProjectHeader,
  ProjectSection,
  StatsGrid,
  TwoColumnLayout,
} from "./Components";
import { ProjectPageLayout } from "./ProjectPageLayout";
import { projectsById } from "../../utils/info";

// Image imports
import BonoBrand1 from "../../utils/projects/Bono/BonoBrand1.png";
import BonoBrand2 from "../../utils/projects/Bono/BonoBrand2.png";
import BonoBrand3 from "../../utils/projects/Bono/BonoBrand3.png";
import BonoBrand4 from "../../utils/projects/Bono/BonoBrand4.png";
import BonoCover from "../../utils/projects/Bono/BonoCover.png";
import LofiChat from "../../utils/projects/Bono/ChatLofi.png";
import LofiDiscover from "../../utils/projects/Bono/DiscoverLofi.png";
import LofiHome from "../../utils/projects/Bono/HomepageLofi.png";

export const BonoProjectPage = () => {
  const bono = projectsById.bono;
  return (
    <ProjectPageLayout projectId="bono" headerMaxWidthClassName="max-w-4xl">
      {/* Overview Section */}
      <ProjectSection id="overview">
        <div
          className={`bg-gradient-to-br rounded-3xl p-8 backdrop-blur-sm ${bono?.color}`}
        >
          <motion.img
            src={BonoCover}
            alt="Bono Project Overview"
            className="w-full rounded-2xl shadow-2xl mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </ProjectSection>

      {/* About Section */}
      <ProjectSection id="about">
        <ProjectHeader label="About Bono" />

        <CalloutBox title="Our Mission">
          <p>
            <strong>Bono</strong> is a platform designed to{" "}
            <strong>simplify the process</strong> of discovering trustworthy
            charities. We connect users with organizations that align with their
            <strong> values, passions, and personal stories</strong>, making it
            easier to give back in a meaningful way.
          </p>
        </CalloutBox>

        <TwoColumnLayout
          left={
            <div>
              <h3 className="text-xl font-bold mb-4">The Challenge</h3>
              <p>
                Finding the <strong>right charity</strong> feels overwhelming.
                With thousands of organizations, users struggle to identify
                which ones truly align with their values and make genuine
                impact.
              </p>
            </div>
          }
          right={
            <div>
              <h3 className="text-xl font-bold mb-4">Our Solution</h3>
              <p>
                A <strong>personalized platform</strong> that uses AI-powered
                recommendations to match users with charities based on their
                interests.
              </p>
            </div>
          }
        />
      </ProjectSection>

      {/* Exploration Section */}
      <ProjectSection id="exploration">
        <ProjectHeader label="User Research & Exploration" />

        <CalloutBox title="Research Scope">
          <p>
            Our team conducted comprehensive research with{" "}
            <strong>diverse stakeholders</strong> to understand the giving
            landscape and identify key opportunities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Volunteers",
              "Financial Educators",
              "College Students",
              "Tax Lawyers",
              "Angel Investors",
              "Nonprofits",
              "Social Impact Leaders",
              "Community Leaders",
            ].map((participant, index) => (
              <Badge
                variant="secondary"
                key={index}
                className="bg-white/70 text-xs p-2 text-center"
              >
                {participant}
              </Badge>
            ))}
          </div>
        </CalloutBox>

        <StatsGrid
          items={[
            {
              label: "User Interviews",
              value: "42",
            },
            {
              label: "Quantitative Surveys",
              value: "44",
            },
            {
              label: "Months of Research",
              value: "6",
            },
          ]}
        />

        <KeyInsights
          title="Key Research Findings"
          insights={[
            "Students across the spectrum were eager to make a positive difference through donations",
            "Users frequently felt overwhelmed and skeptical about the vast number of nonprofit organizations",
            "Uncertainty leads to endless research cycles, preventing action even when motivated to contribute",
            "College students need platforms that resonate with both 'average' and 'highly engaged' users",
          ]}
        />

        <CalloutBox title="Target Audience Decision">
          <p>
            Initially, we didn't have a specific user group beyond helping
            people give back. However, we ultimately decided to
            <strong> focus on college students</strong>
            —an audience we could personally relate to and design for both
            casual and highly engaged users.
          </p>
        </CalloutBox>
      </ProjectSection>

      {/* Branding Section */}
      <ProjectSection id="branding">
        <ProjectHeader label="Brand Identity" />

        <CalloutBox title="Design Philosophy">
          <p>
            To bring our vision to life, we established{" "}
            <strong>brand guidelines early on</strong>, selecting a palette of
            <strong> blues and yellows</strong> to evoke calmness and happiness.
            We carefully chose fonts and colors that convey{" "}
            <strong>simplicity and fun</strong>, ensuring the platform felt
            approachable and inviting.
          </p>
        </CalloutBox>

        <TwoColumnLayout
          left={
            <div>
              <h3 className="text-xl font-bold mb-4">Color Psychology</h3>
              <div className="space-y-3">
                <div className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">💙 Blue Tones</h4>
                  <p className="text-xs">Trust, reliability, and calmness</p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">💛 Yellow Accents</h4>
                  <p className="text-xs">Optimism, happiness, and energy</p>
                </div>
              </div>
            </div>
          }
          right={
            <div>
              <h3 className="text-xl font-bold mb-4">Typography & Feel</h3>
              <div className="space-y-3">
                <div className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">✨ Approachable</h4>
                  <p className="text-xs">Easy to read, friendly, welcoming</p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">🎯 Simple</h4>
                  <p className="text-xs">Clean, uncluttered, focused</p>
                </div>
              </div>
            </div>
          }
        />

        <div className="my-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Brand Guidelines
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {[BonoBrand1, BonoBrand2, BonoBrand3, BonoBrand4].map(
              (image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-100/80 to-yellow-100/80 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <img
                    src={image}
                    alt={`Brand Guide ${index + 1}`}
                    className="w-full rounded-xl shadow-lg"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </ProjectSection>

      {/* Prototyping Section */}
      <ProjectSection id="prototyping">
        <ProjectHeader label="Design Process" />
        <div className="space-y-4">
          <ProcessStep
            number="1"
            title="Ideation & Brainstorming"
            description="Used whiteboard exercises and sticky notes to explore concepts like gamification, bite-sized lessons, AI storytelling, and news website plugins."
            color="bg-purple-100"
          />
          <ProcessStep
            number="2"
            title="Low-Fidelity Prototyping"
            description="Moved into Figma to create initial wireframes outlining the main application components and user flows."
            color="bg-purple-100"
          />
          <ProcessStep
            number="3"
            title="Component Development"
            description="Designed and refined individual features while maintaining consistency across the platform experience."
            color="bg-purple-100"
          />
        </div>
      </ProjectSection>

      <div className="my-12">
        <h3 className="text-2xl font-bold text-center mb-8">
          Low-Fidelity Wireframes
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              image: LofiHome,
              title: "Homepage Design",
              description: "Main dashboard and navigation",
            },
            {
              image: LofiDiscover,
              title: "Discover Page",
              description: "Charity exploration interface",
            },

            {
              image: LofiChat,
              title: "AI Chatbox",
              description: "Personalized recommendations",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-100/80 to-pink-100/80 rounded-2xl p-6 backdrop-blur-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl shadow-lg mb-4 max-h-[350px] object-contain"
              />
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final Product Section */}
      <ProjectSection id="product">
        <ProjectHeader label="Final Product" />

        <CalloutBox title="Design Philosophy">
          <p>
            As designers, we recognize the
            <strong> transformative power of storytelling</strong>. Our mission
            is to empower users to share their unique narratives, values, and
            passions through Bono, enabling them to contribute meaningfully to
            causes they care about.
          </p>
        </CalloutBox>

        <div className="my-12">
          <h3 className="text-2xl font-bold text-center mb-8">Key Features</h3>

          <div className="space-y-8">
            <EnhancedListItem
              index={0}
              title="AI-Powered Chatbox"
              description="Bono offers an AI-powered chatbox to help users discover organizations that align with their passions and values. Share a bit about yourself to save time and simplify your search."
            />

            <EnhancedListItem
              index={1}
              title="Comprehensive Organization Profiles"
              description="Bono provides detailed profiles of organizations, fostering trust and transparency for users with complete charity information and impact metrics."
            />

            <EnhancedListItem
              index={2}
              title="Impact Tracking Dashboard"
              description="Bono keeps users informed by tracking the impact of their donations, showing exactly where their contributions go and what change they're creating."
            />
          </div>
        </div>

        <TwoColumnLayout
          left={
            <div>
              <h3 className="text-xl font-bold mb-4">
                Technical Implementation
              </h3>
              <p>
                Built with <strong>React framework</strong> for responsive,
                modern web experience with seamless user interactions.
              </p>
              <div className="space-y-2">
                <Badge variant="secondary" className="mr-2 mb-2">
                  React
                </Badge>
                <Badge variant="secondary" className="mr-2 mb-2">
                  Responsive Design
                </Badge>
                <Badge variant="secondary" className="mr-2 mb-2">
                  AI Integration
                </Badge>
              </div>
            </div>
          }
          right={
            <div>
              <h3 className="text-xl font-bold mb-4">User Experience Focus</h3>
              <div className="space-y-3">
                <div className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">🎯 Personalization</h4>
                  <p className="text-xs">AI-curated charity recommendations</p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">🔒 Trust & Transparency</h4>
                  <p className="text-xs">Verified charity information</p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">📊 Impact Visibility</h4>
                  <p className="text-xs">Real-time donation tracking</p>
                </div>
              </div>
            </div>
          }
        />
      </ProjectSection>
    </ProjectPageLayout>
  );
};
