import React from "react";
import banner from "../assets/img/HomeBanner.webp";
import SearchInput from "./SerchInput";


const HeroSection = () => {
    return (
        <div className="relative h-[430px] md:h-[280px]">

            <img src={banner} className="absolute inset-0 w-full h-full object-cover" />

            <div className="relative z-10 max-w-6xl mx-auto">

                <h1 className="text-5xl pt-20 font-bold text-white">
                    India's No.1 online <br />
                    bus ticket booking site
                </h1>
            </div>
            <div className="absolute left-1/2 -bottom-23 -translate-x-1/2 w-full max-w-7xl px-4 z-20">
                <SearchInput />
                
            </div>
        </div>
    );
};

export default HeroSection;