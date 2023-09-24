"use client";

import Image from "next/image";
// Language context:
import { useContext } from "react";
import { AppContext } from "../layout";
// Data:
import { equipmentEn, equipmentSv } from "../../../data";

function Equipment() {
  // language switch handler:
  const { englishVersion } = useContext(AppContext);

  return (
    <article className="w-full flex justify-center">
      <section
        className={
          "w-3/4 sm:w-full flex-wrap sm:flex-nowrap justify-betweenc" +
          (englishVersion ? " flex" : " hidden")
        }
      >
        <h2 className="title w-full mb-4">Our equipment:</h2>
        {equipmentEn.map(({ equipmentItem, equipmentDesc, equipmentImg }) => (
          <div
            className="w-[49%]  sm:w-full flex flex-col content-between mb-6 rounded-md overflow-hidden shadow-blueGrotto shadow-sm"
            key={equipmentItem}
          >
            <div className="w-full h-96 flex">
              <Image
                className="w-full"
                src={equipmentImg}
                alt="text"
                width="400"
                height="400"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="bg-blueGrotto w-full flex flex-col grow p-3">
              <h3 className="text-2xl">{equipmentItem}</h3>
              <p className="text-lg">{equipmentDesc}</p>
            </div>
          </div>
        ))}
      </section>
      <section
        className={
          "w-3/4 flex-wrap justify-between" +
          (!englishVersion ? " flex" : " hidden")
        }
      >
        <h2 className="title w-full mb-4">Vår utrustning:</h2>
        {equipmentSv.map(({ equipmentItem, equipmentDesc, equipmentImg }) => (
          <div
            className="w-[49%] flex flex-col content-between mb-6 rounded-md overflow-hidden shadow-blueGrotto shadow-sm"
            key={equipmentItem}
          >
            <div className="w-full h-96 flex">
              <Image
                className="w-full"
                src={equipmentImg}
                alt="text"
                width="400"
                height="400"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="bg-blueGrotto w-full flex flex-col grow pl-2 pt-1">
              <h3 className="text-2xl">{equipmentItem}</h3>
              <p className="text-lg">{equipmentDesc}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}

export default Equipment;
