import Image from "next/image";
import { equipment } from "../../../data";

function Equipment() {
  return (
    <article className="w-full flex justify-center">
      <section className="w-3/4 flex flex-wrap justify-between">
        <h2 className="title w-full mb-4">Our equipment:</h2>
        {equipment.map(({ equipmentItem, equipmentDesc, equipmentImg }) => (
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
