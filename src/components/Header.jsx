import React from "react";
import HeaderName from '../assets/HeaderName.png';

function Header() {
  return (
    <header>
      <div>
        <img 
            src={HeaderName} 
            alt="Nadia Pinos Text Stylized" 
            style={{ width: "100%", height: "auto" }} 
        />
      </div>
    </header>
  );
}

export default Header;
