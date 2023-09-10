import Image from "next/image";
import { staff } from "../../../data";

function Staff() {
  return (
    <article className="w-full flex justify-center">
      <section className="w-3/4 flex flex-col">
        <h2 className="mb-4">Our staff</h2>
        {staff.map(({ name, position, desc, photo }) => (
          <div className="flex items-center mb-5" key={name}>
            <Image
              className="rounded-full overflow-hidden"
              src={photo}
              alt="txt"
              width="300"
              height="300"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
            <div className="bg-blueGrotto w-3/4 rounded-md overflow-hidden p-3 ml-4 flex flex-col grow shadow-blueGrotto shadow-sm">
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
