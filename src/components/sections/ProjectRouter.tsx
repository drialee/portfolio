import { FireworkProjectPage } from "../projects/Firework";
import { TrainGoneProjectPage } from "../projects/TrainGone";
import { BonoProjectPage } from "../projects/Bono";
import { ProjectSection } from "./ProjectSection";
import { ChillProjectPage } from "../projects/Chill";

export type ProjectType =
  | "airframe"
  | "firework"
  | "bono"
  | "traingone"
  | "bolivia"
  | "chinatown"
  | "chill"
  | null;

interface ProjectRouterProps {
  currentProject: ProjectType;
  onProjectClick: (project: ProjectType) => void;
  onNavigateBack: () => void;
}

export const ProjectRouter = ({
  currentProject,
  onProjectClick,
  onNavigateBack,
}: ProjectRouterProps) => {
  switch (currentProject) {
    case "airframe":
      return null;
    case "firework":
      return <FireworkProjectPage onNavigateBack={onNavigateBack} />;
    case "traingone":
      return <TrainGoneProjectPage onNavigateBack={onNavigateBack} />;
    case "bono":
      return <BonoProjectPage onNavigateBack={onNavigateBack} />;
    case "chill":
      return <ChillProjectPage onNavigateBack={onNavigateBack} />;
    default:
      return <ProjectSection onProjectClick={onProjectClick} />;
  }
};
