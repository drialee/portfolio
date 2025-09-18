import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ProjectSidebarNav } from "../ProjectSidebar";
import { Badge } from "../ui/badge";

import { Button } from "../ui/button";
import { ExternalLink, Briefcase, Users } from "lucide-react";
import { CalloutBox, ProjectTitle } from "./Components";
import { useIsMobile } from "../ui/use-mobile";
import { ProjectHeader } from "./Components";
import Homepage from "../../utils/projects/Airframe/homepage.png";

const sections = ["Overview", "About"];

export function AirframeProjectPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const handleNavigateBack = () => {
    navigate("/");
  };
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

            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
                <p className="text-muted-foreground">February 2025 - Present</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tools</h3>
                <div className="space-y-1">
                  <Badge variant="secondary" className="mr-2 mb-1">
                    React
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-1">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-1">
                    Notion
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-1">
                    Linear
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-1">
                    Figma
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Role</h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground">
                    Founding Product Engineer
                  </p>
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
            className="max-w-4xl"
          >
            <ProjectHeader label="About Airframe" />

            <CalloutBox
              title="The Company"
              color="blue"
              icon={<Briefcase className="w-6 h-6" />}
            >
              <p className="text-blue-800 leading-relaxed">
                Airframe is an <strong>AI powered research platform</strong>,
                providing intelligence, tools and access to a vetted network of
                AI experts. We aim to become the definitive platform for AI
                software intelligence and procurement. We've raised $4M in seed
                funding and have 12 members on our team.
              </p>
            </CalloutBox>
            <CalloutBox
              title="My Role"
              color="purple"
              icon={<Users className="w-6 h-6 text-purple-600" />}
            >
              <p className="text-purple-800 leading-relaxed mb-4">
                As the <strong>second hire</strong> at Airframe, I built the
                entire <strong>front-end architecture</strong> of our web app,
                enabling our successful seed fundraising last June. As the team
                grows, I continue to drive product development while also
                leading the front-end team as our sole{" "}
                <strong>product manager</strong>.
              </p>
            </CalloutBox>
          </motion.section>
          <p className="text-muted-foreground italic">
            Stay tuned for more updates...
          </p>

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
                    href="https://airframe.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Airframe
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
