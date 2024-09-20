"use client";
import Image from "next/image";
import slide1 from "@/assets/projectImages/scope-investments/1-media-engagement.svg";
import slide2 from "@/assets/projectImages/scope-investments/2-brand-guidelines.svg";
import slide3 from "@/assets/projectImages/scope-investments/3-brand-guidelines.svg";
import slide4 from "@/assets/projectImages/scope-investments/4-print-collaterals.svg";
import slide5 from "@/assets/projectImages/scope-investments/5-web-development.svg";
import slide6 from "@/assets/projectImages/scope-investments/6-corporate-deck.svg";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ScopeInvestmentsCarouselComponent = () => {
  const carouselImageClasses = "h-full w-full rounded-[27.5px]";
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
    <div className="absolute top-[11rem] left-44 mt-2 w-[63.9vw] h-[68.5vh] items-center justify-center">
      <Slider {...settings} className="rounded-[27.5px] z-50">
        {slides.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className={carouselImageClasses}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
