"use client";

import Image from "next/image";
// Language context:
import { useContext } from "react";
import { AppContext } from "../layout";
// Data:
import { staffEn, staffSv } from "../../../data";

function Staff() {
  // language switch handler:
  const { englishVersion } = useContext(AppContext);
  let staff = englishVersion ? staffEn : staffSv;
  return (
    <article
      id="staff"
      className="w-[95%] md:w-3/4 flex justify-center overflow-hidden pt-20"
    >
      <section className="w-full  flex flex-col">
        <h2 className="mb-4">
          {englishVersion ? "Our staff:" : "Vår personal:"}
        </h2>
        {staff.map(({ name, position, desc, photo }) => (
          <div
            className="flex items-center mb-5 flex-col sm:flex-row"
            key={name}
          >
            <Image
              className="rounded-full overflow-hidden pb-2"
              src={photo}
              alt="txt"
              width="300"
              height="300"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
            <div className="bg-blueGrotto w-full sm:w-3/4 rounded-md overflow-hidden p-4 ml-0 sm:ml-4 flex flex-col grow shadow-blueGrotto shadow-sm">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <h4 className="text-xl font-semibold">{position}</h4>
              <p className="text-lg mt-3">{desc}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}

export default Staff;
