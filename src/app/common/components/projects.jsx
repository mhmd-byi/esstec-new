import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import brandGuide from "@/assets/projectImages/brand-guide.png";
import animieVideo from "@/assets/projectImages/animie-video.png";
import corporateFilm from "@/assets/projectImages/corporate-film.png";
import infographics from "@/assets/projectImages/infographics.png";
import psaShorts from "@/assets/projectImages/psa-shorts.png";
import website from "@/assets/projectImages/website.png";

export const ProjectsComponent = () => {
  return (
    <div className="absolute top-48 left-44 ml-px mt-1 w-[1116px] h-[585px] items-center justify-center">
      <Carousel className="rounded-[35px] z-50">
        <Image
            alt="brand guide"
            src={brandGuide}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={animieVideo}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={corporateFilm}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={infographics}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={psaShorts}
            className="h-full w-full"
        />
        <Image
            alt="brand guide"
            src={website}
            className="h-full w-full"
        />
      </Carousel>
    </div>
  );
};
