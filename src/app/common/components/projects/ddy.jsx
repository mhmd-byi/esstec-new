"use client";
import Image from "next/image";
import slide1 from "@/assets/projectImages/ddy/1-identity-rebrand.svg"
import slide2 from "@/assets/projectImages/ddy/2-marcom-strategy.svg"
import slide3 from "@/assets/projectImages/ddy/3-brand-guidelines.svg"
import slide4 from "@/assets/projectImages/ddy/4-brand-collaterals.svg"
import slide5 from "@/assets/projectImages/ddy/5-event-collaterals.svg"
import slide6 from "@/assets/projectImages/ddy/6-web-development.svg"
import slide7 from "@/assets/projectImages/ddy/7-social-playbook.svg"
import slide8 from "@/assets/projectImages/ddy/8-social-templates.svg"
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { checkForScreenSizeInDraw } from "@/helper/helper";

export const DDYCarouselComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];
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
