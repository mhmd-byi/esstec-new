import { useEffect, useState } from "react";
import {
  calculateCurrentTime,
  getCurrentTimeInGMTPlus4,
} from "@/helper/helper";

export const MobileHeader = () => {
  const [userTime, setUserTime] = useState(calculateCurrentTime());
  const [gmtPlus4Time, setGmtPlus4Time] = useState(getCurrentTimeInGMTPlus4());

  useEffect(() => {
    const timer = setInterval(() => {
      setUserTime(calculateCurrentTime());
      setGmtPlus4Time(getCurrentTimeInGMTPlus4());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>
        <p className="text-text-primary text-center uppercase font-semibold text-sm">
          a creative design studio WORKING WITH BRANDS TO stand out in the GLOBAL
          market.{" "}
          <a href="mailto:info@esstec.ae" className="underline">
            drop us a line
          </a>
          .
        </p>
      </div>
      <div className="flex flex-row text-sm font-medium justify-between mt-10">
        <div className="text-text-primary uppercase">
          <p>YOUR TIME</p>
          <p>{userTime}</p>
        </div>
        <div className="text-right text-text-primary uppercase">
          <p>Our time</p>
          <p>{gmtPlus4Time}</p>
        </div>
      </div>
    </>
  );
};
