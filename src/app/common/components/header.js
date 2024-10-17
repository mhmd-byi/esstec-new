import { useEffect, useState } from "react";
import {
  getCurrentTimeInGMTPlus4,
  getOperatingSystem,
} from "@/helper/helper";

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
  const osDetails = getOperatingSystem();

  return (
    <header className="relative py-2 text-xs leading-6 my-4">
      <hr className="my-3 h-px border-0 bg-text-primary md:hidden" />
      <div className="my-4 md:absolute md:left-1/2 md:top-0 md:mt-0 md:flex md:h-full md:-translate-x-1/2 md:items-center">
        <p className="text-center font-semibold uppercase text-text-primary">
          a creative design studio WORKING WITH BRANDS TO stand out in the
          GLOBAL market.{" "}
          <a href="mailto:info@esstec.ae" className="underline">
            drop us a line
          </a>
          .
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="uppercase text-text-primary">
          <p className="font-semibold">Device Info</p>
          <p>{widthOfScreen} x {heightOfScreen} {osDetails}</p>
        </div>
        <div className="text-right uppercase text-text-primary">
          <p className="font-semibold">Our time</p>
          <p>{gmtPlus4Time}</p>
        </div>
      </div>
    </header>
  );
};
