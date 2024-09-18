import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
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
      <Carousel className="rounded-[30px] z-50" loop={true} autoplay={true} autoplayDelay={5000} navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className="hidden"
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}>
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
