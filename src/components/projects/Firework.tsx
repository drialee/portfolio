import { motion } from "motion/react";
import {
  Briefcase,
  Code,
  Target,
  Users,
  Zap,
  Lightbulb,
  Search,
  Pencil,
  CheckCircle2,
  User,
  Sparkles,
} from "lucide-react";

import { ProjectSidebarNav } from "../ProjectSidebar";
import { Badge } from "../ui/badge";
import { useProjectNavigation } from "../../hooks/useProjectNavigation";
import {
  CalloutBox,
  ProjectHeader,
  ProjectTitle,
  StatsGrid,
  TwoColumnLayout,
  ProjectTimeline,
  SectionLabel,
  ProcessStep,
} from "./Components";
import { projects } from "../../utils/info";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

import Firework from "../../utils/projects/Firework/fireworkCover.png";

import { ExternalLinkButton } from "../ExternalLink";
import { caseStudyProjects, fireworkSections } from "./fireworkData";
import { CaseStudyProject } from "./types";

export function FireworkProjectPage() {
  const { isMobile, handleNavigateBack } = useProjectNavigation();
  const firework = projects.find((project) => project.id === "firework");

  const ProjectAccordionItem = ({
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
          <div className="flex items-center gap-3">
            <project.icon className={project.iconClassName || ""} />
            <span>{project.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div>
                <SectionLabel
                  icon={<Lightbulb className="w-5 h-5" />}
                  label="The Problem"
                  color="text-red-600"
                />
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <Separator />

              <div>
                <SectionLabel
                  icon={<CheckCircle2 className="w-5 h-5" />}
                  label="The Solution"
                  color="text-green-600"
                />
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <div>
                <SectionLabel
                  icon={<Search className="w-5 h-5" />}
                  label="Research & Discovery"
                  color="text-blue-600"
                />
                <ul className="space-y-3 mt-4">
                  {project.research.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <SectionLabel
                  icon={<User className="w-5 h-5" />}
                  label="User Personas"
                  color="text-purple-600"
                />
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  {project.personas.map((persona, i) => (
                    <Card key={i} className="border-2">
                      <CardHeader>
                        <CardTitle className="text-base">
                          {persona.name}
                        </CardTitle>
                        <CardDescription>{persona.goal}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-red-600">
                          <strong>Pain Point:</strong> {persona.pain}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Process Tab */}
            <TabsContent value="process" className="space-y-6">
              <SectionLabel
                icon={<Pencil className="w-5 h-5" />}
                label="Design Process"
                color="text-indigo-600"
              />
              <div className="space-y-4">
                {project.process.map((step, i) => (
                  <ProcessStep
                    key={i}
                    number={`${i + 1}`}
                    title={step.step}
                    description={step.description}
                    color={`bg-gradient-to-br from-purple-100 to-pink-100`}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Solution Tab */}
            <TabsContent value="solution" className="space-y-6">
              <SectionLabel
                icon={<Sparkles className="w-5 h-5" />}
                label="Final Designs"
                color="text-yellow-600"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.35,
                      zIndex: 20,
                      boxShadow: "0 25px 60px rgba(147, 51, 234, 0.35)",
                      backgroundColor: "#ffffff",
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.1,
                    }}
                    className="relative max-h-[250px] max-w-[400px] rounded-lg overflow-hidden border-2 border-gray-200 hover:border-purple-400 transition-colors cursor-pointer group will-change-transform"
                  >
                    <img
                      src={image}
                      alt={`${project.title} design ${i + 1}`}
                      className="w-full h-full object-contain transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AccordionContent>
      </AccordionItem>
    );
  };

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

          {/* Product Design Section - NOW WITH FULL CASE STUDIES */}
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
                <ProjectAccordionItem
                  key={index}
                  project={project}
                  index={index}
                />
              ))}
            </Accordion>

            <div className="flex flex-wrap gap-3 pt-8 justify-center">
              {firework?.product?.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className={`px-4 py-2 border border-purple-200 transition-all duration-200 ${firework?.color}`}
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
            className="max-w-5xl"
          >
            <ProjectHeader label="Engineering Experience" />

            <CalloutBox
              title="Full-Stack Development"
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
                  <h3 className="text-blue-900 mb-4">
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
                      <h4 className="text-blue-900 text-sm">
                        🔍 Data Enrichment
                      </h4>
                      <p className="text-xs text-blue-800">
                        Automated lead identification and qualification
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="text-blue-900 text-sm">📊 Lead Scoring</h4>
                      <p className="text-xs text-blue-800">
                        AI-powered qualification system
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="text-blue-900 text-sm">
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
                  <h3 className="text-purple-900 mb-4">
                    <Zap className="inline w-6 h-6 mr-2" />
                    Product-Led Growth Features
                  </h3>
                  <p className="text-purple-800 leading-relaxed mb-4">
                    Implemented new features to improve the user experience for
                    <strong> PLG customers</strong> on the business portal.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="text-purple-900 text-sm">
                        🚀 Onboarding Process
                      </h4>
                      <p className="text-xs text-purple-800">
                        Streamlined user activation flow
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="text-purple-900 text-sm">
                        🛒 Shopify Integration
                      </h4>
                      <p className="text-xs text-purple-800">
                        Seamless embedding workflow
                      </p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-xl">
                      <h4 className="text-purple-900 text-sm">
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
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className={`px-4 py-2 border border-blue-200 transition-all duration-200 ${firework?.color}`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Impact Summary Section */}
          <motion.section
            id="impact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <ProjectHeader label="Overall Impact" />

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-2 border-purple-200 p-6">
                <CardTitle className="text-4xl text-purple-600">11</CardTitle>
                <CardDescription>Projects Shipped</CardDescription>
              </Card>
              <Card className="text-center border-2 border-pink-200 p-6">
                <CardTitle className="text-4xl text-pink-600">5</CardTitle>
                <CardDescription>Cross-Functional Teams</CardDescription>
              </Card>
              <Card className="text-center border-2 border-blue-200 p-6">
                <CardTitle className="text-4xl text-blue-600">1500+</CardTitle>
                <CardDescription>Brands Impacted</CardDescription>
              </Card>
            </div>
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
