import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TestImg } from "../assets";
import { ArrowBackIosRounded, ArrowDownward } from "@mui/icons-material";

function About() {
  const [vision, setVision] = useState(false);
  const [history, setHistory] = useState(false);

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
    <div className="  sm:py-[100px] py-[50px]">
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
          <Link
            to="/about"
            className=" bg-black sm:py-4 py-3 rounded-full font-bold sm:text-[16px] text-[10px] whitespace-nowrap text-white sm:px-18 px-5">
            Learn More
          </Link>
        </section>
        {/* section 2  */}
        <section className=" flex sm:flex-row flex-col sm:gap-0 gap-[70px]">
          <div className=" flex flex-1 relative">
            <img
              src={TestImg}
              className=" w-[70%]  rounded-[30px] sm:h-[500px] h-[300px] object-cover"
              alt=""
            />
            <img
              src={TestImg}
              className="absolute  w-[50%] rounded-[30px] h-[70%] border-[15px] border-white object-cover right-0 top-1/2"
              alt=""
            />
          </div>
          <div className=" flex flex-1 flex-col gap-[20px]">
            {/* each column  */}
            <section className=" bg-gray-100 p-[20px] rounded-[20px] flex flex-col gap-[10px]">
              <h2 className=" sm:text-[35px] text-[23px] sm:font-bold font-extrabold sm:leading-[35px] text-black">
                Building Renovation
              </h2>
              <p className=" text-gray-800 ">
                <b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing elit.
                Aspernatur voluptatem consequatur dolor provident expedita,
                dignissimos consequuntur, quibusdam accusamus hic dolore fuga
                veritatis fugit velit, obcaecati at. Nam necessitatibus qui
                vitae.
              </p>
            </section>
            {/* each column  */}
            <section className=" bg-gray-100 p-[20px] rounded-[20px] flex flex-col gap-[10px]">
              <h2 className=" sm:text-[35px] text-[23px] sm:font-bold font-extrabold sm:leading-[35px] text-black flex items-center justify-between">
                Building Renovation{" "}
                <button
                  id="vision"
                  className=" text-[20px]  cursor-pointer font-light"
                  onClick={handleDropdown}>
                  {vision ? "-" : "+"}
                </button>
              </h2>
              {vision && (
                <p className=" text-gray-800 ">
                  <b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing
                  elit. Aspernatur voluptatem consequatur dolor provident
                  expedita, dignissimos consequuntur, quibusdam accusamus hic
                  dolore fuga veritatis fugit velit, obcaecati at. Nam
                  necessitatibus qui vitae.
                </p>
              )}
            </section>
            {/* each column  */}
            <section className=" bg-gray-100 p-[20px] rounded-[20px] flex flex-col gap-[10px]">
              <h2 className=" sm:text-[35px] text-[23px] sm:font-bold font-extrabold sm:leading-[35px] text-black flex items-center justify-between">
                Building Renovation{" "}
                <button
                  id="history"
                  className=" text-[20px]  cursor-pointer font-light"
                  onClick={handleDropdown}>
                  {history ? "-" : "+"}
                </button>
              </h2>
              {history && (
                <p className=" text-gray-800 ">
                  <b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing
                  elit. Aspernatur voluptatem consequatur dolor provident
                  expedita, dignissimos consequuntur, quibusdam accusamus hic
                  dolore fuga veritatis fugit velit, obcaecati at. Nam
                  necessitatibus qui vitae.
                </p>
              )}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
