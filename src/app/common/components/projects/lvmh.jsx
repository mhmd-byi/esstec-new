'use client';
import Image from 'next/image';
import slide1 from '@/assets/projectImages/lvmh/1-corporate-film.svg';
import slide2 from '@/assets/projectImages/lvmh/2-event-shoot.svg';
import slide3 from '@/assets/projectImages/lvmh/3-av-production.svg';
import slide4 from '@/assets/projectImages/lvmh/4-av-production.svg';
import { ChevronLeftIcon } from '../../icons/ChevronLeftIcon';
import { ChevronRightIcon } from '../../icons/ChevronRightIcon';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const LVMHCarouselComponent = () => {
  const slides = [
    { slide: slide1, title: 'corporate film' },
    { slide: slide2, title: 'event shoot' },
    { slide: slide3, title: 'av production' },
    { slide: slide4, title: 'av production' },
  ];
  const hasWindow = typeof window !== 'undefined';
  const widthOfScreen = hasWindow ? window.innerWidth : null;
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          right: widthOfScreen < 500 ? '5px' : '30px',
          color: '#222222',
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
          display: 'block',
          left: '10px',
          color: '#222222',
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
          <div
            key={index}
            className="relative h-full w-[101%] md:w-full pointer-events-none -ml-1 md:ml-0"
          >
            <Image
              src={slide.slide}
              alt={`Slide ${index + 1}`}
              className="h-[17.5rem] rounded-xl md:h-full w-full object-cover pointer-events-none"
            />
            <div className="absolute -left-1 md:left-auto -bottom-px md:bottom-20 md:right-0 w-[102%] md:w-[24.5rem] md:text-3xl bg-text-primary text-center text-bg-primary font-bold uppercase py-2 md:py-6 z-10 rounded-b-xl md:rounded-none pointer-events-none">
              {slide.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
