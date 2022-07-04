import React from "react";
import cardimage from "../images/person-home-01.jpg";
import starimage from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={cardimage} alt="person at home" className="card-img" />
      <div className="card-stats">
        <img src={starimage} alt="star icon" className="card-star" />
        <span className="gray">5.0</span>
        <span className="gray">(6) . </span>
        <span>USA</span>
      </div>
      <p>Life Lessons with Katie</p>
      <p>
        <span className="bold">From 200€</span> / person
      </p>
    </div>
  );
}
