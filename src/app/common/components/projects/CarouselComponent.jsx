"use client";
import slide1 from "@/assets/projectImages/ewaa/1-brand-guidelines.svg";
import { SliderComponent } from "../sliderComponent";
import React, { useEffect, useRef, useState } from "react";

export const CarouselComponent = ({ projectId, project }) => {
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
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const gotError = !loading && slides.current === undefined;
  if (gotError) {
    return <></>;
  }

  return (
    <>
      <SliderComponent slides={slides.current} />
    </>
  );
};
