"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { usePathname } from "next/navigation";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
const ContactForm = ({ carName }: { carName: string }) => {
  const [loading, setLoading] = useState(false); // Set loading state [true, false
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    whatsapp: "",
    image: "",
    price: "",
    manufacturingYear: "",
    owner: "",
  });
  const { toast } = useToast(); // Get the toast function
  const path = usePathname();
  const customUploadDropzoneStyles = {
    container: "bg-dark-primary p-4 rounded-lg border-2", // Example background and padding
    uploadIcon: "text-white", // Example text color for the upload icon
    label: "text-lg font-bold text-white", // Example text size and font weight for the label
    allowedContent: "text-gray-500", // Example text color for allowed content
    button: "btn", // Example button styling
  };

  const handleUploadComplete = (res: any) => {
    if (res && res.length > 0) {
      const updatedImages = res.map((image: { url: string }) => image.url);

      toast({
        title: "Your Images have been uploaded",
        description:
          "Your images have been uploaded successfully. You can now submit the form.",
        action: <ToastAction altText="Okay">Okay</ToastAction>,
      });
      setFormData({
        ...formData,
        image: updatedImages[0],
      });
    }
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      // Show a toast if any required input is missing
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      setLoading(false);

      return;
    }

    const form = e.currentTarget;
    window.scrollTo({ top: 0, behavior: "smooth" });

    emailjs
      .send(
        `service_a5m9nwd`,
        `template_v40vdp5`,
        {
          from_name: formData.name,
          to_name: "Apna Car Bazar",
          message: formData.message,
          whatsapp: formData.whatsapp,
          car_name: carName,
          from_email: formData.email,
          to_email: "nomore0407@gmail.com",
        },
        "sbZzDCRr8X1VEU5Kr",
      )
      .then(
        (result) => {
          // Show a success toast when the email is sent successfully
          setLoading(false);
          toast({
            title: "Message Received",
            description: "We will contact you as soon as possible.",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
            whatsapp: "",
            image: "",
            price: "",
            manufacturingYear: "",
            owner: "",


          });
        },
        (error) => {
          // Show an error toast when there's a problem
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          console.log(error.text);
        },
      );
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col paddings justify-center items-center gap-5 text-white"
    >
      <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
        Name:
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="input-normal h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
        />
      </label>
      <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
        Email:
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="input-normal h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
        />
      </label>
      <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
        WhatsApp (optional):
        <input
          type="number"
          name="whatsapp"
          placeholder="Your WhatsApp No."
          value={formData.whatsapp}
          onChange={handleInputChange}
          className="input-normal h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
        />
      </label>
      {path === "/sell-car" && (

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
      )}
      <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
        Message:
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="input-normal appearance-none focus:outline-none focus:ring-2 focus:ring-dark-secondary focus:border-transparent"
        />
      </label>
      {path === "/sell-car" && (
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
      )}
      {loading ? (
        <button className="btn">Sending...</button>
      ) : (
        <button className="btn">Send Message</button>
      )}
    </form>
  );
};

export default ContactForm;
