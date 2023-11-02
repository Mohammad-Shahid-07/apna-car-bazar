"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return path === pathname
          ? "text-prime border-b-2 font-bold  border-prime"
          : "text-white";
      };
    
  return (
    <nav className="flex justify-around items-center text-white w-full">
      <ul className="flex justify-center items-baseline gap-5">
        <li className={`${isActive("/")}`}>
          <Link href="/">Home</Link>
        </li>
        <li  className={`${isActive("/cars")}`}>
          <Link href="/cars">Cars</Link>
        </li>
        <li  className={`${isActive("/contact")}`}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <span className="max-sm:hidden">
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
      <Link href="sell-car" className="rounded-full max-sm:hidden bg-prime flex px-5 py-3">
        Sell Your Car{" "}
        <Image
          src="/assets/icons/arrow 1.svg"
          className="ml-2 rotate-[-45deg]"
          height={15}
          width={18}
          alt="Arrow"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
