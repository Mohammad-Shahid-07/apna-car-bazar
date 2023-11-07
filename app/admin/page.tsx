"use client";
import { deleteCar, getCars } from "@/lib/cars.actions";
import Image from "next/image";
import { useState } from "react";
import EditDelete from "@/components/EditDelete";
import Link from "next/link";
import NwCom from "@/components/NwCom";

const Admin =  () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [allCars, setAllCars] = useState([]);
  const handleAuthentication = async (authenticated: boolean) => {
    setIsAuthenticated(authenticated);
    if (authenticated) {
      // Password is correct
      setIsAuthenticated(true);
  
      const allCars = await getCars();
      setAllCars(allCars);
      
   
    }
  };
  return (
    <section>
      {!isAuthenticated ? (
        <NwCom onAuthentication={handleAuthentication} />
      ) : (
    <section className="max-w-screen-xxl flex mx-auto flex-col items-center justify-center ">
      <h1 className="h1-heading">Admin</h1>
      <div>
        <div className="paddings   gap-8  bg-[#1c1c1c] ">
          {allCars.length > 0 ? (
            <div>
              <h2 className="para-2 !font-bold">List of Cars</h2>
              <div className="flex flex-wrap  gap-8 ">
                {allCars.map((car: any) => {
                  return (
                    <div
                      className="flex 
                  shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10
                  md:paddings-x lg:min-w-[500px] min-w-full justify-between bg-[#292828] px-2 py-3 rounded-xl mb-3"
                      key={car._id}
                    >
                      <Link href={`/cars/car-details/${car._id}`}>
                      <div className="flex gap-5  ">
                        <div className="rounded-full w-[50px] h-[50px] overflow-hidden ">
                          <Image
                            src={car.images[0]}
                            height={10}
                            width={50}
                            alt="car"
                            className="rounded-full  "
                          />
                        </div>
                        <div className="">
                          <p className="font-bold max-sm:text-[12px] text-yellow-50 ">
                            {car.name}
                          </p>
                          <p className="text-[12px] max-sm:text-[10px] text-[#8E8B8B] ">
                            Advertised on:{car.time}
                          </p>
                        </div>
                      </div>
                      </Link>
                      <div className="flex justify-center items-center gap-5">
                        <Link
                          href={`/edit-car/${car._id}
                      `}
                          className="flex gap-2 text-white text-ellipsis hover:text-prime "
                        >
                          <Image
                            src="/assets/icons/edit.svg"
                            height={50}
                            width={20}
                            alt="edit"
                            className="hover:scale-105"
                          />
                        </Link>
                        <EditDelete id={car._id} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="para-1 !text-white">No Cars Found</div>
          )}
        </div>
      </div>
    </section>
      )}
    </section>
);
};

export default Admin;
