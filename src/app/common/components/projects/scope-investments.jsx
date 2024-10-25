"use client";
import slide1 from "@/assets/projectImages/scope-investments/1-media-engagement.svg";
import slide2 from "@/assets/projectImages/scope-investments/2-brand-guidelines.svg";
import slide3 from "@/assets/projectImages/scope-investments/3-brand-guidelines.svg";
import slide4 from "@/assets/projectImages/scope-investments/4-print-collaterals.svg";
import slide5 from "@/assets/projectImages/scope-investments/5-web-development.svg";
import slide6 from "@/assets/projectImages/scope-investments/6-corporate-deck.svg";
import { SliderComponent } from "../sliderComponent";

export const ScopeInvestmentsCarouselComponent = () => {
  const slides = [
    {slide: slide1, title: "media engagement"},
    {slide: slide2, title: "brand guidelines"},
    {slide: slide3, title: "brand guidelines"},
    {slide: slide4, title: "print collaterals"},
    {slide: slide5, title: "web development"},
    {slide: slide6, title: "corporate deck"},
  ];
  return (
    <>
      <SliderComponent slides={slides} />
    </>
  );
};
