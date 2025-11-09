import { motion } from "motion/react";
import { Lightbulb, Smartphone, Target, Users, Video } from "lucide-react";

import { Badge } from "../ui/badge";
import { ExternalLinkButton } from "../ExternalLink";
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

// Image imports
import Task1 from "../../utils/projects/TrainGone/Task1.png";
import Task2 from "../../utils/projects/TrainGone/Task2.png";
import Task3 from "../../utils/projects/TrainGone/Task3.png";
import TrainGoneCov from "../../utils/projects/TrainGone/TrainGonePage.png";
import { ProjectPageLayout } from "./ProjectPageLayout";

export const TrainGoneProjectPage = () => {
  return (
    <ProjectPageLayout
      projectId="traingone"
      headerMaxWidthClassName="max-w-4xl"
    >
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

        <CalloutBox title="The Problem">
          <p className="leading-relaxed">
            <strong>Current ASL dictionaries</strong> assume users already know
            an English word and seek the corresponding ASL sign. There's{" "}
            <strong>no intuitive platform</strong> for identifying English words
            from ASL signs based on visual parameters (handshape, body location,
            palm orientation, and movement).
          </p>
        </CalloutBox>

        <CalloutBox title="Our Solution">
          <p className="leading-relaxed mb-4">
            <strong>TrainGone</strong> functions as both a{" "}
            <strong>"reverse ASL dictionary"</strong> and a
            <strong> social educational platform</strong> where users can:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">🔍 Search & Discover</h4>
              <p className="text-sm">
                Find English words from ASL signs using visual parameters
              </p>
            </div>
            <div className="bg-white/50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">📱 Contribute & Share</h4>
              <p className="text-sm">
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
            },
            {
              label: "Prototypes Tested",
              value: "3",
            },
            {
              label: "Months of Research",
              value: "4",
            },
          ]}
        />
      </ProjectSection>

      {/* User Research Section */}
      <ProjectSection id="user-research">
        <ProjectHeader label="User Research" />

        <CalloutBox title="Research Participants">
          <p className="text-purple-800 leading-relaxed mb-4">
            We selected participants with <strong>diverse relationships</strong>{" "}
            with ASL to ensure comprehensive insights:
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              "Deaf native ASL signer",
              "2 ASL interpreters",
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

        <CalloutBox title="Our Guiding Question">
          <p className="text-xl font-semibold">
            "How Might We
            <strong> empower ASL speakers </strong>
            to communicate and connect on a global scale?"
          </p>
        </CalloutBox>

        <div className="space-y-4">
          <ProcessStep
            number="1"
            title="Spontaneous Hang-Outs"
            description="Invited Spanish students to practice language at Coupa Café for spontaneous conversation practice."
            color="bg-purple-100"
          />
          <ProcessStep
            number="2"
            title="Audio-less Video Platform"
            description="Tested TikTok viewing experience with/without audio to measure engagement impact."
            color="bg-purple-100"
          />
          <ProcessStep
            number="3"
            title="Language Karaoke"
            description="Spanish learners watched and sang along to karaoke songs to test enjoyment and motivation."
            color="bg-purple-100"
          />
        </div>
        <CalloutBox title="Key Insight">
          <p className="leading-relaxed">
            Testing guided us toward a <strong>comprehensive solution</strong>:
            a social educational platform empowering deaf signers to define
            signs through
            <strong> video storytelling </strong>
            while providing learners with contextual reinforcement. This bridges
            gaps between learning styles and cultural expression.
          </p>
        </CalloutBox>
      </ProjectSection>

      {/* Prototyping Section */}
      <ProjectSection id="prototyping">
        <ProjectHeader label="Design Process" />

        <TwoColumnLayout
          left={
            <div>
              <h3 className="text-xl font-bold mb-4">Initial Concepts</h3>
              <p className="mb-4">
                From extensive sketching, <strong>two concepts</strong> emerged:
              </p>
              <div className="space-y-3">
                <div className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold">📱 Mobile Application</h4>
                  <p className="text-sm">
                    Accessible, portable ASL learning platform
                  </p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold">🥽 VR Experience</h4>
                  <p className="text-sm">
                    Immersive practice in realistic environments
                  </p>
                </div>
              </div>
            </div>
          }
          right={
            <div>
              <h3 className="text-xl font-bold mb-4">Core Tasks</h3>
              <p className="mb-4">
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

          <CalloutBox title="Usability Testing Results">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Issues Found</h4>
                <div>
                  <div className="text-3xl font-bold mb-2">67</div>
                  <div className="text-sm">Total usability violations</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3">Critical Issues</h4>
                <div>
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
              <h3 className="text-xl font-bold mb-4">
                Technical Implementation
              </h3>
              <p className="leading-relaxed mb-4">
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
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">✅ Video Creation</h4>
                  <p className="text-xs">
                    Fully implemented recording and upload system
                  </p>
                </li>
                <li className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">
                    🎭 Mock Data Integration
                  </h4>
                  <p className="text-xs">
                    Simulated search and browse functionality
                  </p>
                </li>
                <li className="bg-white/50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm">👥 Social Features</h4>
                  <p className="text-xs">
                    Community storytelling platform ready
                  </p>
                </li>
              </ul>
            </div>
          }
        />

        <CalloutBox title="Development Challenges & Solutions">
          <p className="leading-relaxed mb-4">
            The <strong>most complex feature</strong> - video creation - was
            fully implemented. Search and browse features were limited by lack
            of existing user base, so we
            <strong> hard-coded realistic data</strong> to demonstrate full app
            experience.
          </p>
          <div className="bg-white/50 p-4 rounded-xl">
            <p className="text-sm italic">
              "This approach provided a realistic user experience while
              showcasing the platform's potential for connecting the Deaf and
              hearing communities through storytelling."
            </p>
          </div>
        </CalloutBox>
      </ProjectSection>

      <ProjectSection id="demo-link">
        <ExternalLinkButton
          href="https://www.youtube.com/watch?v=--dKGtDRh2A"
          label="Watch Demo Video"
        />
      </ProjectSection>
    </ProjectPageLayout>
  );
};
