import React from "react";
import "../Style/help.css";
import helpImage from '../assets/img/help.jpg'
import Footer from "../Components/Footer";

const Help = () => {
    return (
        <>
            <div className="help-container">
                <div className="help-banner">
                    <img src={helpImage} alt="Help" className="help-image" />

                    <div className="help-overlay">
                        <h1>redBus Help</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Help;