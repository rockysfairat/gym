import { membershipPrices, trainingPackagesPrices } from "../../../data";

function Prices() {
  return (
    <article className="h-screen w-full flex flex-col items-center justify-center">
      <section className="w-3/4">
        <h2>Prices:</h2>
        <div className="w-full flex ">
          {membershipPrices.map(
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
        <h2>Personal Training Packages:</h2>
        <p className="text-babyBlue">
          One-on-one sessions with a personal trainer to help you achieve
          specific fitness goals.
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
          Please note that these prices are fictional and may vary depending on
          the actual location, services offered, and other factors. Always check
          with the specific gym for their current pricing and membership
          options.
        </aside>
      </section>
    </article>
  );

  console.log(membershipPrices);
}

export default Prices;
