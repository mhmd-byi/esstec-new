import React, { useRef, useEffect } from "react";
import ActiveMenuList from "./ActiveMenu";

function DrawingComponent({
  draw,
  activeMenu,
  animationComplete,
  setAnimationComplete,
}) {
  const rectRef = useRef(null);

  useEffect(() => {
    if (draw && rectRef.current) {
      const height = parseInt(rectRef.current.getAttribute("height"));
      const width = parseInt(rectRef.current.getAttribute("width"));

      const perimeter = 2 * (width + height);

      rectRef.current.style.strokeDasharray = perimeter;
      rectRef.current.style.strokeDashoffset = perimeter;

      requestAnimationFrame(() => {
        rectRef.current.style.transition =
          "stroke-dashoffset 5s ease-out, fill 0.5s ease-in-out 4.5s";
        rectRef.current.style.strokeDashoffset = "0";

        setTimeout(() => {
          setAnimationComplete(true);
        }, 5000);
      });
    }
  }, [draw]);

  return (
    <>
      <div className="relative aspect-video w-full">
        <svg
          viewBox="0 0 160 90"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          overflow="visible"
          className="pointer-events-none absolute inset-0 z-10"
        >
          {draw && (
            <rect
              ref={rectRef}
              x="1"
              y="0"
              width="160"
              height="90"
              rx="8"
              ry="8"
              fill="transparent"
              stroke="#222222"
              strokeWidth="2.15"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="scale(1, -1) translate(0, -90)"
            />
          )}
        </svg>

        {draw && animationComplete && (
          <div className="absolute inset-[2px] flex items-center justify-center overflow-hidden rounded-[5%] bg-bg-primary">
            <ActiveMenuList activeMenu={activeMenu} />
          </div>
        )}
      </div>
    </>
  );
}

export default DrawingComponent;
