import { motion } from "motion/react";
import { ProjectSidebarNav } from "../ProjectSidebar";
import { Badge } from "../ui/badge";

import Firework from "../../utils/projects/Firework/fireworkCover.png";

import FOMO from "../../utils/projects/Firework/fomo.png";
import step2 from "../../utils/projects/Firework/step2.png";

import { Button } from "../ui/button";
import {
  ExternalLink,
  Briefcase,
  Code,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { CalloutBox, ProjectTitle } from "./Components";
import { StatsGrid } from "./Components";
import { EnhancedListItem } from "./Components";
import { TwoColumnLayout } from "./Components";
import { ProjectHeader } from "./Components";
import { projects } from "../../utils/info";

interface FireworkProjectPageProps {
  onNavigateBack: () => void;
}

const sections = ["Overview", "About", "Product", "Engineering"];

export function FireworkProjectPage({
  onNavigateBack,
}: FireworkProjectPageProps) {
  const firework = projects.find((project) => project.id === "firework");
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
            <ProjectTitle label="Firework" />

            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
                <p className="text-muted-foreground">
                  June 2023 - February 2025
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tools</h3>
                <div className="space-y-1">
                  {firework?.technologies.map((technology, index) => (
                    <Badge variant="secondary" className="mr-2 mb-1">
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Role</h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Software Engineer</p>
                  <p className="text-muted-foreground">UX Designer</p>
                  <p className="text-muted-foreground">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="px-12 pb-20 space-y-16">
          {/* Overview Section */}
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div
              className={`bg-gradient-to-br rounded-3xl p-8 backdrop-blur-sm ${firework?.color}`}
            >
              <motion.img
                src={Firework}
                alt="My Experience at Firework"
                className="w-full rounded-2xl shadow-2xl mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <ProjectHeader label="About Firework" />

            <CalloutBox
              title="The Company"
              color="orange"
              icon={<Briefcase className="w-6 h-6" />}
            >
              <p className={`${firework?.textColor} leading-relaxed`}>
                Firework is a <strong>B2B leader in video commerce</strong>,
                partnering with <strong>1500+ brands</strong> including Vogue,
                Condé Nast, and Westfield. Their platform enhances online
                connection and authenticity by offering{" "}
                <strong>shoppable and interactive video experiences</strong>.
              </p>
            </CalloutBox>

            <StatsGrid
              items={[
                {
                  label: "Brand Partners",
                  value: "1500+",
                  color: "text-purple-600",
                },
                {
                  label: "Teams Collaborated",
                  value: "5",
                  color: "text-pink-600",
                },
                {
                  label: "Interfaces Designed",
                  value: "11",
                  color: "text-blue-600",
                },
              ]}
            />
          </motion.section>

          {/* Product Section */}
          <motion.section
            id="product"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <ProjectHeader label="Product Experience" />

            <CalloutBox
              title="My Journey as Product Intern"
              color="purple"
              icon={<Users className="w-6 h-6 text-purple-600" />}
            >
              <p className="text-purple-800 leading-relaxed mb-4">
                I began my journey at Firework as a{" "}
                <strong>Product Intern</strong>, working within both{" "}
                <strong>Product Design and Product Management</strong>. Over the
                course of the internship, I managed <strong>5 projects</strong>{" "}
                across the company.
              </p>
            </CalloutBox>

            <div className="space-y-6 my-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Key Product Areas
              </h3>

              <EnhancedListItem
                index={0}
                title="1:1 Video Chat"
                description="Figured out how to best personalize their 1:1 chatbox experience to improve user engagement and connection quality."
              />

              <EnhancedListItem
                index={1}
                title="AIGC Studio Design"
                description="Designed their AI-Generated Content studio interface, enabling creators to produce enhanced AI generated content."
              />

              <EnhancedListItem
                index={2}
                title="FOMO for Livestreams"
                description="Introduced Fear of Missing Out elements to their livestream platform to increase viewer engagement and purchasing rates."
              />
            </div>

            <TwoColumnLayout
              left={
                <div>
                  <h3 className={`text-xl font-bold mb-4`}>
                    FOMO for Livestreams
                  </h3>
                  <motion.img
                    src={FOMO}
                    alt="FOMO for Livestreams"
                    className="w-full rounded-2xl shadow-xl max-h-[400px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </div>
              }
              right={
                <div>
                  <h3 className={`text-xl font-bold mb-4`}>AIGC Studio</h3>
                  <motion.img
                    src={step2}
                    alt="AIGC Studio Interface"
                    className="w-full rounded-2xl shadow-xl max-h-[400px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                </div>
              }
            />

            <div className="flex flex-wrap gap-3 pt-6 justify-center">
              {firework?.product?.map((skill, index) => (
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
                    className={`px-4 py-2  border border-purple-200  transition-all duration-200 ${firework?.color}`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Engineering Section */}
          <motion.section
            id="engineering"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <ProjectHeader label="Engineering Experience" />

            <CalloutBox
              title="Design to Development Transition"
              color="green"
              icon={<Code className="w-6 h-6 text-green-600" />}
            >
              <p className="text-green-800 leading-relaxed">
                Transitioning from design to development, I worked{" "}
                <strong>full-stack</strong> to improve{" "}
                <strong>sales acquisition</strong> and enhance their{" "}
                <strong>CMS portal</strong>.
              </p>
            </CalloutBox>

            <TwoColumnLayout
              left={
                <div>
                  <h3 className={`text-xl font-bold mb-4`}>
                    <Target className="inline w-6 h-6 mr-2" />
                    Sales-Led Growth Pipeline
                  </h3>
                  <p className="text-blue-800 leading-relaxed mb-4">
                    Worked with <strong>two interns</strong> to develop a
                    comprehensive pipeline for Firework's Sales-Led Growth
                    initiative, <strong>automating customer acquisition</strong>
                    .
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-blue-900 text-sm">
                        🔍 Data Enrichment
                      </h4>
                      <p className="text-xs text-blue-800">
                        Automated lead identification and qualification
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-blue-900 text-sm">
                        📊 Lead Scoring
                      </h4>
                      <p className="text-xs text-blue-800">
                        AI-powered qualification system
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-blue-900 text-sm">
                        📧 Email Automation
                      </h4>
                      <p className="text-xs text-blue-800">
                        Personalized outreach at scale
                      </p>
                    </div>
                  </div>
                </div>
              }
              right={
                <div>
                  <h3 className={`text-xl font-bold mb-4`}>
                    <Zap className="inline w-6 h-6 mr-2" />
                    Product-Led Growth Features
                  </h3>
                  <p className="text-purple-800 leading-relaxed mb-4">
                    Implemented new features to improve the user experience for
                    <strong>PLG customers</strong> on the business portal.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        🚀 Onboarding Process
                      </h4>
                      <p className="text-xs text-purple-800">
                        Streamlined user activation flow
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        🛒 Shopify Integration
                      </h4>
                      <p className="text-xs text-purple-800">
                        Seamless embedding workflow
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="font-bold text-purple-900 text-sm">
                        ♿ Accessibility Focus
                      </h4>
                      <p className="text-xs text-purple-800">
                        Inclusive design for diverse users
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            <div className="flex flex-wrap gap-3 pt-6 justify-center">
              {firework?.engineering?.map((skill, index) => (
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
                    className={`px-4 py-2  border border-blue-200  transition-all duration-200 ${firework?.color}`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.section>

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
                    href="https://firework.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Firework
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
