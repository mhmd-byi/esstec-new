import React, { useEffect, useRef } from 'react';
import menuData  from "./menuData";

export const Menu = ({
  handleDrawClick,
  setActiveMenu,
  setDraw,
  setAnimationComplete,
  activeMenu,
  style,
}) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    
    if (!hasMounted.current && hash) {
      hasMounted.current = true;
      console.log('this is hash', hash);
      setDraw(true);
      setActiveMenu(hash);
    }
  }, [setActiveMenu, setDraw]);

  // Update handleDrawClick in menu items to reset the hasMounted state
  const handleItemClick = (menuValue) => {
    handleDrawClick();
    setActiveMenu(menuValue);
    window.history.replaceState(null, null, ' '); // Clear URL hash
  };

  return (
    <div
      className={`relative py-2 text-right text-xs uppercase leading-6 text-text-primary md:leading-6 ${style}`}
    >
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => {
            setDraw(false);
            setAnimationComplete(false);
            setActiveMenu("");
          }}
        >
          &#47;&#47; About
        </span>
        {menuData.map((menuItem, index) => (
          <span key={index}>
            <a 
              className={`cursor-pointer hover:line-through ${activeMenu === menuItem.activeMenu && "line-through"}`}
              onClick={() => handleItemClick(menuItem.activeMenu)}
            >
              {menuItem.title} &#47;
            </a>
          </span>
        ))}
      </p>
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => {
            setDraw(false);
            setAnimationComplete(false);
            setActiveMenu("");
          }}
        >
          &#47;&#47; project showcase
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "ewaa" && "line-through"}`}
            onClick={() => handleItemClick("ewaa")}
          >
            ewaa abu dhabi &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "scope" && "line-through"}`}
            onClick={() => handleItemClick("scope")}
          >
            scope investment &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "market" && "line-through"}`}
            onClick={() => handleItemClick("market")}
          >
            market i research &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "coffee" && "line-through"}`}
            onClick={() => handleItemClick("coffee")}
          >
            raw coffee company &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "freshly" && "line-through"}`}
            onClick={() => handleItemClick("freshly")}
          >
            freshly meals &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "ddy" && "line-through"}`}
            onClick={() => handleItemClick("ddy")}
          >
            ddy autism center &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "arabian" && "line-through"}`}
            onClick={() => handleItemClick("arabian")}
          >
            arabian knights &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "lvmh" && "line-through"}`}
            onClick={() => handleItemClick("lvmh")}
          >
            lvmh fragrances &#47;
          </a>
        </span>
      </p>
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => {
            setDraw(false);
            setAnimationComplete(false);
            setActiveMenu("");
          }}
        >
          &#47;&#47; contact
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "email" && "line-through"}`}
            onClick={() => handleItemClick("email")}
          >
            email + phone &#47;
          </a>
        </span>
      </p>
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => {
            setDraw(false);
            setAnimationComplete(false);
            setActiveMenu("");
          }}
        >
          &#47;&#47; Home
        </span>
      </p>
    </div>
  );
};
