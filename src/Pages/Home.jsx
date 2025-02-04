import React from "react";
import Hero from "../Home/Hero";
import Service from "../Home/Service";
import About from "../Home/AboutUs";
import Support from "../Home/Support";
import Featured from "../Home/Featured";
import Together from "../Home/Together";
import Reviews from "../Home/Reviews";

function Home() {
  return (
    <div className="">
      <div>
        <Hero />
        <Service />
        <About />
        <Support />
        <Featured />
        <Reviews />
        <Together />
        <Hero />
      </div>
    </div>
  );
}

export default Home;
