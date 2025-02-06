import React from "react";
import Hero from "../Home/Hero";
import Service from "../Home/Service";
import AboutUs from "../Home/AboutUs";
import Support from "../Home/Support";
import Featured from "../Home/Featured";
import ContactUs from "../Home/ContactUs";
import Reviews from "../Home/Reviews";

function Home() {
  return (
    <div className="">
      <div>
        <Hero />
        <Service />
        <AboutUs />
        <Support />
        <Featured />
        <div className="sm:my-20  my-10">
          <h1 className=" sm:text-[50px] text-[23px] font-extrabold sm:leading-[50px] text-center ">
            What our customers say
          </h1>
          <Reviews />
        </div>
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
