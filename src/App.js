import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubMainContent from "./components/SubMainContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SubMainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
