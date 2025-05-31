import React from "react";
import { Founder } from "../assets";
import { motion } from "framer-motion";

function Featured() {
  return (
    <div className="  sm:py-[100px] py-[50px]  bg-gray-200 ">
      {/* container  */}
      <div className=" w-[95%] mx-auto flex flex-col gap-[50px]">
        {/* sections  */}
        <section className=" flex items-start justify-between">
          <div className=" flex flex-col gap-[10px]">
            <h1 className=" sm:text-[50px] text-[23px] sm:font-bold font-extrabold sm:leading-[50px]">
              Our Founder
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
          <button
            to="/about"
            className=" bg-blue-700 sm:py-4 py-3 rounded-full font-bold sm:text-[16px] text-[10px] whitespace-nowrap text-white sm:px-18 px-5">
            Reach Out
          </button>
        </section>
        {/* another section  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className=" flex sm:flex-row flex-col-reverse max-w-[80%] mx-auto  py-20">
          <section className=" flex-1 flex flex-col justify-center items-center ">
            <div className="sm:w-[80%] mx-auto">
              <h2 className=" text-[17.5px] font-sans  ">
                The level of focus and satisfaction we provide here at
                PEKLYNRESOURCES ENTERPRISES is exceptional. Join us in our
                spectacular journey to make the World a Clean and Healthy place.
              </h2>
              <div className=" w-[30%] h-[1px] bg-white rounded-full my-5"></div>
              <div className="">
                <p className=" text-sm font-bold">Kalu Treasure. C.</p>
                <p className=" font-light">
                  Founder PEKLYNRESOURCES ENTERPRISES
                </p>
              </div>
            </div>
          </section>
          <section className=" flex-1 flex items-center justify-center">
            <div>
              <img
                className=" w-[200px] h-[200px] object-cover rounded-full"
                src={Founder}
                alt=""
              />
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
