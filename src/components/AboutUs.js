import React from 'react';
import aboutImage from './assets/images/BG.png'; // Add your image in this path

const AboutUs = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center md:space-x-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#f0c137] mb-6 transition">
            About Us
          </h2>
          <p className="text-lg text-white mb-4 leading-relaxed">
            At Binge Hall, we are passionate about creating unforgettable experiences for every event you envision. 
            From birthday parties to grand celebrations, our team is dedicated to making your occasion special 
            with precision and creativity.
          </p>
          <p className="text-lg text-white leading-relaxed">
            Our unique venues, expert decor, and customizable add-ons make it easy to create a memorable event that’s truly 
            yours. Whether you’re celebrating with friends, family, or colleagues, Binge Hall is here to provide the 
            perfect setting and service to bring your ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
