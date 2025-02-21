import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { aboutImg, aboutImg2 } from "../assets";
import { motion } from "framer-motion";

function AboutUs() {
  const [vision, setVision] = useState(false);
  const [history, setHistory] = useState(false);
  const location = useLocation();
  const active = "/about";
  const handleDropdown = (e) => {
    e.preventDefault();
    if (e.target.id === "vision") {
      setVision(!vision);
      setHistory(false);
    }
    if (e.target.id === "history") {
      setVision(false);
      setHistory(!history);
    }
  };
  return (
    <div className="  sm:py-[100px] py-[50px]    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]  ">
      {/* container  */}
      <div className=" w-[95%] mx-auto flex flex-col gap-[50px]">
        {/* sections  */}
        <section className=" flex items-start justify-between">
          <div className=" flex flex-col gap-[10px]">
            <h1 className=" sm:text-[50px] text-[23px] sm:font-bold font-extrabold sm:leading-[50px]">
              About Our Company
            </h1>
            <p className=" sm:text-[18px] text-sm font-light sm:leading-[20px]">
              We provide customized construction solutions designed to meet your
              unique <br />{" "}
              <span className=" sm:flex hidden">
                needs, ensuring every project reflects your vision and exceeds
                expectation
              </span>{" "}
            </p>
          </div>
          {location.pathname !== active && (
            <Link
              to="/about"
              className=" bg-blue-700 sm:py-4 py-3 rounded-full font-bold sm:text-[16px] text-[10px] whitespace-nowrap text-white sm:px-18 px-5">
              Learn More
            </Link>
          )}
        </section>
        {/* section 2  */}
        <section className=" flex sm:flex-row flex-col sm:gap-0 gap-[70px] pb-[50px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 1 }}
            viewport={{ once: true }}
            className=" flex flex-1 relative">
            <img
              src={aboutImg}
              className=" w-[70%]  rounded-[30px] sm:h-[500px] h-[300px] object-cover"
              alt=""
            />
            <img
              src={aboutImg2}
              className="absolute  w-[50%] rounded-[30px] h-[70%] border-[15px] border-white object-cover right-0 top-1/2"
              alt=""
            />
          </motion.div>
          <div className=" flex flex-1 flex-col gap-[20px]">
            {/* each column  */}
            <section className=" bg-gray-100 p-[20px] rounded-[20px] flex flex-col gap-[10px]">
              <h2 className=" sm:text-[35px] text-[23px] sm:font-bold font-extrabold sm:leading-[35px] text-black">
                About Us
              </h2>
              <p className=" text-gray-800 ">
                <b>At PEKLYNRESOURCES ENTERPRISES,</b> we are dedicated to
                delivering excellence in everything we do. With a strong
                commitment to quality, innovation, and customer satisfaction, we
                strive to provide solutions that make a difference. Our team of
                experts works passionately to create value, ensuring that every
                product and service meets the highest standards.
              </p>
            </section>
            {/* each column  */}
            <section className=" bg-gray-100 p-[20px] rounded-[20px] flex flex-col gap-[10px]">
              <h2 className=" sm:text-[35px] text-[23px] font-bold sm:leading-[35px] text-black flex items-center justify-between">
                Our mission{" "}
                <button
                  id="vision"
                  className=" text-[20px]  cursor-pointer font-light"
                  onClick={handleDropdown}>
                  {vision ? "-" : "+"}
                </button>
              </h2>
              {vision && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 1 }}
                  viewport={{ once: true }}
                  className=" text-gray-800 ">
                  <b>At PEKLYNRESOURCES ENTERPRISES,</b>our mission is to create
                  cleaner, healthier, and more comfortable spaces for homes and
                  businesses. We are dedicated to delivering top-quality
                  cleaning solutions with professionalism, efficiency, and
                  attention to detail.i at. Nam
                </motion.p>
              )}
            </section>
            {/* each column  */}
            <section className=" bg-gray-100 p-[20px] rounded-[20px] flex flex-col gap-[10px]">
              <h2 className=" sm:text-[35px] text-[23px] font-bold sm:leading-[35px] text-black flex items-center justify-between">
                Our vision{" "}
                <button
                  id="history"
                  className=" text-[20px]  cursor-pointer font-light"
                  onClick={handleDropdown}>
                  {history ? "-" : "+"}
                </button>
              </h2>
              {history && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 1 }}
                  viewport={{ once: true }}
                  className=" text-gray-800 ">
                  <b>At PEKLYNRESOURCES ENTERPRISES,</b>our vision is to become
                  the leading provider of professional cleaning services,
                  recognized for excellence, reliability, and innovation. We
                  strive to set new industry standards by delivering spotless,
                  hygienic, and refreshing environments that enhance the quality
                  of life for our clients.
                </motion.p>
              )}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
