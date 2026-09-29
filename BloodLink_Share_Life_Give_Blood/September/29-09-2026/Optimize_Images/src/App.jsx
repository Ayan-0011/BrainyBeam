import React, { useState } from "react";
import originalImg from "./assets/img.jpg";
import webpImg from "./assets/img-optimized.webp"
import "./App.css";
import  { ArrowLeftRight } from 'lucide-react'

const App = () => {
  const [position, setPosition] = useState(50);

  const handleChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className="compare-wrapper">

      <h2>Image Optimization Comparison</h2>

      <div className="compare-container">

        {/* Original Image */}
        <img src={originalImg} alt="Original JPEG" className="compare-image original-image" />

        {/* compress Image */}
        <div className="webp-image"  style={{ width: `${position}%` }} >
          <img src={webpImg} alt="WebP" className="compare-image" />
        </div>

        {/* Center Line */}
        <div  className="compare-line" style={{ left: `${position}%` }} >
          <div className="line-button"><ArrowLeftRight /></div>
        </div>


        <input type="range"  min="0" max="100"  value={position} onChange={handleChange} className="compare-slider" />

        <div className="image-label original-label">
          <strong>Original JPEG</strong>
          <span>67.5 KB</span>
        </div>

        <div className="image-label webp-label">
          <strong>WebP</strong>
          <span>13 KB</span>
        </div>

      </div>

      <p className="instruction">
        Drag the center line to compare both images
      </p>

    </div>
  );
};

export default App;

