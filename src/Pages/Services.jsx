import React from "react";
import Hero from "../Services/Hero";
import Service from "../Home/Service";
import ServicesWe from "../Services/ServicesWe";

function Services() {
  return (
    <div className="    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]  pt-[100px]">
      <Hero />
      <Service />
      <ServicesWe />
    </div>
  );
}

export default Services;
