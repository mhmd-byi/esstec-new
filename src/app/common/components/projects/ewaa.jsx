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
  const [displayRightControl, setDisplayRightControl] = useState(true);
  const [displayLeftControl, setDisplayLeftControl] = useState(true);
  return (
    <div className="absolute top-44 left-44 mt-2 w-[64vw] h-[68.7vh] items-center justify-center">
      <Carousel
        className="rounded-[27.5px] z-50"
        indicators={false}
        slide={false}
        onSlideChange={(index) => {
          console.log('this is index', index)
          if (index === 6) {
            setDisplayRightControl(false);
          } else {
            setDisplayRightControl(true);
          }
          if (index === 0) {
            setDisplayLeftControl(false);
          } else {
            setDisplayLeftControl(true);
          }
        }}
        leftControl={<ChevronLeftIcon className={!displayLeftControl && "hidden"} />}
        rightControl={
          <ChevronRightIcon className={!displayRightControl && "hidden"} />
        }
      >
        <Image alt="brand guide" src={slide1} className="h-full w-full" />
        <Image alt="brand guide" src={slide2} className="h-full w-full" />
        <Image alt="brand guide" src={slide3} className="h-full w-full" />
        <Image alt="brand guide" src={slide4} className="h-full w-full" />
        <Image alt="brand guide" src={slide5} className="h-full w-full" />
        <Image alt="brand guide" src={slide6} className="h-full w-full" />
        <Image alt="brand guide" src={slide7} className="h-full w-full" />
      </Carousel>
    </div>
  );
};
