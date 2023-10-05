"use client";

// Language context:
import { useContext } from "react";
import { AppContext } from "../layout";
// Data:
import {
  membershipPricesEn,
  trainingPackagesPricesEn,
  membershipPricesSv,
  trainingPackagesPricesSv,
} from "../../../data";

function Prices() {
  // language switch handler:
  const { englishVersion } = useContext(AppContext);
  let membershipPrices = englishVersion
    ? membershipPricesEn
    : membershipPricesSv;
  let trainingPackagesPrices = englishVersion
    ? trainingPackagesPricesEn
    : trainingPackagesPricesSv;

  return (
    <>
      <article
        id="prices"
        className="h-fit lg:h-[100dvh] lg:w-full md:w-3/4 sm:w-full w-3/4 flex flex-col items-center justify-center pt-20"
      >
        <section className="lg:w-3/4 w-full">
          <h2>{englishVersion ? "Prices:" : "Priser:"}</h2>
          <div className="w-full grid auto-rows-fr grid-cols-2 gap-2 lg:flex">
            {membershipPrices.map((price) => (
              <div
                className="lg:odd:mx-2 flex flex-col w-full lg:w-1/2 bg-blueGrotto rounded-md overflow-hidden shadow-blueGrotto shadow-sm"
                key={price.membershipName}
              >
                <h3 className="bg-royalBlue py-1 text-center text-2xl">
                  {price.membershipName}
                </h3>
                <p className="grow px-2 py-1 break-all">
                  {price.membershipDesc}
                </p>
                <p className="bg-royalBlue py-1 text-center  text-3xl">
                  {price.membershipPrice}
                  <span className="text-sm">{price.period}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="lg:w-3/4 w-full">
          <h2>
            {englishVersion
              ? "Personal Training Packages:"
              : "Personliga träningspaket:"}
          </h2>
          <p className="text-babyBlue">
            {englishVersion
              ? "One-on-one sessions with a personal trainer to help you achieve specific fitness goals."
              : "En-mot-en-sessioner med en personlig tränare för att hjälpa dig att uppnå specifika träningsmål."}
          </p>
          <div className="flex w-full md:w-fit justify-center md:justify-start">
            {trainingPackagesPrices.map(({ packageDesc, packagePrice }) => (
              <div
                className="flex flex-col even:mx-1 my-2 rounded-md overflow-hidden md:shadow-blueGrotto md:shadow-sm"
                key={packagePrice}
              >
                <h3 className="grow text-md md:text-2xl text-center bg-blueGrotto py-1 px-2">
                  {packageDesc}
                </h3>
                <p className="text-md md:text-2xl text-center bg-royalBlue py-1 px-2">
                  {packagePrice}
                </p>
              </div>
            ))}
          </div>
          <aside className="text-babyBlue w-full md:w-1/2">
            {englishVersion
              ? "Please note that these prices are fictional and may vary depending on the actual location, services offered, and other factors. Always check with the specific gym for their current pricing and membership options."
              : "Observera att dessa priser är fiktiva och kan variera beroende på den faktiska platsen, tjänsterna som erbjuds och andra faktorer. Kontrollera alltid med det specifika gymmet för deras aktuella priser och medlemsalternativ."}
          </aside>
        </section>
      </article>
    </>
  );

  console.log(membershipPrices);
}

export default Prices;
