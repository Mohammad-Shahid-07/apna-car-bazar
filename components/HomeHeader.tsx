import Image from "next/image";
import React from "react";
import HeroCarousel from "./HeroCarousel";

const HomeHeader = () => {
  const images = [
    "/assets/images/home3.jpg",
    "/assets/images/home2.jpg",
    "/assets/images/home1.jpg",
    "/assets/images/home4.jpg",
    "/assets/images/home5.jpg",
  ];
  return (
    <section className="flex  flex-col justify-center items-center mt-5">
      <div>
        <h2 className="h1-heading text-center">
          Used <span className="text-prime !font-bold"> Car</span> Buy &
          <span className="text-prime !font-bold">
            <br /> Sell
          </span>{" "}
        </h2>
        <p className="para-1 w-1/2 text-center mx-auto">
          Discover a wide range of certified old cars for sale in Ajmer. Sell
          Your Used Car In Just 1 Day From The Comfort Of Your Home. Find the
          best deals on second-hand cars at Apna Car Bazar.
        </p>
      </div>
      <div className="">
        <HeroCarousel images={images} />
      </div>
      <div className="flex paddings gap-8  max-md:flex-col flex-wrap justify-center items-center   leading-8 ">
        <div className="text-center pr-8 max-md:pt-5 max-md:border-t-2 md:border-r-2 border-gray-700 w-[250px]">
          <Image
            src="/assets/icons/cup-first.svg"
            height={50}
            width={50}
            className="mx-auto"
            alt="First trophy Cup"
          />
          <p className="para1 !bold !text-white">The Best Used Cars</p>
          <p className="para-1">
            We guarantee top-quality cars for your peace of mind.
          </p>
        </div>
        <div className="text-center  gap-5  max-md:pt-5  max-md:border-t-2 md:border-r-2 border-gray-700  w-[250px]">
          <Image
            src="/assets/icons/bestprice.svg"
            height={50}
            width={50}
            className="mx-auto"
            alt="First trophy Cup"
          />
          <p className="para1 !bold !text-white">Best Price</p>
          <p className="para-1">Get the lowest prices in ajmer for old cars</p>
        </div>
        <div className=" text-center max-md:pt-5 border-gray-700  max-md:border-t-2  w-[250px]">
          <Image
            src="/assets/icons/bank.svg"
            height={50}
            width={50}
            className="mx-auto"
            alt="First trophy Cup"
          />
          <p className="para1 !bold !text-white">Flexibale Car Loans</p>
          <p className="para-1 ">
            Get the best deals that won't break the bank.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
