"use client";
import { useEffect, useState } from "react";
import {
  calculateCurrentTime,
  getCurrentTimeInGMTPlus4,
} from "@/helper/helper";
import Image from "next/image";
import esstecLogo from "@/assets/images/esstec-logo.svg";
import { Menu } from "./common/components/menu";
import { Footer } from "./common/components/footer";

export default function Home() {
  const [userTime, setUserTime] = useState(calculateCurrentTime());
  const [gmtPlus4Time, setGmtPlus4Time] = useState(getCurrentTimeInGMTPlus4());
  const [logoPath, setLogoPath] = useState(esstecLogo);

  useEffect(() => {
    const timer = setInterval(() => {
      setUserTime(calculateCurrentTime());
      setGmtPlus4Time(getCurrentTimeInGMTPlus4());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main className="flex min-h-screen flex-col px-40 pt-16 bg-primary">
      <div className="flex flex-row justify-between font-medium">
        <div className="text-secondary uppercase">
          <p>YOUR TIME</p>
          <p>{userTime}</p>
        </div>
        <div>
          <p className="text-secondary uppercase">
            a creative studio WORKING WITH BRANDS TO stand out in the GLOBAL
            market.{" "}
            <a href="mailto:info@esstec.ae" className="underline">
              drop us a line
            </a>
            .
          </p>
        </div>
        <div className="text-right text-secondary uppercase">
          <p>Our time</p>
          <p>{gmtPlus4Time}</p>
        </div>
      </div>
      <div className="text-right mt-16 z-50">
        <Menu />
      </div>
      <div className="-mt-10">
        <Image src={logoPath} width="w-full" height="h-full" />
      </div>
      <div className="mt-10 mb-5">
        <Footer />
      </div>
    </main>
  );
}
