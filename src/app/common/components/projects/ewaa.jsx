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
import { widthClassNames } from "@/lang";

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
  const sliderDivClasses = checkForScreenSize.screenSize === 1920 ? widthClassNames.screenSize1920.sliderDivClasses : (checkForScreenSize.screenSize === 1536 ? widthClassNames.screenSize1536.sliderDivClasses : (checkForScreenSize.screenSize === 1280 ? widthClassNames.screenSize1280.sliderDivClasses : widthClassNames.defaultClasses.sliderDivClasses));

  const carouselImageClasses = checkForScreenSize.screenSize === 1920 ? widthClassNames.screenSize1920.carouselImageClasses : (checkForScreenSize.screenSize === 1536 ? widthClassNames.screenSize1536.carouselImageClasses : (checkForScreenSize.screenSize === 1280 ? widthClassNames.screenSize1280.carouselImageClasses : widthClassNames.defaultClasses.carouselImageClasses));
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
      {checkForScreenSize.carouselImageClasses && (
        <div className={(sliderDivClasses).toString()}>
          <Slider
            {...settings}
            className={(checkForScreenSize.sliderSlideClasses).toString()}
          >
            {slides.map((src, index) => (
              <div key={index}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className={(carouselImageClasses).toString()}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
