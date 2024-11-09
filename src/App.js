import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Path to Navbar component

// Sample components for each page
// import Home from './pages/Home';
// import About from './pages/About';

function App() {
  // Define the routes you want in the navbar
  const routes = [
    // { name: 'Home', path: '/', icon: null },
    // { name: 'About', path: '/about', icon: null },
  ];

  return (
    <Router>
      {/* Pass routes to Navbar */}
      <Navbar brandName="My Brand" routes={routes} />

      {/* Define your page routes */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
