import { motion } from "motion/react";
import {
  Heart,
  MessageCircle,
  Play,
  Search,
  Target,
  Users,
  Video,
} from "lucide-react";

import { Badge } from "../ui/badge";
import { useProjectNavigation } from "../../hooks/useProjectNavigation";
import {
  CalloutBox,
  EnhancedListItem,
  KeyInsights,
  ProjectHeader,
  ProjectSection,
  QuoteBox,
  TwoColumnLayout,
} from "./Components";
import { ProjectPageLayout } from "./ProjectPageLayout";
// Image imports
import ChillLaptop from "../../utils/projects/Chill/ChillLaptop.png";
import CompetiveAnalysis from "../../utils/projects/Chill/Competive.png";
import FinalHome from "../../utils/projects/Chill/FinalHome.png";
import FinalProfile from "../../utils/projects/Chill/FinalProfile.png";
import FinalText from "../../utils/projects/Chill/WatchFinal2.png";
import FinalView from "../../utils/projects/Chill/FinalView1.png";
import FinalWatch from "../../utils/projects/Chill/WatchFinal1.png";
import SocialMedia from "../../utils/projects/Chill/SocialMedia.png";
import V10 from "../../utils/projects/Chill/V1.0.png";
import V11 from "../../utils/projects/Chill/V1.1.png";

