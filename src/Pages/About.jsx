import React from "react";
import AboutUs from "../Home/AboutUs";
import Hero from "../About/Hero";
import ContactUs from "../Home/ContactUs";

function About() {
  return (
    <div>
      <section>
        <Hero />
        <AboutUs />
        <ContactUs />
      </section>
    </div>
  );
}

export default About;
