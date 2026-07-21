import React from "react";
import banner from "../assets/img/HomeBanner.webp";
import SearchInput from "./SerchInput";

const HeroSection = () => {
    return (
        <div className="hero">
            <img src={banner} alt="Banner" className="hero-img" />

            <div className="hero-content">
                <h1 className="hero-title">
                    India's No.1 online <br />
                    bus ticket booking site
                </h1>
            </div>
            <div className="hero-search">
                <SearchInput name="Bus" />
            </div>
        </div>
    );
};

export default HeroSection;