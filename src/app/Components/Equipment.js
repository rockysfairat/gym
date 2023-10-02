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

  let equipment = englishVersion ? equipmentEn : equipmentSv;

  return (
    <article className="w-full flex justify-center">
      <section className="w-[95%] md:w-3/4 flex flex-wrap justify-between">
        <h2 className="title w-full mb-4">
          {englishVersion ? "Our equipment:" : "Vår utrustning:"}
        </h2>
        {equipment.map(({ equipmentItem, equipmentDesc, equipmentImg }) => (
          <div
            className="w-full lg:w-[49%] flex flex-col content-between mb-6 rounded-md overflow-hidden md:shadow-blueGrotto md:shadow-sm md:outline-none outline-blueGrotto outline outline-1"
            key={equipmentItem}
          >
            <div className="w-full h-48 md:h-96 flex">
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
    </article>
  );
}

export default Equipment;
