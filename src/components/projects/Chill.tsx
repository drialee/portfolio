import React from "react";
import { motion } from "motion/react";
import { ProjectSidebarNav } from "../ProjectSidebar";
import { ProjectHeader } from "./Components";
import { ProjectTimeline } from "./Components";
import { ProjectSection } from "./Components";
import { ImageWrapper } from "./Components";
import { ProjectDescriptionWrapper } from "./Components";
import ChillLaptop from "../../utils/projects/Chill/ChillLaptop.png";
import CompetiveAnalysis from "../../utils/projects/Chill/Competive.png";
import SocialMedia from "../../utils/projects/Chill/SocialMedia.png";
import V10 from "../../utils/projects/Chill/V1.0.png";
import V11 from "../../utils/projects/Chill/V1.1.png";
import FinalHome from "../../utils/projects/Chill/FinalHome.png";
import FinalView from "../../utils/projects/Chill/FinalView1.png";
import FinalProfile from "../../utils/projects/Chill/FinalProfile.png";
import FinalWatch from "../../utils/projects/Chill/WatchFinal1.png";
import FinalText from "../../utils/projects/Chill/WatchFinal2.png";

const sections = [
  "About",
  "User Research",
  "Insights",
  "Prototyping",
  "Product",
];

const ChillProjectPage = ({
  onNavigateBack,
}: {
  onNavigateBack: () => void;
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-pink-50/20">
      <ProjectSidebarNav sections={sections} onNavigateBack={onNavigateBack} />

      <div className="ml-64 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-12 px-12 flex"
        >
          <div className="max-w-4xl">
            <ProjectHeader label="&Chill" />
            <ProjectTimeline
              timeline="January - June 2023"
              tools={["Figma", "User Research", "Prototyping"]}
              role={["UX Designer", "User Researcher"]}
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="px-12 pb-20 space-y-16">
          {/* Overview Section */}
          <ProjectSection id="overview">
            <ImageWrapper color="blue">
              <motion.img
                src={ChillLaptop}
                alt="&Chill Cover"
                className="w-full rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </ImageWrapper>
          </ProjectSection>

          {/* About Section */}
          <ProjectSection id="about">
            <ProjectHeader label="About" />
            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-6">
                &Chill transforms streaming into an engaging, shared experience,
                enabling users to socialize and watch TV together—bridging
                distances and fostering meaningful connections.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                While many streaming platforms offer plug-ins for co-viewing,
                these solutions often fall short in creating a seamless and
                inclusive experience. Through my research, I identified three
                key pain points that make social streaming unnecessarily
                difficult:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    1. Requirement for Plug-ins or Memberships
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Existing solutions often demand additional installations or
                    exclusive subscriptions, creating unnecessary barriers.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    2. Limited Accessibility
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Co-viewing is often restricted to exclusive groups, limiting
                    opportunities for broader participation.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    3. Communication Barriers
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Existing platforms fail to provide intuitive and engaging
                    tools for interaction during streams. With &Chill, I set out
                    to address these challenges and redefine what it means to
                    stream together.
                  </p>
                </div>
              </div>
            </ProjectDescriptionWrapper>
          </ProjectSection>

          {/* User Research Section */}
          <ProjectSection id="user-research">
            <ProjectHeader label="User Research" />
            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-8">
                My first step was to go talk to users about their experience
                using social streaming services. I focused on Netflix Party,
                asking my interviewees about their experience with the
                extension. Here was some of the feedback I received:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/50 p-6 rounded-2xl border border-purple-200">
                  <p className="text-muted-foreground italic">
                    "I love Netflix Partying with my friends but it's really
                    difficult to set up and takes a while. Everyone has to
                    download the extension and the link has to work properly for
                    everyone to be on the same show. If it was easier to do we
                    would use it more."
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl border border-purple-200">
                  <p className="text-muted-foreground italic">
                    "I like Netflix Party, but my biggest frustration is the
                    lack of a video component. You have to put Facetime on a
                    separate device in order to watch together"
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl border border-purple-200">
                  <p className="text-muted-foreground italic">
                    "The extension almost always crashed my browser or wouldn't
                    work at all. If anything, Zoom's features felt more communal
                    by allowing everyone in the party to see each other while
                    watching their movie/show"
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <motion.img
                  src={CompetiveAnalysis}
                  alt="Competitive Analysis"
                  className="rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                To understand the current landscape, I conducted a competitive
                analysis of major streaming platforms such as Netflix, Prime
                Video, HBO, and Hulu. I found that none of these platforms
                offered integrated video chat functionality. Additionally, they
                often required all users to share the same subscription plan,
                and sending a video link was necessary to initiate co-viewing
                sessions.
              </p>

              <div className="flex justify-center mb-8">
                <motion.img
                  src={SocialMedia}
                  alt="Social Media Analysis"
                  className="rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I also analyzed three social media platforms—Snapchat,
                HouseParty, and Spotify—that have revolutionized how we form
                genuine connections through technology. I identified key
                features that successfully engage and connect their users. For
                example, Snapchat uses Snap Streaks and individual scores to
                gamify social interactions, fostering ongoing engagement.
                Spotify enables users to share their song history and active
                listening status, creating a sense of community around shared
                tastes. HouseParty offers virtual rooms where users can wave to
                invite others, fostering a welcoming and casual environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Inspired by these insights, I designed my platform to
                incorporate similar elements to create an open, engaging, and
                inclusive experience for users.
              </p>
            </ProjectDescriptionWrapper>
          </ProjectSection>

          {/* Insights Section */}
          <ProjectSection id="insights">
            <ProjectHeader label="Insights" />
            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My research confirmed my hypothesis:
              </p>
              <h4 className="text-xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                There is a strong desire for a communal digital viewing
                experience, yet its widespread adoption is hindered by
                substantial communication and technological barriers.
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This led me to confront questions such as:
              </p>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  How can we{" "}
                  <span className="font-semibold text-foreground">
                    simplify the process
                  </span>{" "}
                  of inviting friends and synchronizing playback across devices
                  for a seamless social streaming experience?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  How might we enable users to transition from individual to
                  group streaming experience,{" "}
                  <span className="font-semibold text-foreground">
                    preserving personalization while enhancing social
                    interaction
                  </span>
                  ?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  How can we replicate the{" "}
                  <span className="font-semibold text-foreground">
                    shared excitement and interactions
                  </span>{" "}
                  of an in-person movie night through an online platform?
                </p>
              </div>
            </ProjectDescriptionWrapper>
          </ProjectSection>

          {/* Prototyping Section */}
          <ProjectSection id="prototyping">
            <ProjectHeader label="Prototyping" />
            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-8">
                After brainstorming and sketching my ideas on paper, I created
                the V1 prototype using Figma. For the homepage, I drew
                inspiration from existing streaming platforms to understand how
                they structure their layouts. I opted for a dark theme,
                anticipating that most users would be streaming in low-light
                settings.
              </p>
            </ProjectDescriptionWrapper>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.img
                src={V10}
                alt="V1.0 Prototype"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              <motion.img
                src={V11}
                alt="V1.1 Prototype"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>

            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-8">
                To foster social interaction, I incorporated features inspired
                by Spotify and HouseParty. The design includes a right-hand
                activity panel where users can see their friends' streaming
                activity. Additionally, users can request to join active, public
                watch parties, encouraging a seamless and engaging social
                streaming experience.
              </p>

              <h3 className="text-2xl font-semibold mb-6">User Testing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                After developing the main components of my solution, I conducted
                user testing with students at my university. Here are the key
                insights I gathered:
              </p>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Privacy Concerns:
                  </span>{" "}
                  Two-thirds of participants preferred to keep their watch
                  parties private, noting that spontaneous streaming could feel
                  chaotic or risk unwanted participants joining.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Video Call Feature:
                  </span>{" "}
                  While users liked the idea of a video call, some expressed
                  concerns that it might become distracting in larger groups.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Clarity on Invitations:
                  </span>{" "}
                  The concept of "sending an invite" was unclear—participants
                  wanted more detail about what happens on the recipient's side
                  when an invite is sent.
                </p>
              </div>
            </ProjectDescriptionWrapper>
          </ProjectSection>

          {/* Product Section */}
          <ProjectSection id="product">
            <ProjectHeader label="Final Product" />
            <ProjectDescriptionWrapper>
              <div className="space-y-16">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.img
                    src={FinalHome}
                    alt="Final Home Page"
                    className="w-full md:w-1/2 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />
                  <div className="w-full md:w-1/2">
                    <h4 className="text-xl font-semibold mb-4">Home Page</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The homepage prioritizes friend interactions while
                      maintaining party privacy. Users can view active friend
                      activity in the right sidebar and see friend
                      recommendations prominently displayed at the top of their
                      screen, encouraging seamless social engagement.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.img
                    src={FinalProfile}
                    alt="Final Profile Page"
                    className="w-full md:w-1/2 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                  <div className="w-full md:w-1/2">
                    <h4 className="text-xl font-semibold mb-4">Profile Page</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Users can curate their profile by selecting their favorite
                      shows, which are displayed for others to see. When
                      visiting a friend's profile, users can view their
                      favorites along with personalized recommendations for
                      compatible shows to watch together.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.img
                    src={FinalView}
                    alt="Final Video Page"
                    className="w-full md:w-1/2 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                  <div className="w-full md:w-1/2">
                    <h4 className="text-xl font-semibold mb-4">Video Page</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Users can invite up to five active friends to join a watch
                      party directly when starting a video, creating a
                      collaborative and social viewing experience.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                    <motion.img
                      src={FinalWatch}
                      alt="Watch Party Interface"
                      className="w-full md:w-1/3 rounded-2xl shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    />
                    <motion.img
                      src={FinalText}
                      alt="Chat Interface"
                      className="w-full md:w-1/3 rounded-2xl shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">
                    The Watch Party
                  </h4>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    During the watch party, users can chat live while enjoying
                    their film together. The right section of the streaming
                    screen is dedicated to both a chat tab and a video tab,
                    ensuring easy communication and interaction.
                  </p>
                </div>
              </div>
            </ProjectDescriptionWrapper>
          </ProjectSection>
        </div>
      </div>
    </div>
  );
};

export default ChillProjectPage;
