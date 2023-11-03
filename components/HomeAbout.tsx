import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAbout = () => {
  return (
    <section className="w-[90%] max-sm:w-full">
      <div className="flex flex-col justify-around max-w-screen-xxl mx-auto">
      <div className="bg-dark-secondary flex max-lg:flex-col   mx-auto items-center justify-center w-full paddings">
        <div className=" ">
          <h3 className="h1-heading">About <span className="font-bold"> Apna Car Bazar </span></h3>
          <p className="para-2 max-w-7xl ">
            Apna Car Bazar is your destination for discovering a wide range of
            old cars that tell unique stories. Whether you're looking to buy a
            classic beauty or part with a beloved vehicle, we provide a platform
            where enthusiasts and sellers come together.
            <br />
            <br />
            Explore our collection,
            find the car that speaks to you, and trade on your terms. Your road,
            your rules – start your journey with Apna Car Bazar today.
          </p>
          <Link
              href="/cars"
              className="rounded-full w-fit  mt-11 text-white  bg-prime flex px-5 py-3"
            >
             Explore
              <Image
                src="/assets/icons/arrow 1.svg"
                className="ml-2 "
                height={15}
                width={18}
                alt="Arrow"
              />
            </Link>
        </div>
        <div className="h-full   ">
          <Image src="/assets/icons/logo.svg" height={500} width={500} alt="logo" /> 
        </div>
      </div>

      <div className="bg-dark-secondary mt-12 flex max-lg:flex-col  max-w-screen-2xl mx-auto items-center justify-center w-full paddings">
        <div className=" ">
          <h3 className="h1-heading">Finance Available For All The Banks</h3>
          <p className="para-2 max-w-7xl ">
            Apna Car Bazar is your destination for discovering a wide range of
            old cars that tell unique stories. Whether you're looking to buy a
            classic beauty or part with a beloved vehicle, we provide a platform
            where enthusiasts and sellers come together.
            <br />
            <br />
            Explore our collection,
            find the car that speaks to you, and trade on your terms. Your road,
            your rules – start your journey with Apna Car Bazar today.
          </p>
          <Link
              href="/cars"
              className="rounded-full w-fit  mt-11 text-white  bg-prime flex px-5 py-3"
            >
             Explore
              <Image
                src="/assets/icons/arrow 1.svg"
                className="ml-2 "
                height={15}
                width={18}
                alt="Arrow"
              />
            </Link>
        </div>
        <div className="h-full   ">
          <Image src="/assets/icons/logo.svg" height={500} width={500} alt="logo" /> 
        </div>
      </div>
          
      </div>
    
    </section>
  );
};

export default HomeAbout;
