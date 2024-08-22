'use client';
import { useEffect, useState } from 'react';
import { calculateCurrentTime, getCurrentTimeInGMTPlus4 } from "@/helper/helper";

export default function Home() {
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
    <main className="flex min-h-screen flex-col px-40 pt-36 pb-10 bg-primary">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-secondary">YOUR TIME</p>
          <p>{userTime}</p>
        </div>
        <div>
          <p className="text-secondary uppercase">a creative studio WORKING WITH BRANDS TO stand out in the GLOBAL market. drop us a line.
          </p>
        </div>
        <div className="text-right">
          <p className="text-secondary uppercase">Our time</p>
          <p>{gmtPlus4Time}</p>
        </div>
      </div>
    </main>
  );
}
