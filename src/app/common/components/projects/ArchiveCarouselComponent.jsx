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
  const [playingVideo, setPlayingVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useRef();

  // Helper function to detect if a slide is a video
  const isVideo = (slide) => {
    if (!slide) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
    const url = slide.slide || slide.url || slide.imageUrl || '';
    return videoExtensions.some(ext => url.toLowerCase().includes(ext)) || slide.type === 'video';
  };

  // Helper function to get video poster/thumbnail
  const getVideoPoster = (slide) => {
    return slide.poster || slide.thumbnail || slide.imageUrl || '';
  };

  // Handle video autoplay when slide changes
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    
    // Pause all videos first
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(video => {
      video.pause();
    });
    
    // Play the current video if it's a video slide
    setTimeout(() => {
      const currentSlideElement = document.querySelector(`[data-slide-index="${index}"] video`);
      if (currentSlideElement && slides.current && isVideo(slides.current[index])) {
        currentSlideElement.play().catch(console.log);
        setPlayingVideo(index);
      } else {
        setPlayingVideo(null);
      }
    }, 100);
  };

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
  }, [projectId, project]);

  // Handle initial video autoplay
  useEffect(() => {
    if (slides.current && slides.current.length > 0 && isVideo(slides.current[0])) {
      setTimeout(() => {
        const firstVideo = document.querySelector('[data-slide-index="0"] video');
        if (firstVideo) {
          firstVideo.play().catch(console.log);
          setPlayingVideo(0);
        }
      }, 500);
    }
  }, [slides.current]);

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
    beforeChange: (oldIndex, newIndex) => {
      handleSlideChange(newIndex);
    },
  };

  return (
    <div className="h-full w-full">
      <Slider {...settings} className="h-full w-full">
        {slides.current.map((slide, index) => (
          <div key={index} data-slide-index={index} className="relative h-full w-full">
            {/* Media Content */}
            <div className="relative h-full w-full">
              {isVideo(slide) ? (
                <div className="relative h-full w-full overflow-hidden">
                  <video
                    src={slide.slide || slide.url || slide.imageUrl}
                    poster={getVideoPoster(slide)}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="h-full w-full object-cover pointer-events-none"
                    style={{ objectPosition: 'center' }}
                    onPlay={() => setPlayingVideo(index)}
                    onPause={() => setPlayingVideo(null)}
                    onEnded={() => setPlayingVideo(null)}
                  />
                </div>
              ) : (
                <Image
                  src={slide.slide || slide.url || slide.imageUrl}
                  alt={`Slide ${index + 1}`}
                  width={slide.width ?? 0}
                  height={slide.height ?? 0}
                  className="h-full w-full object-cover pointer-events-none"
                  style={{ objectPosition: 'center' }}
                />
              )}
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
