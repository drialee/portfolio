import { motion } from "motion/react";
import { ProjectSidebarNav } from "../ProjectSidebar";
import BonoCover from "../../utils/projects/Bono/BonoCover.png";
import BonoBrand1 from "../../utils/projects/Bono/BonoBrand1.png";
import BonoBrand2 from "../../utils/projects/Bono/BonoBrand2.png";
import BonoBrand3 from "../../utils/projects/Bono/BonoBrand3.png";
import BonoBrand4 from "../../utils/projects/Bono/BonoBrand4.png";
import LofiChat from "../../utils/projects/Bono/ChatLofi.png";
import LofiDiscover from "../../utils/projects/Bono/DiscoverLofi.png";
import LofiSearch from "../../utils/projects/Bono/SearchLofi.png";
import LofiHome from "../../utils/projects/Bono/HomepageLofi.png";
import { Badge } from "../ui/badge";
import {
  HighlightText,
  ProjectHeader,
  ProjectTitle,
  ProjectTimeline,
} from "./Components";
import { CalloutBox, ProjectSection } from "./Components";
import { TwoColumnLayout } from "./Components";
import { StatsGrid } from "./Components";
import { KeyInsights } from "./Components";
import { EnhancedListItem } from "./Components";
import { Heart } from "lucide-react";
import { Palette } from "lucide-react";
import { Smartphone } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Search } from "lucide-react";
import { Users } from "lucide-react";
import { ProcessSteps } from "./Components";
import { projects } from "../../utils/info";

const sections = ["About", "Exploration", "Branding", "Prototyping", "Product"];

interface BonoProjectPageProps {
  onNavigateBack: () => void;
}

