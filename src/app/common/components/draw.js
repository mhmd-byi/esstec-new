import React, { useState, useRef, useEffect } from 'react';

function DrawingComponent({ draw, handleDrawClick }) {
  const pathRef = useRef(null);

  useEffect(() => {
    if (draw && pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;

      requestAnimationFrame(() => {
        pathRef.current.style.transition = 'stroke-dashoffset 2s ease-out, fill 0.5s ease-in-out 2s';
        pathRef.current.style.strokeDashoffset = '0';
        pathRef.current.style.fill = '#F3BB44';
      });
    }
  }, [draw]);

  return (
    <div className='absolute inset-0 flex justify-center items-center'>
      <svg viewBox="0 0 1000 400" style={{ zIndex: 99 }}>
        {draw && (
          <path
            ref={pathRef}
            d="M 270 370 Q 270 350 270 320 L 270 100 Q 270 80 270 70 L 758 70 L 758 350 L 758 370"
            fill="transparent"
            stroke="#222222"
            strokeWidth="9"
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
