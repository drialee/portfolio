import './App.css';
import { BrowserRouter as Router, useNavigate, Routes, Route } from 'react-router-dom';
import Chill from './pages/projects/Chill';
import Home from './pages/home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
