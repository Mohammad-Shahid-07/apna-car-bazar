"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addCar } from "@/lib/cars.actions";
import { usePathname, useRouter } from "next/navigation";
const Upload = () => {
  const [formData, setFormData] = useState<{
    name: string;
    price: string;
    manufacturingYear: string;
    owner: string;
    priceNegotiable: boolean;
    fuel: string;
    kilometers: string;
    images: string[];
  }>({
    name: "",
    price: "",
    manufacturingYear: "",
    owner: "",
    priceNegotiable: false,
    fuel: "",
    kilometers: "",
    images: [],
  });
  const pathname = usePathname();
  const router = useRouter();
  const customUploadDropzoneStyles = {
    container: "bg-dark-primary p-4 rounded-lg border-2", // Example background and padding
    uploadIcon: "text-white", // Example text color for the upload icon
    label: "text-lg font-bold text-white", // Example text size and font weight for the label
    allowedContent: "text-gray-500", // Example text color for allowed content
    button: "btn", // Example button styling
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      // Handle checkbox input separately for price negotiable
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else if (type === "file") {
      // Handle file input for images
      setFormData({
        ...formData,
        [name]: e.target.files,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  // Add an onChange handler for the fuel selection
  const handleFuelChange = (selectedFuel: string) => {
    setFormData({
      ...formData,
      fuel: selectedFuel, // Update the "fuel" field with the selected value
    });
  };
  

  const handleUploadComplete = (res: any) => {
    if (res && res.length > 0) {
      const updatedImages = res.map((image: { url: string }) => image.url);
      console.log(updatedImages);
      
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...updatedImages], // Spread the elements of updatedImages
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.price ||
      !formData.manufacturingYear ||
      !formData.owner ||
      !formData.fuel ||
      !formData.kilometers ||
      formData.images.length === 0
    ) {
     return toast({
        variant: "destructive",
        title: "Missing Values",
        description: "You have missed an input. Please fill all the given inputs.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  
    try {
     await addCar({
      ...formData,
      path: pathname,
      }).then((res) => {
         router.push("/cars");
      })
    } catch (error) {
      console.error(error);
      // Handle errors, if any
    }
  };
 
  
  
  return (
    <section>
      <form
        className="flex flex-col paddings justify-center items-center gap-5 text-white"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Your Car Name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-normal h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
          />
        </label>
        <div className="flex gap-5 max-lg:flex-col items-center max-w-[700px] justify-evenly  max-lg:w-full">
          <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
            Price:
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              className="input-normal h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
            />
          </label>

          <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
            Manufacturing Year:
            <input
              type="text"
              name="manufacturingYear"
              placeholder="Manufacturing Year"
              value={formData.manufacturingYear}
              onChange={handleInputChange}
              className="input-normal h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
            />
          </label>

          <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
            Owner:
            <input
              type="text"
              name="owner"
              placeholder="Owner"
              value={formData.owner}
              onChange={handleInputChange}
              className="input-normal h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
            />
          </label>
        </div>
        <div className="flex gap-5 max-lg:flex-wrap  items-center max-w-[700px] justify-evenly  w-full">
          <label className="max-w-[700px] w-3/4 max-sm:w-full">
            Price Negotiable:
            <input
              type="checkbox"
              name="priceNegotiable"
              checked={formData.priceNegotiable}
              onChange={handleInputChange}
              className="ml-2 "
            />
          </label>

          <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
            Fuel or Diesel:
            <Select onValueChange={handleFuelChange} value={formData.fuel}>
              <SelectTrigger className="w-[180px] !bg-dark-primary">
                <SelectValue
                  placeholder="Select Fuel Type"
                  // value={formData.fuel} // Set the selected value
                  // Handle the change event
                />
              </SelectTrigger>
              <SelectContent className="!bg-dark-primary">
                <SelectGroup>
                  <SelectItem value="fuel">Fuel</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>

          <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
            Kilometers:
            <input
              type="number"
              name="kilometers"
              placeholder="Kilometers"
              value={formData.kilometers}
              onChange={handleInputChange}
              className="input-normal h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
            />
          </label>
        </div>

        <UploadDropzone<OurFileRouter>
          endpoint="imageUploader"
          onClientUploadComplete={handleUploadComplete}
          onUploadError={() => {}}
          appearance={{
            container: customUploadDropzoneStyles.container,
            uploadIcon: customUploadDropzoneStyles.uploadIcon,
            label: customUploadDropzoneStyles.label,
            allowedContent: customUploadDropzoneStyles.allowedContent,
            button: customUploadDropzoneStyles.button,
          }}
        />

        <button className="btn">Submit</button>
      </form>
    </section>
  );
};

export default Upload;
