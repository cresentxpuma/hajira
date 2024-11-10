import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer content in a single row */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-14">

          {/* Logo Section */}
          <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-4xl font-bold text-[#f0c137] hover:text-[#ecb405] transition duration-300">Binge Hall</h2>
            <p className="mt-2 text-lg font-medium">Your one-stop destination for unforgettable events!</p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold text-[#f0c137]">Quick Links</h3>
            <ul className="mt-4 space-y-2 md:space-y-0 md:flex md:space-x-8">
              <li><a href="#about" className="text-lg hover:text-[#f0c137] transition duration-300">About Us</a></li>
              <li><a href="#services" className="text-lg hover:text-[#f0c137] transition duration-300">Services</a></li>
              <li><a href="#privacy" className="text-lg hover:text-[#f0c137] transition duration-300">Privacy Policy</a></li>
              <li><a href="#terms" className="text-lg hover:text-[#f0c137] transition duration-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold text-[#f0c137]">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#f0c137] transition duration-300">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#f0c137] transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#f0c137] transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#f0c137] transition duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold text-[#f0c137]">Visit Us</h3>
            <div className="relative overflow-hidden rounded-lg shadow-xl mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.979554674948!2d78.55089790000001!3d17.3647168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990004498cdb%3A0xa895404a343d7f71!2sBinge%20Hall!5e0!3m2!1sen!2sin!4v1731214544137!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-12 text-center text-sm text-gray-400">
        <p>&copy; 2024 Binge Hall. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
