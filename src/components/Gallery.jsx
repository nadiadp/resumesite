import React from "react";
import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery-container">
      <h2 style={{ color: "#DAFA8B" }}>My Photography!</h2>
      <p>
        I know this may seem a bit random to include, but photography is truly something I love
        and I'm super proud of the work I've done so far. I feel it's important to share my creative
        strengths as well, so I hope you enjoy viewing some of my favorite shots!
      </p>
      <div className="instagram-feed">
        <iframe src="https://snapwidget.com/embed/1107956" 
        class="snapwidget-widget" 
        allowtransparency="true" frameborder="0" scrolling="no" 
        style={{ 
        border: "none", 
        overflow: "hidden"
        }}
        title="Nadia Pinos' Photography">
        </iframe>
      </div>
      <div>
        <p>
          You can also check out more of my photography on my{" "}
          <a href="https://www.instagram.com/nadia.pinos/" className= "insta-link" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>!
        </p>
      </div>
    </div>
  );
}

export default Gallery;
