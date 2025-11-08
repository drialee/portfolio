import { motion } from "motion/react";
import { Briefcase, Users, Search, Newspaper } from "lucide-react";

import { ProjectSidebarNav } from "../ProjectSidebar";
import { ExternalLinkButton } from "../ExternalLink";
import { useProjectNavigation } from "../../hooks/useProjectNavigation";
import {
  CalloutBox,
  ProjectHeader,
  ProjectTitle,
  ProjectTimeline,
} from "./Components";
import { projects } from "../../utils/info";
// Image imports
import Homepage from "../../utils/projects/Airframe/homepage.png";
import { universalSearchProject, newsDeskProject } from "./airframeData";
import universalSearchVideo from "../../utils/projects/Airframe/universal_search.mov";

const sections = ["Overview", "About", "News Desk", "Universal Search"];

export function AirframeProjectPage() {
  const { isMobile, handleNavigateBack } = useProjectNavigation();
  const airframe = projects.find((project) => project.id === "airframe");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-pink-50/20">
      {!isMobile && (
        <ProjectSidebarNav
          sections={sections}
          onNavigateBack={handleNavigateBack}
        />
      )}

      <div className="sm:ml-64 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-12 px-12"
        >
          <div className="max-w-4xl">
            <ProjectTitle label="Airframe" />

            <ProjectTimeline
              timeline="February 2024 - Present"
              tools={airframe?.technologies || []}
              role={["Product Engineer", "Frontend Lead", "2nd Full-Time Hire"]}
            />
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
            <div className="bg-gradient-to-br from-blue-100/80 to-purple-100/80 rounded-3xl p-8 backdrop-blur-sm">
              <motion.img
                src={Homepage}
                alt="Homepage"
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
            className="max-w-4xl space-y-8"
          >
            <ProjectHeader label="About Airframe" />

            <CalloutBox
              title="The Company"
              color="blue"
              icon={<Briefcase className="w-6 h-6" />}
            >
              <p className="text-blue-800 leading-relaxed">
                Airframe is the{" "}
                <strong>
                  intelligence layer for discovering, evaluating, and adopting
                  the right AI tools
                </strong>
                . We help leaders cut through the noise, make faster decisions,
                and stay ahead in a landscape where choosing the right software
                has never mattered more. We've raised{" "}
                <strong>$4M in seed funding</strong> from Company Ventures and
                AI Capital.
              </p>
            </CalloutBox>

            <CalloutBox
              title="My Role"
              color="purple"
              icon={<Users className="w-6 h-6 text-purple-600" />}
            >
              <div className="text-purple-800 leading-relaxed space-y-3">
                <p>
                  I joined Airframe as the <strong>2nd full-time hire</strong>{" "}
                  when the product was still taking shape. For the first six
                  months, I worked side-by-side with the co-founders to build
                  the <strong>core frontend architecture</strong> that helped us
                  successfully raise our seed round.
                </p>
                <p>
                  As the team expanded, I evolved into a{" "}
                  <strong>product engineer</strong> wearing multiple
                  hats—designing features, making product decisions, building
                  the implementation, and validating with users.
                </p>
              </div>
            </CalloutBox>
          </motion.section>

          {/* News Desk Case Study */}
          <motion.section
            id="news-desk"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Newspaper className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{newsDeskProject.title}</h2>
                <p className="text-muted-foreground">
                  {newsDeskProject.role} • {newsDeskProject.timeline}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-200">
              <p className="text-gray-700 font-semibold mb-2">Context</p>
              <p className="text-gray-600 text-sm mb-3">
                {newsDeskProject.context}
              </p>
              <p className="text-gray-700 font-semibold mb-2">Vision</p>
              <p className="text-gray-600 text-sm">{newsDeskProject.vision}</p>
            </div>

            <CalloutBox title="Problem" color="purple">
              <p className="text-sm">{newsDeskProject.problem}</p>
            </CalloutBox>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Research & Discovery
              </h3>
              <ul className="space-y-2">
                {newsDeskProject.research.map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">User Personas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {newsDeskProject.personas.map((persona, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 border border-purple-200"
                  >
                    <h4 className="font-semibold text-purple-700 mb-2">
                      {persona.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {persona.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong className="text-gray-700">Goal:</strong>{" "}
                        {persona.goal}
                      </p>
                      <p>
                        <strong className="text-gray-700">Pain:</strong>{" "}
                        {persona.pain}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Unique Value Props</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {newsDeskProject.uniqueValueProps.map((prop, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200"
                  >
                    <p className="text-sm text-gray-700">{prop}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Process{" "}
                <span className="text-sm  text-muted-foreground">
                  *In Progress
                </span>
              </h3>
              <div className="space-y-4">
                {newsDeskProject.process.map((phase, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 border border-gray-200"
                  >
                    <h4 className="font-semibold text-purple-700 mb-2">
                      {phase.step}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* 
            <CalloutBox title="Solution" color="green">
              <p className="text-green-800 leading-relaxed">
                {newsDeskProject.solution}
              </p>
            </CalloutBox> */}
          </motion.section>

          {/* Universal Search Case Study */}
          <motion.section
            id="universal-search"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">
                  {universalSearchProject.title}
                </h2>
                <p className="text-muted-foreground">
                  {universalSearchProject.role} •{" "}
                  {universalSearchProject.timeline}
                </p>
              </div>
            </div>

            <CalloutBox title="Problem" color="purple">
              <p className="text-sm">{universalSearchProject.problem}</p>
            </CalloutBox>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Research & Discovery
              </h3>
              <ul className="space-y-2">
                {universalSearchProject.research.map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Process</h3>
              <div className="space-y-4">
                {universalSearchProject.process.map((phase, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 border border-gray-200"
                  >
                    <h4 className="font-semibold text-purple-700 mb-2">
                      {phase.step}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <CalloutBox title="Solution" color="green">
              <p className="text-green-800 leading-relaxed">
                {universalSearchProject.solution}
              </p>
            </CalloutBox>
          </motion.section>
          <motion.section
            id="universal-search-video"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8"
          >
            <video
              src={universalSearchVideo}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.section>

          <ExternalLinkButton
            href="https://airframe.ai"
            label="Visit Airframe"
          />
        </div>
      </div>
    </div>
  );
}
