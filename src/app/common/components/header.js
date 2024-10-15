import { useEffect, useState } from "react";
import { getCurrentTimeInGMTPlus4, getOperatingSystem } from "@/helper/helper";

export const Header = () => {
  const [gmtPlus4Time, setGmtPlus4Time] = useState(getCurrentTimeInGMTPlus4());

  useEffect(() => {
    const timer = setInterval(() => {
      setGmtPlus4Time(getCurrentTimeInGMTPlus4());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const hasWindow = typeof window !== "undefined";
  const widthOfScreen = hasWindow ? window.innerWidth : null;
  const heightOfScreen = hasWindow ? window.innerHeight : null;
  const platform = hasWindow ? getOperatingSystem() : null;

  return (
    <>
      <div className="text-text-primary uppercase">
        <p className="font-semibold">DEVICE INFO</p>
        <p>{widthOfScreen} x {heightOfScreen} {platform}</p>
      </div>
      <div className="z-50">
        <p className="text-text-primary uppercase font-semibold">
          a creative design studio WORKING WITH BRANDS TO stand out in the GLOBAL
          market.{" "}
          <a href="mailto:info@esstec.ae" className="underline hover:cursor-pointer">
            drop us a line
          </a>
          .
        </p>
      </div>
      <div className="text-right text-text-primary uppercase">
        <p className="font-semibold">Our time</p>
        <p>{gmtPlus4Time}</p>
      </div>
    </>
  );
};
