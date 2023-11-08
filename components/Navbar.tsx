"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return path === pathname
      ? "text-prime border-b-2 font-bold  border-prime"
      : "text-white";
  };

  return (
    <nav className=" text-white w-full  max-w-screen-xxl xxl:mx-auto">
      <div className="flex justify-between paddings-x items-center w-full max-md:hidden">
        <ul className="flex justify-center items-baseline gap-5">
         <NavLinks />
        </ul>
        <span>
          <Link href="/">
            {" "}
            <Image
              src="/assets/icons/logo.svg"
              className="py-2"
              height={100}
              width={200}
              alt="Logo"
            />
          </Link>
        </span>
        <Link
          href="sell-car"
          className="rounded-full max-sm:hidden bg-prime flex px-5 py-3"
        >
          Sell Your Car{" "}
          <Image
            src="/assets/icons/Arrow-1.svg"
            className="ml-2 rotate-[-45deg]"
            height={15}
            width={18}
            alt="Arrow"
          />
        </Link>
      </div>
      <div className="flex justify-around md:hidden">
        <span>
          <Link href="/">
            {" "}
            <Image
              src="/assets/icons/logo.svg"
              className="py-2"
              height={100}
              width={200}
              alt="Logo"
            />
          </Link>
        </span>
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/assets/icons/hamburger.svg"
              height={50}
              width={50}
              alt="ham"
            />
          </SheetTrigger>
          <SheetContent side="left" className="!bg-transparent !text-white">
            <Link href="/" className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/logo.svg"
                width={213}
                height={23}
                alt="site logo"
              />
            </Link>
            <div className="flex flex-col justify-evenly sm">
            <ul className="flex justify-center flex-col  items-center mt-11 h1-heading gap-5">
              <li className={`${isActive("/")}`}>
                <SheetClose asChild>
                  <Link href="/">Home</Link>
                </SheetClose>
              </li>
              <li className={`${isActive("/cars")}`}>
                <SheetClose asChild>
                  <Link href="/cars">Cars</Link>
                </SheetClose>
              </li>
              <li className={`${isActive("/contact")}`}>
                <SheetClose asChild>
                  <Link href="/contact">Contact</Link>
                </SheetClose>
              </li>
            </ul>
            <SheetClose asChild>
            <Link
              href="sell-car"
              className="rounded-full w-fit mx-auto mt-11 bg-prime flex px-5 py-3"
            >
              Sell Your Car{" "}
              <Image
                src="/assets/icons/arrow 1.svg"
                className="ml-2 rotate-[-45deg]"
                height={15}
                width={18}
                alt="Arrow"
              />
            </Link>
              </SheetClose>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
