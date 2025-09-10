import "./App.css";
import "./styles/global.css";
import { useState } from "react";

import { HeroSection } from "./components/sections/HeroSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectRouter, ProjectType } from "./components/ProjectRouter";

function App() {
  const [currentProject, setCurrentProject] = useState<ProjectType>(null);

  const navigateToProject = (project: ProjectType) => {
    setCurrentProject(project);
    window.scrollTo(0, 0);
  };

  const navigateBack = () => {
    setCurrentProject(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        {!currentProject && (
          <>
            <div id="home">
              <HeroSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
          </>
        )}
        <div id="projects">
          <ProjectRouter
            currentProject={currentProject}
            onProjectClick={navigateToProject}
            onNavigateBack={navigateBack}
          />
        </div>
        {!currentProject && (
          <div id="contact">
            <ContactSection />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
