import React from 'react';
import Navbar from './Navbar';
import "../app/styles/hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <Navbar />

      <div className="hero-content">
      
        <div className="hero-image">
          <img
            src="/ammar2.png"  // Reference to the image in the public folder
            alt="Ammar Ibrahim"
            className="hero-img"  // You can add a class if needed for styling
          />
        </div>

        {/* Right section: Text with centering */}
        <div className="hero-text">
          <div className="hero-main">
            {/* Placed "I'm" above the name */}
       
            <p data-aos="zoom-in-up" className="hero-name">I'm</p>
            <p data-aos="zoom-in-up" className="hero-name">Hafiz Muhammad</p>

            <p data-aos="zoom-in-up" className="hero-name">Ammar Ibrahim</p>
          </div>

          <div className="hero-text a">
  <div className="hero-text a">
  <div className="hero-main b">
    <p data-aos="zoom-in-up" className="hero-job leading-[1.1]">Website Developer</p>
    <p data-aos="zoom-in-up" className="hero-job leading-[1.1]">Graphics Designer</p>
  </div>
</div>

  </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
