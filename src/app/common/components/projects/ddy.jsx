"use client";
import Image from "next/image";
import slide1 from "@/assets/projectImages/ddy/1-identity-rebrand.svg";
import slide2 from "@/assets/projectImages/ddy/2-marcom-strategy.svg";
import slide3 from "@/assets/projectImages/ddy/3-brand-guidelines.svg";
import slide4 from "@/assets/projectImages/ddy/4-brand-collaterals.svg";
import slide5 from "@/assets/projectImages/ddy/5-event-collaterals.svg";
import slide6 from "@/assets/projectImages/ddy/6-web-development.svg";
import slide7 from "@/assets/projectImages/ddy/7-social-playbook.svg";
import slide8 from "@/assets/projectImages/ddy/8-social-templates.svg";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { checkForScreenSizeInDraw } from "@/helper/helper";

export const DDYCarouselComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
  ];
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
          ? "absolute top-[190px] left-44 mt-0 w-[66vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1680
          ? "absolute top-[205px] left-44 mt-0 w-[64vw] max-h-[600px] items-center justify-center"
          : checkForScreenSize.screenSize === 1600
          ? "absolute top-[235px] left-44 mt-0 w-[62vw] max-h-[600px] items-center justify-center"
          : checkForScreenSize.screenSize === 1536
          ? "absolute top-[210px] left-44 -ml-1 mt-4 w-[62vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1440
          ? "absolute top-[245px] left-44 -ml-2 mt-6 w-[61vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1400
          ? "absolute top-[250px] left-44 -ml-2 mt-6 w-[61.5vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1366
          ? "absolute top-[265px] left-44 -ml-1 mt-6 w-[59.75vw] items-center justify-center"
          : checkForScreenSize.screenSize === 1360
          ? "absolute top-[265px] left-44 -ml-1 mt-6 w-[59.75vw] items-center justify-center"
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
