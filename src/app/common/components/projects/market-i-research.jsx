"use client";
import Image from "next/image";
import slide1 from "@/assets/projectImages/market-i-research/1-interior-design.svg";
import slide2 from "@/assets/projectImages/market-i-research/2-space-planning.svg";
import slide3 from "@/assets/projectImages/market-i-research/3-site-assessments.svg";
import slide4 from "@/assets/projectImages/market-i-research/4-site-assessments.svg";
import slide5 from "@/assets/projectImages/market-i-research/5-3d-visualisation.svg";
import slide6 from "@/assets/projectImages/market-i-research/6-3d-visualisation.svg";
import slide7 from "@/assets/projectImages/market-i-research/7-build-drawings.svg";
import slide8 from "@/assets/projectImages/market-i-research/8-interior-design.svg";
import slide9 from "@/assets/projectImages/market-i-research/9-interior-design.svg";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MarketIResearchCarouselComponent = () => {
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
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
