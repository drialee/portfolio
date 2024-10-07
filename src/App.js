import './App.css';
import { BrowserRouter as Router, useNavigate, Routes, Route } from 'react-router-dom';
import Chill from './components/pages/projects/Chill';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chill" element={<Chill />} />
        <Route path="/upcoming/:user" element={<Upcoming />} />
        <Route path="/record/:user" element={<Record />} />
      </Routes>
    </Router>
  );
}

export default App;
