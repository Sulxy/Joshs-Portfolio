// Import React Libraries and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

// Create App component
function App() {
  return (
    <div>
    <Router>
      <Header />
      {/* <Navigation /> */}
      {/* <Header /> */}
        <div className="container mt-5">
            <Routes>
                <Route path="/Joshs-Portfolio/" element={<About />} />
                <Route path="/Joshs-Portfolio/about" element={<About />} />
                <Route path="/Joshs-Portfolio/portfolio" element={<Portfolio />} />
                <Route path="/Joshs-Portfolio/contact" element={<Contact />} />
                <Route path="/Joshs-Portfolio/resume" element={<Resume />} />
            </Routes>
        </div>
        <Footer />
    </Router>
    </div>
  );
}

export default App;