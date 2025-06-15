import React from "react";

const Headings = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-semibold tracking-[.2rem] text-blue-950 uppercase">
        Create Your Own Console
      </h2>
      <p className="mt-6 tracking-[.1rem] text-blue-950">
        Add-on to make it perfect.
      </p>
    </div>
  );
};

const AddonsSection = () => {
  return (
    <section className="w-full md:h-screen h-80 bg-white flex items-center justify-center">
      <div className="w-full md:h-[90%] h-[90%]" style={{ background: `url(/bg-2.webp)` }}>
        <Headings />
      </div>
    </section>
  );
};

export default AddonsSection;
