"use client";
import Image from "next/image";

// Language context:
import { useContext, useState } from "react";
import { AppContext } from "../layout";

function Nav() {
  // Language switch:
  const { englishVersion, setEnglishVersion } = useContext(AppContext);
  // Toggle nav:
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-babyBlue absolute top-0 left-0 h-20 flex items-center">
      <Image
        src="/logo.png"
        alt="Logotype"
        width="75"
        height="75"
        className="ml-1 block sm:hidden"
      />
      <ul className="WIDESCREEN list-none hidden justify-end p-1 w-full sm:flex [&>li]:px-4 [&>li]:flex [&>li]:items-center">
        <li>{englishVersion ? "Prices" : "Priser"}</li>
        <li>{englishVersion ? "Equipment" : "Utrustning"}</li>
        <li>{englishVersion ? "Staff" : "Personal"}</li>
        <li>{englishVersion ? "Contact us" : "Skriv till oss"}</li>
        <li>
          <button onClick={() => setEnglishVersion(!englishVersion)}>
            {!englishVersion ? "EN" : "SV"}
          </button>
        </li>
      </ul>
      <div
        className="hamburgerMenu cursor-pointer right-0 p-5 flex flex-col absolute z-50 sm:hidden"
        onClick={toggleMenu}
      >
        <div className="w-7 h-1 bg-navyBlue my-1 mx-0"></div>
        <div className="w-7 h-1 bg-navyBlue my-1 mx-0"></div>
        <div className="w-7 h-1 bg-navyBlue my-1 mx-0"></div>
      </div>
      <ul
        className={
          "MENU_ITEMS flex flex-col fixed top-0 w-full h-full bg-blueGrotto transition ease-in-out delay-300 z-50 list-none mt-0 pt-12 pb-0 pl-0 pr-0 [&>li]:flex [&>li]:justify-center [&>li]:mb-4 [&>li]:text-3xl sm:hidden" +
          (isOpen ? " left-0" : " left-[-100vw]")
        }
      >
        <span
          onClick={toggleMenu}
          className="absolute top-4 right-4 border-solid border-navyBlue border-2 rounded-full w-0.5 h-0.5 p-6 flex items-center justify-center"
        >
          X
        </span>
        <li onClick={toggleMenu}>{englishVersion ? "Prices" : "Priser"}</li>
        <li onClick={toggleMenu}>
          {englishVersion ? "Equipment" : "Utrustning"}
        </li>
        <li onClick={toggleMenu}>{englishVersion ? "Staff" : "Personal"}</li>
        <li onClick={toggleMenu}>
          {englishVersion ? "Contact us" : "Skriv till oss"}
        </li>
        <li>
          <button onClick={() => setEnglishVersion(!englishVersion)}>
            {!englishVersion ? "EN" : "SV"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
