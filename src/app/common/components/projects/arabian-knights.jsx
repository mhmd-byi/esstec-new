'use client';
import slide1 from '@/assets/projectImages/arabian-knights/1-asset-creation.svg';
import slide2 from '@/assets/projectImages/arabian-knights/2-blockchain-contract.svg';
import slide3 from '@/assets/projectImages/arabian-knights/3-nft-collection-setup.svg';
import slide4 from '@/assets/projectImages/arabian-knights/4-asset-curation.svg';
import { SliderComponent } from '../sliderComponent';

export const ArabianKnightsCarouselComponent = () => {
  const slides = [
    { slide: slide1, title: 'asset creation' },
    { slide: slide2, title: 'blockchain contract' },
    { slide: slide3, title: 'nft collection setup' },
    { slide: slide4, title: 'asset curation' },
  ];
  
  return (
    <>
      <SliderComponent slides={slides} />
    </>
  );
};
