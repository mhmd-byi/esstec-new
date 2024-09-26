"use client";
import Image from "next/image";
import slide1 from "@/assets/projectImages/raw-coffee/1-project-fitout.svg"
import slide2 from "@/assets/projectImages/raw-coffee/2-industrial-design.svg"
import slide3 from "@/assets/projectImages/raw-coffee/3-product-launch.svg"
import slide4 from "@/assets/projectImages/raw-coffee/4-vehicle-livery.svg"
import slide5 from "@/assets/projectImages/raw-coffee/5-production-drawings.svg"
import slide6 from "@/assets/projectImages/raw-coffee/6-installation-design.svg"
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { checkForScreenSizeInDraw } from "@/helper/helper";

export const RawCoffeeCarouselComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
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
    <div className={checkForScreenSize.sliderDivClasses}>
      <Slider {...settings} className={checkForScreenSize.sliderSlideClasses}>
        {slides.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className={checkForScreenSize.carouselImageClasses}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
