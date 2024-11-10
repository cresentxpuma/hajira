import React from "react";
import { Link } from "react-router-dom";
import BG from './assets/images/BG.png';
import { ReactTyped } from "react-typed";

export function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative flex h-screen items-center justify-center bg-cover bg-center">
                <img src={BG} className="absolute inset-0 w-full h-full object-cover" alt="Background" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="container mx-auto relative text-center px-4">
                    <h1 className="text-5xl text-left font-extrabold text-white mb-6 leading-tight">
                        LET US BRING YOUR
                        <br />
                        <ReactTyped
                            className="text-[#f0c137]"
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
                        <br/>
                        VISION TO LIFE –
                        <br />
                        CELEBRATE WITH STYLE!
                    </h1>
                    <p className="text-2xl text-left text-white opacity-80 max-w-2xl">
                        Welcome to Binge Hall, your premier destination for an extraordinary private theatre and event celebration experience. We specialize in providing exclusive private theatres equipped with Dolby Atmos compliant sound systems and enhanced 4K video projection.
                    </p>
                </div>
            </div>

        </>
    );
}

export default Home;
