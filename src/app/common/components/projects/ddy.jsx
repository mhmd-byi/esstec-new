'use client';
import slide1 from '@/assets/projectImages/ddy/1-identity-rebrand.svg';
import slide2 from '@/assets/projectImages/ddy/2-marcom-strategy.svg';
import slide3 from '@/assets/projectImages/ddy/3-brand-guidelines.svg';
import slide4 from '@/assets/projectImages/ddy/4-brand-collaterals.svg';
import slide5 from '@/assets/projectImages/ddy/5-event-collaterals.svg';
import slide6 from '@/assets/projectImages/ddy/6-web-development.svg';
import slide7 from '@/assets/projectImages/ddy/7-social-playbook.svg';
import slide8 from '@/assets/projectImages/ddy/8-social-templates.svg';
import { SliderComponent } from '../sliderComponent';

export const DDYCarouselComponent = () => {
  const slides = [
    { slide: slide1, title: 'identity rebrand' },
    { slide: slide2, title: 'marcom strategy' },
    { slide: slide3, title: 'brand guidelines' },
    { slide: slide4, title: 'brand colaterals' },
    { slide: slide5, title: 'event collaterals' },
    { slide: slide6, title: 'web development' },
    { slide: slide7, title: 'social playbook' },
    { slide: slide8, title: 'social templates' },
  ];
  return (
    <>
      <SliderComponent slides={slides} />
    </>
  );
};
