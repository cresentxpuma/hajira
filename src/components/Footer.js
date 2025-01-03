import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>  
    <hr/>
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-8">
          {/* Logo Section */}
          <div className="flex-1 text-center md:text-">
            <h2 className="text-3xl font-bold text-[#f0c137] hover:text-[#ecb405] transition duration-300">Hajira Air Travel Services</h2>
            <p className="mt-2 text-lg font-medium">Your one-stop destination for unforgettable events!</p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 text-center md:text-left flex justify-center md:justify-start">
            <div>
              <h3 className="text-xl font-semibold text-[#f0c137]">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#about" className="text-lg hover:text-[#f0c137] transition duration-300">About Us</a></li>
                <li><a href="#services" className="text-lg hover:text-[#f0c137] transition duration-300">Services</a></li>
                <li><a href="#privacy" className="text-lg hover:text-[#f0c137] transition duration-300">Privacy Policy</a></li>
                <li><a href="#terms" className="text-lg hover:text-[#f0c137] transition duration-300">Terms & Conditions</a></li>
                <li>
                  <a 
                    href="https://wa.me/918977860730?text=I%20want%20to%20know%20more%20about%20B2B%20services" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-[#f0c137] transition duration-300"
                  >
                    B2B
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 text-center md:text-left flex justify-center md:justify-start">
            <div>
              <h3 className="text-xl font-semibold text-[#f0c137]">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="https://www.facebook.com/share/19q7XYQwPH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#f0c137] transition duration-300">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/hajira_airtravelservices/?hl=en" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#f0c137] transition duration-300">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="flex-1 hidden lg:block">
            <h3 className="text-xl font-semibold text-[#f0c137]">Visit Us</h3>
            <div className="relative overflow-hidden rounded-lg shadow-xl mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.13161464549!2d78.44943017512172!3d17.405470302284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e0b2b783cd%3A0x6cbea04c63ed6fbe!2sHajira%20air%20travel%20services!5e0!3m2!1sen!2sin!4v1735295133626!5m2!1sen!2sin"
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

        {/* Map for mobile and small screens */}
        <div className="lg:hidden mt-12">
          <h3 className="text-xl font-semibold text-[#f0c137] text-center">Visit Us</h3>
          <div className="relative overflow-hidden rounded-lg shadow-xl mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.13161464549!2d78.44943017512172!3d17.405470302284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e0b2b783cd%3A0x6cbea04c63ed6fbe!2sHajira%20air%20travel%20services!5e0!3m2!1sen!2sin!4v1735295133626!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; 2024 Hajira Air Travel Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
