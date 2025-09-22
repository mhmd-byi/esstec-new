import React, { useEffect, useRef } from "react";
import menuData from "./menuData";
import ProjectListDynamic from "./projectListDynamic";

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
      setDraw(true);
      setActiveMenu(hash);
    }
  }, [setActiveMenu, setDraw]);

  // Update handleDrawClick in menu items to reset the hasMounted state
  const handleItemClick = (menuValue) => {
    handleDrawClick();
    setActiveMenu(menuValue);
    window.history.replaceState(null, null, " "); // Clear URL hash
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
              className={`cursor-pointer hover:line-through ${
                activeMenu === menuItem.activeMenu && "line-through"
              }`}
              onClick={() => handleItemClick(menuItem.activeMenu)}
            >
              {menuItem.title} &#47;
            </a>
          </span>
        ))}
      </p>
      <p className="flex flex-col min-h-52">
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
        <ProjectListDynamic activeMenu={activeMenu} handleItemClick={handleItemClick} />
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
            className={`cursor-pointer hover:line-through ${
              activeMenu === "email" && "line-through"
            }`}
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
