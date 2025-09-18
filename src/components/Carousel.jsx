import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ASA from '../assets/ASADesign.png';
import AppMain from '../assets/App-logo-main.png';
import AppSimp from '../assets/App-logo-simplified.png';
import Horse1 from '../assets/horse1.png';
import Horse2 from '../assets/horse2.png';
import Horse3 from '../assets/horse3.png';

import './Gallery.css';
const DesignCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src= {ASA} alt="African Student Association poster design" />
          <p className="legend">Poster design for SDSU's African Student Assocation </p>
        </div>
        <div>
          <img src={AppMain} alt="Logo Design for Daily Dose Inc" />
          <p className="legend">Main Logo Concept for SE305</p>
        </div>
        <div>
          <img src={AppSimp} alt="Simplified Star Logo Design for Daily Dose Inc" />
          <p className="legend">Simplified Logo Concept for SE305</p>
        </div>
        <div>
          <img src={Horse1} alt="Design for social media post about the history of SDState's horse barn" />
          <p className="legend">Social Media Graphic for The Collegian</p>
        </div>
        <div>
          <img src={Horse2} alt="Design for social media post about the history of SDState's horse barn" />
          <p className="legend">Social Media Graphic for The Collegian</p>
        </div>
            <div>
          <img src={Horse3} alt="Design for social media post about the history of SDState's horse barn" />
          <p className="legend">Social Media Graphic for The Collegian</p>
        </div>
      </Carousel>
    </div>
  );
};

export default DesignCarousel;
