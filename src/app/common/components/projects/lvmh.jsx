'use client';
import slide1 from '@/assets/projectImages/lvmh/1-corporate-film.png';
import slide2 from '@/assets/projectImages/lvmh/2-event-shoot.png';
import slide3 from '@/assets/projectImages/lvmh/3-av-production.png';
import slide4 from '@/assets/projectImages/lvmh/4-av-production.png';
import { SliderComponent } from '../sliderComponent';

export const LVMHCarouselComponent = () => {
  const slides = [
    { slide: slide1, title: 'corporate film' },
    { slide: slide2, title: 'event shoot' },
    { slide: slide3, title: 'av production' },
    { slide: slide4, title: 'av production' },
  ];

  return (
    <>
      <SliderComponent slides={slides} />
    </>
  );
};
