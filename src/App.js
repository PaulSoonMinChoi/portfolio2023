import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
