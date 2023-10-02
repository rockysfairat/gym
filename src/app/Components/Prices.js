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
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <article className="h-screen w-full flex flex-col items-center justify-center overflow-x-hidden">
        <section className="lg:w-3/4 w-[95%] md:border-solid md:border-2 md:border-red">
          <h2>{englishVersion ? "Prices:" : "Priser:"}</h2>
          <div ref={sliderRef} className="w-full flex keen-slider">
            {membershipPrices.map((price, idx) => (
              <div
                className={
                  `md:hidden flex flex-col w-1/2 bg-blueGrotto rounded-md overflow-hidden shadow-blueGrotto shadow-sm keen-slider__slide` +
                  ` number-slide${idx}`
                }
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
            {membershipPrices.map((price) => (
              <div
                className="hidden odd:mx-2 md:flex flex-col w-1/2 bg-blueGrotto rounded-md overflow-hidden shadow-blueGrotto shadow-sm"
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
        <section className="lg:w-3/4 w-[95%] border-solid border-2 border-green">
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
          <div className="flex w-fit">
            {trainingPackagesPrices.map(({ packageDesc, packagePrice }) => (
              <div
                className="flex flex-col even:mx-1 my-2 rounded-md overflow-hidden shadow-blueGrotto shadow-sm"
                key={packagePrice}
              >
                <h3 className="grow text-2xl  bg-blueGrotto py-1 px-2">
                  {packageDesc}
                </h3>
                <p className="text-2xl text-center bg-royalBlue py-1 px-2">
                  {packagePrice}
                </p>
              </div>
            ))}
          </div>
          <aside className="text-babyBlue w-1/2">
            {englishVersion
              ? "Please note that these prices are fictional and may vary depending on the actual location, services offered, and other factors. Always check with the specific gym for their current pricing and membership options."
              : "Observera att dessa priser är fiktiva och kan variera beroende på den faktiska platsen, tjänsterna som erbjuds och andra faktorer. Kontrollera alltid med det specifika gymmet för deras aktuella priser och medlemsalternativ."}
          </aside>
        </section>
      </article>
      {/* <article
        className={
          "h-screen w-full flex-col items-center justify-center" +
          (!englishVersion ? " flex" : " hidden")
        }
      >
        <section className="w-3/4">
          <h2>Priser:</h2>
          <div className="w-full flex ">
            {membershipPricesSv.map(
              ({ membershipName, membershipDesc, membershipPrice, period }) => (
                <div
                  className=" flex flex-col w-1/5 bg-blueGrotto even:mx-1 rounded-md overflow-hidden shadow-blueGrotto shadow-sm"
                  key={membershipName}
                >
                  <h3 className="bg-royalBlue py-1 text-center text-2xl">
                    {membershipName}
                  </h3>
                  <p className="grow px-2 py-1">{membershipDesc}</p>
                  <p className="bg-royalBlue py-1 text-center  text-3xl">
                    {membershipPrice}
                    <span className="text-sm">{period}</span>
                  </p>
                </div>
              )
            )}
          </div>
        </section>
        <section className="w-3/4">
          <h2></h2>
          <p className="text-babyBlue">
            
          </p>
          <div className="flex w-fit">
            {trainingPackagesPricesSv.map(({ packageDesc, packagePrice }) => (
              <div
                className="flex flex-col even:mx-1 my-2 rounded-md overflow-hidden shadow-blueGrotto shadow-sm"
                key={packagePrice}
              >
                <h3 className="grow text-2xl  bg-blueGrotto py-1 px-2">
                  {packageDesc}
                </h3>
                <p className="text-2xl text-center bg-royalBlue py-1 px-2">
                  {packagePrice}
                </p>
              </div>
            ))}
          </div>
          <aside className="text-babyBlue w-1/2">
            
          </aside>
        </section>
      </article> */}
    </>
  );

  console.log(membershipPrices);
}

export default Prices;
