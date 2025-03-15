"use client";
import slide1 from "@/assets/projectImages/ewaa/1-brand-guidelines.svg";
import { SliderComponent } from "../sliderComponent";
import React, { useEffect, useRef, useState } from "react";

export const CarouselComponent = ({ projectId }) => {
  const hasWindow = typeof window !== "undefined";
  const widthOfScreen = useRef(hasWindow ? window.innerWidth : null);

  const [loading, setLoading] = useState(true);

  const slides = useRef();

  const generateObjForArr = (imgObj) => ({
    slide: imgObj.url || imgObj.imageUrl,
    title: imgObj.title || "",
    ...imgObj,
  });

  const getProject = async (id) => {
    try {
      setLoading(() => true);
      const pt = await fetch("api/projects/" + id).then((r) => r.json());
      const { desktopImages, mobileImages } = pt;

      slides.current =
        widthOfScreen.current > 450
          ? desktopImages.map(generateObjForArr).filter((o) => !!o.slide)
          : mobileImages.map(generateObjForArr).filter((o) => !!o.slide);
      setLoading(() => false);
    } catch (error) {
      console.log("pt error", error);
      setLoading(() => false);
    }
  };

  useEffect(() => {
    if (projectId !== undefined) {
      getProject(projectId);
    }
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const gotError = !loading && slides.current === undefined;
  if (gotError) {
    return <></>;
  }

  console.log("huzefa", slides.current);
  return (
    <>
      <SliderComponent slides={slides.current} />
    </>
  );
};
