import React from "react";
import { FaRegStar } from "react-icons/fa";

export default function ProductItem(props) {
  const { product, index } = props;
  return (
    <li
      className="
    grid grid-cols-12 w-full gap-15 
    max-[1500px]:flex max-[1500px]:flex-col max-[1500px]:gap-10
  "
    >
      {/* Bloque imágenes */}
      <div
        className={`
      grid grid-cols-2 col-span-6 gap-5 
      ${index % 2 === 1 ? "order-2" : "order-1"} 
      max-[1500px]:order-2
    `}
      >
        <div className="col-span-1">
          <img
            src={product.images[0]}
            alt=""
            className="rounded-xl border border-zinc-200 shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1">
          <img
            src={product.images[1]}
            alt=""
            className="rounded-xl border border-zinc-200 shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 bg-[#060E25] text-white p-8 rounded-2xl">
          <div className="flex justify-between items-center">
            <div className="gap-1 grid">
              <p className="text-xl font-semibold">{product.title}</p>
              <p className="text-md">{product.subtitle}</p>
            </div>
            <p className="text-5xl">
              <FaRegStar />
            </p>
          </div>
        </div>
      </div>

      {/* Bloque texto */}
      <div
        className={`
      w-full col-span-6 flex flex-col justify-center gap-7 
      ${index % 2 === 1 ? "order-1" : "order-2"}
      max-[1500px]:order-1
    `}
      >
        <h1 className="text-4xl text-[#060E25] tracking-widest font-semibold">
          {product.title}
        </h1>
        <span>{product.description}</span>
        <ul>
          {product.description_items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#060E25] rounded-full"></div> {item}
            </li>
          ))}
        </ul>
        <div className="flex">
          <a
            href="../../assets/pdf/ficha.pdf"
            className="bg-[#060E25] p-3 text-white rounded-lg flex items-center gap-2"
            download
          >
            <span>Ficha técnica</span>
          </a>
        </div>
      </div>
    </li>
  );
}
