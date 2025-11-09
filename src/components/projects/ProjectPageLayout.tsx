import { ReactNode } from "react";
import { motion } from "motion/react";

import { ProjectTitle, ProjectTimeline } from "./Components";
import { projectsById } from "../../utils/info";
import type { ProjectId } from "../../utils/info";
import { cn } from "../ui/utils";
import { Link } from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";

interface ProjectPageLayoutProps {
  projectId: ProjectId;
  titleOverride?: string;
  timelineOverride?: string;
  roleOverride?: string[];
  toolsOverride?: string[];
  backgroundClassName?: string;
  headerMaxWidthClassName?: string;
  headerPaddingClassName?: string;
  contentContainerClassName?: string;
  children: ReactNode;
}

export function ProjectPageLayout({
  projectId,
  titleOverride,
  timelineOverride,
  roleOverride,
  toolsOverride,
  backgroundClassName,
  headerMaxWidthClassName,
  headerPaddingClassName,
  contentContainerClassName,
  children,
}: ProjectPageLayoutProps) {
  const project = projectsById[projectId];

  const displayTitle = titleOverride ?? project?.title ?? "";
  const displayTimeline = timelineOverride ?? project?.timeline;
  const tools = toolsOverride ?? project?.technologies ?? [];
  const roles = roleOverride ?? project?.role ?? [];

  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-pink-50/20 flex justify-center",
        backgroundClassName
      )}
    >
      <div className="min-h-screen relative">
        <Link to="/" className="absolute top-10 -left-20">
          <ArrowUpLeft className="w-8 h-8" />
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "pt-10 sm:pt-20 pb-6 sm:pb-12 px-6 sm:px-12",
            headerPaddingClassName
          )}
        >
          <div className={cn("max-w-5xl", headerMaxWidthClassName)}>
            <ProjectTitle label={displayTitle} />
            {displayTimeline && (
              <ProjectTimeline
                timeline={displayTimeline}
                tools={tools}
                role={roles}
              />
            )}
          </div>
        </motion.div>

        <div
          className={cn(
            "px-6 sm:px-12 pb-20 space-y-16",
            contentContainerClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
