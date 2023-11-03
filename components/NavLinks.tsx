"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

const NavLinks = () => {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return path === pathname
          ? "text-prime border-b-2 font-bold  border-prime"
          : "text-white";
      };
  return (
    <>
     <li className={`${isActive("/")}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${isActive("/cars")}`}>
            <Link href="/cars">Cars</Link>
          </li>
          <li className={`${isActive("/contact")}`}>
            <Link href="/contact">Contact</Link>
          </li>
    </>
  )
}

export default NavLinks