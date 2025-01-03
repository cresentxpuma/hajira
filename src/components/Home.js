import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';
import haji1 from './assets/images/haji16.jpg';
import haji2 from './assets/images/haji17.jpg';
import haji3 from './assets/images/haji18.jpg';
import haji4 from './assets/images/haji19.jpg';
import haji5 from './assets/images/haji20.jpg';

const HappyCustomers = () => {
    const [count, setCount] = useState(4380); // Starting from 18999
    const target = 999999; // Target number to count up to

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < target) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval); // Stop the interval once the target is reached
                    return prevCount;
                }
            });
        }, 8640000); // Adjust the time interval (in ms) to control the speed

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [target]);

    return (
        <div className="happy-customers text-center py-8 px-6 bg-[#014f23] text-white rounded-lg shadow-xl max-w-lg mx-auto">
            <p className="text-3xl sm:text-4xl font-bold">
                We’ve Served <span className="text-[#f0c137]">{count}</span> Happy and Satisfied Customers!
            </p>
        </div>
    );
};

const reviews = [
    { name: "Md Shehzan", stars: 5, review: "shezan here recently I went to umrah with my family alhamdulilah experience was too good each and everything taking care by hajira air travel services thanks to mr. Nayeem and kareem bhai" },
    { name: "Masood Khan", stars: 5, review: "Very satisfying services by hajira air travel services. Thank you nayeem bhai special thanks to Mr kareem bhai" },
    { name: "Fatima Razvi", stars: 5, review: "Alhamdulillah...thank u nayeem Bhai hajira tours and travels service... very good service...and special for middle class family and senior citizens people their provide special service.... inshallah next time again we booked ,hajira tours and travels packed 👍👍👍" },
    { name: "Uzair Khan", stars: 5, review: "Best service for umrah recently I have gone with hajira air travel services alhamdulillah they are giving 3 time indian food giving rooms and providing Guide in Makkah & Madina hotel distance also near from Haram Shareef 150MTRS and in madina also 100MTRS They are providing Gulf Cart service in MAKKAH.." },
    { name: "Naazneen ", stars: 5, review: "Hajira Air travel is the best service it's package is Best and it's provide Indian food three times and zam zam it's best service thanks for your best packages share and is package includes best thing's i like that ziyarat makkah and madina and best Airlines laundry service insurance transportation so many things includes i like this service best of best service 💛💛💛💛💛" },
    { name: "Salman Shaik", stars: 5, review: "Jaisa hum sonche the service vaiseich service mila humlog ku bahot acha service diye hajira Travels wale inshalla hamesha abhi yeich travels say jainga" },
    { name: "Yaseen Mohd", stars: 5, review: "Hajira Air travel services i thanks for your service is best and best service i like this packages and yours responsibilitys it's package includes best things thanks for your service 💛" },
    { name: "Afsheen", stars: 5, review: "Best service ever,I got my umrah visa in 24 hours,thank you" },
    { name: "Faisal Khan", stars: 5, review: "I would like to recommend everyone blindly you can trust on hajira air travel services they will provide good services jazak allah." }
];

export function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const galleryImages = [haji1, haji2, haji3, haji4, haji5];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up interval
    }, [galleryImages.length]);
    return (
        <div style={{
          background: 'linear-gradient(to bottom, black,rgb(2, 58, 2))',
          fontFamily: 'montserrat',
          minHeight: '100vh'
        }}>
          {/* Hero Section with Slideshow Background */}
          <div className="relative flex h-screen items-center bg-cover bg-center">
            {/* Slideshow Background */}
            <div
              className="absolute inset-0 transition-all duration-1000"
              style={{
                backgroundImage: `url(${galleryImages[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.9, // Adjust the opacity to make it less dominant
              }}
            ></div>
    
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-green/90 to-transparent"></div>
    
            {/* Text Section - Left Aligned */}
            <div className="container mx-auto px-4 sm:px-8 relative flex justify-center items-center h-full">
              <div className="text-center max-w-2xl text-white z-10">
                <h1 className="pop-up-text text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight  ">
                  LET US BRING YOUR
                  <br />
                  <ReactTyped
                    className="text-[#f0c137] text-3xl sm:text-3xl md:text-3xl lg:text-4xl"
                    strings={["HAJJ", "UMRAH"]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                  />
                  PACKAGES – <br />
                  TRAVEL WITH COMFORT AND PEACE!
                </h1>
                <p className="pop-up-text text-lg sm:text-xl md:text-2xl opacity-80 max-w-3xl">
                  Welcome to Hajira Air Travel Services, your premier partner for an extraordinary Hajj and Umrah journey. We specialize in offering all-inclusive travel packages with seamless arrangements, luxurious accommodations, and top-notch service, ensuring a spiritually enriching and hassle-free experience.
                </p>
                <button className="bg-[#ffee07] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#111111] hover:text-white mt-6">
                  <Link to={`/booknow`}>PACKAGES</Link>
                </button>
              </div>
            </div>
          </div>
        

            {/* New Section - Binge Hall Content */}
            <div className="container mx-auto my-12 px-4 sm:px-8">
                <div className="flex flex-col lg:flex-row items-center rounded-lg shadow-lg overflow-hidden">
                    {/* Text Section */}
                    <div className="p-6 lg:p-12 bg-[#014f23] text-white rounded-lg shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white hover:text-[#111111] transition-colors duration-300">
                            Step onto the path of a seamless pilgrimage with Hajira Air Travel Service:
                        </h2>
                        <p className="text-2xl sm:text-3xl font-bold text-white hover:text-[#111111] transition-colors duration-300">
                            <strong className="text-[#f0c137]">Luxurious accommodations</strong>, reliable pickup and drop services, delightful meals, effortless travel arrangements, and expertly curated itineraries – all crafted to make your Hajj and Umrah journey spiritually enriching and hassle-free!
                        </p>
                        {/* <button className="bg-[#f0c137] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#111111] hover:text-white mt-6">
                            <Link to={`/booknow`}>PACKAGES</Link>
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Count-up Section */}
            <div className="container mx-auto my-12 flex justify-center">
                <HappyCustomers />
            </div>

            {/* Reviews Section */}
            <div className="container mx-auto my-12 px-4 sm:px-8 text-white pb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="review-box relative bg-[#014f23] p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:bg-[#022e15] hover:scale-105"
                        >
                            {/* Left Top Corner Logo */}
                            <img
                                src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA="
                                alt="Small Logo"
                                className="absolute top-6 left-5 w-13 h-10 rounded-full"
                            />

                            {/* Right Top Corner Google Logo */}
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/24px-Google_%22G%22_logo.svg.png"
                                alt="Google Logo"
                                className="absolute top-6 right-5 w-7 h-7"
                            />

                            <p className="text-2xl font-semibold mb-4">{review.name}</p>
                            <p className="text-lg">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
