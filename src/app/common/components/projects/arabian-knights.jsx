"use client";
import Image from "next/image";
import slide1 from "@/assets/projectImages/arabian-knights/1-asset-creation.svg";
import slide2 from "@/assets/projectImages/arabian-knights/2-blockchain-contract.svg";
import slide3 from "@/assets/projectImages/arabian-knights/3-nft-collection-setup.svg";
import slide4 from "@/assets/projectImages/arabian-knights/4-asset-curation.svg";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { checkForScreenSizeInDraw } from "@/helper/helper";

export const ArabianKnightsCarouselComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  const slides = [slide1, slide2, slide3, slide4];
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "30px",
          color: "#222222",
          zIndex: 99,
        }}
        onClick={onClick}
      >
        <ChevronRightIcon />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "10px",
          color: "#222222",
          zIndex: 99,
        }}
        onClick={onClick}
      >
        <ChevronLeftIcon />
      </div>
    );
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div
      className={
        checkForScreenSize.screenSize === 1920
          ? "absolute top-[190px] left-44 mt-0 w-[65.5vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1680
          ? "absolute top-[205px] left-44 mt-0 w-[63.5vw] max-h-[600px] items-center justify-center"
          : checkForScreenSize.screenSize === 1600
          ? "absolute top-[235px] left-44 mt-0 w-[61.5vw] max-h-[600px] items-center justify-center"
          : checkForScreenSize.screenSize === 1536
          ? "absolute top-[210px] left-44 -ml-1 mt-4 w-[61.5vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1440
          ? "absolute top-[245px] left-44 -ml-2 mt-6 w-[60.5vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1400
          ? "absolute top-[250px] left-44 -ml-2 mt-6 w-[61vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1366
          ? "absolute top-[265px] left-44 -ml-1 mt-6 w-[59.25vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1360
          ? "absolute top-[265px] left-44 -ml-1 mt-6 w-[59.25vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1280
          ? "absolute top-[335px] left-40 ml-3 w-[58vw] items-center justify-center"
          : "absolute top-[190px] left-44 mt-2 w-[63.9vw] h-[68.5vh] items-center justify-center"
      }
    >
      <Slider {...settings} className="rounded-[27.5px] z-50">
        {slides.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className={
                checkForScreenSize.screenSize === 1920
                  ? "w-full max-h-[625px] rounded-[27.5px] object-cover"
                  : checkForScreenSize.screenSize === 1600
                  ? "w-full max-h-[580px] rounded-[27.5px] object-cover"
                  : checkForScreenSize.screenSize === 1536
                  ? "w-full max-h-[580px] rounded-[27.5px] object-cover"
                  : checkForScreenSize.screenSize === 1440
                  ? "w-full max-h-[580px] rounded-[27.5px] object-cover"
                  : checkForScreenSize.screenSize === 1440
                  ? "w-full max-h-[580px] rounded-[27.5px] object-cover"
                  : checkForScreenSize.screenSize === 1336
                  ? "w-full max-h-[580px] rounded-[27.5px] object-cover"
                  : checkForScreenSize.screenSize === 1280
                  ? "w-full max-h-[500px] rounded-[27.5px] object-cover"
                  : "h-full w-full rounded-[27.5px]"
              }
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
