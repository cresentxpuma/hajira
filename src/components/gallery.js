// // import React from 'react';
// // import './assets/css/Gallery.css'; // Import the CSS styles
// // import lednumbers from './assets/images/add-ons/lednumbers.jpeg';
// // import partyprops from './assets/images/add-ons/partyprops.jpeg';
// // import photoclippings from './assets/images/add-ons/photoclippings.jpeg';
// // // import E1 from './assets/images/add-ons/candlepath.jpeg';
// // // import E2 from './assets/images/add-ons/candlepath.jpeg';
// // // import E3 from './assets/images/add-ons/candlepath.jpeg';

// // import candlepath from './assets/images/add-ons/candlepath.jpeg';




// // const GalleryPage = () => {
// //   // Array of images with titles
// //   const galleryItems = [
// //     // { id: 1, title: '', image: lednumbers },
// // // { id: 2, title: '', image: partyprops },
// //     // { id: 3, title: '', image: photoclippings },
// //     // { id: 4, title: '', image: candlepath },
// //   ];

// //   return (
// //     <div className="gallery-page">
// //       <header className="gallery-header">
// //         <h1>Our services</h1>
// //         <p>At Hajira Air Travel Service, we are passionate about creating unforgettable pilgrimage experiences for every journey you envision.
// //                   </p>
// //                   <p> As part of the esteemed Bismillah Group and serving pilgrims for over three years,</p>
// //                   <p> our dedication lies in making your Haj and Umrah journey seamless and spiritually enriching.</p>
// //       <p>
// //       From premium accommodations to reliable pickup and drop services, delectable meals, and expertly curated itineraries, 
// //       </p>

// //       <p>we ensure every aspect of your journey is handled with precision and care. Whether traveling with family or in a group, Hajira Air Travel Service is here to provide the perfect arrangements and support to bring your spiritual aspirations to life.</p>
// //       </header>

// //       <div className="gallery-container">
// //         <div className="gallery-grid">
// //           {galleryItems.map((item) => (
// //             <div className="gallery-item" key={item.id}>
// //               <img src={item.image} alt={item.title} />
// //               <div className="gallery-item-title">{item.title}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <footer className="gallery-footer">
// //         <p>&copy; 2024 hajira_airtravelservices. All rights reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default GalleryPage;






// import React from 'react';
// import './assets/css/Gallery.css'; // Import the CSS styles

// const GalleryPage = () => {
//   return (
//     <div className="gallery-page">
   

//       {/* Our Services Content */}
//       <section className="services-section py-16 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//             <div className="service-item bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-[#f0c137] mb-4">VISA + INSURANCE</h3>
//               <p className="text-gray-700">
//               We handle all aspects of the visa process, ensuring that our clients receive their necessary travel documents in a timely manner. From the application to approval, we take care of all the formalities for a hassle-free experience. In addition to visa processing, we offer comprehensive insurance coverage designed to protect you against any unforeseen circumstances during your pilgrimage journey. This ensures that you can focus on your spiritual experience without worrying about unexpected issues. Let us take care of your travel documentation and insurance needs, so you can travel with confidence and comfort.

// </p>
//             </div>
//             <div className="service-item bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-[#f0c137] mb-4">AIR TRAVEL</h3>
//               <p className="text-gray-700">
//               Our air travel services include complete assistance in booking flights that best fit your travel schedule. We work with reliable airlines to offer you smooth and comfortable travel to your pilgrimage destination. Not only do we offer specialized packages, but we also provide comprehensive services related to booking flights to any country across the world. Whether you're traveling for business, leisure, or a pilgrimage, we ensure a seamless booking experience for your global travel needs.


//               </p>
//             </div>
//             <div className="service-item bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-[#f0c137] mb-4">UMRAH PACKAGE</h3>
//               <p className="text-gray-700">
//               Our Umrah package covers everything you need for a spiritually enriching journey, including flight bookings, visa processing, and transportation. We offer a range of accommodations from 5-star to standard hotels, all just a 5-minute walk from the Haram Shareef in Makkah and Masjid al-Nabawi in Madinah. Guests enjoy three delicious Indian meals daily, ensuring comfort throughout their stay.

