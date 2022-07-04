import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Contact
        img="./images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="./images/mr-whiskerson.png"
        name="Fluffykins"
        phone="(88) 555-9928284"
        email="fjlkhj@catnap.meow"
      />
      <Contact
        img="./images/mr-whiskerson.png"
        name="Felix"
        phone="(562) 87067823"
        email="felix@catnap.meow"
      />
      <Contact
        img="./images/mr-whiskerson.png"
        name="Pumpkin"
        phone="(232) 76798159"
        email="pump@catnap.meow"
      />
    </div>
  );
}
