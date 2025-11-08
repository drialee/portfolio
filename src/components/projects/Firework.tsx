import { motion } from "motion/react";
import { Briefcase, Code, Users } from "lucide-react";

import { ProjectSidebarNav } from "../ProjectSidebar";
import { useProjectNavigation } from "../../hooks/useProjectNavigation";
import {
  CalloutBox,
  ProjectHeader,
  ProjectTitle,
  StatsGrid,
  ProjectTimeline,
} from "./Components";
import { projects } from "../../utils/info";
import { Accordion } from "../ui/accordion";

import Firework from "../../utils/projects/Firework/fireworkCover.png";

import { ExternalLinkButton } from "../ExternalLink";
import {
  caseStudyProjects,
  engineeringProjects,
  fireworkSections,
} from "./fireworkData";
import { DesignProjectAccordionItem } from "../ProjectAccordionItems";
import { EngineeringProjectAccordionItem } from "../ProjectAccordionItems";

export function FireworkProjectPage() {
  const { isMobile, handleNavigateBack } = useProjectNavigation();
  const firework = projects.find((project) => project.id === "firework");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-pink-50/20">
      {!isMobile && (
        <ProjectSidebarNav
          sections={fireworkSections}
          onNavigateBack={handleNavigateBack}
        />
      )}

      <div className="sm:ml-64 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-12 px-6 sm:px-12"
        >
          <div className="max-w-5xl">
            <ProjectTitle label="Firework" />

            <ProjectTimeline
              timeline="June 2023 - February 2025"
              tools={firework?.technologies || []}
              role={firework?.role || []}
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="px-6 sm:px-12 pb-20 space-y-16">
          {/* Overview Section */}
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
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
            className="max-w-5xl"
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

          <motion.section
            id="product-design"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <ProjectHeader label="Designing at Firework" />

            <CalloutBox
              title="Product Design & Product Management"
              color="purple"
              icon={<Users className="w-6 h-6 text-purple-600" />}
            >
              <p className="text-purple-800 leading-relaxed mb-4">
                As a <strong>Product Intern</strong>, I led the end-to-end
                design process for
                <strong> 11 product initiatives</strong> across 5 teams. Each
                project followed a rigorous UX process: research, persona
                development, wireframing, prototyping, and leading meetings with
                engineers to ensure the implementation was successful.
              </p>
            </CalloutBox>

            {/* Case Study Accordion */}
            <Accordion type="single" collapsible className="space-y-4 mt-8">
              {caseStudyProjects.map((project, index) => (
                <DesignProjectAccordionItem
                  key={index}
                  project={project}
                  index={index}
                />
              ))}
            </Accordion>
          </motion.section>

          {/* Engineering Section */}
          <motion.section
            id="engineering"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <ProjectHeader label="Engineering at Firework" />

            <CalloutBox
              title="Full-Stack Development"
              color="green"
              icon={<Code className="w-6 h-6 text-green-600" />}
            >
              <p className="text-green-800 leading-relaxed">
                Leveraged my design background to transition into{" "}
                <strong>full-stack </strong>
                development, where I built{" "}
                <strong>AI-powered sales automation</strong> and
                <strong> business portal features</strong> that transformed
                manual processes into
                <strong> scalable systems</strong>.
              </p>
            </CalloutBox>

            <Accordion type="single" collapsible className="space-y-4 mt-8">
              {engineeringProjects.map((project, index) => (
                <EngineeringProjectAccordionItem
                  key={index}
                  project={project}
                  index={index}
                />
              ))}
            </Accordion>
          </motion.section>

          <ExternalLinkButton
            href="https://firework.com"
            label="Visit Firework"
          />
        </div>
      </div>
    </div>
  );
}
