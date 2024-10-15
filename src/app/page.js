"use client";
import { useState } from "react";
import Image from "next/image";
import esstecLogo from "@/assets/images/esstec-logo.svg";
import { Menu } from "./common/components/menu";
import { Footer } from "./common/components/footer";
import DrawingComponent from "./common/components/draw";
import { MobileFooter } from "./common/components/mobileFooter";
import { Header } from "./common/components/header";
import { MobileHeader } from "./common/components/mobileHeader";
import MobileDrawingComponent from "./common/components/mobileDraw";

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
    <main className="flex min-h-screen flex-col px-10 lg:px-40 pt-5 lg:pt-16 bg-bg-primary">
      <div className="hidden md:block">
        <div className="flex flex-row justify-between text-xs leading-6">
          <Header />
        </div>
        <div className="text-right mt-8 lg:mt-16 z-50">
          <Menu
            handleDrawClick={handleDrawClick}
            setActiveMenu={setActiveMenu}
            setDraw={setDraw}
            setAnimationComplete={setAnimationComplete}
            activeMenu={activeMenu}
          />
        </div>
        <div>
          <DrawingComponent
            draw={draw}
            activeMenu={activeMenu}
            animationComplete={animationComplete}
            setAnimationComplete={setAnimationComplete}
          />
        </div>
        <div className="mt-44 lg:-mt-10">
          <p class="block md:hidden text-text-primary text-sm mt-20 mb-60 text-center">
            For best experience please visit the website on your laptop, we are
            soon coming with our mobile design
          </p>
          <Image src={esstecLogo} width="w-full" height="h-full" alt="logo" />
        </div>
        <div className="hidden lg:block mt-10 mb-5">
          <Footer />
        </div>
      </div>
      {/* showing components in desktop */}
      {/* Desktop section ends here */}





      {/* Mobile section starts here */}
      <div className="block md:hidden">
        <div className="text-right mt-8 lg:mt-16 z-50">
          <Menu
            handleDrawClick={handleDrawClick}
            setActiveMenu={setActiveMenu}
            setDraw={setDraw}
            setAnimationComplete={setAnimationComplete}
            activeMenu={activeMenu}
          />
        </div>
        <div className="my-5">
          <hr />
        </div>
        <div>
          <MobileHeader />
        </div>
        <div>
          <MobileDrawingComponent
            draw={draw}
            activeMenu={activeMenu}
            animationComplete={animationComplete}
            setAnimationComplete={setAnimationComplete}
          />
        </div>
        <div className="mt-44 lg:-mt-10">
          <p class="text-text-primary text-sm mt-20 mb-60 text-center">
            For best experience please visit the website on your laptop, we are
            soon coming with our mobile design
          </p>
          <Image src={esstecLogo} width="w-full" height="h-full" alt="logo" />
        </div>
        <div>
          <MobileFooter />
        </div>
      </div>
      {/* showing components in mobile */}
    </main>
  );
}
