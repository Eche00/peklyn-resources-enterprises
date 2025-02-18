import React from "react";
import {
  heroImg,
  whyImg1,
  whyImg2,
  whyImg3,
  whyImg4,
  whyImg5,
  whyImg6,
  whyImg7,
} from "../assets";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import DiscountIcon from "@mui/icons-material/Discount";
import TagFacesIcon from "@mui/icons-material/TagFaces";

function WhyChooseUs() {
  return (
    <div className=" bg-gray-200 py-[100px]">
      <div className=" w-[95%] mx-auto ">
        {/* container  */}
        <div>
          {/* sections 2  */}
          <section className="flex sm:flex-row-reverse flex-col">
            <div className=" flex flex-1 relative">
              <img
                src={whyImg1}
                className=" sm:w-[600px] w-[300px] rounded-full sm:h-[600px] h-[300px] object-cover"
                alt=""
              />
              <img
                src={whyImg7}
                className=" absolute sm:w-[500px] w-[200px] rounded-full sm:h-[500px] h-[200px] object-cover border-[15px] right-[0px] bottom-0 border-gray-200"
                alt=""
              />
            </div>
            <div className=" flex flex-1">
              <section className="sm:w-[80%] w-full mx-auto flex flex-col justify-between sm:gap-0 gap-[20px]">
                <div className="flex flex-col gap-[10px] sm:items-start items-center">
                  <p className="text-blue-700 italic underline text-[16px] font-bold py-2">
                    <SanitizerIcon /> Solution to your Health !
                  </p>
                  <ul className="   h-[80px] relative w-full">
                    <img
                      src={whyImg3}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white object-cover"
                      alt=""
                    />
                    <img
                      src={whyImg4}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[40px] object-cover"
                      alt=""
                    />
                    <img
                      src={whyImg5}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[80px] object-cover"
                      alt=""
                    />
                    <img
                      src={whyImg6}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[120px] object-cover"
                      alt=""
                    />
                    <img
                      src={whyImg2}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[160px] object-cover"
                      alt=""
                    />
                  </ul>
                  <div className=" flex flex-col gap-[20px] w-full">
                    <h2 className=" sm:text-[22px] text-[16px] font-extrabold capitalize">
                      Why choose us ?
                    </h2>
                    <ul className="flex flex-col sm:gap-[20px] gap-[10px] sm:px-0 px-[10px]  sm:text-[22px] text-[16px text-gray-700">
                      <li className=" flex items-center gap-[10px]">
                        <span className=" border-2 bg-blue-700 border-blue-700 text-white rounded-full p-1 flex items-center justify-center">
                          <Diversity2Icon fontSize="" />
                        </span>{" "}
                        Eco Friendly
                      </li>
                      <li className=" flex items-center gap-[10px]">
                        <span className=" border-2 bg-blue-700 border-blue-700 text-white rounded-full p-1 flex items-center justify-center">
                          <DiscountIcon fontSize="" />
                        </span>{" "}
                        Cost Effective
                      </li>
                      <li className=" flex items-center gap-[10px]">
                        <span className=" border-2 bg-blue-700 border-blue-700 text-white rounded-full p-1 flex items-center justify-center">
                          <TagFacesIcon fontSize="" />
                        </span>{" "}
                        100% Satisfaction
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center sm:gap-[50px] gap-[20px]">
                  <button className=" bg-blue-700 py-4 rounded-full font-bold text-[16px] text-white w-full">
                    Book now
                  </button>
                  <button className=" border-2 border-blue-700 text-blue-700  py-4 rounded-full font-bold text-[16px]  w-full">
                    Call us
                  </button>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
