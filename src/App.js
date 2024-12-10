import "./App.css";
import {
  BrowserRouter as Router,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
