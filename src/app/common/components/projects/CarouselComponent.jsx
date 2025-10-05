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
    
    if (widthOfScreen.current > 450) {
      // Desktop view - use desktop images
      slides.current = desktopImages.map(generateObjForArr).filter((o) => !!o.slide);
    } else {
      // Mobile view - use mobile images, fallback to desktop if mobile is empty
      const mobileSlides = mobileImages.map(generateObjForArr).filter((o) => !!o.slide);
      const desktopSlides = desktopImages.map(generateObjForArr).filter((o) => !!o.slide);
      
      slides.current = mobileSlides.length > 0 ? mobileSlides : desktopSlides;
    }
    
    setLoading(() => false);
  };

  const getProject = async (id) => {
    try {
      setLoading(() => true);
      const pt = await fetch("api/projects/" + id).then((r) => r.json());

      setSlides(pt);
    } catch (error) {
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
