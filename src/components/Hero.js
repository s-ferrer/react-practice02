import React from "react";
import heroimage from "../images/hero-img.jpg";

export default function Hero() {
  return (
    <div className="container">
      <div>
        <img src={heroimage} className="hero-img" alt="hero" />
      </div>

      <div className="text-hero">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
