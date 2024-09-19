import Image from "next/image";
import { Carousel } from "flowbite-react";
import slide1 from "@/assets/projectImages/market-i-research/1-interior-design.svg";
import slide2 from "@/assets/projectImages/market-i-research/2-space-planning.svg";
import slide3 from "@/assets/projectImages/market-i-research/3-site-assessments.svg";
import slide4 from "@/assets/projectImages/market-i-research/4-site-assessments.svg";
import slide5 from "@/assets/projectImages/market-i-research/5-3d-visualisation.svg";
import slide6 from "@/assets/projectImages/market-i-research/6-3d-visualisation.svg";
import slide7 from "@/assets/projectImages/market-i-research/7-build-drawings.svg";
import slide8 from "@/assets/projectImages/market-i-research/8-interior-design.svg";
import slide9 from "@/assets/projectImages/market-i-research/9-interior-design.svg";

export const MarketIResearchCarouselComponent = () => {
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
        <Image
            alt="brand guide"
            src={slide8}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={slide9}
            className="h-full w-full"
        />
      </Carousel>
    </div>
  );
};
