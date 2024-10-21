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
    {slide: slide8, title: "identity rebrand"},
    {slide: slide1, title: "brand guidelines"},
    {slide: slide2, title: "brand guidelines"},
    {slide: slide3, title: "animation video"},
    {slide: slide9, title: "corporate deck"},
    {slide: slide10, title: "stakeholder brochure"},
    {slide: slide4, title: "infographic posters"},
    {slide: slide5, title: "web development"},
    {slide: slide6, title: "psa shorts"},
    {slide: slide7, title: "corporate film"},
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
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            <Image
              src={slide.slide}
              alt={`Slide ${index + 1}`}
              className="h-[17.5rem] rounded-xl md:h-full md:w-full object-cover"
            />
            <div className="absolute -bottom-px md:bottom-20 -ml-px md:ml-0 md:right-0 w-[100.5%] md:w-[24.5rem] md:text-3xl bg-text-primary text-center text-bg-primary font-bold uppercase py-2 md:py-6 z-10 rounded-b-xl md:rounded-none">{slide.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
