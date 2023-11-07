import ContactForm from "@/components/ContactForm";
import HeroCarousel from "@/components/HeroCarousel";
import { getCarById } from "@/lib/cars.actions";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}
type Car = {
  _id: string;
  name: string;
  images: [string];
  price: string;
  manufacturingYear: string;
  owner: string;
  priceNegotiable: boolean;
  fuel: string;
  kilometers: string;
};
const CarDetails = async ({ params }: PageProps) => {
  const { id } = params;
  const car = await getCarById(id);
  
  

 
  
  return (
    <>
    <section className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto mt-5 p-4">
    <div className="lg:w-1/2 h-fit p-4">
      {car.images && <HeroCarousel images={car.images} />}
    </div>
    <div className="lg:w-1/2 p-4">
      <h1 className="h1-heading ">{car.name}</h1>
      <div className="bg-[#629650] text-[#8FFF00] w-fit px-2 py-3 mb-5 flex rounded">
        <Image src="/assets/icons/tag-price.svg" height={50} width={25} alt="price-tag" />
        <p className="font-bold ml-2">₹ {car.price}</p>
      </div>
      <div className="space-y-4 para-2">
        <div className="flex justify-between">
          <p>Manufacturing Year:</p>
          <p>{car.manufacturingYear}</p>
        </div>
        <div className="flex justify-between">
          <p>Owner:</p>
          <p>{car.owner}</p>
        </div>
        <div className="flex justify-between">
          <p>Price Negotiable:</p>
          <p>{car.priceNegotiable ? "Yes" : "No"}</p>
        </div>
        <div className="flex justify-between">
          <p>Fuel:</p>
          <p>{car.fuel}</p>
        </div>
        <div className="flex justify-between">
          <p>Kilometers:</p>
          <p>{car.kilometers}</p>
        </div>
      </div>

      {/* Conditionally display the "Make an Offer" section for screens wider than 1440px */}
      <div className="lg:hidden mt-5 border-t-4 border-gray-400">
        <h2 className="text-2xl text-center mx-auto font-bold text-white pt-5">
          Make An Offer / Ask A Question
        </h2>
       <ContactForm carName={car.name} />
      </div>
    </div>

  </section>
    {/* Conditionally display the "Make an Offer" section for screens wider than 1440px */}
    <div className="hidden border-t-4 border-gray-400">
        <h2 className="text-2xl  text-center font-bold text-white pt-5">
          Make An Offer / Ask A Question
        </h2>
        <ContactForm carName={car.name} />
    </div>

  </>
  );
};

export default CarDetails;
