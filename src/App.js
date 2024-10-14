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

function App() {
  return (
    <Router>
      <div style={{ width: "100vw", height: "100vh", overflow: "scroll" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Chinatown" element={<Chinatown />} />
          <Route path="/Bolivia" element={<Bolivia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
