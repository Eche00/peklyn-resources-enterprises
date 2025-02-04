import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";

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

        {/* bottom section  */}
        <div className=" flex py-[20px] sm:flex-row flex-col">
          <section className="flex flex-col flex-1">
            <section className=" w-[150px] bg-white h-[40px]">
              <img src="" alt="" />
            </section>
            <p className="sm:w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur accusantium quis magnam harum quasi, incidunt culpa,
              cupiditate sed dolorum deserunt dolore doloribus minus sequi
              necessitatibus nihil quam eum voluptatem ullam.
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
          <section className="flex flex-col flex-1">2</section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
