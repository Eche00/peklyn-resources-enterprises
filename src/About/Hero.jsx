import React from "react";
import {
  aboutHeroImg1,
  aboutHeroImg2,
  aboutHeroImg3,
  cleanImg1,
  cleanImg2,
  cleanImg3,
  cleanImg4,
  cleanImg5,
  TestImg,
} from "../assets";
import {
  CleaningServicesOutlined,
  ExitToApp,
  People,
  Timelapse,
} from "@mui/icons-material";

function Hero() {
  return (
    <div className="    bg-gray-100 sm:py-[150px] py-[100px]">
      <div className=" w-[95%] mx-auto ">
        {/* container  */}
        <div>
          {/* sections  */}

          <section className="flex sm:flex-row flex-col sm:gap-0 gap-[50px] py-[50px]">
            <div className=" flex flex-1 relative">
              <div className=" w-full rounded-[30px] sm:h-[200px] h-[300px]  bg-gray-100"></div>
              {/* top left  */}
              <img
                src={aboutHeroImg1}
                className="absolute  w-[50%] rounded-[30px] h-[70%] border-[15px] border-gray-100 object-cover left-[20px] bottom-1/2 z-40 "
                alt=""
              />
              {/* top right  */}
              <img
                src={aboutHeroImg2}
                className="absolute  sm:w-[40%] w-[40%] rounded-full sm:h-[60%] h-[50%] border-[15px] border-gray-100 object-cover sm:right-[50px] right-[30px] bottom-1/2 z-40 "
                alt=""
              />
              {/* bottom left  */}
              <div className="absolute  w-[50%] sm:rounded-[70px] rounded-[30px] h-[70%] border-[15px] border-gray-100 object-cover left-[-20px] top-1/3 bg-blue-700 shadow-md flex items-center justify-center">
                {" "}
                <p className=" m-0 p-0 sm:text-4xl text-2xl font-extrabold font-serif text-white">
                  2yrs +
                </p>
              </div>
              {/* bottom  right  */}
              <img
                src={aboutHeroImg3}
                className="absolute  w-[50%] rounded-[30px] h-[70%] border-[15px] border-gray-100 object-cover right-[20px] top-1/2"
                alt=""
              />
            </div>
            <div className=" flex flex-1">
              <section className="sm:w-[80%] mx-auto flex flex-col justify-between">
                <div className="flex flex-col gap-[10px]">
                  <h1 className=" sm:text-[30px] text-[18px] sm:px-0 px-[10px] text-black sm:pt-0 pt-[20px] font-bold">
                    Welcome to PEKLYNRESOURCES
                  </h1>
                  <span className=" h-1 w-[30%] bg-blue-600 rounded-full"></span>
                  <p className=" sm:text-[20px] text-[16px] sm:px-0 px-[10px] text-gray-700 sm:pt-0 pt-[10px] sm:font-normal font-light">
                    We offer top-notch cleaning solutions designed to meet all
                    your needs. Our dedicated team is committed to providing
                    exceptional service, ensuring that your space is spotless
                    and inviting. We take pride in our attention to detail,
                    handling each task with care and precision. Whether it's
                    your home or office, you can trust us to deliver outstanding
                    results, leaving your environment fresh and clean.
                    Experience the convenience of a trusted cleaning partner
                    that you can rely on every time!
                  </p>
                  <ul className="   h-[80px] relative">
                    <img
                      src={cleanImg1}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white object-cover"
                      alt=""
                    />
                    <img
                      src={cleanImg2}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[40px] object-cover"
                      alt=""
                    />
                    <img
                      src={cleanImg3}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[80px] object-cover"
                      alt=""
                    />
                    <img
                      src={cleanImg4}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[120px] object-cover"
                      alt=""
                    />
                    <img
                      src={cleanImg5}
                      className="w-[60px] h-[60px]  rounded-full absolute top-0 border-2 border-white left-[160px] object-cover"
                      alt=""
                    />
                  </ul>
                </div>
                <section className=" flex sm:flex-row flex-col gap-[10px]">
                  {/* each box */}
                  <div className="border-2 rounded-[20px] flex flex-1 p-[20px]  flex-col gap-[30px]">
                    <span className=" border-2 rounded-full p-3 w-fit ">
                      <People />
                    </span>
                    <article>
                      <h2 className="  text-[16px] sm:font-bold font-extrabold sm:leading-[20px]">
                        HIGHLY-TRAINED STAFF
                      </h2>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Natus repellendus cumque
                      </p>
                    </article>
                  </div>
                  {/* each box */}
                  <div className="border-2 rounded-[20px] flex flex-1 p-[20px]  flex-col gap-[30px]">
                    <span className=" border-2 rounded-full p-3 w-fit ">
                      <CleaningServicesOutlined />
                    </span>
                    <article>
                      <h2 className="  text-[16px] sm:font-bold font-extrabold sm:leading-[20px]">
                        QUALITY CLEANING TOOLS
                      </h2>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Natus repellendus cumque
                      </p>
                    </article>
                  </div>
                  <div className="border-2 rounded-[20px] flex flex-1 p-[20px]  flex-col gap-[30px]">
                    <span className=" border-2 rounded-full p-3 w-fit ">
                      <Timelapse />
                    </span>
                    <article>
                      <h2 className="  text-[16px] sm:font-bold font-extrabold sm:leading-[20px]">
                        FAST & EFFECTIVE SERVICE
                      </h2>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Natus repellendus cumque
                      </p>
                    </article>
                  </div>
                </section>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
