import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" className="button-link">About Me</Link>
          <Link to="/resume" className="button-link sparkle-button">Resume</Link>
          <Link to="/gallery" className="button-link">Gallery</Link>
        </nav>

        {/* Main content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
