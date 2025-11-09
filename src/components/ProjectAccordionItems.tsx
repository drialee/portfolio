import { ChevronDown } from "lucide-react";
import { Section } from "./projects/Components";
import { CaseStudyProject } from "./projects/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ProcessStep } from "./projects/Components";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export const ProjectAccordionItem = ({
  project,
  index,
}: {
  project: CaseStudyProject;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      {/* Always Visible Header Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col gap-4">
          <div className="flex-1 flex items-center justify-between gap-4 mb-2">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            {project.timeline && (
              <Badge
                variant="secondary"
                className="bg-pink-100 text-pink-700 shrink-0"
              >
                {project.timeline}
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground text-sm font-normal">
            {project.tldr}
          </p>
        </div>

        {/* Expandable Detailed Content */}
        <AccordionItem
          value={`project-${index}`}
          className="border-0 shadow-none"
        >
          <AccordionTrigger className="hover:no-underline hover:bg-pink-50/30 transition-colors group border-0 [&>svg]:hidden p-3 sm:p-6">
            <div className="flex items-center gap-2 text-pink-600">
              <span>View Full Case Study</span>
              <ChevronDown className="w-5 h-5 transition-transform group-data-[state=open]:rotate-180" />
            </div>
          </AccordionTrigger>

          <AccordionContent className="p-6">
            <div className="flex flex-col gap-4 sm:gap-12">
              {/* Problem */}
              <div className="flex flex-col gap-4">
                <div>
                  <Section label="The Problem" content={project.problem} />
                </div>
              </div>

              {/* Vision Tab */}
              {project.vision && (
                <div>
                  <Section label="Vision" content={project.vision} />
                </div>
              )}

              {/* User Personas */}
              {project.personas && (
                <div>
                  <Section
                    label="User Personas"
                    content={
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.personas?.map((persona, i) => (
                          <Card key={i} className="border-2">
                            <CardHeader>
                              <CardTitle className="text-base">
                                {persona.name}
                              </CardTitle>
                              <CardDescription>{persona.goal}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm font-normal">
                                <strong>Pain Point:</strong> {persona.pain}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    }
                  />
                </div>
              )}

              {/* Unique Value Props */}
              {project.uniqueValueProps && (
                <div className="flex flex-col gap-4">
                  <Section
                    label="Unique Value Props"
                    content={
                      <ul className="list-disc list-inside space-y-2">
                        {project.uniqueValueProps.map((value, i) => (
                          <li key={i}>{value}</li>
                        ))}
                      </ul>
                    }
                  />
                </div>
              )}

              {/* Process Tab */}
              <div className="flex flex-col gap-4">
                <Section
                  label="Design Process"
                  content={
                    <div className="flex flex-col gap-12">
                      {project.process?.map((step, i) => (
                        <ProcessStep
                          key={i}
                          number={`${i + 1}`}
                          title={step.step || ""}
                          description={step.description}
                          images={step.images}
                          color={`bg-gradient-to-br from-purple-100 to-pink-100`}
                        />
                      ))}
                    </div>
                  }
                />
              </div>
              {/* Design Decisions */}
              {project.designDecisions && (
                <div className="flex flex-col gap-4">
                  <Section
                    label="Design Decisions"
                    content={
                      <ul className="space-y-3 list-disc">
                        {project.designDecisions?.map((decision, i) => (
                          <li key={i}>
                            <div className="flex flex-col gap-2">
                              <p className="font-semibold text-foreground text-sm">
                                {decision.decision}
                              </p>
                              {decision.rationale && (
                                <p className="text-sm text-muted-foreground font-normal">
                                  {decision.rationale}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    }
                  />
                </div>
              )}
              {/* Reflections */}
              {project.reflections && (
                <div className="flex flex-col gap-4">
                  <Section label="Reflections" content={project.reflections} />
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div className="flex flex-col gap-4">
                  <Section
                    label="Solution"
                    content={
                      <div className="flex flex-col gap-4">
                        <p className="text-muted-foreground">
                          {project.solution}
                        </p>
                      </div>
                    }
                  />
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </div>
    </motion.div>
  );
};
