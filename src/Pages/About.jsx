import React from "react";
import AboutUs from "../Home/AboutUs";
import Hero from "../About/Hero";
import ContactUs from "../Home/ContactUs";
import WhyChooseUs from "../About/whyChooseUs";

function About() {
  return (
    <div>
      <section>
        <Hero />
        <AboutUs />
        <WhyChooseUs />
        <ContactUs />
      </section>
    </div>
  );
}

export default About;
