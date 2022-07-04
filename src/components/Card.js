import React from "react";
// eslint-disable-next-line no-unused-vars
import cardimage from "../images/person-home-01.jpg";
import starimage from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`../images/${props.img}`}
        alt="person at home"
        className="card-img"
      />
      <div className="card-stats">
        <img src={starimage} alt="star icon" className="card-star" />
        <span className="gray">{props.rating}</span>
        <span className="gray">({props.reviewCount}) </span>
        <span>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From €{props.price}</span> / person
      </p>
    </div>
  );
}
