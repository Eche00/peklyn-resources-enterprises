import {
  Facebook,
  Instagram,
  LocalGasStationOutlined,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

function Footer() {
  return (
    <div className=" w-full bg-black  py-[50px]">
      {/* container  */}
      <footer className=" flex flex-col w-[95%] mx-auto text-white">
        {/* top section  */}
        <div className=" flex items-center justify-between flex-col sm:flex-row gap-[20px]">
          <h2 className=" sm:text-[30px] text-[18px] font-extrabold font-serif">
            to be truly clean, think{" "}
            <span className=" text-blue-600">Peklyn</span>
          </h2>
          <section className=" bg-white rounded-full p-[5px]">
            <input
              type="text"
              className=" outline-none text-black py-2 px-[10px]"
            />{" "}
            <button className=" bg-blue-600 py-3 px-6 rounded-full">
              Subscribe
            </button>
          </section>
        </div>

        {/* middle section  */}
        <div className=" flex py-[20px] sm:flex-row flex-col justify-between border-b-2 border-gray-300">
          <section className="flex flex-col flex-1 ">
            <section className=" w-[150px] bg-blue-700 object-cover overflow-hidden">
              <img
                className=" h-[60px] w-full object-cover border-none"
                src={Logo}
                alt=""
              />
            </section>
            <p className="sm:w-[400px]">
              PEKLYNRESOURCES ENTERPRISES is an indiginous agency with a class
              of highly trained and equipped professionals registred to carry
              out cleaning and fugimation services
            </p>
            <article className=" flex gap-[10px] list-disc list-inside py-[10px]">
              <span className=" bg-blue-600 p-[7px] rounded-full">
                <Facebook />
              </span>
              <span className=" bg-blue-600 p-[7px] rounded-full">
                <Instagram />
              </span>
              <span className=" bg-blue-600 p-[7px] rounded-full">
                <WhatsApp />
              </span>
            </article>
          </section>
          <section className="flex flex-col flex-1  sm:px-0 px-[10px] pt-[20px] sm:pt-0">
            <div className=" flex sm:flex-row flex-wrap gap-[20px] justify-between">
              <section className="flex flex-col gap-[10px] text-[14px]">
                <b className="text-[16px] font-extrabold pb-[5px]">
                  Navigation
                </b>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
              </section>
              <ul className="flex flex-col gap-[10px] text-[14px]">
                <b className="text-[16px] font-extrabold pb-[5px]">
                  Utility Page
                </b>
                <li>About</li>
                <li>Services</li>
                <li>Support</li>
              </ul>
              <ul className="flex flex-col gap-[10px] text-[12px] sm:text-[14px]">
                <b className="text-[16px] font-extrabold pb-[5px]">Contact</b>
                <li className="flex flex-col sm:text-[16px] text-[12px]">
                  153 Shagari Quarters new Layout, Deidel{" "}
                  <span>FCT, Abuja</span>
                </li>
                <li>(+234) 817 927 5757</li>

                <a
                  className=" sm:text-[16px] text-[12px]"
                  href="mailto:echeze00@gmail.com">
                  peklynservice@gmail.com
                </a>
              </ul>
            </div>
          </section>
        </div>
        {/* bottom section  */}
        <div className="py-[20px] flex sm:items-center justify-between sm:flex-row flex-col gap-[10px]">
          <h2 className=" font-bold text-[14px]  sm:text-start  ">
            © PEKLYNRESOURCES ENTERPRISES 2025
          </h2>
          <section className=" flex items-center sm:justify-end justify-between gap-[20px]">
            <p className=" font-bold text-[14px] ">
              Built and published by eche_codes
            </p>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
