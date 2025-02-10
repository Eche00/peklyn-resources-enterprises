import { Close, Home } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed top-0 w-full bg-white/50 backdrop-blur-sm z-50">
      {/* Container  */}
      <div className=" w-[95%] mx-auto flex items-center justify-between sm:py-[20px] py-[10px]">
        {/* first section  */}
        <section className=" w-[150px] bg-black h-[40px]">
          <img src="" alt="" />
        </section>

        {/* second section  */}
        <ul className=" sm:flex hidden items-center gap-[15px] text-[14px] font-bold text-gray-800 ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
            Contact
          </NavLink>
        </ul>

        {/* third section  */}
        <section className="sm:flex hidden">
          <Link
            to="/book"
            className=" rounded-full bg-black py-3 px-6 text-[14px] font-bold text-white">
            Book now
          </Link>
        </section>

        <section className=" flex flex-col sm:hidden">
          {/* menu  */}
          <button
            className=" font-bold text-[30px] sm:hidden flex px-[5px]"
            onClick={() => setNav(true)}>
            &#9776;
          </button>
          {nav && (
            <div className="flex sm:hidden fixed w-full top-0 left-0 bg-black/50 backdrop-blur-sm h-[100vh] ">
              <section className=" bg-white w-[70%] h-full  ml-auto px-[20px] py-[10px] relative overflow-hidden   flex justify-between">
                <div className=" flex flex-col  text-[14px] font-[600] gap-[20px]  w-full z-50  justify-between">
                  {/* logo  */}

                  <nav className=" flex flex-col  text-[14px] font-[600] gap-[40px] pb-[40px] z-50 border-b-[0.5px] border-black h-fit w-[70%] pt-[50px]">
                    <>
                      <NavLink
                        to="/"
                        onClick={() => setNav(!nav)}
                        className={({ isActive }) =>
                          isActive
                            ? "   font-bold text-blue-600 flex items-center justify-between"
                            : "  flex items-center justify-between"
                        }>
                        <span className="text-sm">Home</span> <Home />
                      </NavLink>
                      <NavLink
                        to="/about"
                        onClick={() => setNav(!nav)}
                        className={({ isActive }) =>
                          isActive ? "   font-bold text-blue-600" : "  "
                        }>
                        <span className="text-sm">About</span>
                      </NavLink>
                      <NavLink
                        to="/services"
                        onClick={() => setNav(!nav)}
                        className={({ isActive }) =>
                          isActive ? "   font-bold text-blue-600" : "  "
                        }>
                        <span className="text-sm">Services</span>
                      </NavLink>
                      <NavLink
                        to="/contact"
                        onClick={() => setNav(!nav)}
                        className={({ isActive }) =>
                          isActive ? "   font-bold text-blue-600" : "  "
                        }>
                        <span className="text-sm">Contact</span>
                      </NavLink>
                    </>
                  </nav>

                  <section className=" flex flex-col justify-between h-full ">
                    <div>
                      <section className=" flex flex-col justify-between h-full ">
                        <Link
                          to="/book"
                          className=" py-[5px] px-[10px] border opacity-90 rounded-[5px] max-w-[70%] text-center">
                          Book now
                        </Link>
                      </section>
                    </div>
                  </section>
                  <p className=" text-sm font-serif capitalize">
                    Cleaning service
                  </p>
                </div>
                <span className="  z-50  " onClick={() => setNav(!nav)}>
                  <Close fontSize="medium" />
                </span>
              </section>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Header;
