import React from "react";
import "./Hero.css";
import Headers from "./Headers";

function Hero() {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Headers />
      </div>
      <div className='right-h'>Right Side</div>
    </div>
  );
}

export default Hero;
