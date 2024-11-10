import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Path to Navbar component
import Home from './components/Home';
import Refund from './components/Refund';
import Footer from './components/Footer';
import AddOns from './components/AddOns';
import AboutUs from './components/AboutUs';

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
    <div className='bg-black'>
    <Router >
      {/* Pass routes to Navbar */}
      <Navbar brandName="My Brand" routes={routes} />

      {/* Define your page routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/refund' element={<Refund/>} />
        <Route path='/AddOns' element={<AddOns/>} />
        <Route path='/about' element={<AboutUs/>} />



        {/* {<Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>

    </Router>
    </div>
  );
}

export default App;