export const BonoProjectPage = ({ onNavigateBack }: BonoProjectPageProps) => {
  const bono = projects.find((project) => project.id === "bono");
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-pink-50/20">
      <ProjectSidebarNav sections={sections} onNavigateBack={onNavigateBack} />

      <div className="ml-64 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-12 px-12"
        >
          <div className="max-w-4xl">
            <ProjectTitle label="Bono" />

            <ProjectTimeline
              timeline="January - June 2024"
              tools={bono?.technologies || []}
              role={["Front-End Engineer", "UX Designer"]}
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="px-12 pb-20 space-y-16">
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

            <CalloutBox
              title="Our Mission"
              color="orange"
              icon={<Heart className="w-6 h-6 text-orange-600" />}
            >
              <p className={`${bono?.textColor} leading-relaxed`}>
                <strong>Bono</strong> is a platform designed to{" "}
                <HighlightText color="blue">simplify the process</HighlightText>{" "}
                of discovering trustworthy charities. We connect users with
                organizations that align with their
                <HighlightText color="blue">
                  values, passions, and personal stories
                </HighlightText>
                , making it easier to give back in a meaningful way.
              </p>
            </CalloutBox>

            <TwoColumnLayout
              left={
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    <Search className="inline w-6 h-6 mr-2" />
                    The Challenge
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    Finding the <strong>right charity</strong> feels
                    overwhelming. With thousands of organizations, users
                    struggle to identify which ones truly align with their
                    values and make genuine impact.
                  </p>
                </div>
              }
              right={
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-4">
                    <TrendingUp className="inline w-6 h-6 mr-2" />
                    Our Solution
                  </h3>
                  <p className="text-purple-800 leading-relaxed">
                    A <strong>personalized platform</strong> that uses
                    AI-powered recommendations to match users with charities
                    based on their interests.
                  </p>
                </div>
              }
            />
          </ProjectSection>

          {/* Exploration Section */}
          <ProjectSection id="exploration">
            <ProjectHeader label="User Research & Exploration" />

            <CalloutBox
              title="Research Scope"
              color="purple"
              icon={<Users className="w-6 h-6 text-purple-600" />}
            >
              <p className="text-purple-800 leading-relaxed mb-4">
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
                    className="bg-white/70 text-purple-800 text-xs p-2 text-center"
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
                  color: "text-blue-600",
                },
                {
                  label: "Quantitative Surveys",
                  value: "44",
                  color: "text-purple-600",
                },
                {
                  label: "Months of Research",
                  value: "6",
                  color: "text-pink-600",
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

            <CalloutBox
              title="Target Audience Decision"
              color="orange"
              icon={<Users className="w-6 h-6 text-orange-600" />}
            >
              <p className="text-orange-800 leading-relaxed">
                Initially, we didn't have a specific user group beyond helping
                people give back. However, we ultimately decided to
                <HighlightText color="orange">
                  focus on college students
                </HighlightText>
                —an audience we could personally relate to and design for both
                casual and highly engaged users.
              </p>
            </CalloutBox>
          </ProjectSection>

          {/* Branding Section */}
          <ProjectSection id="branding">
            <ProjectHeader label="Brand Identity" />

            <CalloutBox
              title="Design Philosophy"
              color="blue"
              icon={<Palette className="w-6 h-6 text-blue-600" />}
            >
              <p className="text-blue-800 leading-relaxed">
                To bring our vision to life, we established{" "}
                <strong>brand guidelines early on</strong>, selecting a palette
                of
                <HighlightText color="blue">blues and yellows</HighlightText> to
                evoke calmness and happiness. We carefully chose fonts and
                colors that convey{" "}
                <HighlightText color="blue">simplicity and fun</HighlightText>,
                ensuring the platform felt approachable and inviting.
              </p>
            </CalloutBox>

            <TwoColumnLayout
              left={
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Color Psychology
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-blue-900 text-sm">
                        💙 Blue Tones
                      </h4>
                      <p className="text-xs text-blue-800">
                        Trust, reliability, and calmness
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-blue-900 text-sm">
                        💛 Yellow Accents
                      </h4>
                      <p className="text-xs text-blue-800">
                        Optimism, happiness, and energy
                      </p>
                    </div>
                  </div>
                </div>
              }
              right={
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-4">
                    Typography & Feel
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        ✨ Approachable
                      </h4>
                      <p className="text-xs text-purple-800">
                        Easy to read, friendly, welcoming
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        🎯 Simple
                      </h4>
                      <p className="text-xs text-purple-800">
                        Clean, uncluttered, focused
                      </p>
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

            <ProcessSteps
              steps={[
                {
                  title: "Ideation & Brainstorming",
                  description:
                    "Used whiteboard exercises and sticky notes to explore concepts like gamification, bite-sized lessons, AI storytelling, and news website plugins.",
                  details:
                    "Encouraged diverse thinking by having each team member take on two features to broaden our creative approach.",
                },
                {
                  title: "Low-Fidelity Prototyping",
                  description:
                    "Moved into Figma to create initial wireframes outlining the main application components and user flows.",
                  details:
                    "Focused on core screens: home page, discover functionality, organization profiles, and AI chatbox interface.",
                },
                {
                  title: "Component Development",
                  description:
                    "Designed and refined individual features while maintaining consistency across the platform experience.",
                  details:
                    "Each team member contributed to multiple features, allowing for cross-pollination of ideas and approaches.",
                },
              ]}
            />

            <div className="my-12">
              <h3 className="text-2xl font-bold text-center mb-8">
                Low-Fidelity Wireframes
              </h3>

              <div className="grid grid-cols-3 gap-6">
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
                      className="w-full rounded-xl shadow-lg mb-4 max-h-[350px]"
                    />
                    <h4 className="font-bold text-purple-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-purple-800">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ProjectSection>

          {/* Final Product Section */}
          <ProjectSection id="product">
            <ProjectHeader label="Final Product" />

            <CalloutBox
              title="Design Philosophy"
              color="green"
              icon={<Heart className="w-6 h-6 text-green-600" />}
            >
              <p className="text-green-800 leading-relaxed">
                As designers, we recognize the
                <HighlightText color="green">
                  transformative power of storytelling
                </HighlightText>
                . Our mission is to empower users to share their unique
                narratives, values, and passions through Bono, enabling them to
                contribute meaningfully to causes they care about.
              </p>
            </CalloutBox>

            <div className="my-12">
              <h3 className="text-2xl font-bold text-center mb-8">
                Key Features
              </h3>

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
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    <Smartphone className="inline w-6 h-6 mr-2" />
                    Technical Implementation
                  </h3>
                  <p className="text-blue-800 leading-relaxed mb-4">
                    Built with{" "}
                    <HighlightText color="blue">React framework</HighlightText>{" "}
                    for responsive, modern web experience with seamless user
                    interactions.
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
                  <h3 className="text-xl font-bold text-purple-900 mb-4">
                    <MessageCircle className="inline w-6 h-6 mr-2" />
                    User Experience Focus
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        🎯 Personalization
                      </h4>
                      <p className="text-xs text-purple-800">
                        AI-curated charity recommendations
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        🔒 Trust & Transparency
                      </h4>
                      <p className="text-xs text-purple-800">
                        Verified charity information
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        📊 Impact Visibility
                      </h4>
                      <p className="text-xs text-purple-800">
                        Real-time donation tracking
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            <div className="flex flex-wrap gap-3 pt-6 justify-center">
              {[
                "React",
                "AI Integration",
                "User Research",
                "Charity Discovery",
                "Impact Tracking",
                "Personalization",
                "Trust Building",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className={`px-4 py-2  border border-blue-200  transition-all duration-200 ${bono?.color}`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </ProjectSection>
        </div>
      </div>
    </div>
  );
};
