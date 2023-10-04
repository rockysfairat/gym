"use client";

// React components:
import Image from "next/image";
import { useState, useEffect } from "react";

// Data:
import { headerImgs } from "../../../data";

function Header() {
  // Slider:
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevSlide = () => {
    const ifFirstSlide = currentImgIndex === 0;
    const newIndex = ifFirstSlide ? headerImgs.length - 1 : currentImgIndex - 1;
    setCurrentImgIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentImgIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentImgIndex + 1;
    setCurrentImgIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentImgIndex(slideIndex);
  };

  return (
    <header className="h-[100dvh] w-full bg-royalBlue mt-20 overflow-hidden relative">
      <div className=" flex items-center absolute top-0 left-0 z-10">
        <Image src="/logo.png" alt="Logotype" width="200" height="200" />
        <h1 className="font-BlackOpsOne text-4xl lg:text-5xl text-babyBlue">
          Local Gym
        </h1>
      </div>

      {/* <Image src={headerImgs[imgIdx].url} width="150" height="150" /> */}
      <div
        className="w-full flex overflow-hidden z-0 relative -translate-x-0"
        style={{ backgroundImage: `url(${headerImgs[currentImgIndex].url})` }}
      >
        <Image
          key={headerImgs[currentImgIndex].alt}
          className={` object-contain bg-transparent`}
          src={headerImgs[currentImgIndex].url}
          alt={headerImgs[currentImgIndex].alt}
          loading="eager"
          width={1200}
          height={1200}
          sizes="(max-width: 768px) 100vw, (max-width: 4000px) 50vw, 33vw"
          quality={100}
        ></Image>
      </div>
      {/* Left Arrow */}
      <span
        onClick={prevSlide}
        className="absolute left-0 top-[50%] text-babyBlue text-lg z-50 border-solid border-2 border-red"
      >
        {" "}
        prev{" "}
      </span>
      {/* Right Arrow */}
      <span
        onClick={nextSlide}
        className="absolute right-0 top-[50%] text-babyBlue text-lg z-50 border-solid border-2 border-red"
      >
        {" "}
        next
      </span>
    </header>
  );
}

export default Header;
