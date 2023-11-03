"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    whatsapp: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      const form = e.currentTarget;
      emailjs
        .sendForm(
          "service_a5m9nwd",
          "template_v40vdp5",
          form,
          "sbZzDCRr8X1VEU5Kr",
        )
        .then(
          (result: any) => {
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
          },
        );
    }
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
          name="email"
          placeholder="Your WhatsApp No."
          value={formData.email}
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
