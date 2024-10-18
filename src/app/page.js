"use client";
import { useState } from "react";
import { Footer } from "./common/components/footer";
import { Header } from "./common/components/header";
import { Menu } from "./common/components/menu";
import ActiveMenuList from "./common/components/ActiveMenu";
import DrawingComponent from "./common/components/draw";
import Image from "next/image";
import esstecLogo from "@/assets/images/esstec-logo.svg";

export default function Home() {
  const [draw, setDraw] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const handleDrawClick = () => {
    if (!draw) {
      setDraw(true);
    }
  };
  return (
    <div className="bg-bg-primary">
      <div className="mx-auto flex min-h-dvh w-11/12 max-w-screen-2xl flex-col justify-between gap-6">
        <Header />

        <Menu
          handleDrawClick={handleDrawClick}
          setActiveMenu={setActiveMenu}
          setDraw={setDraw}
          setAnimationComplete={setAnimationComplete}
          activeMenu={activeMenu}
          style="order-first md:order-none"
        />

        {/* Image and Drawing */}
        <div className="relative -mt-10 md:-mt-14">
          {activeMenu && (
            <div className="absolute bottom-[2%] w-full md:bottom-[3%] md:w-[80.40%]">
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
