import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="./images/person-home-01.jpg"
        rating="5.0"
        reviewCount={6}
        country="Whatever you want"
        title="Life Lessons with Katie ZaferesRepair "
        price={136}
      />
      <Card
        img="./images/person-home-02.jpg"
        rating="3.0"
        reviewCount={16}
        country="Whatever you want"
        title="Life Lessons with Katie Zaferes"
        price={89}
      />
      <Card
        img="./images/person-home-03.jpg"
        rating="4.0"
        reviewCount={8}
        country="Whatever you want"
        title="Life Lessons with Katie Zaferes"
        price={250}
      />
    </div>
  );
}
