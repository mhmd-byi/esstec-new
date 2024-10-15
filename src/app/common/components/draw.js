import React, { useRef, useEffect } from "react";
import { ClientComponent } from "./client";
import { PhilosophyComponent } from "./philosophy";
import { EwaaCarouselComponent } from "./projects/ewaa";
import { ScopeInvestmentsCarouselComponent } from "./projects/scope-investments";
import { MarketIResearchCarouselComponent } from "./projects/market-i-research";
import { EmailComponent } from "./email";
import { PhoneComponent } from "./phone";
import { RawCoffeeCarouselComponent } from "./projects/raw-coffee";
import { FreshlyMealsCarouselComponent } from "./projects/freshly-meals";
import { LVMHCarouselComponent } from "./projects/lvmh";
import { TeamComponent } from "./team";
import { DDYCarouselComponent } from "./projects/ddy";
import { ArabianKnightsCarouselComponent } from "./projects/arabian-knights";
import { ExpertiseComponent } from "./expertise";
import { checkForScreenSizeInDraw } from "@/helper/helper";

function DrawingComponent({
  draw,
  activeMenu,
  animationComplete,
  setAnimationComplete,
}) {
  const rectRef = useRef(null);

  useEffect(() => {
    if (draw && rectRef.current) {
      // Calculate the total perimeter of the rectangle
      const height = parseInt(rectRef.current.getAttribute("height"));
      const width = parseInt(rectRef.current.getAttribute("width"));
      const perimeter = 2 * (width + height);
      rectRef.current.style.strokeDasharray = perimeter;
      rectRef.current.style.strokeDashoffset = perimeter;

      requestAnimationFrame(() => {
        rectRef.current.style.transition = "stroke-dashoffset 5s ease-out, fill 0.5s ease-in-out 4.5s";
        rectRef.current.style.strokeDashoffset = "0";
        rectRef.current.style.fill = "#F3BB44";

        setTimeout(() => {
          setAnimationComplete(true); // Set the state to true after the animation
        }, 5000);
      });
    }
  }, [draw]);

  const checkForScreenSize = checkForScreenSizeInDraw();
  const hasWindow = typeof window !== "undefined";
  const widthOfScreen = hasWindow ? window.innerWidth : null;
  const heightOfScreen = hasWindow ? window.innerHeight : null;

  return (
    <>
      {checkForScreenSize && (
        <div className={`absolute inset-0 flex justify-center items-center px-10 lg:px-40`}>
          <svg viewBox="0 0 1100 600">
            {draw && (
              <rect
                ref={rectRef}
                x={5}
                y={5}
                width={widthOfScreen - 670} // Width of the rectangle
                height={heightOfScreen - 500} // Height of the rectangle
                rx="35" // Rounded corner radius
                ry="35" // Rounded corner radius
                fill="transparent"
                stroke="#222222"
                strokeWidth={12}
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="scale(1 , -1) translate(0, -550.5)"
              />
            )}
          </svg>
        </div>
      )}
      {draw && animationComplete && (
        <div className="px-20">
          {(() => {
            switch (activeMenu) {
              case "philosophy":
                return <PhilosophyComponent />;
              case "clients":
                return <ClientComponent />;
              case "ewaa":
                return <EwaaCarouselComponent />;
              case "scope":
                return <ScopeInvestmentsCarouselComponent />;
              case "market":
                return <MarketIResearchCarouselComponent />;
              case "email":
                return <EmailComponent />;
              case "phone":
                return <PhoneComponent />;
              case "coffee":
                return <RawCoffeeCarouselComponent />;
              case "freshly":
                return <FreshlyMealsCarouselComponent />;
              case "lvmh":
                return <LVMHCarouselComponent />;
              case "team":
                return <TeamComponent />;
              case "ddy":
                return <DDYCarouselComponent />;
              case "arabian":
                return <ArabianKnightsCarouselComponent />;
              case "expertise":
                return <ExpertiseComponent />;
              default:
                return null; // default case to handle any unanticipated activeMenu values
            }
          })()}
        </div>
      )}
    </>
  );
}

export default DrawingComponent;
