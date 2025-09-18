import { useNavigate } from "react-router-dom";
import { ProjectSidebarNav } from "../ProjectSidebar";
import { motion } from "motion/react";
import {
  KeyInsights,
  ProjectHeader,
  ProjectTitle,
  TwoColumnLayout,
} from "./Components";
import { ProjectTimeline } from "./Components";
import { ProjectSection } from "./Components";

import TrainGoneCov from "../../utils/projects/TrainGone/TrainGonePage.png";
import Task1 from "../../utils/projects/TrainGone/Task1.png";
import Task2 from "../../utils/projects/TrainGone/Task2.png";
import Task3 from "../../utils/projects/TrainGone/Task3.png";
import { Badge } from "../ui/badge";
import { CalloutBox, HighlightText } from "./Components";
import { Smartphone, Target } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Users } from "lucide-react";
import { StatsGrid } from "./Components";
import { EnhancedListItem } from "./Components";
import { ProcessSteps } from "./Components";
import { Button } from "../ui/button";
import { Video } from "lucide-react";
import { useIsMobile } from "../ui/use-mobile";
const sections = [
  "About",
  "User Research",
  "Insights",
  "Prototyping",
  "Product",
];

export const TrainGoneProjectPage = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const handleNavigateBack = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-pink-50/20">
      {!isMobile && (
        <ProjectSidebarNav
          sections={sections}
          onNavigateBack={handleNavigateBack}
        />
      )}

      <div className="sm:ml-64 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-12 px-12"
        >
          <div className="max-w-4xl">
            <ProjectTitle label="TrainGone" />

            <ProjectTimeline
              timeline="January - June 2024"
              tools={["React", "Figma", "User Research"]}
              role={["Product Manager", "UX Designer"]}
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="px-12 pb-20 space-y-16">
          {/* Overview Section */}
          <ProjectSection id="overview">
            <div className="bg-gradient-to-br from-purple-100/80 to-pink-100/80 rounded-3xl p-8 backdrop-blur-sm">
              <motion.img
                src={TrainGoneCov}
                alt="TrainGone Project Overview"
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
            <ProjectHeader label="About TrainGone" />

            <CalloutBox
              title="The Problem"
              color="orange"
              icon={<Target className="w-6 h-6 text-orange-600" />}
            >
              <p className="text-orange-800 leading-relaxed">
                <strong>Current ASL dictionaries</strong> assume users already
                know an English word and seek the corresponding ASL sign.
                There's <strong>no intuitive platform</strong> for identifying
                English words from ASL signs based on visual parameters
                (handshape, body location, palm orientation, and movement).
              </p>
            </CalloutBox>

            <CalloutBox
              title="Our Solution"
              color="blue"
              icon={<Lightbulb className="w-6 h-6 text-blue-600" />}
            >
              <p className="text-blue-800 leading-relaxed mb-4">
                <strong>TrainGone</strong> functions as both a{" "}
                <strong>"reverse ASL dictionary"</strong> and a
                <strong>social educational platform</strong> where users can:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-900 mb-2">
                    🔍 Search & Discover
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Find English words from ASL signs using visual parameters
                  </p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-900 mb-2">
                    📱 Contribute & Share
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Upload videos showing ASL signs in storytelling context
                  </p>
                </div>
              </div>
            </CalloutBox>

            <StatsGrid
              items={[
                {
                  label: "User Interviews",
                  value: "6",
                  color: "text-purple-600",
                },
                {
                  label: "Prototypes Tested",
                  value: "3",
                  color: "text-pink-600",
                },
                {
                  label: "Months of Research",
                  value: "4",
                  color: "text-blue-600",
                },
              ]}
            />
          </ProjectSection>

          {/* User Research Section */}
          <ProjectSection id="user-research">
            <ProjectHeader label="User Research" />

            <CalloutBox
              title="Research Participants"
              color="purple"
              icon={<Users className="w-6 h-6 text-purple-600" />}
            >
              <p className="text-purple-800 leading-relaxed mb-4">
                We selected participants with{" "}
                <strong>diverse relationships</strong> with ASL to ensure
                comprehensive insights:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Deaf native ASL signer",
                  "ASL interpreters (2)",
                  "AI motion capture developer",
                  "6-year ASL student",
                  "3-year ASL student",
                ].map((participant, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/70 text-purple-800 text-xs p-2"
                  >
                    {participant}
                  </Badge>
                ))}
              </div>
            </CalloutBox>

            <KeyInsights
              title="Community Nuances Discovered"
              insights={[
                "Diverse perspectives on identity: Some embrace 'disabled' label, others reject it as empowerment",
                "Communication preferences vary: Not all Deaf individuals use ASL - some rely on lip-reading or assistive tech",
                "Interpretation styles differ: Some prefer literal translation, others value conveying underlying meaning",
              ]}
            />

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-6">
                Key Challenges Identified
              </h3>

              <EnhancedListItem
                index={0}
                title="Advanced ASL Students"
                description="Students struggle to progress without Deaf community access for immersion, feeling isolated in their learning journey."
              />

              <EnhancedListItem
                index={1}
                title="Interpreter Fit"
                description="Even proficient interpreters may not align with Deaf clients due to differences in signing accent, style, or approach."
              />

              <EnhancedListItem
                index={2}
                title="Linguistic Barriers"
                description="The divide between Deaf and hearing communities stems from lack of shared language, not disability - Deafness is cultural and linguistic identity."
              />
            </div>
          </ProjectSection>

          {/* Experience Prototype Section */}
          <ProjectSection id="insights">
            <ProjectHeader label="Experience Prototyping" />

            <CalloutBox
              title="Our Guiding Question"
              color="green"
              icon={<Target className="w-6 h-6 text-green-600" />}
            >
              <p className="text-green-800 text-xl font-semibold text-center">
                "How Might We
                <strong> empower ASL speakers </strong>
                to communicate and connect on a global scale?"
              </p>
            </CalloutBox>

            <ProcessSteps
              steps={[
                {
                  title: "Spontaneous Hang-Outs",
                  description:
                    "Invited Spanish students to practice language at Coupa Café for spontaneous conversation practice.",
                  details:
                    "Finding: Low attendance revealed same-day events are hard to prioritize. Language practice needs lower barriers or advance planning.",
                },
                {
                  title: "Audio-less Video Platform",
                  description:
                    "Tested TikTok viewing experience with/without audio to measure engagement impact.",
                  details:
                    "Finding: Audio significantly enhances social media by engaging two senses simultaneously and supporting multiple learning styles.",
                },
                {
                  title: "Language Karaoke",
                  description:
                    "Spanish learners watched and sang along to karaoke songs to test enjoyment and motivation.",
                  details:
                    "Finding: Many beginners felt uncomfortable performing publicly. Appeals more to advanced learners already confident performing.",
                },
              ]}
            />

            <CalloutBox
              title="Key Insight"
              color="blue"
              icon={<Lightbulb className="w-6 h-6 text-blue-600" />}
            >
              <p className="text-blue-800 leading-relaxed">
                Testing guided us toward a{" "}
                <strong>comprehensive solution</strong>: a social educational
                platform empowering deaf signers to define signs through
                <strong> video storytelling </strong>
                while providing learners with contextual reinforcement. This
                bridges gaps between learning styles and cultural expression.
              </p>
            </CalloutBox>
          </ProjectSection>

          {/* Prototyping Section */}
          <ProjectSection id="prototyping">
            <ProjectHeader label="Design Process" />

            <TwoColumnLayout
              left={
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Initial Concepts
                  </h3>
                  <p className="text-blue-800 mb-4">
                    From extensive sketching, <strong>two concepts</strong>{" "}
                    emerged:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-blue-900">
                        📱 Mobile Application
                      </h4>
                      <p className="text-sm text-blue-800">
                        Accessible, portable ASL learning platform
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-blue-900">
                        🥽 VR Experience
                      </h4>
                      <p className="text-sm text-blue-800">
                        Immersive practice in realistic environments
                      </p>
                    </div>
                  </div>
                </div>
              }
              right={
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-4">
                    Core Tasks
                  </h3>
                  <p className="text-purple-800 mb-4">
                    We focused on <strong>three primary user flows</strong>:
                  </p>
                  <div className="space-y-3">
                    <Badge
                      variant="outline"
                      className="w-full justify-start p-3 bg-white/50"
                    >
                      🔍 Searching for ASL Definitions
                    </Badge>
                    <Badge
                      variant="outline"
                      className="w-full justify-start p-3 bg-white/50"
                    >
                      🎯 Exploring New & Similar Signs
                    </Badge>
                    <Badge
                      variant="outline"
                      className="w-full justify-start p-3 bg-white/50"
                    >
                      📹 Posting Your Own Definition
                    </Badge>
                  </div>
                </div>
              }
            />

            <div className="my-12">
              <h3 className="text-2xl font-bold text-center mb-8">
                Mid-Fidelity Prototype
              </h3>

              <CalloutBox
                title="Usability Testing Results"
                color="orange"
                icon={<Video className="w-6 h-6 text-orange-600" />}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-orange-900 mb-3">
                      Issues Found
                    </h4>
                    <div className="text-orange-800">
                      <div className="text-3xl font-bold mb-2">67</div>
                      <div className="text-sm">Total usability violations</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-900 mb-3">
                      Critical Issues
                    </h4>
                    <div className="text-orange-800">
                      <div className="text-3xl font-bold mb-2">12</div>
                      <div className="text-sm">Severity 3-4 violations</div>
                    </div>
                  </div>
                </div>
              </CalloutBox>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                {[Task1, Task2, Task3].map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-gradient-to-br from-purple-100/80 to-pink-100/80 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <img
                      src={image}
                      alt={`Prototype Task ${index + 1}`}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </ProjectSection>

          {/* Final Product Section */}
          <ProjectSection id="product">
            <ProjectHeader label="Final Product" />

            <TwoColumnLayout
              left={
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    <Smartphone className="inline w-6 h-6 mr-2" />
                    Technical Implementation
                  </h3>
                  <p className="text-blue-800 leading-relaxed mb-4">
                    Built with <strong> React Native </strong> framework for
                    cross-platform compatibility, ensuring{" "}
                    <strong>inclusivity and accessibility </strong>
                    across Android and iOS devices.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2 mb-2">
                      React Native
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Cross-platform
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Video Recording
                    </Badge>
                  </div>
                </div>
              }
              right={
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-4">
                    <Video className="inline w-6 h-6 mr-2" />
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        ✅ Video Creation
                      </h4>
                      <p className="text-xs text-purple-800">
                        Fully implemented recording and upload system
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        🎭 Mock Data Integration
                      </h4>
                      <p className="text-xs text-purple-800">
                        Simulated search and browse functionality
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        👥 Social Features
                      </h4>
                      <p className="text-xs text-purple-800">
                        Community storytelling platform ready
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            <CalloutBox
              title="Development Challenges & Solutions"
              color="green"
              icon={<Target className="w-6 h-6 text-green-600" />}
            >
              <p className="text-green-800 leading-relaxed mb-4">
                The <strong>most complex feature</strong> - video creation - was
                fully implemented. Search and browse features were limited by
                lack of existing user base, so we
                <strong> hard-coded realistic data</strong> to demonstrate full
                app experience.
              </p>
              <div className="bg-white/50 p-4 rounded-xl">
                <p className="text-green-800 text-sm italic">
                  "This approach provided a realistic user experience while
                  showcasing the platform's potential for connecting the Deaf
                  and hearing communities through storytelling."
                </p>
              </div>
            </CalloutBox>

            <div className="flex flex-wrap gap-3 pt-6 justify-center">
              {[
                "React Native",
                "Cross-Platform",
                "Video Recording",
                "Community Features",
                "ASL Dictionary",
                "Storytelling Platform",
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
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-200"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </ProjectSection>

          {/* Project Links */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl pt-8"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.youtube.com/watch?v=--dKGtDRh2A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Video className="w-5 h-5 mr-2" />
                    Watch Demo Video
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};
