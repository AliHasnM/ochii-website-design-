import React from "react";
import image from "../assets/image.jpg";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue Montreal'] text-6xl leading-[4.5vw] tracking-tighter">
        Ochi is a strategic partner for fast-growing tech business that need to
        raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex border-t-[2px] border-[#cadc90] mt-20 pt-10">
        <div className="w-1/2 mt-10">
          <h1 className="text-6xl font-['Neue Montreal'] font-semibold leading-3 tracking-tighter">
            Our Approach
          </h1>
          <button className="flex items-center gap-6 uppercase px-6 py-4 mt-12 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[58vh] mt-10 ml-5 overflow-hidden rounded-2xl bg-[#b0c859]">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
