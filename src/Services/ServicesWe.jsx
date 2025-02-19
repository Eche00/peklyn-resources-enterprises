import { Factory, Home, Hotel, School, Work } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import React from "react";

function ServicesWe() {
  return (
    <div className=" bg-gray-200 py-[100px]">
      <div className=" w-full absolute -top-5  ">
        <p className="mb-8 font-heading max-w-max px-5 py-2.5 uppercase font-semibold text-xs tracking-wider text-indigo-900 bg-gray-50 rounded-full ">
          Escrow-Friendly
        </p>
      </div>
      <div className=" flex flex-col  sm:max-w-[60%] max-w-[90%] mx-auto  py-20 items-center justify-center">
        <h1 className=" text-4xl font-bold text-center">
          <span className=" text-blue-700 ">Our</span> scope covers
        </h1>
        <ul className=" my-20  grid sm:flex sm:flex-wrap grid-cols-2 w-full sm:gap-2  gap-5  items-center justify-center">
          <li className=" sm:border-gray-700 sm:border-l-[1px] flex-1 flex flex-col items-center justify-center ">
            <span className=" text-white rounded-full p-3 w-fit  bg-blue-700 border-2 border-blue-700">
              <Home />
            </span>
            <h2 className=" text-4xl font-extrabold text-gray-800 my-3">
              Homes
            </h2>
          </li>
          <li className=" border-gray-700 border-l-[1px] flex-1 flex flex-col items-center justify-center ">
            <span className=" text-white rounded-full p-3 w-fit  bg-blue-700 border-2 border-blue-700">
              <Work />
            </span>
            <h2 className=" text-4xl font-extrabold text-gray-800 my-3">
              Offices
            </h2>
          </li>
          <li className=" border-gray-700 border-l-[1px] flex-1 flex flex-col items-center justify-center ">
            <span className=" text-white rounded-full p-3 w-fit  bg-blue-700 border-2 border-blue-700">
              <Hotel />
            </span>
            <h2 className=" text-4xl font-extrabold text-gray-800 my-3">
              Hotels
            </h2>
          </li>
          <li className=" border-gray-700 border-l-[1px] border-r-[1px] flex-1 flex flex-col items-center justify-center ">
            <span className=" text-white rounded-full p-3 w-fit  bg-blue-700 border-2 border-blue-700">
              <School />
            </span>
            <h2 className=" text-4xl font-extrabold text-gray-800 my-3">
              Schools
            </h2>
          </li>
          <li className=" border-gray-700 sm:border-r-[1px] sm:border-l-[0px] border-l-[1px] flex-1 flex flex-col items-center justify-center ">
            <span className=" text-white rounded-full p-3 w-fit  bg-blue-700 border-2 border-blue-700">
              <Factory />
            </span>
            <h2 className=" text-4xl font-extrabold text-gray-800 my-3">
              Factories
            </h2>
          </li>
          <li className=" border-gray-700 border-r-[1px] flex-1 flex flex-col items-center justify-center ">
            <span className=" text-white rounded-full p-3 w-fit  bg-blue-700 border-2 border-blue-700">
              <BusinessIcon />
            </span>
            <h2 className=" text-4xl font-extrabold text-gray-800 my-3 text-center">
              Facility
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesWe;
