import { motion } from "motion/react";
import { Briefcase, Users } from "lucide-react";

import { ExternalLinkButton } from "../ExternalLink";
import { CalloutBox, ProjectHeader, ProjectSection } from "./Components";
import { ProjectAccordionItem } from "../ProjectAccordionItems";
import { Accordion } from "../ui/accordion";
import { ProjectPageLayout } from "./ProjectPageLayout";
// Image imports
import { AirframeCaseStudies } from "./airframeData";
import homepageVideo from "../../utils/projects/Airframe/Homepage.mov";

export function AirframeProjectPage() {
  return (
    <ProjectPageLayout projectId="airframe" headerMaxWidthClassName="max-w-4xl">
      {/* Hero Video */}
      <ProjectSection id="overview">
        <div className="bg-gradient-to-br from-blue-100/80 to-purple-100/80 rounded-3xl p-8 backdrop-blur-sm">
          <motion.video
            src={homepageVideo}
            autoPlay
            muted
            loop
            className="w-full rounded-2xl shadow-2xl mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>
      </ProjectSection>

      <ProjectSection id="about" className="space-y-8">
        <ProjectHeader label="About Airframe" />

        <CalloutBox
          title="The Company"
          icon={<Briefcase className="w-6 h-6" />}
        >
          <p>
            Airframe is the{" "}
            <strong>
              intelligence layer for discovering, evaluating, and adopting the
              right AI tools
            </strong>
            . We've raised <strong>$4M in seed funding</strong> from Company
            Ventures and AI Capital.
          </p>
        </CalloutBox>

        <CalloutBox title="My Role" icon={<Users className="w-6 h-6" />}>
          <div>
            <p>
              I joined Airframe as the <strong>2nd full-time hire</strong> when
              the product was still taking shape. For the first six months, I
              worked side-by-side with the co-founders to build the{" "}
              <strong>core frontend architecture</strong> that helped us
              successfully raise our seed round.
            </p>
            <p>
              I've worn multiple hats—designing features, making product
              decisions, building the implementation, and validating with users.
            </p>
          </div>
        </CalloutBox>
      </ProjectSection>

      <ProjectSection id="case-studies" className="space-y-8">
        <Accordion type="single" collapsible className="space-y-4">
          {AirframeCaseStudies.map((project, index) => (
            <ProjectAccordionItem key={index} project={project} index={index} />
          ))}
        </Accordion>
      </ProjectSection>

      <ProjectSection id="external-link">
        <ExternalLinkButton href="https://airframe.ai" label="Visit Airframe" />
      </ProjectSection>
    </ProjectPageLayout>
  );
}
