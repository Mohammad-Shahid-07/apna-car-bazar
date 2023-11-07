
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
const CarCard = (cars: { car: Car }) => {
  const { car } = cars;

  return (
    <Link href={`/cars/car-details/${car._id}`}>
    <div className="card p-3" key={car._id}>
      <h4 className="para-1 mb-2 !text-white !font-bold">{car.name}</h4>
      <div className="bg-[#629650] w-fit px-2 py-3 mb-5 flex rounded">
        <Image
          src="/assets/icons/tag-price.svg"
          height={50}
          width={25}
          alt="price-tag"
        />
        <p className="para-1 !text-[#8FFF00] ml-2 !font-bold">₹ {car.price}</p>
      </div>
      <div className="mx-auto flex justify-center mb-5 ">
        <Image src={car.images[0]} height={150} width={100} alt="Car" />
      </div>
      <div className="flex justify-between  gap-4 items-baseline">
        <div className="text-center">
          <Image
            src="/assets/icons/gear.svg"
            height={50}
            width={30}
            className=""
            alt="search "
          />
          <p className="para-2 !text-[15px]  !text-white">
            {car.manufacturingYear}
          </p>
        </div>
        <div className="text-center">
          <Image
            src={
              car.priceNegotiable
                ? "/assets/icons/ok.svg"
                : "/assets/icons/not-ok.svg"
            }
            height={50}
            width={30}
            className="mx-auto "
            alt="search "
          />
          <p className="para-2 !text-[15px] !text-white">Negotiable</p>
        </div>
        <div>
          <Image
            src="/assets/icons/petrol-pump.svg"
            height={50}
            width={30}
            className="mx-auto"
            alt="petrol-pump "
          />
          <p className="para-2 !text-white !text-[15px]">{car.kilometers} KM</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CarCard;
