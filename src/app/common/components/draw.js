import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ActiveMenuList from "./ActiveMenu";

function DrawingComponent({
  draw,
  activeMenu,
  animationComplete,
  setAnimationComplete,
}) {
  return (
    <div className="relative aspect-video w-full">
      <svg
        viewBox="0 0 160 90"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
        className="pointer-events-none absolute inset-0 z-10"
      >
        <AnimatePresence>
          {draw && (
            <motion.rect
              x="1"
              y="0"
              width="160"
              height="90"
              rx="6"
              ry="6"
              fill="transparent"
              stroke="#222222"
              strokeWidth="2.15"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="scale(1, -1) translate(0, -90)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                pathLength: { duration: 5, ease: "easeInOut" },
                opacity: { duration: 0.3 }
              }}
              onAnimationComplete={() => {
                setAnimationComplete(true);
              }}
            />
          )}
        </AnimatePresence>
      </svg>

      <AnimatePresence mode="wait">
        {draw && animationComplete && (
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 md:inset-1.5 w-full h-full flex items-center justify-center overflow-hidden rounded-[5%] bg-bg-primary"
          >
            <ActiveMenuList activeMenu={activeMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DrawingComponent;
