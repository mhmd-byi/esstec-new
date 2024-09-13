import React, { useRef, useEffect, useState } from 'react';
import { ClientComponent } from './client';
import { PhilosophyComponent } from './philosophy';

function DrawingComponent({ draw, activeMenu }) {
  const rectRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (draw && rectRef.current) {
      // Calculate the total perimeter of the rectangle
      const perimeter = 2 * (parseInt(rectRef.current.getAttribute('width')) + parseInt(rectRef.current.getAttribute('height')));
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
        <svg viewBox="0 0 1100 450">
          {draw && (
            <rect
              ref={rectRef}
              x="97"
              y="90"
              width="726" // Width of the rectangle
              height="355" // Height of the rectangle
              rx="20" // Rounded corner radius
              ry="20" // Rounded corner radius
              fill="transparent"
              stroke="#222222"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>
      {(draw && animationComplete && activeMenu === 'clients') && (<div className='px-20'>
        <ClientComponent />
      </div>)}
      {(draw && animationComplete && activeMenu === 'philosophy') && (<div className='absolute inset-0 top-56 right-[50vw] mt-10'>
        <PhilosophyComponent />
      </div>)}
    </>
  );
}

export default DrawingComponent;
