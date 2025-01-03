// import React from "react";
// import { useParams } from "react-router-dom";
// import eleimg from "./assets/images/theatres/eleganto theatre/E1.jpg";
// import starimg from "./assets/images/theatres/starlight theatre/S1.jpg";
// import lumiimg from "./assets/images/theatres/luminous theatre/L1.jpg";
// import "./assets/css/theatrePage.css"; // Import the CSS file

// const TheaterPage = () => {
//   const { id } = useParams();

//   // Theater data (can be fetched from API)
//   const theaterData = {
//     // eleganto: {
//     //   name: "Eleganto Theater",
//     //   peopleRange: "4 to 6 people",
//     //   price: "₹1999/- (for 4 people)",
//     //   image: eleimg,
//     // },
//     // starlight: {
//     //   name: "Starlight Theater",
//     //   peopleRange: "4 to 7 people",
//     //   price: "₹1999/- (for 4 people)",
//     //   image: starimg,
//     // },
//     // luminous: {
//     //   name: "Luminous Theater",
//     //   peopleRange: "4 to 10 people",
//     //   price: "₹1999/- (for 4 people)",
//     //   image: lumiimg,
//     // },
//   };

//   const theater = theaterData[id]; // Get theater data based on the ID

//   if (!theater) {
//     return <h1>Theater not found!</h1>;
//   }

//   return (
//     <div className="theater-page">
//       <div className="theater-card">
//         <img src={theater.image} alt={theater.name} className="theater-image" />
//         <div className="theater-details">
//           <h1 className="theater-name">{theater.name}</h1>
//           <ul>
//             <li>{theater.price}</li>
//             <li>{theater.peopleRange}</li>

//           </ul>
//           <button className="theater-payment-btn">Proceed to Payment</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TheaterPage;
