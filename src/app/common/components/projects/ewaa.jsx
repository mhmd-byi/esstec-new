"use client";
import Image from "next/image";
import slide1 from "@/assets/projectImages/ewaa/1-brand-guidelines.svg";
import slide2 from "@/assets/projectImages/ewaa/2-brand-guidelines.svg";
import slide3 from "@/assets/projectImages/ewaa/3-animation-video.svg";
import slide4 from "@/assets/projectImages/ewaa/4-infographic-posters.svg";
import slide5 from "@/assets/projectImages/ewaa/5-website.svg";
import slide6 from "@/assets/projectImages/ewaa/6-psa.svg";
import slide7 from "@/assets/projectImages/ewaa/7-corporate-film.svg";
import slide8 from "@/assets/projectImages/ewaa/1-identity-rebrand.svg";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { checkForScreenSizeInDraw } from "@/helper/helper";

export const EwaaCarouselComponent = () => {
  const slides = [
    slide8,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
  ];
  const checkForScreenSize = checkForScreenSizeInDraw();

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
    <div>
      {checkForScreenSize.screenSize >= 1 && (
        <div
          className={
            checkForScreenSize.screenSize === 1920
              ? "absolute top-[190px] left-44 mt-0 w-[66vw] max-h-[628px] items-center justify-center"
              : checkForScreenSize.screenSize === 1536
              ? "absolute top-[210px] left-44 -ml-1 mt-4 w-[62vw] items-center justify-center"
              : checkForScreenSize.screenSize === 1280
              ? "absolute top-[310px] left-44 ml-px mt-2 w-[57.8vw] items-center justify-center"
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
                      ? "w-full max-h-[628px] rounded-[27.5px]"
                      : checkForScreenSize.screenSize === 1536
                      ? "w-full max-h-[580px] rounded-[27.5px]"
                      : checkForScreenSize.screenSize === 1280
                      ? "w-full max-h-[500px] rounded-[27.5px]"
                      : "h-full w-full rounded-[27.5px]"
                  }
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
