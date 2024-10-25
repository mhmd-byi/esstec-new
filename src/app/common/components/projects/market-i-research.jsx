'use client';
import slide1 from '@/assets/projectImages/market-i-research/1-interior-design.svg';
import slide2 from '@/assets/projectImages/market-i-research/2-space-planning.svg';
import slide3 from '@/assets/projectImages/market-i-research/3-site-assessments.svg';
import slide4 from '@/assets/projectImages/market-i-research/4-site-assessments.svg';
import slide5 from '@/assets/projectImages/market-i-research/5-3d-visualisation.svg';
import slide6 from '@/assets/projectImages/market-i-research/6-3d-visualisation.svg';
import slide7 from '@/assets/projectImages/market-i-research/7-build-drawings.svg';
import slide8 from '@/assets/projectImages/market-i-research/8-interior-design.svg';
import slide9 from '@/assets/projectImages/market-i-research/9-interior-design.svg';
import { SliderComponent } from '../sliderComponent';

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
  return (
    <>
      <SliderComponent slides={slides} />
    </>
  );
};
