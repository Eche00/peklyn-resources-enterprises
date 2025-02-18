import React from "react";
import AboutUs from "../Home/AboutUs";
import Hero from "../About/Hero";
import ContactUs from "../Home/ContactUs";
import ChooseUs from "../About/ChooseUs";

function About() {
  return (
    <div>
      <section>
        <Hero />
        <AboutUs />
        <ChooseUs />
        <ContactUs />
      </section>
    </div>
  );
}

export default About;
