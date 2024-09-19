"use client";
import { useState } from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import slide1 from "@/assets/projectImages/ewaa/1-brand-guidelines.svg";
import slide2 from "@/assets/projectImages/ewaa/2-brand-guidelines.svg";
import slide3 from "@/assets/projectImages/ewaa/3-animation-video.svg";
import slide4 from "@/assets/projectImages/ewaa/4-infographic-posters.svg";
import slide5 from "@/assets/projectImages/ewaa/5-website.svg";
import slide6 from "@/assets/projectImages/ewaa/6-psa.svg";
import slide7 from "@/assets/projectImages/ewaa/7-corporate-film.svg";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";

export const EwaaCarouselComponent = () => {
  const carouselImageClasses = 'h-full w-full rounded-[27.5px] my-carousel-item';
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
  return (
    <div className="absolute top-44 left-44 mt-2 w-[64vw] h-[68.7vh] items-center justify-center">
      <Carousel
        className="rounded-[27.5px] z-50"
        indicators={false}
        slide={false}
        draggable={false}
        onSlideChange={setActiveIndex}
        leftControl={<ChevronLeftIcon className={(activeIndex === 0) && "hidden"} />}
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
