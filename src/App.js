import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chill from "./pages/projects/Chill";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavBar from "./components/Navbar";
import Chinatown from "./pages/Chinatown";
import Bolivia from "./pages/Bolivia";
import ScrollToTop from "./utils/ScrollToTop";
import Footer from "./components/Footer";
import Bono from "./pages/projects/Bono";
import TrainGone from "./pages/projects/TrainGone";
import Portfolio from "./pages/projects/Portfolio";
import Firework from "./pages/projects/Firework";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Chinatown" element={<Chinatown />} />
        <Route path="/Bolivia" element={<Bolivia />} />
        <Route path="/Bono" element={<Bono />} />
        <Route path="/Chill" element={<Chill />} />
        <Route path="/TrainGone" element={<TrainGone />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Firework" element={<Firework />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
