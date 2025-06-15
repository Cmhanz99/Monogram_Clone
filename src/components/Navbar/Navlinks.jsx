import React from "react";
import { navdatas } from "../../data/navdata";

const Navlinks = ({ flex, gap }) => {
  return (
    <div className={`flex ${flex} ${gap}`}>
      {navdatas.map((navlink) => (
        <a
          key={navlink.id}
          href={navlink.link}
          className={`uppercase text-[14px] font-thin flex items-center gap-1 hover:underline`}
        >
          {navlink.title}
          {navlink.icons && <navlink.icons className="text-white text-xl" />}
        </a>
      ))}
    </div>
  );
};

export default Navlinks;
