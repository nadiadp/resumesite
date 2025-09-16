import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" className="button-link">About Me</Link>
          <Link to="/resume" className="button-link">Resume</Link>
        </nav>

        {/* Main content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
