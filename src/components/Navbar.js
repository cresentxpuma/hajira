import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHome, FaInstagram, FaYoutube, FaFacebook, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { faLightbulb, faImages, faSyncAlt, faPlusCircle, faBars, faTimes, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import bhLogo from './assets/images/bhLogo.png'; // Ensure correct path for your logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark-navbg text-light-text shadow-lg w-full flex flex-col md:flex-row items-center py-8 px-12 relative">
      {/* Logo Section */}
      <div className="flex justify-start w-full md:w-auto">
        <img src={bhLogo} alt="Logo" className="w-32" />
      </div>

      {/* Main Navbar Links (Visible only on medium and larger screens) */}
      <div className="mt-14 ml-[30%] flex space-x-8 hidden md:flex">
        <>
          <Link to="/" className="text-[#fff] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <FaHome className="w-6 h-6 mr-2" />
            HOME
          </Link>
          <Link to="/about" className="text-[#fff] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <FontAwesomeIcon icon={faLightbulb} className="mr-2 w-6 h-6" />
            ABOUT US
          </Link>
          <Link to="/gallery" className="text-[#fff] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <FontAwesomeIcon icon={faImages} className="mr-2 w-6 h-6" />
            GALLERY
          </Link>
          <Link to="/refund" className="text-[#fff] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <FontAwesomeIcon icon={faSyncAlt} className="mr-2 w-6 h-6" />
            REFUND
          </Link>
          <Link to="/addons" className="text-[#fff] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <FontAwesomeIcon icon={faPlusCircle} className="mr-2 w-6 h-6" />
            ADD-ONS
          </Link>
        </>

        {/* Book Now Button (Visible only on medium and larger screens) */}
        <div className="justify-center md:justify-end w-full md:w-auto hidden md:block">
          <button
            onClick={() => alert('Book Now functionality here')}
            className="text-xs sm:text-sm md:text-base xl:text-lg px-3 lg:px-4 py-2 lg:py-3 text-white bg-gradient-to-r bg-[#000] tracking-wider hover:bg-[#f0c139] hover:text-black rounded-lg transition duration-300 border-solid border-2 border-[#c9c9c984]"
          >
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            BOOK NOW
          </button>
        </div>
        </div>


        {/* Mobile Menu Button (Visible on mobile and tablet) */}
        <button
          className="md:hidden absolute top-20 right-10 text-light-nav focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>

        {/* Mobile Dropdown Menu (Visible when menu is open) */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-navbg text-[#c9c9c9] px-6 py-4 space-y-2 absolute top-16 left-0 w-full z-50">
            <Link to="/" className="block py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" onClick={() => setIsMenuOpen(false)}>
              <FaHome className="mr-2 w-6 h-6" />
              Home
            </Link>
            <Link to="/about" className="block py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faLightbulb} className="mr-2 w-6 h-6" />
              About Us
            </Link>
            <Link to="/gallery" className="block py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faImages} className="mr-2 w-6 h-6" />
              Gallery
            </Link>
            <Link to="/refund" className="block py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faSyncAlt} className="mr-2 w-6 h-6" />
              Refund
            </Link>
            <Link to="/addons" className="block py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faPlusCircle} className="mr-2 w-6 h-6" />
              Add-Ons
            </Link>
          </div>
        )}

        {/* Purple Section on Top-Right (Visible only on medium and larger screens) */}
        <div className="absolute top-0 right-0 w-full md:w-auto bg-[#f0c137] text-black py-4 px-40 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-10 rounded-bl-3xl hidden md:flex">
          <Link to="/location" className="mx-2 flex text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <FaLocationDot className="text-[25px] mr-2" />
            Hyderabad
          </Link>
          <Link to="/contact" className="mx-2 flex text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <MdEmail className="text-[25px] mr-2" />
            admin@bingehall.com
          </Link>
          <Link to="/contact" className="mx-2 flex text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <FaPhone className="text-[25px] mr-2" />
            +91 9999999999
          </Link>

          {/* Social Media Icons */}
          <div className="flex space-x-12 text-xl sm:text-2xl md:text-3xl mt-2 md:mt-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaYoutube />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaFacebook />
            </a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
