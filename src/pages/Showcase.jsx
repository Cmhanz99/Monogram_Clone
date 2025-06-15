import React from "react";
import Product from "../components/Product";

const Showcase = ({grid}) => {
  return (
    <section className="w-full h-auto bg-white flex flex-col   items-center justify-center mt-10">
      <Product grid={grid}/>
      <div className="p-10"></div>
    </section>
  );
};

export default Showcase;
