"use client";
import { useState } from "react";
import { Footer } from "./common/components/footer";
import { Header } from "./common/components/header";
import { Menu } from "./common/components/menu";
import ActiveMenuList from "./common/components/ActiveMenu";
import DrawingComponent from "./common/components/draw";
import Image from "next/image";
import esstecLogo from "@/assets/images/esstec-logo.svg";
import { MobileMenu } from "./common/components/mobileMenu";

export default function Home() {
  const [draw, setDraw] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileComponentOpen, setMobileComponentOpen] = useState(0);
  const hasWindow = typeof window !== "undefined";
  const widthOfScreen = hasWindow ? window.innerWidth : null;
  const handleDrawClick = () => {
    if (!draw) {
      setDraw(true);
    }
  };
  return (
    <div className="bg-bg-primary">
      <div className="mx-auto flex min-h-dvh w-11/12 max-w-screen-2xl flex-col justify-between gap-6 pt-10 md:pt-0">
        <Header mobileComponentOpen={mobileComponentOpen} draw={draw} />

        <Menu
          handleDrawClick={handleDrawClick}
          setActiveMenu={setActiveMenu}
          setDraw={setDraw}
          setAnimationComplete={setAnimationComplete}
          activeMenu={activeMenu}
          style="hidden md:block order-first md:order-none"
        />

        <MobileMenu open={mobileComponentOpen} setOpen={setMobileComponentOpen} setActiveMenu={setActiveMenu} activeMenu={activeMenu} style="block md:hidden order-first md:order-none" />

        {/* Image and Drawing */}
        <div className="relative mt-6 md:-mt-14">
          {(activeMenu && widthOfScreen > 450) && (
            <div className="absolute bottom-[2%] w-[98.60%] md:bottom-[3%] md:w-[80.40%]">
              <DrawingComponent
                draw={draw}
                activeMenu={activeMenu}
                animationComplete={animationComplete}
                setAnimationComplete={setAnimationComplete}
              />
            </div>
          )}
          <div>
            <Image src={esstecLogo} className="w-full" alt="logo" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
