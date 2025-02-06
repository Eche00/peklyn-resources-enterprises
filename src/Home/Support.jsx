import React from "react";
import { TestImg } from "../assets";
import { Link } from "react-router-dom";
import { Check } from "@mui/icons-material";

function Support() {
  return (
    <div className="bg-gray-100 py-[100px]">
      <div className=" w-[95%] mx-auto flex flex-col sm:gap-[50px] gap-[20px] ">
        {/* sections  */}
        <h1 className=" sm:text-[50px] text-[23px] sm:font-light font-light sm:leading-[50px] text-center">
          Support Our Company
        </h1>
        <div className="   h-[80px] relative flex items-center justify-center sm:gap-[20px] gap-[10px]">
          <img
            src={TestImg}
            className="w-[60px] h-[60px]  rounded-full "
            alt=""
          />
          <img
            src={TestImg}
            className="w-[60px] h-[60px]  rounded-full "
            alt=""
          />
          <img
            src={TestImg}
            className="w-[60px] h-[60px]  rounded-full  "
            alt=""
          />
          <img
            src={TestImg}
            className="w-[60px] h-[60px]  rounded-full  "
            alt=""
          />
          <img
            src={TestImg}
            className="w-[60px] h-[60px]  rounded-full  left-[160px]"
            alt=""
          />
        </div>
        <section className="flex sm:flex-row flex-col-reverse  items-center">
          <div className=" flex flex-1 ">
            <section className="sm:w-[80%] flex flex-col justify-between gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <p className=" sm:text-[20px] text-[16px] sm:px-0 px-[10px] text-gray-700 sm:pt-0 pt-[10px] sm:font-normal font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere vitae error laboriosam autem placeat, sint corrupti
                  doloremque fugit nis.
                </p>
                <ul className="flex flex-col sm:gap-[10px] gap-[5px] sm:px-0 px-[10px]  sm:text-[22px] text-[16px text-gray-700">
                  <li className=" flex items-center gap-[10px]">
                    <span className=" border-2 bg-black text-white rounded-full p-1 flex items-center justify-center">
                      <Check fontSize="" />
                    </span>{" "}
                    Excellence in evwry detail
                  </li>
                  <li className=" flex items-center gap-[10px]">
                    <span className=" border-2 rounded-full p-1 flex items-center justify-center">
                      <Check fontSize="" />
                    </span>{" "}
                    Trusted expertise,proven result
                  </li>
                  <li className=" flex items-center gap-[10px]">
                    <span className=" border-2 rounded-full p-1 flex items-center justify-center">
                      <Check fontSize="" />
                    </span>{" "}
                    Innovation solutions tailored for you
                  </li>
                  <li className=" flex items-center gap-[10px]">
                    <span className=" border-2 rounded-full p-1 flex items-center justify-center">
                      <Check fontSize="" />
                    </span>{" "}
                    Your vision is our commitment
                  </li>
                </ul>
              </div>
              <div className="flex items-center  gap-[20px] sm:py-0 py-5 my-0 sm:my-10">
                <button className=" bg-black sm:py-4 py-2 sm:px-32 px-20 rounded-full font-bold text-[16px] text-white w-fit">
                  Call us
                </button>
              </div>
            </section>
          </div>

          <div className=" flex flex-1">
            <img
              src={TestImg}
              className=" w-full rounded-[30px] sm:h-[400px] h-[300px] object-cover"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Support;
