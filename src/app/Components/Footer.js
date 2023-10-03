"use client";
import Image from "next/image";
import Link from "next/link";
// Language context:
import { useContext, useState } from "react";
import { AppContext } from "../layout";

function Footer() {
  // Language switch:
  const { englishVersion, setEnglishVersion } = useContext(AppContext);
  return (
    <footer className="w-full h-fit bg-royalBlue md:flex-row flex-col-reverse relative flex items-center md:items-end justify-evenly">
      <Image
        src="/form_deco.png"
        width="100"
        height="100"
        alt="Man"
        className="absolute bottom-0 left-0"
      />
      <ul className="list-none flex flex-col p-2 w-fit [&>li]:font-sans [&>li]:text-lg">
        <li className="hover:underline">
          <Link href="#prices">{englishVersion ? "Prices" : "Priser"}</Link>
        </li>
        <li className="hover:underline">
          <Link href="#equipment">
            {englishVersion ? "Equipment" : "Utrustning"}
          </Link>
        </li>
        <li className="hover:underline">
          <Link href="#staff">{englishVersion ? "Staff" : "Personal"}</Link>
        </li>
        <li className="hover:underline">
          <Link href="#contactUs">
            {englishVersion ? "Contact us" : "Skriv till oss"}
          </Link>
        </li>
      </ul>
      <h2 className="text-xl mt-0 text-navyBlue">
        Local gym<span className="font-sans text-xs align-top p-2">TM</span>
      </h2>
    </footer>
  );
}

export default Footer;