export const ChillProjectPage = () => {
  return (
    <ProjectPageLayout
      projectId="chill"
      titleOverride="&Chill"
      headerMaxWidthClassName="max-w-4xl"
    >
      {/* Overview Section */}
      <ProjectSection id="overview">
        <div className="bg-gradient-to-br from-blue-100/80 to-cyan-100/80 rounded-3xl p-8 backdrop-blur-sm">
          <motion.img
            src={ChillLaptop}
            alt="&Chill Project Overview"
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
        <ProjectHeader label="About &Chill" />

        <CalloutBox title="The Vision">
          <p className="leading-relaxed">
            <strong>&Chill</strong> transforms streaming into an
            <strong> engaging, shared experience</strong>, enabling users to
            socialize and watch TV together—bridging distances and fostering
            meaningful connections.
          </p>
        </CalloutBox>

        <CalloutBox title="The Problem">
          <p className="leading-relaxed mb-4">
            While many streaming platforms offer plug-ins for co-viewing, these
            solutions often
            <strong> fall short</strong> in creating a seamless and inclusive
            experience. Through my research, I identified
            <strong> three key pain points </strong>
            that make social streaming unnecessarily difficult:
          </p>
        </CalloutBox>

        <div className="space-y-6 my-8">
          <EnhancedListItem
            index={0}
            title="Requirement for Plug-ins or Memberships"
            description="Existing solutions often demand additional installations or exclusive subscriptions, creating unnecessary barriers."
          />

          <EnhancedListItem
            index={1}
            title="Limited Accessibility"
            description="Co-viewing is often restricted to exclusive groups, limiting opportunities for broader participation."
          />

          <EnhancedListItem
            index={2}
            title="Communication Barriers"
            description="Existing platforms fail to provide intuitive and engaging tools for interaction during streams. With &Chill, I set out to address these challenges and redefine what it means to stream together."
          />
        </div>
      </ProjectSection>

      {/* User Research Section */}
      <ProjectSection id="user-research">
        <ProjectHeader label="User Research" />

        <CalloutBox title="Research Focus">
          <p className="leading-relaxed">
            My first step was to <strong>talk to users</strong> about their
            experience using social streaming services. I focused on
            <strong> Netflix Party</strong>, asking my interviewees about their
            experience with the extension.
          </p>
        </CalloutBox>

        <div className="my-12">
          <h3 className="text-2xl font-bold mb-8">User Feedback</h3>

          <div className="flex flex-col gap-4">
            <QuoteBox quote="I love Netflix Partying with my friends but it's really difficult to set up and takes a while. Everyone has to download the extension and the link has to work properly for everyone to be on the same show. If it was easier to do we would use it more." />

            <QuoteBox quote="I like Netflix Party, but my biggest frustration is the lack of a video component. You have to put Facetime on a separate device in order to watch together" />

            <QuoteBox quote="The extension almost always crashed my browser or wouldn't work at all. If anything, Zoom's features felt more communal by allowing everyone in the party to see each other while watching their movie/show" />
          </div>
        </div>

        <TwoColumnLayout
          left={
            <div>
              <h3 className="text-xl font-bold mb-4">
                <Search className="inline w-6 h-6 mr-2" />
                Competitive Analysis
              </h3>
              <p className="leading-relaxed mb-4">
                I conducted analysis of major streaming platforms like
                <strong> Netflix, Prime Video, HBO, and Hulu</strong>
              </p>
              <img
                src={CompetiveAnalysis}
                alt="Competitive Analysis"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          }
          right={
            <div>
              <h3 className="text-xl font-bold mb-4">
                <Heart className="inline w-6 h-6 mr-2" />
                Social Media Inspiration
              </h3>
              <p className="leading-relaxed mb-4">
                Analyzed <strong>Snapchat, HouseParty, and Spotify</strong>
                for successful connection features.
              </p>
              <img
                src={SocialMedia}
                alt="Social Media Analysis"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          }
        />

        <KeyInsights
          title="Key Research Findings"
          insights={[
            "None of the major platforms offered integrated video chat functionality",
            "Most platforms required all users to share the same subscription plan",
            "Sending a video link was necessary to initiate co-viewing sessions",
            "Users wanted seamless setup without complex technical requirements",
          ]}
        />

        <CalloutBox title="Social Platform Insights">
          <p className="leading-relaxed mb-4">
            I identified key features that successfully engage users in social
            platforms:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">📸 Snapchat</h4>
              <p className="text-sm">
                Snap streaks and scores gamify social interactions
              </p>
            </div>
            <div className="bg-white/50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">🎵 Spotify</h4>
              <p className="text-sm">Share song history and listening status</p>
            </div>
            <div className="bg-white/50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">🏠 HouseParty</h4>
              <p className="text-sm">
                Virtual rooms with welcoming wave invites
              </p>
            </div>
          </div>
        </CalloutBox>
      </ProjectSection>

      {/* Insights Section */}
      <ProjectSection id="insights">
        <ProjectHeader label="Key Insights" />

        <CalloutBox title="Research Validation">
          <p className="text-xl font-semibold">
            "There is a<strong> strong desire</strong> for a communal digital
            viewing experience, yet its widespread adoption is hindered by
            substantial
            <strong> communication and technological barriers</strong>
            ."
          </p>
        </CalloutBox>

        <div className="my-12">
          <h3 className="text-2xl font-bold mb-8">Design Questions</h3>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-100/80 to-cyan-100/80 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h4 className="font-bold mb-3">🔗 Seamless Connection</h4>
              <p className="leading-relaxed">
                How can we
                <strong> simplify the process </strong>
                of inviting friends and synchronizing playback across devices
                for a seamless social streaming experience?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-100/80 to-pink-100/80 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h4 className="font-bold mb-3">👥 Social Balance</h4>
              <p className="leading-relaxed">
                How might we enable users to transition from individual to group
                streaming experience,
                <strong>
                  {" "}
                  preserving personalization while enhancing social interaction
                </strong>
                ?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-green-100/80 to-emerald-100/80 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h4 className="font-bold mb-3">🎬 Shared Experience</h4>
              <p className="leading-relaxed">
                How can we replicate the
                <strong> shared excitement and interactions </strong>
                of an in-person movie night through an online platform?
              </p>
            </motion.div>
          </div>
        </div>
      </ProjectSection>

      {/* Prototyping Section */}
      <ProjectSection id="prototyping">
        <ProjectHeader label="Design & Prototyping" />

        <CalloutBox title="Design Approach">
          <p className="leading-relaxed">
            After brainstorming and sketching ideas on paper, I created the
            <strong> V1 prototype</strong> using Figma. For the homepage, I drew
            inspiration from existing streaming platforms to understand their
            layout structures. I opted for a<strong> dark theme</strong>,
            anticipating that most users would be streaming in low-light
            settings.
          </p>
        </CalloutBox>

        <div className="my-12">
          <h3 className="text-2xl font-bold mb-8">Initial Prototypes</h3>

          <TwoColumnLayout
            left={
              <div>
                <h4 className="font-bold mb-4">V1.0 - Core Layout</h4>
                <img
                  src={V10}
                  alt="V1.0 Prototype"
                  className="w-full rounded-xl shadow-lg mb-4"
                />
                <p className="text-sm">
                  Initial design focusing on familiar streaming interface
                  patterns
                </p>
              </div>
            }
            right={
              <div>
                <h4 className="font-bold mb-4">V1.1 - Social Features</h4>
                <img
                  src={V11}
                  alt="V1.1 Prototype"
                  className="w-full rounded-xl shadow-lg mb-4"
                />
                <p className="text-sm">
                  Added activity panel and social interaction elements
                </p>
              </div>
            }
          />
        </div>

        <CalloutBox title="Social Integration">
          <p className="leading-relaxed">
            To foster social interaction, I incorporated features inspired by{" "}
            <strong>Spotify and HouseParty</strong>. The design includes a
            <strong> right-hand activity panel </strong>
            where users can see their friends' streaming activity. Additionally,
            users can request to join active, public watch parties, encouraging
            social engagement.
          </p>
        </CalloutBox>

        <div className="my-12">
          <h3 className="text-2xl font-bold mb-8">User Testing Results</h3>

          <div className="space-y-6">
            <EnhancedListItem
              index={0}
              title="Privacy Concerns"
              description="Two-thirds of participants preferred to keep their watch parties private, noting that spontaneous streaming could feel chaotic or risk unwanted participants joining."
            />

            <EnhancedListItem
              index={1}
              title="Video Call Feature"
              description="While users liked the idea of a video call, some expressed concerns that it might become distracting in larger groups."
            />

            <EnhancedListItem
              index={2}
              title="Clarity on Invitations"
              description="The concept of 'sending an invite' was unclear—participants wanted more detail about what happens on the recipient's side when an invite is sent."
            />
          </div>
        </div>
      </ProjectSection>

      {/* Final Product Section */}
      <ProjectSection id="product">
        <ProjectHeader label="Final Product" />

        <div className="space-y-16">
          {/* Home Page */}
          <TwoColumnLayout
            left={
              <div>
                <img
                  src={FinalHome}
                  alt="Final Home Page"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            }
            right={
              <div>
                <h3 className="text-xl font-bold mb-4">
                  <Play className="inline w-6 h-6 mr-2" />
                  Home Page
                </h3>
                <p className="leading-relaxed">
                  The homepage prioritizes
                  <strong> friend interactions </strong>
                  while maintaining party privacy. Users can view active friend
                  activity in the right sidebar and see friend recommendations
                  prominently displayed at the top of their screen, encouraging
                  seamless social engagement.
                </p>
              </div>
            }
          />

          {/* Profile Page */}
          <TwoColumnLayout
            left={
              <div>
                <h3 className="text-xl font-bold mb-4">
                  <Users className="inline w-6 h-6 mr-2" />
                  Profile Page
                </h3>
                <p className="leading-relaxed">
                  Users can curate their profile by selecting their
                  <strong> favorite shows </strong>, which are displayed for
                  others to see. When visiting a friend's profile, users can
                  view their favorites along with
                  <strong> personalized recommendations </strong>
                  for compatible shows to watch together.
                </p>
              </div>
            }
            right={
              <div>
                <img
                  src={FinalProfile}
                  alt="Final Profile Page"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            }
          />

          {/* Video Page */}
          <TwoColumnLayout
            left={
              <div>
                <img
                  src={FinalView}
                  alt="Final Video Page"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            }
            right={
              <div>
                <h3 className="text-xl font-bold mb-4">
                  <Video className="inline w-6 h-6 mr-2" />
                  Video Page
                </h3>
                <p className="leading-relaxed">
                  Users can invite
                  <strong> up to five active friends </strong>
                  to join a watch party directly when starting a video, creating
                  a collaborative and social viewing experience without complex
                  setup.
                </p>
              </div>
            }
          />

          {/* Watch Party */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              The Watch Party Experience
            </h3>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 justify-center items-start mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-100/80 to-pink-100/80 rounded-2xl p-6 backdrop-blur-sm"
              >
                <img
                  src={FinalWatch}
                  alt="Watch Party Interface"
                  className="w-full rounded-xl shadow-lg mb-4"
                />
                <h4 className="font-bold mb-2">🎬 Video Experience</h4>
                <p className="text-sm">
                  Synchronized playback with integrated social features
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-100/80 to-cyan-100/80 rounded-2xl p-6 backdrop-blur-sm"
              >
                <img
                  src={FinalText}
                  alt="Chat Interface"
                  className="w-full rounded-xl shadow-lg mb-4"
                />
                <h4 className="font-bold mb-2">💬 Communication Hub</h4>
                <p className="text-sm">
                  Live chat and video tabs for seamless interaction
                </p>
              </motion.div>
            </div>

            <CalloutBox title="Enhanced Viewing Experience">
              <p className="leading-relaxed">
                During the watch party, users can
                <strong> chat live </strong>
                while enjoying their film together. The right section of the
                streaming screen is dedicated to both a
                <strong> chat tab and a video tab </strong>, ensuring easy
                communication and interaction throughout the viewing experience.
              </p>
            </CalloutBox>
          </div>
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
};
