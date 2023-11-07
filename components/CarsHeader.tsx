import Image from "next/image";
import React from "react";
import CarsList from "./CarsList";

const CarsHeader = () => {
  return (
    <>
      <section className="flex max-lg:text-center  max-lg:flex-col max-w-screen-xxl xxl:mx-auto paddings justify-center items-center mt-5">
        <div>
          <h2 className="h1-heading  tracking-tighter">
            Buy Your Dream Car at
            <br />
            <span className="!font-bold"> Apna </span>
            <span className="text-prime !font-bold">Car</span>{" "}
            <span className="!font-bold"> Bazar</span>
          </h2>
          <p className="para-1 w-1/2  max-lg:text-center   max-lg:w-full ">
            Discover a world of classic cars. Buy, sell, and trade your way at
            Apna Car Bazar. Your road, your rules
          </p>
        </div>
        <div className="relative isolate">
          <span className=" absolute top-0 left-0 z-[-1]">
            <Image
              src="/assets/images/background-blob.svg"
              height={700}
              width={1200}
              alt="background-blob"
              className=""
            />
          </span>

          <Image
            src="/assets/images/car-head.png"
            width={500}
            height={500}
            alt="Car"
            className="relative z-[1]"
          />
        </div>
      </section>
     
    </>
  );
};

export default CarsHeader;
