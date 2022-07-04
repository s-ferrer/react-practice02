import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img
        src="../images/person-home-01.jpg"
        alt="person at home"
        className="card-img"
      />
      <div className="card-stats">
        <img src="../images/star.png" alt="star icon" className="card-star" />
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
