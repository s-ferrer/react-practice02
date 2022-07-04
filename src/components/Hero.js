import React from "react";
import heroimage from "../images/hero-img.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <img src={heroimage} className="hero-img" alt="hero" />
      </div>

      <h1 className="hero-header">Online Experiences</h1>
      <p className="">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
