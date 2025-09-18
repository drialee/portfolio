import "./App.css";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HeroSection } from "./components/sections/HeroSection";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectSection } from "./components/ProjectSection";
import { FireworkProjectPage } from "./components/projects/Firework";
import { TrainGoneProjectPage } from "./components/projects/TrainGone";
import { BonoProjectPage } from "./components/projects/Bono";
import { ChillProjectPage } from "./components/projects/Chill";
import { BoliviaProjectPage } from "./components/projects/Bolivia";
import { AirframeProjectPage } from "./components/projects/Airframe";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="home">
                    <HeroSection />
                  </div>
                  <div id="about">
                    <AboutSection />
                  </div>
                  <div id="projects">
                    <ProjectSection />
                  </div>
                </>
              }
            />
            <Route
              path="/projects/firework"
              element={<FireworkProjectPage />}
            />
            <Route
              path="/projects/traingone"
              element={<TrainGoneProjectPage />}
            />
            <Route path="/projects/bono" element={<BonoProjectPage />} />
            <Route path="/projects/chill" element={<ChillProjectPage />} />
            <Route path="/projects/bolivia" element={<BoliviaProjectPage />} />
            <Route
              path="/projects/airframe"
              element={<AirframeProjectPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
