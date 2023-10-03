"use client";

// React components:
import Image from "next/image";

// Keen slider:
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const animation = { duration: 90000, easing: (t) => t };

// Data:
import { headerImgs } from "../../../data";

function Header() {
  // Keen slider:
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <header className="h-fit-content w-full bg-royalBlue mt-20 overflow-y-hidden relative">
      <div className=" flex items-center absolute lg:top-0 top-[35%] lg:left-0 left-[20%] z-10">
        <Image src="/logo.png" alt="Logotype" width="200" height="200" />
        <h1 className="font-BlackOpsOne text-4xl lg:text-5xl text-babyBlue">
          Local Gym
        </h1>
      </div>

      <div className="w-full flex overflow-hidden z-0 relative">
        <div ref={sliderRef} className="h-[100%] w-[90%] relative keen-slider">
          {headerImgs.map((img, idx) => (
            <Image
              key={idx}
              className={` object-contain bg-transparent keen-slider__slide number-slide1${idx}`}
              src={img.url}
              alt="alt"
              loading="eager"
              width={700}
              height={700}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            ></Image>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;

<div className="keen-slider__slide number-slide1">1</div>;
