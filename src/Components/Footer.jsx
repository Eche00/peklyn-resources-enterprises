import {
  Facebook,
  Instagram,
  LocalGasStationOutlined,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" w-full bg-black  py-[50px]">
      {/* container  */}
      <footer className=" flex flex-col w-[95%] mx-auto text-white">
        {/* top section  */}
        <div className=" flex items-center justify-between flex-col sm:flex-row gap-[20px]">
          <h2 className=" sm:text-[30px] text-[18px] font-extrabold">
            Lorem ipsum dolor sit amet.
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
            <section className=" w-[150px] bg-white h-[40px] my-[10px]">
              <img src="" alt="" />
            </section>
            <p className="sm:w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur accusantium quis magnam harum quasi, incidunt culpa.
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
                <li className="flex flex-col">
                  123 preston Rd <span>Lagos, Nigeria</span>
                </li>
                <li>
                  (+234) <br className="sm:hidden flex" /> 704 172 9402
                </li>
                {/* <a href="mailto:echeze00@gmail.com">echeze00@gmail.com</a> */}
              </ul>
            </div>
          </section>
        </div>
        {/* bottom section  */}
        <div className="py-[20px] flex sm:items-center justify-between">
          <h2 className=" font-bold text-[14px]  sm:text-start ">
            © Service name 2025
          </h2>
          <section className=" flex items-center sm:justify-end justify-between gap-[20px]">
            <Link className=" font-bold text-[14px]  sm:flex hidden">
              Contact support
            </Link>
            <Link className=" font-bold text-[14px] ">Contact support</Link>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
