import { GitHub, Instagram, LinkOutlined } from "@mui/icons-material";
import React from "react";
import { TestImg } from "../assets";

function Featured() {
  return (
    <div className="  sm:py-[100px] py-[50px]  bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] ">
      {/* container  */}
      <div className=" w-[95%] mx-auto flex flex-col gap-[50px]">
        {/* sections  */}
        <section className=" flex items-start justify-between">
          <div className=" flex flex-col gap-[10px]">
            <h1 className=" sm:text-[50px] text-[23px] sm:font-bold font-extrabold sm:leading-[50px]">
              Our Founders
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
            className=" bg-black sm:py-4 py-3 rounded-full font-bold sm:text-[16px] text-[10px] whitespace-nowrap text-white sm:px-18 px-5">
            Reach Out
          </button>
        </section>
        {/* another section  */}
        <section className=" sm:w-full mx-auto w-[90%] flex sm:flex-row flex-col gap-[20px]">
          {/*founder*/}
          <div className=" flex flex-col shadow-md hover:shadow-lg  translate-shadow overflow-hidden  rounded-lg w-full sm:w-[330px] ">
            <img
              className=" h-[320px] sm:h-[220px] w-full object-cover hover:scale-[105%] translate-scale duration-300"
              src={TestImg}
              alt=""
            />
            <div className=" p-2">
              <div className=" py-3 flex flex-col gap-2 ">
                <h2 className=" text-lg font-bold text-slate-700 truncate">
                  𝕏 Eche_codes
                </h2>
                <p className=" text-sm font-semibold text-slate-700  font-sans">
                  Front end Developer with a taste of Back end, HTML, CSS, JS,
                  REACT, TAILWIND, FIREBASE, NODE.JS
                </p>
              </div>
              <ul className=" text-xs text-white bg-black p-2 rounded-md font-semibold flex items-center justify-between gap-4">
                <li className=" text-xl">
                  <a href="https://x.com/Eche_codes?t=Wab7izpdS7-ewMqBV6TsVA&s=09">
                    𝕏
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Eche00">
                    <GitHub fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://portfolio-two-liard-34.vercel.app/">
                    <LinkOutlined fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.instagram.com/xeche_codes?igsh=dHdhdm80MWRsdTd2">
                    <Instagram fontSize="small" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*founder*/}
          <div className=" flex flex-col shadow-md hover:shadow-lg  translate-shadow overflow-hidden  rounded-lg w-full sm:w-[330px] ">
            <img
              className=" h-[320px] sm:h-[220px] w-full object-cover hover:scale-[105%] translate-scale duration-300"
              src={TestImg}
              alt=""
            />
            <div className=" p-2">
              <div className=" py-3 flex flex-col gap-2 ">
                <h2 className=" text-lg font-bold text-slate-700 truncate">
                  𝕏 Eche_codes
                </h2>
                <p className=" text-sm font-semibold text-slate-700  font-sans">
                  Front end Developer with a taste of Back end, HTML, CSS, JS,
                  REACT, TAILWIND, FIREBASE, NODE.JS
                </p>
              </div>
              <ul className=" text-xs text-white bg-black p-2 rounded-md font-semibold flex items-center justify-between gap-4">
                <li className=" text-xl">
                  <a href="https://x.com/Eche_codes?t=Wab7izpdS7-ewMqBV6TsVA&s=09">
                    𝕏
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Eche00">
                    <GitHub fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://portfolio-two-liard-34.vercel.app/">
                    <LinkOutlined fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.instagram.com/xeche_codes?igsh=dHdhdm80MWRsdTd2">
                    <Instagram fontSize="small" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*founder*/}
          <div className=" flex flex-col shadow-md hover:shadow-lg  translate-shadow overflow-hidden  rounded-lg w-full sm:w-[330px] ">
            <img
              className=" h-[320px] sm:h-[220px] w-full object-cover hover:scale-[105%] translate-scale duration-300"
              src={TestImg}
              alt=""
            />
            <div className=" p-2">
              <div className=" py-3 flex flex-col gap-2 ">
                <h2 className=" text-lg font-bold text-slate-700 truncate">
                  𝕏 Eche_codes
                </h2>
                <p className=" text-sm font-semibold text-slate-700  font-sans">
                  Front end Developer with a taste of Back end, HTML, CSS, JS,
                  REACT, TAILWIND, FIREBASE, NODE.JS
                </p>
              </div>
              <ul className=" text-xs text-white bg-black p-2 rounded-md font-semibold flex items-center justify-between gap-4">
                <li className=" text-xl">
                  <a href="https://x.com/Eche_codes?t=Wab7izpdS7-ewMqBV6TsVA&s=09">
                    𝕏
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Eche00">
                    <GitHub fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://portfolio-two-liard-34.vercel.app/">
                    <LinkOutlined fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.instagram.com/xeche_codes?igsh=dHdhdm80MWRsdTd2">
                    <Instagram fontSize="small" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*founder*/}
          <div className=" flex flex-col shadow-md hover:shadow-lg  translate-shadow overflow-hidden  rounded-lg w-full sm:w-[330px] ">
            <img
              className=" h-[320px] sm:h-[220px] w-full object-cover hover:scale-[105%] translate-scale duration-300"
              src={TestImg}
              alt=""
            />
            <div className=" p-2">
              <div className=" py-3 flex flex-col gap-2 ">
                <h2 className=" text-lg font-bold text-slate-700 truncate">
                  𝕏 Eche_codes
                </h2>
                <p className=" text-sm font-semibold text-slate-700  font-sans">
                  Front end Developer with a taste of Back end, HTML, CSS, JS,
                  REACT, TAILWIND, FIREBASE, NODE.JS
                </p>
              </div>
              <ul className=" text-xs text-white bg-black p-2 rounded-md font-semibold flex items-center justify-between gap-4">
                <li className=" text-xl">
                  <a href="https://x.com/Eche_codes?t=Wab7izpdS7-ewMqBV6TsVA&s=09">
                    𝕏
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Eche00">
                    <GitHub fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://portfolio-two-liard-34.vercel.app/">
                    <LinkOutlined fontSize="small" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.instagram.com/xeche_codes?igsh=dHdhdm80MWRsdTd2">
                    <Instagram fontSize="small" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Featured;
