import Image from "next/image";
import { equipment } from "../../../data";

function Equipment() {
  return (
    <article className="w-full flex justify-center">
      <section className="w-3/4">
        <h2 className="title">Our equipment:</h2>
        {equipment.map(({ equipmentItem, equipmentDesc, equipmentImg }) => (
          <div className="w-full flex  mb-2 odd:flex-row-reverse">
            <div className="w-5/4 flex">
              <Image
                className="border rounded-md border-blueGrotto"
                src={equipmentImg}
                alt="text"
                width="200"
                height="200"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="bg-blueGrotto w-11/12 flex flex-col rounded-md pl-2 pt-1">
              <h3>{equipmentItem}</h3>
              <p>{equipmentDesc}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}

export default Equipment;
