import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {/* maskers */}
        {["We Create", "Eyes-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-baseline overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: "0vw" }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[4.1vw] bg-red-500"
                  ></motion.div>
                )}
                <h1 className="uppercase text-7xl leading-[5.3vw] tracking-tighter font-bold font-['Founders Grotest'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex items-center justify-between py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light capitalize text-md cursor-pointer">
            Start the Project
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center cursor-pointer">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
