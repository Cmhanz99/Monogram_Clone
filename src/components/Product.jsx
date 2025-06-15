import React from "react";
import { products } from "../data/products";

const ProductCard = ({ product }) => {
  return (
    <div className={`${product.col} col-span-1 flex flex-col md:gap-2 relative`}>
      <div className="bg-red-400 py-1 px-3 absolute right-0 top-5 uppercase md:text-sm text-[14px]">
        {product.badge}
      </div>
      <img src={product.img} className="max-h-[400px] w-full object-cover" />
      <div className="flex justify-between items-center">
        <h2 className="md:text-xl text-sm font-semibold uppercase md:tracking-[.2rem] tracking-[0px]">
          {product.title}
        </h2>
        <p className="text-gray-400">{product.status}</p>
      </div>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
};

const Product = ({grid}) => {
  return (
    <div className={`w-[90%] h-full grid lg:grid-cols-${grid} md:grid-cols-${grid} grid-cols-1 gap-5 md:gap-10`}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Product;
