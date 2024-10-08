import React, { useRef, useEffect, useState } from 'react';
import { ClientComponent } from './client';
import { PhilosophyComponent } from './philosophy';
import { EwaaCarouselComponent } from "./projects/ewaa";
import { ScopeInvestmentsCarouselComponent } from './projects/scope-investments';
import { MarketIResearchCarouselComponent } from './projects/market-i-research';
import { EmailComponent } from './email';
import { PhoneComponent } from './phone';
import { RawCoffeeCarouselComponent } from './projects/raw-coffee';
import { FreshlyMealsCarouselComponent } from './projects/freshly-meals';
import { LVMHCarouselComponent } from './projects/lvmh';
import { TeamComponent } from './team';
import { DDYCarouselComponent } from './projects/ddy';
import { ArabianKnightsCarouselComponent } from './projects/arabian-knights';
import { ExpertiseComponent } from './expertise';

function MobileDrawingComponent({ draw, activeMenu, animationComplete, setAnimationComplete }) {
  const containerRef = useRef(null);
  const rectRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = () => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    updateDimensions(); // Initial call to set dimensions

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);


  useEffect(() => {
    if (draw && rectRef.current) {
      // Calculate the total perimeter of the rectangle
      const height = parseInt(rectRef.current.getAttribute('height'));
      const width = parseInt(rectRef.current.getAttribute('width'));
      const perimeter = 2 * (width + height);
      rectRef.current.style.strokeDasharray = perimeter;
      rectRef.current.style.strokeDashoffset = perimeter;

      requestAnimationFrame(() => {
        rectRef.current.style.transition = 'stroke-dashoffset 5s ease-out, fill 0.5s ease-in-out 4.5s';
        rectRef.current.style.strokeDashoffset = '0';
        rectRef.current.style.fill = '#F3BB44';

        setTimeout(() => {
          setAnimationComplete(true); // Set the state to true after the animation
        }, 5000);
      });
    }
  }, [draw]);

  return (
    <>
      <div className='absolute inset-0 flex justify-center items-center'>
        <svg viewBox="0 0 550 1150">
          {draw && (
            <rect
              ref={rectRef}
              x="50"
              y="620"
              width={dimensions.width || '450'} // Width of the rectangle
              height="390" // Height of the rectangle
              rx="25" // Rounded corner radius
              ry="25" // Rounded corner radius
              fill="transparent"
              stroke="#222222"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>
      {(draw && animationComplete && activeMenu === 'philosophy') && (<div className='px-20'>
        <PhilosophyComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'clients') && (<div className='px-20'>
        <ClientComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'ewaa') && (<div className='px-20'>
        <EwaaCarouselComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'scope') && (<div className='px-20'>
        <ScopeInvestmentsCarouselComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'market') && (<div className='px-20'>
        <MarketIResearchCarouselComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'email') && (<div className='px-20'>
        <EmailComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'phone') && (<div className='px-20'>
        <PhoneComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'coffee') && (<div className='px-20'>
        <RawCoffeeCarouselComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'freshly') && (<div className='px-20'>
        <FreshlyMealsCarouselComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'lvmh') && (<div className='px-20'>
        <LVMHCarouselComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'team') && (<div className='px-20'>
        <TeamComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'ddy') && (<div className='px-20'>
        <DDYCarouselComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'arabian') && (<div className='px-20'>
        <ArabianKnightsCarouselComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'expertise') && (<div className='px-20'>
        <ExpertiseComponent />
      </div>)}
    </>
  );
}

export default MobileDrawingComponent;
