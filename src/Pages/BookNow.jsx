import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Battery0Bar } from "@mui/icons-material";

import { Logo } from "../assets";

function BookNow() {
  const [state, setCourse] = useState(false);
  const [selectState, setSelectCourse] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    state: "Select State",
  });

  const exit = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <path
        d="M18 1L1.66666 17.3333M1.66666 1L18 17.3333"
        stroke="#333333"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.state === "Select State") {
      setSelectCourse(true);
      return;
    }
    try {
      let number = "+2347041729402";
      let url =
        "https://wa.me/" +
        number +
        "?text=" +
        "FullName: " +
        " " +
        formData.name +
        "%0a" +
        "State: " +
        " " +
        formData.state +
        "%0a";
      window.open(url, "_blank").focus();
    } catch (error) {}
    setSelectCourse(false);
    console.log(formData);
  };
  return (
    <div className="    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]  sm:pt-[0] pt-[80px]">
      <div className=" flex md:items-center justify-center  md:h-[100vh] h-[120vh] ">
        <div className=" flex flex-col items-center gap-[24px]">
          <div className=" w-fit border-[#FFFFFF] rounded-full border-8 border-b-blue-700">
            <img
              className=" w-[100px] h-[100px] object-cover rounded-full"
              src={Logo}
              alt=""
            />
          </div>
          <div className=" flex flex-col p-[32px] gap-[48px]  rounded-[10px] bg-transparent">
            <section className=" flex flex-col items-center justify-center text-center text-[#1A1A1ACC] md:gap-[12px] gap-[8px]">
              <h1 className=" md:text-[32px] text-[24px] font-[600]">
                Book us a now
              </h1>
              <p className=" md:text-[16px] text-[12px] font-[300] ">
                Hey 👋 Send us a message on Whatsapp to process <br /> your
                Booking. to be truly clean, think Peklyn!
              </p>
            </section>

            <form className=" flex flex-col gap-[24px]" onSubmit={handleSubmit}>
              <section className="flex flex-col gap-[10px]">
                <p className=" text-[#6B6F71] text-[12px] font-[500]">
                  Full Name
                </p>
                <input
                  className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                  type="text"
                  placeholder="Enter your full name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </section>
              <section className="flex flex-col gap-[10px]">
                <p className=" text-[#6B6F71] text-[12px] font-[500]">
                  Select State
                </p>
                <div
                  className=" py-[18px] px-[16px] text-[14px] font-[400] text-[#1A1A1A33] border border-[#C7D1D4] rounded-[10px] flex justify-between items-center relative"
                  type="button">
                  {formData.state}

                  <span
                    className="text-[#1A1A1ACC]"
                    onClick={() => setCourse(!state)}>
                    {" "}
                    {state ? (
                      <KeyboardArrowUpIcon fontSize="medium" />
                    ) : (
                      <KeyboardArrowDownIcon fontSize="medium" />
                    )}
                  </span>
                  {state && (
                    <div
                      className="absolute -left-[1px] -right-[1px] top-[50px] border border-[#C7D1D4] bg-[#FFFFFF] text-[12px] font-[500] text-[#1A1A1A99] rounded-b-[10px] overflow-scroll h-[200px]"
                      onClick={() => setCourse(!state)}>
                      {[
                        "Abia",
                        "Adamawa",
                        "Akwa Ibom",
                        "Anambra",
                        "Bauchi",
                        "Bayelsa",
                        "Benue",
                        "Borno",
                        "Cross River",
                        "Delta",
                        "Ebonyi",
                        "Edo",
                        "Ekiti",
                        "Enugu",
                        "Gombe",
                        "Imo",
                        "Jigawa",
                        "Kaduna",
                        "Kano",
                        "Katsina",
                        "Kebbi",
                        "Kogi",
                        "Kwara",
                        "Lagos",
                        "Nasarawa",
                        "Niger",
                        "Ogun",
                        "Ondo",
                        "Osun",
                        "Oyo",
                        "Plateau",
                        "Rivers",
                        "Sokoto",
                        "Taraba",
                        "Yobe",
                        "Zamfara",
                        "FCT Abuja",
                      ].map((state) => (
                        <button
                          key={state}
                          value={state}
                          type="button"
                          className="flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full overflow-scroll"
                          onClick={(e) =>
                            setFormData({ ...formData, state: e.target.value })
                          }>
                          <span>
                            <Battery0Bar />
                          </span>{" "}
                          {state}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {selectState && (
                  <p className=" text-[16px] font-bold text-red-500 ">
                    Please select a State
                  </p>
                )}
                <button className="py-[18px] px-[16px] rounded-[10px] text-white bg-blue-700 mt-[14px] cursor-pointer font-extrabold">
                  Book Now
                </button>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
