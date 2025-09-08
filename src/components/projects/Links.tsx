import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ProjectSection } from "./Components";

export const ProjectLinks = ({
  href,
  label,
  code,
}: {
  href?: string;
  label?: string;
  code?: string;
}) => {
  return (
    <ProjectSection id="project-links">
      <div className="flex gap-4">
        {href && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                {label}
              </a>
            </Button>
          </motion.div>
        )}

        {code && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-2xl px-6 py-3 transition-all duration-300"
              asChild
            >
              <a href={code} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </ProjectSection>
  );
};
