"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { ChevronLeftIcon } from "../icons/ChevronLeftIcon";
import { useState, useEffect } from "react";

export const SliderComponent = ({ slides = [] }) => {
  const hasWindow = typeof window !== "undefined";
  const widthOfScreen = hasWindow ? window.innerWidth : null;
  const [playingVideo, setPlayingVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Helper function to detect if a slide is a video
  const isVideo = (slide) => {
    if (!slide) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
    const url = slide.slide || slide.url || slide.imageUrl || '';
    const isVideoByExtension = videoExtensions.some(ext => url.toLowerCase().includes(ext));
    const isVideoByType = slide.type === 'video';
    const result = isVideoByExtension || isVideoByType;
    return result;
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
    
    // Play the current video on the active slide
    const tryPlayCurrentVideo = (attempt = 0) => {
      const currentSlideElement = document.querySelector('.slick-slide.slick-active video');
      if (currentSlideElement) {
        currentSlideElement.play().then(() => {
          setPlayingVideo(index);
        }).catch(error => {
          if (attempt < 2) {
            setTimeout(() => tryPlayCurrentVideo(attempt + 1), 100 * (attempt + 1));
          }
        });
      } else {
        setPlayingVideo(null);
      }
    };
    
    setTimeout(() => tryPlayCurrentVideo(), 100);
  };

  // Handle initial video autoplay
  useEffect(() => {
    if (slides.length > 0) {
      if (isVideo(slides[0])) {
        // Try multiple times with increasing delays to ensure video is ready
        const tryPlayVideo = (attempt = 0) => {
          const firstVideo = document.querySelector('.slick-slide.slick-active video');
          if (firstVideo) {
            firstVideo.play().then(() => {
              setPlayingVideo(0);
            }).catch(error => {
              if (attempt < 3) {
                setTimeout(() => tryPlayVideo(attempt + 1), 200 * (attempt + 1));
              }
            });
          } else if (attempt < 3) {
            setTimeout(() => tryPlayVideo(attempt + 1), 200 * (attempt + 1));
          }
        };
        
        setTimeout(() => tryPlayVideo(), 100);
      }
    }
  }, [slides]);

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
    afterChange: (newIndex) => {
      handleSlideChange(newIndex);
    },
  };
  return (
    <div className="h-full w-full">
      <Slider {...settings} className="h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            data-slide-index={index}
            className="image relative h-full w-[101%] md:w-full pointer-events-none -ml-1 md:ml-0"
          >
            {isVideo(slide) ? (
              <div className="relative h-[17.5rem] rounded-xl md:h-full w-full overflow-hidden">
                <video
                  src={slide.slide || slide.url || slide.imageUrl}
                  poster={getVideoPoster(slide)}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                  className="h-full w-full object-cover pointer-events-none"
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
                className="h-[17.5rem] rounded-xl md:h-full w-full object-cover pointer-events-none"
              />
            )}
            <div className="absolute -left-1 md:left-auto -bottom-px md:bottom-20 md:right-0 w-[102%] md:w-[24.5rem] md:text-3xl bg-text-primary text-center text-bg-primary font-bold uppercase py-2 md:py-6 z-10 rounded-b-xl md:rounded-none pointer-events-none">
              {slide.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
