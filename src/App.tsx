import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import { ProjectSection } from "./components/ProjectSection";
import { ScrollToTop } from "./components/ScrollToTop";
import { AirframeProjectPage } from "./components/projects/Airframe";
import { BoliviaProjectPage } from "./components/projects/Bolivia";
import { BonoProjectPage } from "./components/projects/Bono";
import { ChillProjectPage } from "./components/projects/Chill";
import { FireworkProjectPage } from "./components/projects/Firework";
import { TrainGoneProjectPage } from "./components/projects/TrainGone";
import { AboutSection } from "./components/sections/AboutSection";
import { HeroSection } from "./components/sections/HeroSection";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground overflow-x-clip relative bg-gradient-to-br from-background via-purple-50/30 to-pink-80/30">
        <main className="overflow-x-hidden max-w-full">
          <NavBar />
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
            <Route path="/photography" element={<BoliviaProjectPage />} />
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
