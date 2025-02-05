import { ExitToApp } from "@mui/icons-material";
import { Toolbar } from "@mui/material";
import React from "react";

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
          <div className="border-2 rounded-[20px] flex flex-1 p-[20px]  flex-col gap-[30px] bg-black border-black ">
            <span className=" border-2 rounded-full p-3 w-fit  bg-white text-black">
              <ExitToApp />
            </span>
            <article>
              <h2 className=" sm:text-[20px] text-[23px] sm:font-bold font-extrabold sm:leading-[20px] text-white">
                Building Renovation
              </h2>
              <p className=" text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                repellendus cumque
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
            <span className=" border-2 rounded-full p-3 w-fit ">
              <ExitToApp />
            </span>
            <article>
              <h2 className=" sm:text-[20px] text-[23px] sm:font-bold font-extrabold sm:leading-[20px]">
                Building Renovation
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                repellendus cumque
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
            <span className=" border-2 rounded-full p-3 w-fit ">
              <ExitToApp />
            </span>
            <article>
              <h2 className=" sm:text-[20px] text-[23px] sm:font-bold font-extrabold sm:leading-[20px]">
                Building Renovation
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                repellendus cumque
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
            <span className=" border-2 rounded-full p-3 w-fit ">
              <ExitToApp />
            </span>
            <article>
              <h2 className=" sm:text-[20px] text-[23px] sm:font-bold font-extrabold sm:leading-[20px]">
                Building Renovation
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                repellendus cumque
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
