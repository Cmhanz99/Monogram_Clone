import React from "react";
import Subscription from "../components/Subscription";
import { quickLinks, helps, information } from "../data/footer";

const Heading = ({ title, data }) => {
  return (
    <div className="">
      <h2 className="mb-2 font-semibold uppercase text-[13px]">{title}</h2>
      <ul>
        {data.map((link) => (
          <li key={link.id} className="mt-2 text-[13px] cursor-pointer hover:underline">
            {link.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="md:h-70 h-auto md:p-0 p-5 w-full bg-blue-950 flex items-center justify-center">
      <div className="w-[90%] h-[70%] grid md:grid-cols-6 grid-cols-2 text-sm text-orange-100 gap-5 md:gap-0">
        <div className="w-1/2">
          <h2 className="mb-2 font-semibold uppercase text-[13px]">Monogram</h2>
          <p>305 King St. W. Suite 502 Kitchener, ON Canada</p>
        </div>
        <Heading title="Quick Links" data={quickLinks} />
        <Heading title="Help" data={helps} />
        <Heading title="Information" data={information} />
        <Subscription />
      </div>
    </footer>
  );
};

export default Footer;
