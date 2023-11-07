import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAbout = () => {
  return (
    <section className="w-[90%] max-sm:w-full">
      <div className="flex flex-col justify-around max-w-screen-xxl mx-auto">
        <div className="bg-dark-secondary flex max-lg:flex-col   mx-auto items-center justify-center w-full paddings">
          <div className=" ">
            <h3 className="h1-heading">
              About <span className="font-bold"> Apna Car Bazar </span>
            </h3>
            <p className="para-2 max-w-7xl ">
              Apna Car Bazar is your destination for discovering a wide range of
              old cars that tell unique stories. Whether you're looking to buy a
              classic beauty or part with a beloved vehicle, we provide a
              platform where enthusiasts and sellers come together.
              <br />
              <br />
              Explore our collection, find the car that speaks to you, and trade
              on your terms. Your road, your rules – start your journey with
              Apna Car Bazar today.
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
            <Image
              src="/assets/icons/logo.svg"
              height={500}
              width={500}
              alt="logo"
            />
          </div>
        </div>

        <div className="bg-dark-secondary mt-12 flex max-lg:flex-col  max-w-screen-2xl mx-auto items-center justify-center w-full paddings">
          <div className=" ">
            <h3 className="h1-heading">
              Finance Options Available with Leading Banks
            </h3>
            <p className="para-1 max-w-7xl ">
              Discover a world of financial possibilities with Apna Car Bazar.
              We've partnered with some of the most reputable banks to offer you
              attractive financing options for your dream car. Whether you're
              eyeing a classic beauty or a modern marvel, we've got your
              financing needs covered.
            </p>
            <br />
            <br />
            <p className="para-2 max-w-7xl">
              {" "}
              Our trusted bank partners include:
            </p>
            <ul className="list-decimal para-1 !font-bold mb-5">
              <li>AU Bank</li>
              <li>Mahindra Finance</li>
              <li>IDFC Bank</li>
              <li>Kogta Bank</li>
              <li>And More...</li>
            </ul>
            <p className="para-1 max-w-7xl ">
              {" "}
              With these banks, you can enjoy up to 90% financing at the lowest
              interest rates. The application process is incredibly easy,
              ensuring a seamless experience.
              <br />
              <br />
              Don't miss out on your dream car – take advantage of our
              competitive financing options today.
            </p>
          </div>
          <div className="h-full   ">
            <Image
              src="/assets/images/banks.png"
              height={500}
              width={700}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-dark-secondary mt-12 flex flex-col  max-w-screen-2xl mx-auto items-center justify-center w-full paddings">
          <h4 className="h1-heading">Find Us Now</h4>
          <div className="relative w-full max-h-80 max-w-80  aspect-square ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.019708679844!2d74.6698647752796!3d26.487310276903283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6650a5e0bad%3A0xfa00da1f9e454a7b!2sApna%20Car%20Bazaar!5e0!3m2!1sen!2sin!4v1699341537786!5m2!1sen!2sin"
            
              loading="lazy"
              className=" w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
