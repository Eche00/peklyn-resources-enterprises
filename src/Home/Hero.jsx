import React from "react";
import { TestImg } from "../assets";

function Hero() {
  return (
    <div className="    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]  pt-[100px]">
      <div className=" w-[95%] mx-auto ">
        {/* container  */}
        <div>
          {/* sections  */}
          <section className=" flex sm:items-center justify-between  sm:flex-row flex-col sm:py-[50px] pb-[30px]">
            <span className=" flex flex-1">
              <h1 className=" sm:text-[70px] text-[25px] sm:font-bold font-extrabold sm:leading-[80px]">
                {" "}
                Innovative <br /> technologies for
                <br /> Modern Construction
              </h1>
            </span>
            <span className=" flex flex-1 items-center justify-center object-cover">
              <img
                src={TestImg}
                className="w-[200px] h-[200px] rounded-full border-2 sm:flex hidden"
                alt=""
              />
            </span>
          </section>
          {/* sections 2  */}
          <section className="flex sm:flex-row flex-col">
            <div className=" flex flex-1">
              <img
                src={TestImg}
                className=" w-full rounded-[30px] sm:h-[400px] h-[300px] object-cover"
                alt=""
              />
            </div>
            <div className=" flex flex-1">
              <section className="sm:w-[80%] mx-auto flex flex-col justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className=" sm:text-[25px] text-[18px] sm:px-0 px-[10px] text-gray-700 sm:pt-0 pt-[10px] sm:font-normal font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere vitae error laboriosam autem placeat, sint corrupti
                    doloremque fugit nisi saepe inventore vel corporis atque
                    consequatur libero. Eos pariatur dignissimos reiciendis.
                  </p>
                  <ul className="   h-[80px] relative">
                    <img
                      src={TestImg}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white"
                      alt=""
                    />
                    <img
                      src={TestImg}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[40px]"
                      alt=""
                    />
                    <img
                      src={TestImg}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[80px]"
                      alt=""
                    />
                    <img
                      src={TestImg}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[120px]"
                      alt=""
                    />
                    <img
                      src={TestImg}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[160px]"
                      alt=""
                    />
                  </ul>
                </div>
                <div className="flex items-center sm:gap-[50px] gap-[20px]">
                  <button className=" bg-black py-4 rounded-full font-bold text-[16px] text-white w-full">
                    Book now
                  </button>
                  <button className=" border-2  py-4 rounded-full font-bold text-[16px]  w-full">
                    Call us
                  </button>
                </div>
              </section>
            </div>
          </section>
          {/* sections 3  */}
          <section className="flex items-center py-[30px] sm:w-[70%] mx-auto w-full  justify-between">
            <p className="font-bold  flex flex-col sm:text-4xl text-[20px] items-center ">
              <b> 500+</b>
              <span className=" sm:text-xl text-[14px] text-gray-700 text-center">
                Complete works
              </span>
            </p>
            <p className="font-bold  flex flex-col sm:text-4xl text-[20px] items-center ">
              <b> 500+</b>
              <span className=" sm:text-xl text-[14px] text-gray-700 text-center">
                Complete works
              </span>
            </p>
            <p className="font-bold  flex flex-col sm:text-4xl text-[20px] items-center ">
              <b> 500+</b>
              <span className=" sm:text-xl text-[14px] text-gray-700 text-center">
                Complete works
              </span>
            </p>
            <p className="font-bold  flex flex-col sm:text-4xl text-[20px] items-center ">
              <b> 500+</b>
              <span className=" sm:text-xl text-[14px] text-gray-700 text-center">
                Complete works
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
