'use client';
import slide1 from '@/assets/projectImages/raw-coffee/1-project-fitout.svg';
import slide2 from '@/assets/projectImages/raw-coffee/2-industrial-design.svg';
import slide3 from '@/assets/projectImages/raw-coffee/3-product-launch.svg';
import slide4 from '@/assets/projectImages/raw-coffee/4-vehicle-livery.svg';
import slide5 from '@/assets/projectImages/raw-coffee/5-production-drawings.svg';
import slide6 from '@/assets/projectImages/raw-coffee/6-installation-design.svg';

export const RawCoffeeCarouselComponent = () => {
  const slides = [
    { slide: slide1, title: 'project fit-out' },
    { slide: slide2, title: 'industrial design' },
    { slide: slide3, title: 'project launch' },
    { slide: slide4, title: 'vehicle livery' },
    { slide: slide5, title: 'production drawings' },
    { slide: slide6, title: 'installation design' },
  ];
  return (
    <>
      <SliderComponent slides={slides} />
    </>
  );
};
