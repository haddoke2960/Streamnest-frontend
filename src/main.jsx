import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}