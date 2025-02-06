import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { TestImg, google } from "../assets";
import { ArrowForward } from "@mui/icons-material";

function Reviews() {
  return (
    <div className=" overflow-scroll sm:my-20  my-10 relative">
      <span className=" sticky  top-0 ">
        <ArrowForward />
      </span>
      <div className=" flex gap-5 overflow-x-scroll w-fit ">
        <p></p>
        <div className="sm:w-[400px] w-[350px] max-h-[450px] bg-gray-200 p-10 rounded-md">
          <div className=" flex gap-2 items-center ">
            <img
              className=" w-[50px] h-[50px] rounded-full  object-cover"
              src={TestImg}
              alt=""
            />
            <p className=" flex flex-1 flex-col font-bold">
              Bruce Rainwater{" "}
              <span className=" text-xs text-gray-500 font-light">
                16-02-2024
              </span>
            </p>
            <img className=" w-[30px] h-[30px]" src={google} alt="" />
          </div>
          <p className=" flex flex-col ">
            <span className=" py-3 text-yellow-500">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            I’m proud to say that I’ve been a customer of Cutting Edge Escrow &
            Title Company since their 1st day of business. Speaking for my team,
            all of our customers are always made to feel welcome and treated in
            a very professional manner. Problem solving is appreciated and the
            service is always excellent. I wish every vendor had their core
            values.
          </p>
        </div>
        <div className=" sm:w-[400px] w-[350px] max-h-[450px] overflow-hidden bg-gray-200 p-10 rounded-md">
          <div className=" flex gap-2 items-center ">
            <img
              className=" w-[50px] h-[50px] rounded-full  object-cover"
              src={TestImg}
              alt=""
            />
            <p className=" flex flex-1 flex-col font-bold">
              Lara Alexander{" "}
              <span className=" text-xs text-gray-500 font-light">
                22-03-2024
              </span>
            </p>
            <img className=" w-[30px] h-[30px]" src={google} alt="" />
          </div>
          <p className=" flex flex-col">
            <span className=" py-3 text-yellow-500">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            The team at CEET makes every transaction as smooth and seamless as
            possible! Always a pleasure doing business with the CEET team!
          </p>
        </div>
        <div className=" sm:w-[400px] w-[350px] max-h-[450px] overflow-hidden bg-gray-200 p-10 rounded-md">
          <div className=" flex gap-2 items-center ">
            <img
              className=" w-[50px] h-[50px] rounded-full  object-cover"
              src={TestImg}
              alt=""
            />
            <p className=" flex flex-1 flex-col font-bold">
              Julie Beeson{" "}
              <span className=" text-xs text-gray-500 font-light">
                26-06-2022
              </span>
            </p>
            <img className=" w-[30px] h-[30px]" src={google} alt="" />
          </div>
          <p className=" flex flex-col">
            <span className=" py-3 text-yellow-500 flex">
              <p>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </p>

              <p className=" text-gray-400 p-0">
                <StarIcon />
              </p>
            </span>
            Cutting Edge Escrow & Title is fantastic to work with in every
            aspect of the real estate process. They are always prepared whenever
            I have closings, and constantly work to make things as easy and
            straightforward as possible. I would recommend them to ANYONE who
            needs a title company to work with regardless of if it’s
            residential, commercial and more.
          </p>
        </div>{" "}
        <div className=" sm:w-[400px] w-[350px] max-h-[450px] overflow-hidden bg-gray-200 p-10 rounded-md">
          <div className=" flex gap-2 items-center ">
            <img
              className=" w-[50px] h-[50px] rounded-full  object-cover"
              src={TestImg}
              alt=""
            />
            <p className=" flex flex-1 flex-col font-bold">
              Ashley Valerie{" "}
              <span className=" text-xs text-gray-500 font-light">
                28-06-2022
              </span>
            </p>
            <img className=" w-[30px] h-[30px]" src={google} alt="" />
          </div>
          <p className=" flex flex-col">
            <span className=" py-3 text-yellow-500">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            Always does a phenomenal job. Never once dropped the ball on dozens
            of transactions I have had with them.
          </p>
        </div>{" "}
        <div className=" sm:w-[400px] w-[350px] max-h-[450px] overflow-hidden bg-gray-200 p-10 rounded-md">
          <div className=" flex gap-2 items-center ">
            <img
              className=" w-[50px] h-[50px] rounded-full  object-cover"
              src={TestImg}
              alt=""
            />
            <p className=" flex flex-1 flex-col font-bold">
              Ryner Khalid{" "}
              <span className=" text-xs text-gray-500 font-light">
                12-07-2022
              </span>
            </p>
            <img className=" w-[30px] h-[30px]" src={google} alt="" />
          </div>
          <p className=" flex flex-col">
            <span className=" py-3 text-yellow-500">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            l used this company for a real estate closing transaction and the
            level of customer service was fantastic. Our escrow closer went
            above and beyond to help us close our transaction early. It went so
            smooth it was a real pleasure to work with this company.
          </p>
        </div>
        <div className=" sm:w-[400px] w-[350px] max-h-[450px] overflow-hidden bg-gray-200 p-10 rounded-md">
          <div className=" flex gap-2 items-center ">
            <img
              className=" w-[50px] h-[50px] rounded-full  object-cover"
              src={TestImg}
              alt=""
            />
            <p className=" flex flex-1 flex-col font-bold">
              Copper Mike{" "}
              <span className=" text-xs text-gray-500 font-light">
                22-09-2022
              </span>
            </p>
            <img className=" w-[30px] h-[30px]" src={google} alt="" />
          </div>
          <p className=" flex flex-col">
            <span className=" py-3 text-yellow-500 flex items-center">
              <p>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </p>

              <p className=" text-gray-400 p-0">
                <StarIcon />
              </p>
            </span>
            Without a doubt, Cutting Edge Escrow & Title Company is one of the
            best title and escrow companies you can work with in the country.
            They are so responsive and go above and beyond with their attention
            to detail and customer service. I fully trust that they will take
            care of my clients needs and make it the smoothest transaction they
            could possible have! I am so thankful for them always.
          </p>
        </div>{" "}
        <div className=" sm:w-[400px] w-[350px] max-h-[450px] overflow-hidden bg-gray-200 p-10 rounded-md">
          <div className=" flex gap-2 items-center ">
            <img
              className=" w-[50px] h-[50px] rounded-full  object-cover"
              src={TestImg}
              alt=""
            />
            <p className=" flex flex-1 flex-col font-bold">
              Lauren Bell{" "}
              <span className=" text-xs text-gray-500 font-light">
                20-01-2023
              </span>
            </p>
            <img className=" w-[30px] h-[30px]" src={google} alt="" />
          </div>
          <p className=" flex flex-col">
            <span className=" py-3 text-yellow-500">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            You all did a great job and thanks for all your help I have used
            Cutting Edge Escrow before & will use you again. Thanks so much!
          </p>
        </div>{" "}
        <div className=" sm:w-[400px] w-[350px] max-h-[450px] overflow-hidden bg-gray-200 p-10 rounded-md">
          <div className=" flex gap-2 items-center ">
            <img
              className=" w-[50px] h-[50px] rounded-full  object-cover"
              src={TestImg}
              alt=""
            />
            <p className=" flex flex-1 flex-col font-bold">
              Georgina Michaela{" "}
              <span className=" text-xs text-gray-500 font-light">
                24-03-2023
              </span>
            </p>
            <img className=" w-[30px] h-[30px]" src={google} alt="" />
          </div>
          <p className=" flex flex-col">
            <span className=" py-3 text-yellow-500">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            I am writing this short letter of appreciation to Cutting Edge
            Escrow & Title Company, and everyone involved in my short sale.
            Thank You for answering all my questions and concerns and bringing
            this close - it’s much appreciated!
          </p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Reviews;
