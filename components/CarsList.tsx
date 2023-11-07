import { getCars, searchCars } from "@/lib/cars.actions";
import Image from "next/image";
import CarCard from "./CarCard";

const CarsList = async ({query} : {query:string}) => {
  const allCars = await getCars();
  
  const filteredCars = query.length > 0
    ? allCars.filter((car: Car) => (car.name as string).toLowerCase().includes(query.toLowerCase()))
    : allCars;


  type Car = {
    _id: string;
    name: string;
    images: { url: string; fileKey: string }[];
    price: string;
    manufacturingYear: string;
    owner: string;
    priceNegotiable: boolean;
    fuel: string;
    kilometers: string;
  };
  return (
    <section className="flex max-w-screen-xxl flex-wrap gap-5 items-center justify-center mt-14">
      {filteredCars && filteredCars.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-14">
          <span className="">

          <p className="!text-prime !font-bold h1-heading">Opps 🥲!!</p>

          </span>
          <p className="h1-heading !text-white">
            Nothing Found
          </p>
        </div>
   
      )}
      {filteredCars && filteredCars.map((car: Car) => {
        return <CarCard car={car} key={car._id} />;
      })}
    </section>
  );
};

export default CarsList;
