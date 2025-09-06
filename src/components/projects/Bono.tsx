import { motion } from "motion/react";
import { ProjectSidebarNav } from "../ProjectSidebar";
import { ProjectHeader } from "./Components";
import { ProjectTimeline } from "./Components";
import { ProjectSection } from "./Components";
import { ImageWrapper } from "./Components";
import { ProjectDescriptionWrapper } from "./Components";
import BonoCover from "../../utils/projects/Bono/BonoCover.png";
import BonoBrand1 from "../../utils/projects/Bono/BonoBrand1.png";
import BonoBrand2 from "../../utils/projects/Bono/BonoBrand2.png";
import BonoBrand3 from "../../utils/projects/Bono/BonoBrand3.png";
import BonoBrand4 from "../../utils/projects/Bono/BonoBrand4.png";
import LofiChat from "../../utils/projects/Bono/ChatLofi.png";
import LofiDiscover from "../../utils/projects/Bono/DiscoverLofi.png";
import LofiSearch from "../../utils/projects/Bono/SearchLofi.png";
import LofiHome from "../../utils/projects/Bono/HomepageLofi.png";

const sections = ["About", "Exploration", "Branding", "Prototyping", "Product"];

const BonoProjectPage = ({
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
            <ProjectHeader label="Bono" />
            <ProjectTimeline
              timeline="January - June 2024"
              tools={["React", "Figma", "User Research"]}
              role={["Front-End Engineer", "UX Designer"]}
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="px-12 pb-20 space-y-16">
          {/* Overview Section */}
          <ProjectSection id="overview">
            <ImageWrapper color="pink">
              <motion.img
                src={BonoCover}
                alt="Bono Cover"
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
              <p className="text-muted-foreground leading-relaxed">
                Bono is a platform designed to simplify the process of
                discovering trustworthy charities. We connect users with
                organizations that align with their values, passions, and
                personal stories, making it easier to give back in a meaningful
                way.
              </p>
            </ProjectDescriptionWrapper>
          </ProjectSection>

          {/* Exploration Section */}
          <ProjectSection id="exploration">
            <ProjectHeader label="Exploration" />
            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My team conducted{" "}
                <span className="font-semibold text-foreground">
                  42 user interviews and 44 quantitative surveys
                </span>{" "}
                with a diverse group of volunteers, financial literacy
                educators, college students, tax lawyers, angel investors,
                nonprofits, social impact leaders. Initially, we didn't have a
                specific vision for our app beyond the goal of creating
                something that would make a positive impact. However, we
                ultimately decided to focus on college students—an audience we
                could personally relate to. We aimed to design an app that would
                resonate with both the 'average' and 'highly engaged' students
                at our school.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through these interviews, we discovered that students across the
                spectrum were eager to make a positive difference, often through
                actions like donating. However, they frequently felt{" "}
                <span className="font-semibold text-foreground">
                  overwhelmed and skeptical
                </span>{" "}
                about the vast number of nonprofit organizations. This
                uncertainty leads many to fall into a cycle of endless research,
                preventing them from taking action even when they're inclined to
                contribute.
              </p>
            </ProjectDescriptionWrapper>
          </ProjectSection>

          {/* Branding Section */}
          <ProjectSection id="branding">
            <ProjectHeader label="Branding" />
            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-8">
                To bring our vision to life, we established brand guidelines
                early on, selecting a palette of blues and yellows to evoke
                calmness and happiness. We carefully chose fonts and colors that
                would convey a sense of simplicity and fun, ensuring the
                platform felt approachable and inviting.
              </p>
            </ProjectDescriptionWrapper>
            <div className="grid grid-cols-2 gap-6">
              <motion.img
                src={BonoBrand1}
                alt="Bono Brand 1"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              <motion.img
                src={BonoBrand2}
                alt="Bono Brand 2"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.img
                src={BonoBrand3}
                alt="Bono Brand 3"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.img
                src={BonoBrand4}
                alt="Bono Brand 4"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
          </ProjectSection>

          {/* Prototyping Section */}
          <ProjectSection id="prototyping">
            <ProjectHeader label="Prototyping" />
            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We began with brainstorming sessions using whiteboard exercises
                and plenty of sticky notes, exploring ideas like gamification,
                bite-sized lessons, AI storytelling, and a news website plug-in.
                Next, we moved into prototyping on Figma, creating several
                low-fidelity screens that outlined the main components of our
                application: a home screen, discover page, organization page,
                and an AI chatbox. To foster diverse ideas, each team member
                took on two features, allowing us to broaden our creative
                approach.
              </p>
            </ProjectDescriptionWrapper>
            <div className="grid grid-cols-2 gap-6">
              <motion.img
                src={LofiHome}
                alt="Lofi Home"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              <motion.img
                src={LofiDiscover}
                alt="Lofi Discover"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.img
                src={LofiSearch}
                alt="Lofi Search"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.img
                src={LofiChat}
                alt="Lofi Chat"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
          </ProjectSection>

          {/* Product Section */}
          <ProjectSection id="product">
            <ProjectHeader label="Final Product" />
            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As designers, we recognize the transformative power of
                storytelling. Our mission is to empower users to share their
                unique narratives, values, and passions through Bono, enabling
                them to contribute meaningfully to causes they care about. We
                stand apart by leveraging a curated AI algorithm that delivers
                personalized recommendations for charities and causes, along
                with a suite of other impactful features, such as:
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">1. AI Chatbox</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Bono offers an AI-powered chatbox to help users discover
                    organizations that align with their passions and values.
                    Share a bit about yourself to save time and simplify your
                    search.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    2. Comprehensive Organization Profiles
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Bono provides detailed profiles of organizations, fostering
                    trust and transparency for users.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    3. Impact Tracking
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Bono keeps users informed by tracking the impact of their
                    donations, showing exactly where their contributions go.
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

export default BonoProjectPage;
