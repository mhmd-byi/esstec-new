import React, { useRef, useEffect } from 'react';

function DrawingComponent({ draw, handleDrawClick }) {
  const rectRef = useRef(null);

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
      });
    }
  }, [draw]);

  return (
    <div className='absolute inset-0 flex justify-center items-center'>
      <svg viewBox="0 0 1100 410" style={{ zIndex: 99 }}>
        {draw && (
          <rect
            ref={rectRef}
            x="97"
            y="50"
            width="736" // Width of the rectangle
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
      <button onClick={handleDrawClick} style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 20 }}>
        {draw ? 'Redraw' : 'Draw'}
      </button>
    </div>
  );
}

export default DrawingComponent;
