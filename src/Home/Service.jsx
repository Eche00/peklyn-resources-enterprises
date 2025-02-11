import { ExitToApp } from "@mui/icons-material";
import { Toolbar } from "@mui/material";
import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import HouseIcon from "@mui/icons-material/House";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import LocationCityIcon from "@mui/icons-material/LocationCity";
function Service() {
  return (
    <div className=" bg-gray-100 sm:py-[100px] py-[50px]">
      {/* container  */}
      <div className=" w-[95%] mx-auto flex flex-col gap-[50px]">
        {/* sections  */}
        <section className=" flex flex-col gap-[10px]">
          <h1 className=" sm:text-[50px] text-[23px] sm:font-bold font-extrabold sm:leading-[50px]">
            Services Tailored to You
          </h1>
          <p className=" sm:text-[18px] text-sm font-light sm:leading-[20px]">
            We provide customized construction solutions designed to meet your
            unique <br />{" "}
            <span className=" sm:flex hidden">
              needs, ensuring every project reflects your vision and exceeds
              expectation
            </span>{" "}
          </p>
        </section>
        {/* section 2  */}
        <section className=" flex sm:flex-row flex-col gap-[50px]">
          {/* each box */}
          <div className="border-2 rounded-[20px] flex flex-1 p-[20px]  flex-col gap-[30px] bg-blue-700 border-blue-700 ">
            <span className=" border-2 rounded-full p-3 w-fit  bg-white text-blue-700">
              <BusinessIcon />
            </span>
            <article>
              <h2 className=" sm:text-[20px] text-[23px] sm:font-bold font-extrabold sm:leading-[20px] text-white">
                Office Cleaning
              </h2>
              <p className=" text-white">
                Professional office cleaning services for a spotless, and
                welcoming workspace.
              </p>
            </article>
            <a
              href=""
              className=" underline sm:text-[18px] text-sm font-bold sm:leading-[20px]  text-white">
              Learn More
            </a>
          </div>
          {/* each box */}
          <div className="border-2 rounded-[20px] flex flex-1 p-[20px]  flex-col gap-[30px]">
            <span className=" text-white rounded-full p-3 w-fit  bg-blue-700 border-2 border-blue-700">
              <DryCleaningIcon />
            </span>
            <article>
              <h2 className=" sm:text-[20px] text-[23px] sm:font-bold font-extrabold sm:leading-[20px]">
                Laundry Service
              </h2>
              <p>
                Reliable laundry service for fresh, clean clothes, delivered
                with convenience and care.
              </p>
            </article>
            <a
              href=""
              className=" underline sm:text-[18px] text-sm font-bold sm:leading-[20px] ">
              Learn More
            </a>
          </div>
          {/* each box */}
          <div className="border-2 rounded-[20px] flex flex-1 p-[20px]  flex-col gap-[30px]">
            <span className=" text-white rounded-full p-3 w-fit  bg-blue-700 border-2 border-blue-700">
              <HouseIcon />
            </span>
            <article>
              <h2 className=" sm:text-[20px] text-[23px] sm:font-bold font-extrabold sm:leading-[20px]">
                Home Cleaning
              </h2>
              <p>
                Expert home cleaning for a spotless, comfortable, and healthy
                living environment.
              </p>
            </article>
            <a
              href=""
              className=" underline sm:text-[18px] text-sm font-bold sm:leading-[20px] ">
              Learn More
            </a>
          </div>
          {/* each box */}
          <div className="border-2 rounded-[20px] flex flex-1 p-[20px]  flex-col gap-[30px]">
            <span className=" text-white rounded-full p-3 w-fit  bg-blue-700 border-2 border-blue-700">
              <LocationCityIcon />
            </span>
            <article>
              <h2 className=" sm:text-[20px] text-[23px] sm:font-bold font-extrabold sm:leading-[20px]">
                Facility management
              </h2>
              <p>
                Comprehensive facility management ensuring efficient, and
                well-maintained operations.
              </p>
            </article>
            <a
              href=""
              className=" underline sm:text-[18px] text-sm font-bold sm:leading-[20px] ">
              Learn More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Service;
