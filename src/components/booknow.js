// import React from 'react'
// import eleimg from'./assets/images/theatres/eleganto theatre/E20.jpg'
// import starimg from'./assets/images/theatres/eleganto theatre/E20.jpg'
// import lumiimg from'./assets/images/theatres/eleganto theatre/E20.jpg'
// import './assets/css/booknow.css'
// import { Link } from 'react-router-dom'


// export default function booknow() {
//     const theaters = [

//             {
//                 id:'eleganto',
//                 name: 'Pakage for Two',
//                 peopleRange: '1 to 2 people',
//                 price: '₹1,11,000/- ',
//                 image: eleimg,
//             },
//     {
//         id:'starlight',
//         name: 'Package for Three',
//         peopleRange: '1 to 3 people',
//         price: '₹96,500/- ',
//         image: starimg,
//     },
//     {
//         id:'luminous',
//         name: 'Package for Four and above',
//         peopleRange: '1 to 4+ people',
//         price: '₹89,000/-',
//         image: lumiimg,
//     }

// ];
// return (
//     <div className="theater-page">
//     {/* <header className="theater-header">
//       <h1>Choose your theater at Binge Hall</h1>
//     </header> */}

//     <div className="theater-container">
//       {theaters.map((theater, index) => (
//         <div className="theater-card" key={index}>
//           <img src={theater.image} alt={theater.name} />
//           <h2>{theater.name}</h2>
//           <p className="theater-people">🎥 {theater.peopleRange}</p>
//           <p className="theater-price">{theater.price}</p>
//           <button className="book-now-btn">
            
//             <Link to={`/${theater.id}`} className="book-now-btn">Book Now </Link> 
//             </button>
//         </div>
//       ))}
//       </div>
//       </div>
// // );
// };



import React from 'react';
import eleimg from './assets/images/theatres/eleganto theatre/e31.jpg';
import starimg from './assets/images/theatres/eleganto theatre/e41.jpg';
import starimg1 from './assets/images/theatres/eleganto theatre/e51.jpg';
import { Link } from 'react-router-dom';


const BookNow = () => {
  // WhatsApp API URLs for different packages
  const whatsappLinks = [
    'https://wa.me/+918977860730?text=I%20want%20to%20inquire%20about%20the%20Umrah%20package',
    'https://wa.me/+918977860730?text=I%20want%20to%20inquire%20about%20the%20Umrah%20package',
    'https://wa.me/+918977860730?text=I%20want%20to%20inquire%20about%20the%20Umrah%20package',
    'https://wa.me/+918977860730?text=I%20want%20to%20inquire%20about%20the%20Umrah%20package',
  ];
  

  return (
    <div className="theater-page">
      <div className="theater-container">
        {/* Flexbox layout for side-by-side boxes */}
        <div className="image-box">
          <img src={starimg} alt="Eleganto Theater" className="large-image" />
          <div className="book-now-box">
            <a
              href={whatsappLinks[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="book-now-btn"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="image-box">
          <img src={eleimg} alt="Eleganto Theater" className="large-image" />
          <div className="book-now-box">
            <a
              href={whatsappLinks[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="book-now-btn"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="image-box">
          <img src={starimg1} alt="Starlight Theater" className="large-image" />
          <div className="book-now-box">
            <a
              href={whatsappLinks[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="book-now-btn"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Inline Styles for the layout (combined CSS) */}
      <style jsx>{`
        /* Container for the page */
        .theater-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to bottom, #000000, rgb(1, 39, 1)); /* Black to Dark Green Gradient */
}

        /* Container for the images */
        .theater-container {
          display: flex;
          justify-content: space-between;  /* Aligns boxes side by side */
          width: 90%;  /* Adjusted width */
          max-width: 1200px; /* Max width for better responsiveness */
          flex-wrap: wrap;  /* Allows wrapping on smaller screens */
        }

        /* Individual image container */
        .image-box {
          width: 30%;  /* Adjust width to make space for 3 boxes */
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border: 2px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          background-color: rgba(8, 75, 14, 0.6); /* Light Green Background for image box */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin: 10px;
        }

        /* Style for the images */
        .large-image {
          width: 100%;  /* Make image responsive */
          height: auto;
          max-width: 100%;  /* Max width of images */
          border-radius: 10px;
        }

        /* Book Now Box inside the image box */
        .book-now-box {
          margin-top: 15px;
          text-align: center;
        }

        .book-now-btn {
          display: inline-block;
          padding: 12px 25px;  /* Increased padding for better button appearance */
          background-color: rgb(255, 238, 7); /* WhatsApp color */
          color:rgb(0, 0, 0);
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 10px;
        }s

/* Default Image Style (for larger screens) */
.large-image {
  width: 100%;
  height: auto;
  max-width: 600px; /* Max image width for desktop view */
  border-radius: 10px;
}

/* Mobile View: Increase image size */
@media (max-width: 768px) {
  .large-image {
    width: 100%;  /* Ensure the image takes full width */
    height: auto;
    max-width: 100%;  /* Allow image to be larger in mobile view */
  }
}


        .book-now-btn:hover {
          background-color: rgb(2, 29, 7); /* WhatsApp hover color */
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .theater-container {
            flex-direction: column;  /* Stack the boxes vertically on mobile */
          }

          .image-box {
            width: 100%;  /* Make each box take full width */
            margin-bottom: 20px;  /* Add some space between boxes */
          }

          .large-image {
            max-width: 100%;  /* Ensure image takes full width */
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default BookNow;
