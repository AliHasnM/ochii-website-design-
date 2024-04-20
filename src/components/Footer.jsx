import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900 p-20 font-['Founders Grotesk']">
      <div className="flex flex-col justify-between h-full w-1/2">
        <div className="heading">
          <h1 className="text-[6.5vw] uppercase leading-none tracking-tighter -mb-4 font-semibold">
            Eye-
          </h1>
          <h1 className="text-[6.5vw] uppercase leading-none tracking-tighter -mb-4 font-semibold">
            Opening
          </h1>
        </div>
        <h3 className="text-2xl leading-none tracking-tight">ochii</h3>
      </div>
      <div className="w-1/2">
        <h1 className="text-[6.5vw] uppercase leading-none tracking-tighter -mb-4 font-semibold">
          Presentation
        </h1>
        <div className="flex justify-between">
          <div className="details font-[Neue Montreal] mt-20">
            <a className="block text-xl" href="#">
              Facebook
            </a>
            <a className="block text-xl" href="#">
              Instagram
            </a>
            <a className="block text-xl" href="#">
              Twitter
            </a>
          </div>
          <div className="details font-[Neue Montreal] mt-20">
            <a className="block text-xl" href="#">
              Facebook
            </a>
            <a className="block text-xl" href="#">
              Instagram
            </a>
            <a className="block text-xl" href="#">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
