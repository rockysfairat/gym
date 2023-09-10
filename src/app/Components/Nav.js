"use client";

import { useContext } from "react";
import { AppContext } from "../layout";

function Nav() {
  const { englishVersion, setEnglishVersion } = useContext(AppContext);

  return (
    <nav className="w-screen bg-babyBlue border border-red border-solid">
      <ul className={`list-none flex justify-end`}>
        <li>Prices</li>
        <li>Equipment</li>
        <li>Staff</li>
        <li>Contact us</li>
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
