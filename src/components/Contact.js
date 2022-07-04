import React from "react";
import catimage from "../images/cat.jpg";
import phoneicon from "../images/phone.jpg";
import mailicom from "../images/mail.jpg";

export default function Card({ img, name, phone, email }) {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={img} alt="cat" />
        <h3>{name}</h3>
        <div className="info-group">
          <img src={phoneicon} alt="phone icon" className="contact-icon" />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src={mailicom} alt="mail icon" className="contact-icon" />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
