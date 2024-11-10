import React from "react";
import { ReactTyped } from "react-typed";
import BG from './assets/images/BG.png';

export function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative flex h-screen items-center bg-cover bg-center">
                <img src={BG} className="absolute inset-0 w-full h-full object-cover" alt="Background" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Text Section - Left Aligned */}
                <div className="container mx-auto px-4 sm:px-8 relative flex justify-start items-center h-full">
                    <div className="text-left max-w-2xl text-white z-10">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            LET US BRING YOUR
                            <br />
                            <ReactTyped
                                className="text-[#f0c137] text-3xl sm:text-3xl md:text-4xl lg:text-5xl"
                                strings={[
                                    "BIRTHDAY",
                                    "ANNIVERSARY",
                                    "FAREWELL",
                                    "GET TOGETHER",
                                    "BABY SHOWER"
                                ]}
                                typeSpeed={50}
                                backSpeed={30}
                                loop
                            />
                            <br />
                            VISION TO LIFE –
                            <br />
                            CELEBRATE WITH STYLE!
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl opacity-80 max-w-3xl">
                            Welcome to Binge Hall, your premier destination for an extraordinary private theatre and event celebration experience. We specialize in providing exclusive private theatres equipped with Dolby Atmos compliant sound systems and enhanced 4K video projection.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;