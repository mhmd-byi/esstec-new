import { useEffect, useState } from "react";
import { calculateCurrentTime, getCurrentTimeInGMTPlus4 } from "@/helper/helper";

export const Header = () => {
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
      <div className="text-text-primary uppercase">
        <p className="font-semibold">YOUR TIME</p>
        <p>{userTime}</p>
      </div>
      <div>
        <p className="text-text-primary uppercase font-semibold">
          a creative design studio WORKING WITH BRANDS TO stand out in the GLOBAL
          market.{" "}
          <a href="mailto:info@esstec.ae" className="underline">
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
