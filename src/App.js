import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CV from './components/CV';
import Projects from './components/Projects';
import Nanocellect from './components/post/_Nanocellect/Nanocellect';
import AICON from './components/post/_AICON/AICON';
import MICCAI2025 from './components/post/_MICCAI2025/MICCAI2025';
import ICMRI2025 from './components/post/_ICMRI2025/ICMRI2025';

import './Header.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/Experience">Experiences</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/CV">CV</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/post/nanocellect" element={<Nanocellect />} />
            <Route path="/post/aicon" element={<AICON />} />
            <Route path="/post/miccai2025" element={<MICCAI2025 />} />
            <Route path="/post/icmri2025" element={<ICMRI2025 />} />
          </Routes>
        </div>

        <footer>
          © {new Date().getFullYear()} Han Jang. All Rights Reserved. | Wishing you a wonderful day ahead 🌈
        </footer>
      </div>
    </Router>
  );
}

export default App;
