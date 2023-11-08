import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark-secondary  mt-44 ">
      <div className="flex justify-around paddings max-w-screen-xxl mx-auto max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-5">
        <div >
          <h5 className="para-2 !text-white !font-bold">Important Links</h5>
          <ul className=" md:w-fit text-center">
            <NavLinks />
          </ul>
        </div>
        <div className="text-center">
          <h5 className="para-2 !text-white !font-bold">Our Social Media</h5>
          <ul className="text-center ">
            <li className="ml-5 ">
              <Link href="https://instagram.com/apna_car_bajar?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank"  className="flex gap-2 mb-2 text-white hover:text-prime">
                {" "}
                <Image
                  src="/assets/icons/instagram.svg"
                  width={25}
                  height={25}
                  alt="insta"
                />{" "}
                Instagram
              </Link>
            </li>
            <li className="ml-5 ">
              <Link href="https://www.facebook.com/profile.php?id=100063911410942&mibextid=LQQJ4d" target="_blank" className="flex gap-2 text-white hover:text-prime">
                {" "}
                <Image
                  src="/assets/icons/facebook.svg"
                  width={25}
                  height={25}
                  alt="facebook"
                />{" "}
                Facebook
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="para-2 !text-white !font-bold">Other Links</h5>
          <ul className=" w-fit text-center">
            <li>
              <Link href="/privacy" className="flex gap-2  text-white">
                Privacy Polacy
              </Link>
            </li>
            <li>
              <Link href="/term-conditions" className="flex gap-2 text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h5 className="para-2 !text-white !font-bold">Our Contact Info</h5>
          <ul className="text-center ">
            <li className="ml-5 ">
              <Link href="mailto:Pb89209@gmail.com" target="_blank" className="flex gap-2 mb-2 text-white"
              
              >
                {" "}
                <Image
                  src="/assets/icons/gmail.svg"
                  width={25}
                  height={25}
                  alt="gmail"
                />{" "}
                Pb89209@gmail.com
              </Link>
            </li>
            <li className="ml-5 ">
              <Link href="https://wa.me/7023262976" target="_blank"  className="flex gap-2 text-white">
                {" "}
                <Image
                  src="/assets/icons/whatsapp.svg"
                  width={25}
                  height={25}
                  alt="whatsapp"
                />{" "}
                +91 7023262976
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p>
      <span className="text-white text-center block border-t-2 pt-2 border-gray-700">© {currentYear} Apna Car Bazar. All rights reserved.</span>
    </p>
    <p>
      <span className="text-white text-center block border-t-2 pt-2 border-gray-700"><Link href='https://mohammadshahid.vercel.app'>This Website has been designed & coded By Mohammad Shahid</Link> </span>
    </p>

    </footer>
  );
};

export default Footer;
