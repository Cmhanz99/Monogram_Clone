import React from "react";
import { icons } from "../data/footer";

const Subscription = () => {
  return (
    <div className="col-span-2">
      <h2 className="mb-2 font-semibold uppercase text-[13px]">
        Subscribe to monogram
      </h2>
      <p>
        Master productivity with Creative Console and get all the latest
        Monogram news.
      </p>
      <div className="flex gap-3 mt-2">
        <input type="text" placeholder="Email Address" className="border p-2" />
        <button className="bg-orange-100 text-black font-semibold py-1 px-6 rounded-full cursor-pointer">
          Submit
        </button>
      </div>
      <div className="flex mt-3 gap-2">
        {icons.map((item) => (
          <item.icon
            key={item.id}
            className="text-3xl p-1 rounded-full bg-orange-100 text-blue-950 cursor-pointer"
          />
        ))}
      </div>
      <p className="mt-2">© Monogram 2025</p>
    </div>
  );
};

export default Subscription;
