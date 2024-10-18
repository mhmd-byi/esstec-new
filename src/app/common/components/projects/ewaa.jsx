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
import slide9 from "@/assets/projectImages/ewaa/8-corporate-deck.svg";
import slide10 from "@/assets/projectImages/ewaa/9-stakeholder-brochure.svg";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const EwaaCarouselComponent = () => {
  const slides = [
    slide8,
    slide1,
    slide2,
    slide3,
    slide9,
    slide10,
    slide4,
    slide5,
    slide6,
    slide7,
  ];
  const hasWindow = typeof window !== "undefined";
  const widthOfScreen = hasWindow ? window.innerWidth : null;

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: widthOfScreen < 500 ? "5px" : "30px",
          color: "#222222",
          zIndex: 10,
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
          zIndex: 10,
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
    <div className="h-full w-full">
      <Slider {...settings} className="h-full w-full">
        {slides.map((src, index) => (
          <div key={index} className="h-full w-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
