// import React from 'react';
// import aboutImage from './assets/images/bhLogo.jpg'; // Add your image in this path

// const AboutUs = () => {
//   return (
//     <section className="py-16 bg-black">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center md:space-x-10">
//         {/* Image Section */}
//         <div className="md:w-1/2">
//           <img
//             src={aboutImage}
//             alt="About Us"
//             className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="mt-10 md:mt-0 md:w-1/2 text-center md:text-left">
//           <h2 className="text-4xl font-bold text-[#f0c137] mb-6 transition">
//             About Us
//           </h2>
//           <p className="text-lg text-white mb-4 leading-relaxed">
//           At Hajira Air Travel Service, we’ve been dedicated to providing exceptional pilgrimage experiences for over four years. As part of the renowned Bismillah Group, we pride ourselves on offering a seamless journey for every client. From the very beginning, our focus has been to ensure that every aspect of your Haj and Umrah journey is handled with the utmost care and precision. Thanks to our unwavering commitment to customer satisfaction, we’ve maintained a flawless track record, with no complaints from our clients.
//           </p>
//           <p className="text-lg text-white leading-relaxed">
//           Our services include premium accommodations, reliable transportation, delicious meals, and expertly designed itineraries that ensure your pilgrimage is both comfortable and spiritually enriching. Whether traveling with family or in a group, Hajira Air Travel Service strives to provide an unforgettable experience that exceeds expectations. We’re here to turn your spiritual aspirations into reality, offering you the peace of mind you deserve while you embark on this sacred journey.


//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
import React from 'react';
import aboutImage from './assets/images/bhLogo.jpg'; // Add your image in this path
import nayeemImage from './assets/images/nayeem1.jpg'; // Replace with the path to Nayeem's image
import kareemImage from './assets/images/kareem1.jpg'; // Replace with the path to Kareem's image

const AboutUs = () => {
  return (
    <section className="py-16" style={{ background: "linear-gradient(to bottom, #000000,rgb(1, 44, 1))" }}>

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
            At Hajira Air Travel Services, we’ve been dedicated to providing exceptional pilgrimage experiences since 2020. We pride ourselves on offering a seamless journey for every client. From the very beginning, our focus has been to ensure that every aspect of your Haj and Umrah journey is handled with the utmost care and precision. Thanks to our unwavering commitment to customer satisfaction, we’ve maintained a flawless track record, with no complaints from our clients.
          </p>
          <p className="text-lg text-white leading-relaxed">
            Our services include premium accommodations, reliable transportation, delicious meals, and expertly designed itineraries that ensure your pilgrimage is both comfortable and spiritually enriching. Whether traveling with family or in a group, Hajira Air Travel Services strives to provide an unforgettable experience that exceeds expectations. We’re here to turn your spiritual aspirations into reality, offering you the peace of mind you deserve while you embark on this sacred journey.
          </p>
        </div>
      </div>

  {/* Owner Details Section */}
<div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 mt-12">
  {/* Mohammed Nayeem */}
  <div className="text-center bg-[#f0c137] p-6 rounded-lg shadow-lg w-64 md:w-72 ml-8 md:ml-6"> {/* Adjusted margin for right shift */}
    <img
      src={nayeemImage}
      alt="Mohammed Nayeem"
      className="w-36 h-36 object-cover rounded-full mx-auto mb-6 border-4 border-[#062e1f]"
    />
    <h3 className="text-xl text-black font-bold">Mohammed Nayeem</h3>
    <p className="text-sm text-black">Founder</p>
  </div>

  {/* Mohammed Kareem */}
  <div className="text-center bg-[#f0c137] p-6 rounded-lg shadow-lg w-64 md:w-72 ml-8 md:ml-6"> {/* Adjusted margin for right shift */}
    <img
      src={kareemImage}
      alt="Mohammed Kareem"
      className="w-36 h-36 object-cover rounded-full mx-auto mb-6 border-4 border-[#062e1f]"
    />
    <h3 className="text-xl text-black font-bold">Mohammed Kareem</h3>
    <p className="text-sm text-black">Co-Founder</p>
  </div>
</div>

    </section>
  );
};

export default AboutUs;
