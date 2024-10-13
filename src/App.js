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

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "scroll" }}>
      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
