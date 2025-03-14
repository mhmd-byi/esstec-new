"use client";
import slide1 from "@/assets/projectImages/ewaa/1-brand-guidelines.svg";
import slide2 from "@/assets/projectImages/ewaa/2-brand-guidelines.svg";
import slide3 from "@/assets/projectImages/ewaa/3-animation-video.svg";
import slide4 from "@/assets/projectImages/ewaa/4-infographic-posters.svg";
import slide5 from "@/assets/projectImages/ewaa/5-website.svg";
import slide6 from "@/assets/projectImages/ewaa/6-psa.svg";
import slide7 from "@/assets/projectImages/ewaa/7-corporate-film.svg";
import slide8 from "@/assets/projectImages/ewaa/1-identity-rebrand.png";
import slide9 from "@/assets/projectImages/ewaa/8-corporate-deck.svg";
import slide10 from "@/assets/projectImages/ewaa/9-stakeholder-brochure.svg";
import slide1Mobile1 from "@/assets/projectImages/ewaa/1-mobile.png";
import { SliderComponent } from "../sliderComponent";

export const CarouselComponent = () => {
  const hasWindow = typeof window !== 'undefined';
  const widthOfScreen = hasWindow ? window.innerWidth : null;
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

  const mobileSlides = [
    {slide: slide1Mobile1, title: "identity rebrand"},
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

  return (
    <>
      <SliderComponent slides={widthOfScreen > 450 ? slides : mobileSlides} />
    </>
  );
};