// With expert guidance and 24/7 support, we ensure your pilgrimage is smooth and hassle-free, allowing you to focus on your spiritual journey while we handle the logistics.


//               </p>
//             </div>
//             <div className="service-item bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-[#f0c137] mb-4">ACCOMMODATION</h3>
//               <p className="text-gray-700">
//               We offer premium accommodation in 5-star, 3-star, and standard hotels for your stay, ensuring a comfortable and luxurious experience that suits all preferences. Guests will enjoy three delicious Indian meals daily during their stay. In Makkah, our 5-star hotel is located just a 5-minute walk from the Haram Shareef, while our 3-star and standard hotels offer equally convenient access. In Madinah, our hotels are also just a short 5-minute walk from the sacred Masjid al-Nabawi, providing you with a peaceful and accessible stay near these holy landmarks.


//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

    
//     </div>
//   );
// };

// export default GalleryPage;




import React from 'react';
import './assets/css/Gallery.css'; // Import the CSS styles

const GalleryPage = () => {
  return (
    <div 
    className="gallery-page" 
    style={{ background: "linear-gradient(to bottom, #000000, rgb(1, 39, 1))" }}
  >
  

      {/* Our Services Content */}
      <section className="services-section py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="service-item bg-[#014f23] p-6 rounded-lg shadow-lg transition transform hover:bg-[#022e15] hover:scale-105">
              <h3 className="text-xl font-semibold text-[#f0c137] mb-4">VISA + INSURANCE</h3>
              <p className="text-white">
                We handle all aspects of the visa process, ensuring that our clients receive their necessary travel documents in a timely manner. From the application to approval, we take care of all the formalities for a hassle-free experience. In addition to visa processing, we offer comprehensive insurance coverage designed to protect you against any unforeseen circumstances during your pilgrimage journey. This ensures that you can focus on your spiritual experience without worrying about unexpected issues. Let us take care of your travel documentation and insurance needs, so you can travel with confidence and comfort.
              </p>
            </div>
            <div className="service-item bg-[#014f23] p-6 rounded-lg shadow-lg transition transform hover:bg-[#022e15] hover:scale-105">
              <h3 className="text-xl font-semibold text-[#f0c137] mb-4">AIR TRAVEL</h3>
              <p className="text-white">
                Our air travel services include complete assistance in booking flights that best fit your travel schedule. We work with reliable airlines to offer you smooth and comfortable travel to your pilgrimage destination. Not only do we offer specialized packages, but we also provide comprehensive services related to booking flights to any country across the world. Whether you're traveling for business, leisure, or a pilgrimage, we ensure a seamless booking experience for your global travel needs.
              </p>
            </div>
            <div className="service-item bg-[#014f23] p-6 rounded-lg shadow-lg transition transform hover:bg-[#022e15] hover:scale-105">
              <h3 className="text-xl font-semibold text-[#f0c137] mb-4">UMRAH PACKAGE</h3>
              <p className="text-white">
                Our Umrah package covers everything you need for a spiritually enriching journey, including flight bookings, visa processing, and transportation. We offer a range of accommodations from 5-star to standard hotels, all just a 5-minute walk from the Haram Shareef in Makkah and Masjid al-Nabawi in Madinah. Guests enjoy three delicious Indian meals daily, ensuring comfort throughout their stay.
                <br />
                With expert guidance and 24/7 support, we ensure your pilgrimage is smooth and hassle-free, allowing you to focus on your spiritual journey while we handle the logistics.
              </p>
            </div>
            <div className="service-item bg-[#014f23] p-6 rounded-lg shadow-lg transition transform hover:bg-[#022e15] hover:scale-105">
              <h3 className="text-xl font-semibold text-[#f0c137] mb-4">ACCOMMODATION</h3>
              <p className="text-white">
                We offer premium accommodation in 5-star, 3-star, and standard hotels for your stay, ensuring a comfortable and luxurious experience that suits all preferences. Guests will enjoy three delicious Indian meals daily during their stay. In Makkah, our 5-star hotel is located just a 5-minute walk from the Haram Shareef, while our 3-star and standard hotels offer equally convenient access. In Madinah, our hotels are also just a short 5-minute walk from the sacred Masjid al-Nabawi, providing you with a peaceful and accessible stay near these holy landmarks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
 