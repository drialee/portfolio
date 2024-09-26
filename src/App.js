import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
      <button onClick={() => navigate(-1)} />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/upcoming/:user" element={<Upcoming />} />
        <Route exact path="/record/:user" element={<Record />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
