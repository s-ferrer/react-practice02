import React from "react";
import rbnblogo from "../images/logo.jpg";

export default function Navbar() {
  return (
    <nav>
      <img src={rbnblogo} className="nav--logo" alt="logo" />
    </nav>
  );
}
