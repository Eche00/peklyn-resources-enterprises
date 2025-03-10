import React from "react";
import {
  heroImg,
  herooImg,
  herooImg1,
  herooImg2,
  herooImg3,
  herooImg4,
  herooImg5,
} from "../assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]  pt-[100px]">
      <div className=" w-[95%] mx-auto ">
        {/* container  */}
        <div>
          {/* sections  */}
          <section className=" flex sm:items-center justify-between   sm:py-[50px] pb-[30px]">
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              className=" flex flex-1">
              <h1 className=" sm:text-[70px] text-[25px] sm:font-bold font-extrabold sm:leading-[80px]">
                {" "}
                Expert <br /> Cleaning for
                <br />
                Pristine Spaces :)
              </h1>
            </motion.span>
            <motion.span
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              className=" flex sm:flex-1 items-center justify-center object-cover">
              <img
                src={herooImg}
                className="sm:w-[200px] w-[70px] sm:h-[200px] h-[70px] rounded-full  drop-shadow-2xl   object-cover"
                alt=""
              />
            </motion.span>
          </section>
          {/* sections 2  */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 1 }}
            viewport={{ once: true }}
            className="flex sm:flex-row flex-col">
            <div className=" flex flex-1">
              <img
                src={heroImg}
                className=" w-full rounded-[30px] sm:h-[400px] h-[300px] object-cover"
                alt=""
              />
            </div>
            <div className=" flex flex-1">
              <section className="sm:w-[80%] mx-auto flex flex-col justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className=" sm:text-[22px] text-[16px] sm:px-0 px-[10px] text-gray-700 sm:pt-0 pt-[10px] sm:font-normal font-light">
                    <b className=" font-extrabold">
                      PEKLYNRESOURCES ENTERPRISES
                    </b>{" "}
                    is an indiginous agency with a class of highly trained and
                    equipped professionals registred to carry out{" "}
                    <b className="text-blue-700 italic underline">
                      cleaning and fugimation services
                    </b>
                    <br />
                    with high degree of professional and ethical values, we
                    pride ourselves as a reliable and dependable brand in the
                    business of cleaning, fumigation & decontamination.
                  </p>
                  <ul className="   h-[80px] relative">
                    <img
                      src={herooImg1}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white object-cover"
                      alt=""
                    />
                    <img
                      src={herooImg2}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[40px] object-cover"
                      alt=""
                    />
                    <img
                      src={herooImg3}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[80px] object-cover"
                      alt=""
                    />
                    <img
                      src={herooImg4}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[120px] object-cover"
                      alt=""
                    />
                    <img
                      src={herooImg5}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[160px] object-cover"
                      alt=""
                    />
                  </ul>
                </div>
                <div className="flex items-center sm:gap-[50px] gap-[20px]">
                  <Link
                    to="/book"
                    className=" bg-blue-700 py-4 rounded-full font-bold text-[16px] text-white w-full text-center">
                    Book now
                  </Link>
                  <a
                    href="tel:+2348179275757"
                    className=" border-2 border-blue-700 text-blue-700  py-4 rounded-full font-bold text-[16px]  w-full text-center">
                    Call us
                  </a>
                </div>
              </section>
            </div>
          </motion.section>
          {/* sections 3  */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center py-[30px] sm:w-[70%] mx-auto w-full  justify-between">
            <p className="font-bold  flex flex-col sm:text-4xl text-[20px] items-center ">
              <b> 100+</b>
              <span className=" sm:text-xl text-[14px] text-gray-700 text-center">
                Works Completed
              </span>
            </p>
            <p className="font-bold  flex flex-col sm:text-4xl text-[20px] items-center ">
              <b> 50+</b>
              <span className=" sm:text-xl text-[14px] text-gray-700 text-center">
                Team Members
              </span>
            </p>
            <p className="font-bold  flex flex-col sm:text-4xl text-[20px] items-center ">
              <b> 60+</b>
              <span className=" sm:text-xl text-[14px] text-gray-700 text-center">
                Clients Reviews
              </span>
            </p>
            <p className="font-bold  flex flex-col sm:text-4xl text-[20px] items-center ">
              <b> 500+</b>
              <span className=" sm:text-xl text-[14px] text-gray-700 text-center">
                Complete works
              </span>
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
