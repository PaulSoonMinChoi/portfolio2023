import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubMainContent from "./components/SubMainContent";
import Twitch from './components/projects/twitch'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SubMainContent />} />
        <Route path="/projects/twitch" exact element={<Twitch />} />
      </Routes>
    </Router>
  );
}

export default App;
