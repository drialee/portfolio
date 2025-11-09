import { motion } from "motion/react";
import { Briefcase, Code, Users } from "lucide-react";

import {
  CalloutBox,
  ProjectHeader,
  ProjectSection,
  StatsGrid,
} from "./Components";
import { Accordion } from "../ui/accordion";

import Firework from "../../utils/projects/Firework/fireworkCover.png";

import { ExternalLinkButton } from "../ExternalLink";
import { caseStudyProjects, engineeringProjects } from "./fireworkData";

import { ProjectPageLayout } from "./ProjectPageLayout";
import { projectsById } from "../../utils/info";
import { ProjectAccordionItem } from "../ProjectAccordionItems";

export function FireworkProjectPage() {
  const firework = projectsById.firework;

  return (
    <ProjectPageLayout projectId="firework">
      <ProjectSection id="overview" className="max-w-5xl">
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
      </ProjectSection>

      <ProjectSection id="about" className="max-w-5xl">
        <ProjectHeader label="About Firework" />

        <CalloutBox
          title="The Company"
          icon={<Briefcase className="w-6 h-6" />}
        >
          <p>
            Firework is a <strong>B2B leader in video commerce</strong>,
            partnering with <strong>1500+ brands</strong> including Vogue, Condé
            Nast, and Westfield. Their platform enhances online connection and
            authenticity by offering{" "}
            <strong>shoppable and interactive video experiences</strong>.
          </p>
        </CalloutBox>

        <StatsGrid
          items={[
            {
              label: "Brand Partners",
              value: "1500+",
            },
            {
              label: "Teams Collaborated",
              value: "5",
            },
            {
              label: "Interfaces Designed",
              value: "11",
            },
          ]}
        />
      </ProjectSection>

      <ProjectSection id="product-design" className="max-w-5xl">
        <ProjectHeader label="Designing at Firework" />

        <CalloutBox
          title="Product Design & Product Management"
          icon={<Users className="w-6 h-6" />}
        >
          <p>
            As a <strong>Product Intern</strong>, I led the end-to-end design
            process for <strong>11 product initiatives</strong> across 5 teams.
            Each project followed a rigorous UX process: research, persona
            development, wireframing, prototyping, and leading meetings with
            engineers to ensure the implementation was successful.
          </p>
        </CalloutBox>

        <Accordion type="single" collapsible className="space-y-4 mt-8">
          {caseStudyProjects.map((project, index) => (
            <ProjectAccordionItem key={index} project={project} index={index} />
          ))}
        </Accordion>
      </ProjectSection>

      <ProjectSection id="engineering" className="max-w-5xl">
        <ProjectHeader label="Engineering at Firework" />

        <CalloutBox
          title="Full-Stack Development"
          icon={<Code className="w-6 h-6" />}
        >
          <p>
            Leveraged my design background to transition into{" "}
            <strong>full-stack </strong>
            development, where I built{" "}
            <strong>AI-powered sales automation</strong> and{" "}
            <strong>business portal features</strong> that transformed manual
            processes into <strong>scalable systems</strong>.
          </p>
        </CalloutBox>

        <Accordion type="single" collapsible className="space-y-4 mt-8">
          {engineeringProjects.map((project, index) => (
            <ProjectAccordionItem key={index} project={project} index={index} />
          ))}
        </Accordion>
      </ProjectSection>

      <ProjectSection id="external-link" className="max-w-5xl">
        <ExternalLinkButton
          href="https://firework.com"
          label="Visit Firework"
        />
      </ProjectSection>
    </ProjectPageLayout>
  );
}
