import Image from "next/image";
import React from "react";
import { featuredProducts } from "./data";
import Link from "next/link";

const Featured = () => {
  return (
    <div className="container w-screen overflow-x-scroll scroll-snap-type-x scroll-snap-align-center text-red-500">
      {/* wrapper */}
      <div className="w-max flex">
        {/* single item meal */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-100 transition-all duration-500 md:w-[50vw] xl:w-[27vw] xl:h-[90vh]"
          >
            {/* img container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-700">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* text container .. caption of meal and its price */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-5">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-5 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md  hover:bg-red-600 hover:text-xl transition-all duration-700">
                
                <Link href="/menu">go to menu</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;