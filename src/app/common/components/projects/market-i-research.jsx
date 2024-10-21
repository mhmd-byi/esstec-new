'use client';
import Image from 'next/image';
import slide1 from '@/assets/projectImages/market-i-research/1-interior-design.svg';
import slide2 from '@/assets/projectImages/market-i-research/2-space-planning.svg';
import slide3 from '@/assets/projectImages/market-i-research/3-site-assessments.svg';
import slide4 from '@/assets/projectImages/market-i-research/4-site-assessments.svg';
import slide5 from '@/assets/projectImages/market-i-research/5-3d-visualisation.svg';
import slide6 from '@/assets/projectImages/market-i-research/6-3d-visualisation.svg';
import slide7 from '@/assets/projectImages/market-i-research/7-build-drawings.svg';
import slide8 from '@/assets/projectImages/market-i-research/8-interior-design.svg';
import slide9 from '@/assets/projectImages/market-i-research/9-interior-design.svg';
import { ChevronLeftIcon } from '../../icons/ChevronLeftIcon';
import { ChevronRightIcon } from '../../icons/ChevronRightIcon';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MarketIResearchCarouselComponent = () => {
  const slides = [
    { slide: slide1, title: 'interior design' },
    { slide: slide2, title: 'space planning' },
    { slide: slide3, title: 'site assessment' },
    { slide: slide4, title: 'site assessment' },
    { slide: slide5, title: '3d visualisation' },
    { slide: slide6, title: '3d visualisation' },
    { slide: slide7, title: 'build drawings' },
    { slide: slide8, title: 'interior design' },
    { slide: slide9, title: 'interior design' },
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
            className="relative h-full w-full pointer-events-none"
          >
            <Image
              src={slide.slide}
              alt={`Slide ${index + 1}`}
              className="h-[17.5rem] rounded-xl md:h-full w-full object-cover"
            />
            <div className="absolute border-2 border-text-primary -bottom-px md:bottom-20 -ml-1.5 md:ml-0 md:right-0 w-[102%] md:w-[24.5rem] md:text-3xl bg-text-primary text-center text-bg-primary font-bold uppercase py-2 md:py-6 z-10 rounded-b-xl md:rounded-none pointer-events-none">
              {slide.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
