import Image from "next/image";
import { Carousel } from "flowbite-react";
import slide1 from "@/assets/projectImages/ewaa/1-brand-guidelines.svg";
import slide2 from "@/assets/projectImages/ewaa/2-brand-guidelines.svg";
import slide3 from "@/assets/projectImages/ewaa/3-animation-video.svg";
import slide4 from "@/assets/projectImages/ewaa/4-infographic-posters.svg";
import slide5 from "@/assets/projectImages/ewaa/5-website.svg";
import slide6 from "@/assets/projectImages/ewaa/6-psa.svg";
import slide7 from "@/assets/projectImages/ewaa/7-corporate-film.svg";

export const EwaaCarouselComponent = () => {
  return (
    <div className="absolute top-44 left-44 mt-2 w-[64vw] h-[68.7vh] items-center justify-center">
      <Carousel className="rounded-[27.5px] z-50" slideInterval={5000} indicators={false}>
        <Image
            alt="brand guide"
            src={slide1}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={slide2}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={slide3}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={slide4}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={slide5}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={slide6}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={slide7}
            className="h-full w-full"
        />
      </Carousel>
    </div>
  );
};
