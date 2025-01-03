const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <>
        <nav className="bg-dark-navbg text-light-text shadow-lg w-full h-[140px] flex flex-col md:flex-row items-center py-4 px-8 relative"> {/* Reduced height and padding */}
          {/* Logo Section */}
          <div className="flex justify-start w-full md:w-auto">
            <img src={bhLogo} alt="Logo" className="w-28" /> {/* Reduced logo size */}
          </div>
  
          {/* Main Navbar Links (Visible only on medium and larger screens) */}
          <div className="mt-8 ml-[50%] flex space-x-6 hidden md:flex translate-y-2">
  {/* Reduced spacing and margin */}
            <Link to="/" className="text-[#ededed] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              HOME
            </Link>
            <Link to="/about" className="text-[#ededed] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              ABOUT US
            </Link>
            <Link to="/gallery" className="text-[#ededed] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              OUR SERVICES
            </Link>
            <Link to="/refund" className="text-[#ededed] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              CONTACT US
            </Link>
            <Link to="/addons" className="text-[#ededed] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
            </Link>
          </div>
  
          {/* Book Now Button (Visible only on medium and larger screens) */}
          <div className="justify-center md:justify-end w-full md:w-auto hidden md:block">
            
          <button className="text-xs sm:text-xs md:text-sm xl:text-sm px-2 lg:px-3 py-1 lg:py-2 text-[#f0c137] bg-gradient-to-r bg-[#000] tracking-wider hover:bg-[#f0c139] hover:text-black rounded-lg transition duration-300 border-solid border-2 border-[#f0c137] mt-4 translate-y-3">
  
  
              <FontAwesomeIcon icon={faSignInAlt} className="mr-1" /> {/* Reduced icon size */}
              <Link to="/booknow" className="text-[#ededed] hover:text-[#f0c137] transition-colors flex items-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
                PACKAGES
              </Link>
            </button>
          </div>
        </nav>
  
        {/* Mobile Menu Button (Visible on mobile and tablet) */}
        <button
          className="md:hidden absolute top-16 right-6 text-light-nav focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-5 h-5" /> {/* Reduced icon size */}
        </button>
  
        {/* Mobile Dropdown Menu (Visible when menu is open) */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-navbg text-[#c9c9c9] px-6 py-4 space-y-2 absolute top-16 left-0 w-full z-50">
            <Link to="/" className="block py-2 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm" onClick={() => setIsMenuOpen(false)}>
              <FaHome className="mr-2 w-5 h-5" />
              Home
            </Link>
            <Link to="/about" className="block py-2 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faLightbulb} className="mr-2 w-5 h-5" />
              About Us
            </Link>
            <Link to="/gallery" className="block py-2 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faImages} className="mr-2 w-5 h-5" />
              Gallery
            </Link>
            <Link to="/refund" className="block py-2 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faSyncAlt} className="mr-2 w-5 h-5" />
              Refund
            </Link>
            <Link to="/addons" className="block py-2 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faPlusCircle} className="mr-2 w-5 h-5" />
              Add-Ons
            </Link>
          </div>
        )}
  
        {/* Purple Section on Top-Right (Visible only on medium and larger screens) */}
        <div className="absolute top-0 right-0 w-full md:w-auto bg-[#f0c137] text-black py-3 px-6 text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 rounded-bl-3xl hidden md:flex">
          <Link to="/location" className="mx-2 flex text-xs sm:text-sm md:text-sm lg:text-lg xl:text-sm">
            <FaLocationDot className="text-[22px] mr-2" />
            Hyderabad
          </Link>
          <Link to="/contact" className="mx-2 flex text-xs sm:text-sm md:text-sm lg:text-lg xl:text-sm">
            <MdEmail className="text-[22px] mr-2" />
            hajiraairtravelservices@gmail.com
          </Link>
          <Link to="/contact" className="mx-2 flex text-xs sm:text-sm md:text-sm lg:text-lg xl:text-sm">
            <IoLogoWhatsapp className="text-[22px] mr-2" />
            +91 8977860730 / 8977860733
          </Link>
  
          {/* Social Media Icons */}
          <div className="flex space-x-8 text-xl sm:text-2xl md:text-3xl mt-2 md:mt-0">
            <a href="https://www.instagram.com/hajira_airtravelservices/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <AiFillInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/share/19q7XYQwPH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaFacebook />
            </a>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;