"use client";

// React components:
import Image from "next/image";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// Data:
import { headerImgs } from "../../../data";

function Header() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [opacities, setOpacities] = useState([]);
  console.log(currentImgIndex);
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
          }, 2000);
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
    <header className="h-screen w-full bg-royalBlue mt-20 overflow-y-hidden">
      <Image src="/logo.png" alt="Logotype" width="200" height="200" />
      <h1 className="font-BlackOpsOne text-5xl text-babyBlue">Local Gym</h1>
      <div className="w-full flex overflow-hidden">
        <div ref={sliderRef} className={`h-[90%] w-[90%] keen-slider relative`}>
          {headerImgs.map((img, idx) => (
            <Image
              key={idx}
              className={` object-contain bg-transparent keen-slider__slide number-slide${idx}`}
              src={img.url}
              alt="alt"
              loading="eager"
              width={500}
              height={500}
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
