"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    whatsapp: "",
  });
  const { toast } = useToast(); // Get the toast function

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      // Show a toast if any required input is missing
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
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
          to_name: "Mohammad Shahid",
          message: formData.message,
          whatsapp: formData.whatsapp,
          from_email: formData.email,
          to_email: "nomore0407@gmail.com",
        },
        'sbZzDCRr8X1VEU5Kr',
      )
      .then(
        (result) => {
          // Show a success toast when the email is sent successfully
          toast({
            title: "Message Received",
            description: "We will contact you as soon as possible.",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
            whatsapp: "",
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
      <label className="flex flex-col max-w-[700px] w-3/4 max-sm:w-full">
        Message:
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          rows={15}
          className="input-normal appearance-none focus:outline-none focus:ring-2 focus:ring-dark-secondary focus:border-transparent"
        />
      </label>
      <button className="btn">Send Message</button>
    </form>
  );
};

export default Page;
