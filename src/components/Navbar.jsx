import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      <div className="logo text-xl cursor-pointer">ochii</div>
      <div className="links flex gap-10 text-white">
        {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-xl capitalize font-light cursor-pointer ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
