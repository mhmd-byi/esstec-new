"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";

export const ArchiveCarouselComponent = ({ projectId, project }) => {
  const hasWindow = typeof window !== "undefined";
  const widthOfScreen = useRef(hasWindow ? window.innerWidth : null);

  const [loading, setLoading] = useState(true);
  const slides = useRef();

  const generateObjForArr = (imgObj) => ({
    slide: imgObj.url || imgObj.imageUrl,
    title: imgObj.title || "",
    ...imgObj,
  });

  const setSlides = (proj) => {
    const { desktopImages, mobileImages } = proj;
    slides.current =
      widthOfScreen.current > 450
        ? desktopImages.map(generateObjForArr).filter((o) => !!o.slide)
        : mobileImages.map(generateObjForArr).filter((o) => !!o.slide);
    setLoading(() => false);
  };

  const getProject = async (id) => {
    try {
      setLoading(() => true);
      const pt = await fetch("api/projects/" + id).then((r) => r.json());
      setSlides(pt);
    } catch (error) {
      console.log("pt error", error);
      setLoading(() => false);
    }
  };

  useEffect(() => {
    if (projectId !== undefined) {
      getProject(projectId);
    }
    if (project !== undefined) {
      setSlides(project);
    }
  }, [projectId, project]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const gotError = !loading && slides.current === undefined;
  if (gotError) {
    return <></>;
  }

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: widthOfScreen.current < 500 ? "5px" : "30px",
          top: "50%",
          transform: "translateY(-50%)",
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
          top: "50%",
          transform: "translateY(-50%)",
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
        {slides.current.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            {/* Image */}
            <div className="relative h-full w-full">
              <Image
                src={slide.slide}
                alt={`Slide ${index + 1}`}
                width={slide.width ?? 0}
                height={slide.height ?? 0}
                className="h-full w-full object-cover pointer-events-none"
                style={{ objectPosition: 'center' }}
              />
            </div>
            
            {/* Title Bar - Smaller and positioned below image */}
            <div className="absolute bottom-0 left-0 right-0 bg-text-primary text-bg-primary text-center font-bold uppercase py-2 px-3 z-20">
              <span className="text-xs md:text-sm block">
                {slide.title}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
