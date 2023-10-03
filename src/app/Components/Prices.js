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
// Keen slider:
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ResizePlugin = (slider) => {
  const observer = new ResizeObserver(function () {
    slider.update();
  });

  slider.on("created", () => {
    observer.observe(slider.container);
  });
  slider.on("destroyed", () => {
    observer.unobserve(slider.container);
  });
};

function Prices() {
  // language switch handler:
  const { englishVersion } = useContext(AppContext);
  let membershipPrices = englishVersion
    ? membershipPricesEn
    : membershipPricesSv;
  let trainingPackagesPrices = englishVersion
    ? trainingPackagesPricesEn
    : trainingPackagesPricesSv;

  // Keen slider:
  const [sliderRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 3,
      },
    },
    [ResizePlugin]
  );

  return (
    <>
      <article className="h-screen lg:w-full md:w-3/4 sm:w-full w-3/4 flex flex-col items-center justify-center overflow-hidden">
        <section className="lg:w-3/4 w-full">
          <h2>{englishVersion ? "Prices:" : "Priser:"}</h2>
          <div ref={sliderRef} className="w-full flex keen-slider">
            {/* Slider implementation: */}
            {membershipPrices.map((price, idx) => (
              <div
                className={`lg:hidden flex flex-col w-1/2 bg-blueGrotto overflow-hidden rounded-md even:mx-1 keen-slider__slide number-slide${idx}`}
                key={price.membershipName}
              >
                <h3 className="bg-royalBlue py-1 text-center text-xl md:text-2xl">
                  {price.membershipName}
                </h3>
                <p className="text-sm lg:text-lg grow px-1 lg:px-5 py-2">
                  {price.membershipDesc}
                </p>
                <p className="bg-royalBlue py-1 text-center text-lg md:text-3xl">
                  {price.membershipPrice}
                  <span className="text-sm">{price.period}</span>
                </p>
              </div>
            ))}
            {/* Prices without slider: */}
            {membershipPrices.map((price) => (
              <div
                className="hidden odd:mx-2 lg:flex flex-col w-1/2 bg-blueGrotto rounded-md overflow-hidden shadow-blueGrotto shadow-sm"
                key={price.membershipName}
              >
                <h3 className="bg-royalBlue py-1 text-center text-2xl">
                  {price.membershipName}
                </h3>
                <p className="grow px-2 py-1">{price.membershipDesc}</p>
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
                className="flex flex-col even:mx-1 my-2 rounded-md overflow-hidden shadow-blueGrotto shadow-sm"
                key={packagePrice}
              >
                <h3 className="grow text-md md:text-2xl  bg-blueGrotto py-1 px-2">
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
