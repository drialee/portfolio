import { motion } from "motion/react";
import { ProjectSidebarNav } from "../ProjectSidebar";
import { Badge } from "../ui/badge";

import Firework from "../../utils/projects/Firework/fireworkCover.png";
import {
  ImageWrapper,
  ProjectDescriptionWrapper,
  ProjectHeader,
  ProjectSection,
  ProjectSkill,
  ProjectTimeline,
} from "./Components";
import InstagramImporter from "../../utils/projects/Firework/instagramImporter.png";
import { ProjectLinks } from "./Links";

interface FireworkProjectPageProps {
  onNavigateBack: () => void;
}

const sections = [
  "Overview",
  "About",
  "My Experience",
  "Product",
  "Engineering",
];

export function FireworkProjectPage({
  onNavigateBack,
}: FireworkProjectPageProps) {
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
            <ProjectHeader label="Firework" />
            <ProjectTimeline
              timeline="June 2023 - February 2025"
              tools={["React", "TypeScript", "Python", "Figma"]}
              role={["Software Engineer", "UX Designer", "Product Manager"]}
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="px-12 pb-20 space-y-16">
          {/* Overview Section */}
          <ProjectSection id="overview">
            <ImageWrapper color="purple">
              <motion.img
                src={Firework}
                alt="My Experience at Firework"
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
                Firework is a global leader in video commerce, partnering with
                renowned brands such as Vogue, Condé Nast, and Westfield. Their
                platform enhances online connection and authenticity by offering
                shoppable and interactive video experiences.
              </p>
            </ProjectDescriptionWrapper>
          </ProjectSection>

          {/* My Experience Section */}
          <ProjectSection id="my-experience">
            <ProjectHeader label="My Experience" />

            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-8">
                My time at Firework allowed me to develop a broad range of
                skills across product and engineering disciplines while
                contributing to meaningful projects that impact customers
                globally.
              </p>
            </ProjectDescriptionWrapper>
          </ProjectSection>

          {/* Product Section */}
          <ProjectSection id="product">
            <ProjectHeader label="Product" />

            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I began my journey at Firework as a Product Intern, where I
                worked across Product Design and Product Management.
                Collaborating with five teams across the company, I designed 11
                interfaces and managed the growth of five projects over the
                course of the internship.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                My work included personalizing their 1:1 Video Chat, designing
                the video uploading and editing workflows for their AIGC studio,
                and introducing FOMO to their livestreams.
              </p>

              <ImageWrapper color="purple">
                <motion.img
                  src={InstagramImporter}
                  alt="Instagram Importer"
                  className="w-full rounded-2xl shadow-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </ImageWrapper>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Product Design",
                  "User Research",
                  "Prototyping",
                  "Figma",
                  "User Testing",
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
                      className="px-3 py-1 bg-white/90 text-purple-700 border border-purple-200 hover:bg-purple-50 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </ProjectDescriptionWrapper>
          </ProjectSection>

          {/* Engineering Section */}
          <ProjectSection id="engineering">
            <ProjectHeader label="Engineering" />

            <ProjectDescriptionWrapper>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transitioning from design to development, I worked full-stack to
                enhance their video player and improve their CSM portal.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                On the data side, I worked with two interns to develop a
                pipeline for Firework's Sales-Led Growth initiative, automating
                customer acquisition. The pipeline identified and qualified
                leads through stages like data enrichment, lead scoring, and
                actionable insights for the sales team. To enhance efficiency,
                we integrated OpenAI's embedding models for semantic search,
                utilized automated personalized email outreach, and optimized
                overall performance through analysis of AB test results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I also focused on implementing new features to improve the user
                experience for Product-Led Growth (PLG) customers on the
                business portal. I developed an onboarding process and a
                seamless embedding flow for Shopify integration, prioritizing
                usability and accessibility to meet the needs of a diverse
                customer base.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Python",
                  "Data Pipeline",
                  "OpenAI",
                  "Machine Learning",
                  "Sales Automation",
                  "A/B Testing",
                ].map((skill, index) => (
                  <ProjectSkill skill={skill} index={index} />
                ))}
              </div>
            </ProjectDescriptionWrapper>
          </ProjectSection>
          {/* Project Links */}
          <ProjectLinks href="https://firework.com" label="Visit Firework" />
        </div>
      </div>
    </div>
  );
}
