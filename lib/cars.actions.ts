"use server";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "./mongoose";
import Car from "./modals/car";
import { utapi } from "uploadthing/server";

type Props = {
  name: string;
  price: string;
  manufacturingYear: string;
  owner: string;
  priceNegotiable: boolean;
  fuel: string;
  kilometers: string;
  images: string[];
  path: string;
};

export async function addCar({
  name,
  price,
  manufacturingYear,
  owner,
  priceNegotiable,
  fuel,
  kilometers,
  images,
  path,
}: Props) {
  connectToDatabase();
  try {
    const car = new Car({
      name,
      price,
      manufacturingYear,
      owner,
      priceNegotiable,
      fuel,
      kilometers,
      images,
    });
    console.log(car);

    await car.save();
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function getCars() {
  connectToDatabase();
  try {
    const cars = await Car.find({});
    return cars;
  } catch (error) {
    console.log(error);
  }
}

export async function getCarById(id: string) {
  connectToDatabase();
  try {
    const car = await Car.findById(id);
    return car;
  } catch (error) {
    console.log(error);
  }
}
export async function fillDetails(id: string) {
  connectToDatabase();
  try {
    const car = await Car.findById(id);

    if (car) {
      // Extract the image URLs from the objects in the 'images' array

      // Create a new object with only the desired properties
      const carDetails = {
        name: car.name,
        price: car.price,
        manufacturingYear: car.manufacturingYear,
        owner: car.owner,
        priceNegotiable: car.priceNegotiable,
        fuel: car.fuel,
        kilometers: car.kilometers,
        images: car.images,
      };

      return carDetails;
    } else {
      // Handle the case where the car with the specified ID is not found
      return null;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteCar(id: string, path: string) {
  connectToDatabase();
  try {
    const car = await Car.findById(id);

    if (car) {
      const imgIds = car.images.map((imageUrl: string) => {
        // Remove "https://utfs.io/f/" from the image URL
        return imageUrl.replace("https://utfs.io/f/", "");
      });

      // Delete files associated with imgIds
      if (imgIds && imgIds.length > 0) {
        await utapi.deleteFiles(imgIds);
      }

      // Delete the car
      await Car.findByIdAndDelete(id);

      revalidatePath(path);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function searchCars(search: string) {
  connectToDatabase();
  try {
    if (search.length > 1) {
      const cars = await Car.find({ name: { $regex: search, $options: "i" } });
      return cars;
    }
  } catch (error) {
    console.log(error);
  }
}
type UpdateProps = {
  id: string;
  name: string;
  price: string;
  manufacturingYear: string;
  owner: string;
  priceNegotiable: boolean;
  fuel: string;
  kilometers: string;
  imgIds: string[];
  images: string[];
  path: string;
};

export async function updateCar({
  id,
  name,
  price,
  manufacturingYear,
  owner,
  priceNegotiable,
  fuel,
  kilometers,
  images,
  imgIds,
  path,
}: UpdateProps) {
  connectToDatabase();
  try {
    if (imgIds && imgIds.length > 0) {
      await utapi.deleteFiles(imgIds);
    }

    await Car.findByIdAndUpdate(
      { _id: id },
      {
        name,
        price,
        manufacturingYear,
        owner,
        priceNegotiable,
        fuel,
        kilometers,
        images,
      },
    );
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
