import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubMainContent from "./components/SubMainContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projects/twitch" exact element={<SubMainContent />} />
      </Routes>
      <SubMainContent />
    </Router>
  );
}

export default App;
