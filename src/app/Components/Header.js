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
    console.log(currentImgIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentImgIndex === headerImgs.length - 1;
    const newIndex = isLastSlide ? 0 : currentImgIndex + 1;
    setCurrentImgIndex(newIndex);
    console.log(currentImgIndex);
  };

  return (
    <header
      className="h-[100dvh] w-full bg-royalBlue mt-20 overflow-hidden relative"
      style={{
        backgroundImage: `url(${headerImgs[currentImgIndex].url})`,
        backgroundPosition: "center",
      }}
    >
      <div className=" flex items-center absolute top-0 left-0 z-50">
        <Image src="/logo.png" alt="Logotype" width="200" height="200" />
        <h1 className="font-BlackOpsOne text-4xl lg:text-5xl text-babyBlue">
          Local Gym
        </h1>
      </div>

      <Image
        key={headerImgs[currentImgIndex].alt}
        className={` object-contain bg-transparent z-40 absolute left-0 right-0 top-0 bottom-0 m-auto rounded-xl border-dotted border-spacing-3 border-red w-1/2`}
        src={headerImgs[currentImgIndex].url}
        alt={headerImgs[currentImgIndex].alt}
        loading="eager"
        width={800}
        height={800}
        sizes="(max-width: 768px) 100vw, (max-width: 4000px) 50vw"
        quality={100}
      ></Image>
      <span className="w-full h-full absolute left-0 right-0 top-0 bottom-0 m-auto z-20 backdrop-blur-md"></span>
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-[50%] text-babyBlue text-5xl z-50"
      >
        &lt;
      </button>
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-[50%] text-babyBlue text-5xl z-50"
      >
        &gt;
      </button>
    </header>
  );
}

export default Header;
