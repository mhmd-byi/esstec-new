"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import slide1 from "@/assets/projectImages/scope-investments/1-media-engagement.svg";
import slide2 from "@/assets/projectImages/scope-investments/2-brand-guidelines.svg";
import slide3 from "@/assets/projectImages/scope-investments/3-brand-guidelines.svg";
import slide4 from "@/assets/projectImages/scope-investments/4-print-collaterals.svg";
import slide5 from "@/assets/projectImages/scope-investments/5-web-development.svg";
import slide6 from "@/assets/projectImages/scope-investments/6-corporate-deck.svg";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import { useState } from "react";

export const ScopeInvestmentsFlowbiteCarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselImageClasses = 'h-full w-full rounded-[27.5px]';
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  return (
    <div className="absolute top-44 left-44 mt-2 w-[64vw] h-[68.7vh] items-center justify-center">
      <Carousel
        className="rounded-[27.5px] z-50"
        indicators={false}
        slide={false}
        draggable={false}
        onSlideChange={setActiveIndex}
        leftControl={<ChevronLeftIcon className={activeIndex === 0 && "hidden"} />}
        rightControl={
          <ChevronRightIcon className={(activeIndex === slides.length - 1) && "hidden"} />
        }
      >
        {slides.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="brand guide"
            className={carouselImageClasses}
          />
        ))}
      </Carousel>
    </div>
  );
};
