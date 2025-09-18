import React from "react";
import './Gallery.css';
import DesignCarousel from "./Carousel"; 
import editorial from '../assets/editImage.png';

function Gallery() {
  return (
    <div className="gallery-container">
        <section>
        <h2 style={{ color: "#DAFA8B" }}>My Graphic Designs!</h2>
        <p>
            Here are some of my favorite graphic design works that I've created! 
            I love using my creativity to design posters, logos, and social media graphics.
        </p>
        <div>
            <DesignCarousel />
        </div>
        </section>

        <section>
        <h2 style={{ color: "#DAFA8B" }}>My published Editorial for The Collegian!</h2>
        <p>
            Aside from working with South Dakota State University's student-run newspaper, The Collegian on their socials, 
            I had the amazing opportunity to write my own editorial that was published in the newspaper!
            It was such a fun experience and I learned so much from the process of researching, writing, editing, and publishing my work.
            You can check out my editorial below!
        </p>
        <div>
            <img 
            src={editorial} 
            alt="Editorial published in The Collegian" 
            className="editorial-image" 
            /> 
        </div>
        <div>
            <a href="https://sdsucollegian.com/30614/opinion/slavery-not-up-for-moral-debate/" className= "insta-link" target="_blank" rel="noopener noreferrer">
                Read More </a>
        </div>
        </section>

        <section>
        <h2 style={{ color: "#DAFA8B" }}>My Photography!</h2>
        <p>
            Photography is truly something I love and I'm super proud of the work I've done so far.
            I hope you enjoy viewing some of my favorite shots!
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
        </section>
    </div>
    );
}

export default Gallery;
