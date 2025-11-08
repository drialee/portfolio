import { Lightbulb, Search, User } from "lucide-react";
import { Section } from "./projects/Components";
import { CaseStudyProject } from "./projects/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Pencil, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ProcessStep } from "./projects/Components";
import { motion } from "motion/react";

export const DesignProjectAccordionItem = ({
  project,
  index,
}: {
  project: CaseStudyProject;
  index: number;
}) => {
  return (
    <AccordionItem
      key={index}
      value={`project-${index}`}
      className={`bg-white/60 backdrop-blur-sm rounded-2xl border-l-4 ${project.colorClass} overflow-hidden`}
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/40 transition-colors">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">{project.title}</h4>
          <p className="text-muted-foreground text-sm">{project.solution}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-6">
        <div className="flex flex-col gap-12">
          {/* Overview */}
          <div className="flex flex-col gap-4">
            <div>
              <Section
                icon={<Lightbulb className="w-5 h-5" />}
                label="The Problem"
                color="text-red-600"
                content={project.problem}
              />
            </div>
          </div>

          {/* Research */}
          <div className="flex flex-col gap-4">
            <div>
              <Section
                icon={<Search className="w-5 h-5" />}
                label="Research & Discovery"
                color="text-blue-600"
                content={project.research?.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-muted-foreground text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              />
            </div>
          </div>

          {/* User Personas */}
          <div>
            <Section
              icon={<User className="w-5 h-5" />}
              label="User Personas"
              color="text-purple-600"
              content={
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {project.personas?.map((persona, i) => (
                    <Card key={i} className="border-2">
                      <CardHeader>
                        <CardTitle className="text-base">
                          {persona.name}
                        </CardTitle>
                        <CardDescription>{persona.goal}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          <strong>Pain Point:</strong> {persona.pain}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              }
            />
          </div>

          {/* Process Tab */}
          <div className="flex flex-col gap-4">
            <Section
              icon={<Pencil className="w-5 h-5" />}
              label="Design Process"
              color="text-indigo-600"
              content={
                <div className="space-y-4">
                  {project.process?.map((step, i) => (
                    <ProcessStep
                      key={i}
                      number={`${i + 1}`}
                      title={step.step || ""}
                      description={step.description}
                      color={`bg-gradient-to-br from-purple-100 to-pink-100`}
                    />
                  ))}
                </div>
              }
            />
          </div>

          {/* Solution Tab */}
          <div className="flex flex-col gap-4">
            <Section
              icon={<Sparkles className="w-5 h-5" />}
              label="Solution"
              color="text-yellow-600"
              content={
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.images?.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative max-h-[250px] max-w-[400px] rounded-lg overflow-hidden border-2 border-gray-200"
                    >
                      <img
                        src={image}
                        alt={`${project.title} design ${i + 1}`}
                        className="w-full h-full object-contain transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              }
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export const EngineeringProjectAccordionItem = ({
  project,
  index,
}: {
  project: CaseStudyProject;
  index: number;
}) => {
  return (
    <AccordionItem
      key={index}
      value={`project-${index}`}
      className={`bg-white/60 backdrop-blur-sm rounded-2xl border-l-4 ${project.colorClass} overflow-hidden`}
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/40 transition-colors">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">{project.title}</h4>
          <p className="text-muted-foreground">{project.solution}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-6">
        <div className="flex flex-col gap-12">
          {/* Problem */}
          <div className="flex flex-col gap-4">
            <div>
              <Section
                icon={<Lightbulb className="w-5 h-5" />}
                label="The Problem"
                color="text-red-600"
                content={project.problem}
              />
            </div>
          </div>

          {/* Process */}
          {project.process && (
            <div className="flex flex-col gap-4">
              <div>
                <Section
                  icon={<Pencil className="w-5 h-5" />}
                  label="Implementation Process"
                  color="text-indigo-600"
                  content={project.process?.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-muted-foreground">
                        {step.description}
                      </span>
                    </li>
                  ))}
                />
              </div>
            </div>
          )}
          {/* Solution */}
          {project.solution && (
            <div className="flex flex-col gap-4">
              <div>
                <Section
                  icon={<Sparkles className="w-5 h-5" />}
                  label="Solution"
                  color="text-green-600"
                  content={project.solution}
                />
              </div>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
