'use client';
import slide1 from '@/assets/projectImages/freshly-meals/1-user-flow-design.svg';
import slide2 from '@/assets/projectImages/freshly-meals/2-interface-design.svg';
import slide3 from '@/assets/projectImages/freshly-meals/3-app-development.svg';
import slide4 from '@/assets/projectImages/freshly-meals/4-app-development.svg';
import slide5 from '@/assets/projectImages/freshly-meals/5-app-package-code.svg';
import slide6 from '@/assets/projectImages/freshly-meals/6-backend-admin-panel.svg';
import slide7 from '@/assets/projectImages/freshly-meals/7-in-app-emailers.svg';
import { SliderComponent } from '../sliderComponent';

export const FreshlyMealsCarouselComponent = () => {
  const slides = [
    { slide: slide1, title: 'user flow design' },
    { slide: slide2, title: 'interface design' },
    { slide: slide3, title: 'app development' },
    { slide: slide4, title: 'app development' },
    { slide: slide5, title: 'app package code' },
    { slide: slide6, title: 'backend admin panel' },
    { slide: slide7, title: 'in-app emailers' },
  ];
  return (
    <>
      <SliderComponent slides={slides} />
    </>
  );
};
