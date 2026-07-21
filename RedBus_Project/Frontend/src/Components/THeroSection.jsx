import React from "react";
import banner from "../assets/img/T_banner.jpg";
import SearchInput from "./SerchInput";


const THeroSection = () => {
    return (
        <div>
            <div className="hero">
                <img src="https://www.redbus.in/rails/public/images/banner.svg" alt="Banner" className="hero-img" />

                <div className="hero-content">
                    <h1 className="hero-title">
                      Train Ticket Booking <br />
                      <img src="https://www.redbus.in/rails/public/images/irctc_b.svg" alt="" /> IRCTC Authorised Partner
                    </h1>
                </div>
                <div className="hero-search">
                    <SearchInput name="Train"/>
                </div>
            </div>
        </div>
    )
}

export default THeroSection
