import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-section
      data-scroll-speed="0.1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden"
    >
      <div className="text border-b-2 border-t-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw] leading-none font-['Founders Grotest'] font-semibold uppercase pr-20"
        >
          We are ochii
        </motion.h1>
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw] leading-none font-['Founders Grotest'] font-semibold uppercase pr-20"
        >
          We are ochii
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
